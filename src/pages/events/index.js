
import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import Event from "@/components/Event";

export default function EventsPage(props) {

    const { events } = props;
    console.log(events);
    return (
        <Layout>
            <h1>Events</h1>
            {/* If no event found */}
            {events.length === 0 && <h3>No events to show</h3>}

            {/* If event found display them */}
            {events.map(e => (
                <Event key={e.id} evt={e} />
            ))}
        </Layout>
    )
}

/*
  Can use getServerSideProps also.
*/

export async function getStaticProps() {

    const res = await fetch(`${API_URL}/api/events`);
    const events = await res.json();
    return {
        props: {
            events: events
        },
        revalidate: 1,
    }
}