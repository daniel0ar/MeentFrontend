const { events } = require("./data.json");

export default (req, res) => {

    const slug = req.query.slug;
    const evt = events.filter((e) => e.slug === slug);

    if (req.method === "GET") {
        res.status(200).json(evt);
    } else {
        // Methods that are allowed
        res.setHeader("Allow", ["GET"]);

        // Response for non-allowed methods
        res.status(405).json({ message: `Method ${req.method} is not allowed` })
    }
}
