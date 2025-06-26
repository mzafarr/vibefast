import { NextRequest } from "next/server";

const isDev = process.env.NODE_ENV === "development";

// pick test vs prod keys & IDs
const LEMON_API_KEY = isDev
  ? process.env.LEMON_API_KEY_TEST!
  : process.env.LEMON_API_KEY!;
const LEMON_STORE_ID = parseInt(process.env.LEMON_STORE_ID!, 10);

const GITHUB_TOKEN = process.env.GITHUB_TOKEN!;
const GITHUB_OWNER = process.env.GITHUB_OWNER!;
const GITHUB_REPO = process.env.GITHUB_REPO!;

const VIBEFAST_PRODUCT_ID = parseInt(
  isDev
    ? process.env.VIBEFAST_PRODUCT_ID_TEST!
    : process.env.VIBEFAST_PRODUCT_ID!,
  10
);
const VIBEFAST_PRO_ID = parseInt(
  isDev ? process.env.VIBEFAST_PRO_ID_TEST! : process.env.VIBEFAST_PRO_ID!,
  10
);
const VIBEFAST_CORE_ID = parseInt(
  isDev ? process.env.VIBEFAST_CORE_ID_TEST! : process.env.VIBEFAST_CORE_ID!,
  10
);

export async function POST(request: NextRequest) {
  try {
    const { licenseKey: rawKey, githubUsername } = await request.json();
    const licenseKey = rawKey?.trim();

    if (!licenseKey || !githubUsername) {
      return new Response(
        JSON.stringify({ error: "Missing licenseKey or githubUsername" }),
        { status: 400 }
      );
    }

    // 1️⃣ Validate the license via LemonSqueezy API
    const validateRes = await fetch(
      "https://api.lemonsqueezy.com/v1/licenses/validate",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LEMON_API_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ license_key: licenseKey }),
      }
    );
    const validateData = await validateRes.json();
    const { valid, license_key: keyData, meta } = validateData;

    // if license string itself is bad
    if (!valid) {
      return new Response(JSON.stringify({ error: "License key is invalid" }), {
        status: 401,
      });
    }

    // if already used/activated
    if (keyData.status !== "inactive") {
      return new Response(
        JSON.stringify({
          error: `License status is '${keyData.status}', we expect 'inactive' (unused) license key.`,
        }),
        { status: 401 }
      );
    }

    // store check
    if (meta.store_id !== LEMON_STORE_ID) {
      console.log("License doesn't belong to Vibefast store", meta.store_id);
      return new Response(
        JSON.stringify({ error: "License doesn't belong to Vibefast store" }),
        { status: 401 }
      );
    }

    // product check
    if (meta.product_id !== VIBEFAST_PRODUCT_ID) {
      console.log("License is for the wrong product", meta.product_id);
      return new Response(
        JSON.stringify({ error: "License is for the wrong product" }),
        { status: 401 }
      );
    }

    // variant check
    if (![VIBEFAST_PRO_ID, VIBEFAST_CORE_ID].includes(meta.variant_id)) {
      console.log("License variant not supported", meta.variant_id);
      return new Response(
        JSON.stringify({ error: "License variant not supported" }),
        { status: 401 }
      );
    }

    // 2️⃣ Invite user to GitHub
    const inviteUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/collaborators/${githubUsername}`;
    const ghRes = await fetch(inviteUrl, {
      method: "PUT",
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (ghRes.status !== 201 && ghRes.status !== 204) {
      const errDetail = await ghRes.json();
      return new Response(
        JSON.stringify({
          error: "GitHub invite failed",
          details: errDetail,
        }),
        { status: 500 }
      );
    }

    // 3️⃣ Activate the license so it cannot be reused
    await fetch("https://api.lemonsqueezy.com/v1/licenses/activate", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LEMON_API_KEY}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        license_key: licenseKey,
        instance_name: githubUsername,
      }),
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err: any) {
    console.error("Error in GitHub access route:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
