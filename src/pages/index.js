
import Layout from "@/components/Layout";
import { API_URL } from "@/config";
import Event from "@/components/Event";
import Link from "next/link";

export default function Homepage(props) {

  const { events } = props;
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {/* If no event found */}
      {events.length === 0 && <h3>No events to show</h3>}

      {/* If event found display them */}
      {events.map(e => (
        <Event key={e.id} evt={e} />
      ))}

      {events.length > 0 && (
        <Link href="/events">View All Events</Link>
      )}
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
      // Limiting events
      events: events.slice(0, 3)
    },
    revalidate: 1,
  }
}