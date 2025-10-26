'use client'
import App from "next/app";
import store from "./store";
import { Provider } from 'react-redux'

export default function ReduxProvider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Provider store={store}>
        {children}
    </Provider>
}