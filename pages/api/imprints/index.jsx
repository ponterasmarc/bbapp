import {
  getImprints,
  postImprint,
} from "@/database/controllers/imprintController";
import connect from "@/database/mongoconnect";

const handler = async (req, res) => {
  connect().catch(() => {
    res.status(405).json({ error: "Error in connection." });
  });

  const { method } = req;

  switch (method) {
    case "GET":
      getImprints(req, res);
      break;
    case "POST":
      postImprint(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} is not allowed`);
      break;
  }
};

export default handler;
