import Head from 'next/head';
import Link from 'next/link';
import { SITE_TITLE } from '../constants/title';
import styles from '../styles/Layout.module.css';

interface LayoutProps {
    children: JSX.Element | JSX.Element[];
    title?: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title ? `${title} | ${SITE_TITLE}` : SITE_TITLE}</title>
            </Head>
            <nav className={styles.nav}>
                <div className={styles.navContainer}>
                    <Link href="/">
                        <a className={styles.navLogo}>🎬 MovieDB</a>
                    </Link>
                    <Link href="/top">
                        <a>Top Movies</a>
                    </Link>
                    <Link href="/search">
                        <a>Search</a>
                    </Link>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </div>
            </nav>
            <main className={styles.main}>{children}</main>
        </>
    );
};
