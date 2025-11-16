'use client'
import { selectOrder } from "@/features/shipments/orderSlice"
import { useDispatch, useSelector } from "react-redux"

export default function ShippingPreferences() {

    const order = useSelector(selectOrder)
    const dispatch = useDispatch()

    return <>Shipping Preferences</>
}