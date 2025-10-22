'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'


export default function LoginPage(){
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)

    const VALID_EMAIL = 'dev@vex.it'
    const VALID_PASSWORD = 'vexone.it'

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setError(null)
        setLoading(true)

        // Simulate a small delay as if contacting a server
        await new Promise((r) => setTimeout(r, 300))

        if (email === VALID_EMAIL && password === VALID_PASSWORD) {
            const user = { email }
            try {
                localStorage.setItem('user', JSON.stringify(user))
            } catch (err) {
                setError('Unable to save user to localStorage')
                setLoading(false)
                return
            }
            // Redirect to home (adjust as needed)
            router.push('/')
        } else {
            setError('Invalid email or password')
            setLoading(false)
        }
    }

    return (
        <main style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
            <form
                onSubmit={handleSubmit}
                style={{
                    width: 360,
                    padding: 24,
                    border: '1px solid #e5e7eb',
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}
            >
                <h1 style={{ margin: 0, marginBottom: 12, fontSize: 20 }}>Login</h1>

                <label style={{ display: 'block', marginBottom: 8 }}>
                    <span style={{ display: 'block', fontSize: 13, marginBottom: 6 }}>Email</span>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@email.it"
                        required
                        style={{ width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid #cbd5e1' }}
                    />
                </label>

                <label style={{ display: 'block', marginBottom: 12 }}>
                    <span style={{ display: 'block', fontSize: 13, marginBottom: 6 }}>Password</span>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="************"
                        required
                        style={{ width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid #cbd5e1' }}
                    />
                </label>

                {error && (
                    <div style={{ color: '#b91c1c', marginBottom: 12, fontSize: 13 }}>
                        {error}
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: '#111827',
                        color: 'white',
                        borderRadius: 6,
                        border: 'none',
                        cursor: loading ? 'default' : 'pointer',
                    }}
                >
                    {loading ? 'Signing in...' : 'Sign in'}
                </button>

                <p style={{ marginTop: 12, fontSize: 13, color: '#6b7280' }}>
                    Powered by <strong>vexone.it</strong>
                </p>
            </form>
        </main>
    )
}