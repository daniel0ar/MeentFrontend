import Head from "next/head";
import styles from "../styles/layout.module.scss";
import Footer from "./Footer";
import Header from "./Header";
import Showcase from "./Showcase";
import { useRouter } from "next/router";

const Layout = ({
    title = "Concert",
    keywords = "music, events, local",
    description = "Find local concert events",
    children }) => {

    const router = useRouter();

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <Header />

            {/* Showing it on homepage only */}
            {router.pathname === "/" && <Showcase />}

            <div className={styles.container}>
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
