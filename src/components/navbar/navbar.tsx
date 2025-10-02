"use client"
import Image from "next/image";
import styles from "./navbar.module.css";
import { Avatar, Button, DropdownMenu, TabNav } from "@radix-ui/themes";
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";
import Icon from "@mdi/react";
import { mdiCog, mdiLogout, mdiSettingsHelper, mdiShieldCrown } from "@mdi/js";
import Link from "next/link";
import { useEffect, useState } from "react";



export default function Navbar() {
    const t = useTranslations('Navbar');
    const [user, setUser] = useState<any>({admin:false})

    useEffect(()=>{
        let user = localStorage.getItem("user")
        if(user)
            setUser(JSON.parse(user))
    }, [])

    return (
        <div className={styles.navbar_layout}>
            <Image
                className={styles.logo}
                src="/vexone_black.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
            <div className={styles.navbar_actions}>
                <TabNav.Root>
                    <TabNav.Link href="/" active={usePathname() === "/"} className={styles.link}>
                        {t('send')}
                    </TabNav.Link>
                    <TabNav.Link href="/tracking" active={usePathname() === "/tracking/"} className={styles.link}>{t('tracking')}</TabNav.Link>
                </TabNav.Root>
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                        <div>
                            <Avatar fallback="RC" style={{ margin: "0 8px" }} />
                        </div>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <Link href="/settings"><DropdownMenu.Item><Icon path={mdiCog} size={0.8}/>Settings</DropdownMenu.Item></Link>
                        {(user && user.admin) && <Link href="/administration"><DropdownMenu.Item><Icon path={mdiShieldCrown} size={0.8}/>Administration</DropdownMenu.Item></Link>}
                        <DropdownMenu.Separator />
                        <Link href="/logout"><DropdownMenu.Item color="red">
                            <Icon path={mdiLogout} size={0.8}/>Logout
                        </DropdownMenu.Item></Link>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
            </div>
        </div>
    )
}