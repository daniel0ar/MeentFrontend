import Link from "next/link";
import styles from "../styles/header.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">Meent Tickets</Link>
            </div>

            <nav>
                <ul>
                    <li><Link href="/events">Events</Link></li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;
