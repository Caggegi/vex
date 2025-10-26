'use client'
import { selectUser, setUser } from "@/features/user/userSlice"
import { Button } from "@radix-ui/themes"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

export default function Login(){
    const router = useRouter()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setUser({ name: "Rosario Caggegi", admin: false }))
    }, [])

    return <>Login<Button onClick={()=>{router.push("/")}}>Go</Button>
</>
}