'use client'
import { selectUser, setUser } from "@/features/user/userSlice"
import { Button } from "@radix-ui/themes"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"

export default function Login(){
    const router = useRouter()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)

    // Sostituisci questi valori con le tue variabili/credenziali
    const VALID_EMAIL = "dev@vex.it"
    const VALID_PASSWORD = "vexone.it"

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setError("")
        const form = e.currentTarget as HTMLFormElement
        const formData = new FormData(form)
        const email = String(formData.get("email") || "")
        const password = String(formData.get("password") || "")

        setLoading(true)
        try {
            if (email === VALID_EMAIL && password === VALID_PASSWORD) {
                // dispatch solo al click se le credenziali sono corrette
                dispatch(setUser({ name: "Vex One", admin: false }))
                router.push("/")
            } else {
                setError("Credenziali errate")
            }
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div style={{
                minHeight: "70vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 24
            }}>
                <div style={{
                    width: 360,
                    borderRadius: 12,
                    padding: 20,
                    boxShadow: "0 6px 18px rgba(12, 12, 12, 0.12)",
                    background: "white",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12
                }}>
                    <h1 style={{ margin: 0, fontSize: 20 }}>Accedi a Vex</h1>
                    <p style={{ margin: 0, color: "#666", fontSize: 13 }}>Inserisci le tue credenziali per continuare</p>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                        <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13 }}>
                            <span style={{ color: "#333", fontWeight: 600 }}>Email</span>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "8px 10px",
                                borderRadius: 8,
                                border: "1px solid #e6e6e6",
                                background: "#fafafa"
                            }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <path d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13a2.5 2.5 0 0 0 2.5-2.5v-7" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21 6.5a2.5 2.5 0 0 0-2.5-2.5h-13A2.5 2.5 0 0 0 3 6.5l9 6 9-6z" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="es. dev@vex.it"
                                    required
                                    style={{
                                        border: "none",
                                        outline: "none",
                                        background: "transparent",
                                        fontSize: 14,
                                        flex: 1
                                    }}
                                />
                            </div>
                        </label>

                        <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 13 }}>
                            <span style={{ color: "#333", fontWeight: 600 }}>Password</span>
                            <div style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "8px 10px",
                                borderRadius: 8,
                                border: "1px solid #e6e6e6",
                                background: "#fafafa"
                            }}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                                    <rect x="3" y="11" width="18" height="10" rx="2" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7 11V8a5 5 0 0 1 10 0v3" stroke="#666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="••••••••"
                                    required
                                    style={{
                                        border: "none",
                                        outline: "none",
                                        background: "transparent",
                                        fontSize: 14,
                                        flex: 1
                                    }}
                                />
                            </div>
                        </label>

                        {error && (
                            <div role="alert" style={{
                                color: "#7a0b0b",
                                background: "rgba(122,11,11,0.06)",
                                padding: "8px 10px",
                                borderRadius: 8,
                                fontSize: 13
                            }}>
                                {error}
                            </div>
                        )}

                        <Button type="submit" disabled={loading} style={{ width: "100%" }}>
                            {loading ? "Entrando..." : "Accedi"}
                        </Button>

                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#666" }}>
                            <button
                                type="button"
                                onClick={() => {
                                    // esempio: link a pagina di reset password
                                    router.push("/reset-password")
                                }}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "#4a6cf7",
                                    cursor: "pointer",
                                    padding: 0
                                }}
                            >
                                Password dimenticata?
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    router.push("/")
                                }}
                                style={{
                                    background: "transparent",
                                    border: "none",
                                    color: "#666",
                                    cursor: "pointer",
                                    padding: 0
                                }}
                            >
                                Torna alla home
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}