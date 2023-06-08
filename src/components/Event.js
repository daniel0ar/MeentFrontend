import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/event.module.scss";

const Event = ({ evt }) => {
    return (
        <div className={styles.event}>

            {/* Event Image  */}
            <div className={styles.img}>
                <Image src={evt.image ? evt.image : '/images/event-default.png'} width={170} height={100} alt={evt.name} />
            </div>

            {/* Event Info */}
            <div className={styles.info}>
                <span>{evt.date} at {evt.time}</span>
                <h3>{evt.name}</h3>
                <h3>Price: {evt.price} ETH</h3>
            </div>

            {/* Link To Go To Specific Page */}
            <div className={styles.link}>
                <Link href={`/events/${evt.slug}`} className='btn'>Details</Link>
            </div>
        </div>
    );
}

export default Event;
