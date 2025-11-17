'use client'
import { selectSender, selectReceiver, selectOrder } from "@/features/shipments/orderSlice"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function ShippingPreferences() {

    const order = useSelector(selectOrder)
    const sender = useSelector(selectSender)
    const receiver = useSelector(selectReceiver)
    const dispatch = useDispatch()

    useEffect(()=>{
        console.log(sender, receiver)
    },[])


    return <>Shipping Preferences</>
}