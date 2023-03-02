import {
  getAuthors,
  postAuthor,
} from "@/database/controllers/authorController";
import connect from "@/database/mongoconnect";

const handler = async (req, res) => {
  connect().catch(() => {
    res.status(405).json({ error: "Error in connection." });
  });

  const { method } = req;

  switch (method) {
    case "GET":
      getAuthors(req, res);
      break;
    case "POST":
      postAuthor(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} is not allowed`);
      break;
  }
};

export default handler;
