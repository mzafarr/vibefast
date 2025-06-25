"use client";

export function TimeWastedSection() {
  return (
    <>
      <section className="max-w-[526px] mx-auto bg-gradient-to-br from-red-800/20 via-orange-800/20 to-yellow-800/20 mt-28 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-[526px] mx-auto text-center">
            {/* Time breakdown */}
            <div className="space-y-4 mb-8 text-lg sm:text-xl">
              <div className="text-muted-foreground">
                <span className="text-red-400 font-semibold">6 hrs</span>{" "}
                setting up auth + DB
              </div>
              <div className="text-muted-foreground">
                <span className="text-red-400 font-semibold">6 hrs</span>{" "}
                setting up payments
              </div>
              <div className="text-muted-foreground">
                <span className="text-orange-400 font-semibold">8 hrs</span>{" "}
                notifications + i18n + analytics
              </div>
              <div className="text-muted-foreground">
                <span className="text-orange-400 font-semibold">6 hrs</span>{" "}
                onboarding flow + theming
              </div>
              <div className="text-muted-foreground">
                <span className="text-yellow-400 font-semibold">2 hrs</span>{" "}
                app‑store screenshots
              </div>
              <div className="text-muted-foreground">
                + <span className="text-red-500 font-semibold">∞ hrs</span> LLM
                hallucinations…
              </div>
            </div>

            {/* Total */}
            <div className="text-2xl sm:text-3xl font-bold mb-6">
              = <span className="text-red-500">32+ hours</span>{" "}
              <span className="text-orange-500">🔥</span> burned
            </div>

            {/* Worst part */}
            <div className="text-xl sm:text-2xl text-muted-foreground">
              <span className="text-yellow-500">😩</span> worst of all…{" "}
              <span className="font-semibold text-red-400">
                app rejected by the store
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* Arrow and text */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="text-4xl animate-bounce">↓</div>
        <p className="text-lg text-muted-foreground">There's an easier way</p>
      </div>
    </>
  );
}
