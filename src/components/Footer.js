import Link from "next/link";
import styles from "../styles/footer.module.scss";


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>No Copyright; Meent 2023</p>
            <p><Link href="/about">About This Project</Link></p>
        </footer>
    );
}

export default Footer;
