import Image from "next/image";
import styles from "./navbar.module.css";
import { Avatar } from "@radix-ui/themes";
import {useTranslations} from 'next-intl';


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
                <a href="/" className={styles.link}>{t('home')}</a>
                <a href="/track" className={styles.link}>{t('tracking')}</a>
                <Avatar fallback="RC" />
            </div>
        </div>
    )
}