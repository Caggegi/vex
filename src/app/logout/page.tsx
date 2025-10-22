
'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'



export default function LogoutPage() {
    const router = useRouter()

    useEffect(() => {
        try {
            if (typeof window !== 'undefined') {
                localStorage.clear()
            }
        } catch (e) {
            // ignore possible security errors
        }
        router.replace('/login')
    }, [router])

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            Effettuando logout...
        </div>
    )
}