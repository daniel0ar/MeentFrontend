import Head from "next/head";
import styles from "../styles/layout.module.scss";
import Footer from "./Footer";
import Header from "./Header";

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
            <Header />
            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
