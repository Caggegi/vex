'use client'
import { useEffect, useState } from "react"
import SettingsPage from "../settings/page"

export default function AdministrationPage() {
    const [user, setUser] = useState<any>(undefined)
    useEffect(()=>{
        let user = localStorage.getItem("user")
        if(user)
            setUser(JSON.parse(user))
    }, [])
    if(user && user.admin)
        return <>
            <h1>Admin page</h1>
        </>
    else
        return <SettingsPage/>
}