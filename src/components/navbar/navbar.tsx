"use client"
import Image from "next/image";
import styles from "./navbar.module.css";
import { Avatar, Button, DropdownMenu, TabNav } from "@radix-ui/themes";
import { useTranslations } from 'next-intl';
import { usePathname, useRouter } from "next/navigation";
import Icon from "@mdi/react";
import { mdiCog, mdiLogout, mdiSettingsHelper, mdiShieldCrown } from "@mdi/js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "@/features/user/userSlice";



export default function Navbar() {
    const t = useTranslations('Navbar');
    const router = useRouter()


    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        //dispatch(setUser({ name: "Rosario Caggegi", admin: false }))
    }, [])

    if (usePathname() === "/login/") return <></>
    else
    return (
        <div className={styles.navbar_layout}>
            <Image
                className={styles.logo}
                src="/vectors/Vex-one_logotipo-varianti-04.svg"
                alt="Next.js logo"
                width={100}
                height={48}
                priority
            />
            <div className={styles.navbar_actions}>
                <TabNav.Root>
                    {false && <TabNav.Link href="/about" active={usePathname() === "/about/"} className={styles.link}>{t('about')}</TabNav.Link>}
                    <TabNav.Link href="/" active={usePathname() === "/"} style={{ color: usePathname() === "/" ? "white" : "black" }} className={styles.link}>
                        {t('about')}
                    </TabNav.Link>
                    <TabNav.Link href="/tracking" active={usePathname() === "/tracking/"} style={{ color: usePathname() === "/" ? "white" : "black" }} className={styles.link}>{t('tracking')}</TabNav.Link>
                    <TabNav.Link href="/services" active={usePathname() === "/services/"} style={{ color: usePathname() === "/" ? "white" : "black" }} className={styles.link}>{t('services')}</TabNav.Link>
                    <TabNav.Link href="/contacts" active={usePathname() === "/contacts/"} style={{ color: usePathname() === "/" ? "white" : "black" }} className={styles.link}>{t('contacts')}</TabNav.Link>
                </TabNav.Root>
                {user ?
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger>
                            <div>
                                <Avatar fallback={user.name.split(" ")[0][0]+user.name.split(" ")[1][0]} style={{ margin: "0 8px" }} />
                            </div>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content>
                            <Link href="/settings"><DropdownMenu.Item><Icon path={mdiCog} size={0.8} />Settings</DropdownMenu.Item></Link>
                            {(user && user.admin) && <Link href="/administration"><DropdownMenu.Item><Icon path={mdiShieldCrown} size={0.8} />Administration</DropdownMenu.Item></Link>}
                            <DropdownMenu.Separator />
                            <Link href="/logout"><DropdownMenu.Item color="red">
                                <Icon path={mdiLogout} size={0.8} />Logout
                            </DropdownMenu.Item></Link>
                        </DropdownMenu.Content>
                    </DropdownMenu.Root> :
                    <Button onClick={()=>{router.push("/login/")}}>{t('login')}</Button>
                }
            </div>
        </div>
    )
}