import Head from "next/head";
import styles from "../styles/layout.module.scss";

const Layout = ({
    title = "Concert",
    keywords = "music, events, local",
    description = "Find local concert events",
    children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <div className={styles.container}>
                {children}
            </div>
        </div>
    );
}

export default Layout;
