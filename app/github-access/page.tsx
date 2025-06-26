"use client"
import { useState, FormEvent } from 'react'

export default function GitHubAccess() {
  const [licenseKey, setLicenseKey] = useState('')
  const [githubUsername, setGithubUsername] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/github-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ licenseKey, githubUsername })
      })
      const data = await res.json()

      if (res.ok && data.success) {
        setStatus('success')
        setMessage('✅ You’ve been invited! Check your GitHub notifications.')
      } else {
        setStatus('error')
        setMessage(data.error || 'License validation or invite failed.')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setMessage('Network error — please try again.')
    }
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Claim Your GitHub Access</h1>
      <p className="mb-6">
        Enter the license key you received from LemonSqueezy and your GitHub username.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">License Key</label>
          <input
            type="text"
            value={licenseKey}
            onChange={e => setLicenseKey(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="xxxx-xxxx-xxxx-xxxx"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">GitHub Username</label>
          <input
            type="text"
            value={githubUsername}
            onChange={e => setGithubUsername(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="your-github-handle"
            required
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          {status === 'loading' ? 'Processing…' : 'Get Access'}
        </button>
      </form>
      {status === 'success' && (
        <p className="mt-4 text-green-600">{message}</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600">{message}</p>
      )}
    </div>
  )
}
