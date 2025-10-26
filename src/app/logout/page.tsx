'use client'

import { resetUser, selectUser } from "@/features/user/userSlice"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

export default function Logout(){

    const router = useRouter()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetUser())
        router.push("/login/")
    }, [])
    return <></>
}