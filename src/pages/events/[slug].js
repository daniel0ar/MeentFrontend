import { useRouter } from "next/router"
import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import styles from "@/styles/sevent.module.scss"
import Link from "next/link";
import Image from "next/image";
import { FaPencilAlt, FaTimes } from "react-icons/fa";

function EventPage(props) {

    const { event } = props;

    const deleteEvent = (e) => {
        console.log('deleting event')
    }

    return (
        <Layout>
            <div className={styles.event}>

                {/* Buttons */}
                <div className={styles.controls}>
                    <Link href={`/events/edit/${event.id}`}><FaPencilAlt />Edit Event</Link>
                    <Link href="#" className={styles.delete} onClick={deleteEvent}><FaTimes />Delete Event</Link>
                </div>

                {/* Date and Time */}
                <span>
                    {event.date} at {event.time}
                </span>

                {/* Title and Image */}
                <h1>{event.name}</h1>
                {event.image && (
                    <div className={styles.image}><Image src={event.image} width={960} height={600} alt={event.name} /></div>
                )}

                {/* Performers and Description */}
                <h3>Performers:</h3>
                <p>{event.performers}</p>

                <h3>Description:</h3>
                <p>{event.description}</p>

                <h3>Venue: {event.venue}</h3>
                <p>{event.address}</p>

                <Link href={"/events"} className={styles.back}>Go Back</Link>
            </div>
        </Layout>
    )
}

export default EventPage

export async function getStaticProps(context) {

    // Getting Slug from URL
    const slug = context.params.slug;

    // Getting event data from api using slug
    const res = await fetch(`${API_URL}/api/events/${slug}`);
    const event = await res.json();


    // event[0] = gives the single event
    // if event is not found on server then go to 404
    if (!event[0]) {
        return {
            notFound: true
        }
    }


    return {
        props: {
            event: event[0]
        },
        revalidate: 1
    }

}


export async function getStaticPaths() {

    const res = await fetch(`${API_URL}/api/events`);
    const events = await res.json();

    //creating an array of paths with params based on slugs
    const paths = events.map(e => ({
        params: { slug: e.slug }
    }))

    return {
        paths: paths,
        // if false  then will show 404 if path not found
        // if true then will make a new req if page not found
        fallback: true
    }
}

