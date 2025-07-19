"use client"
import Image from "next/image";
import styles from "./navbar.module.css";
import { Avatar, TabNav } from "@radix-ui/themes";
import { useTranslations } from 'next-intl';
import { usePathname } from "next/navigation";



export default function Navbar() {
    const t = useTranslations('Navbar');
    return (
        <div className={styles.navbar_layout}>
            <Image
                className={styles.logo}
                src="/vexone.svg"
                alt="Next.js logo"
                width={180}
                height={38}
                priority
            />
            <div className={styles.navbar_actions}>
                <TabNav.Root>
                    <TabNav.Link href="/" active={usePathname()==="/"} className={styles.link}>
                        {t('send')}
                    </TabNav.Link>
                    <TabNav.Link href="/tracking" active={usePathname()==="/tracking/"}  className={styles.link}>{t('tracking')}</TabNav.Link>
                </TabNav.Root>
                <Avatar fallback="RC" style={{ margin: "0 8px" }} />
            </div>
        </div>
    )
}