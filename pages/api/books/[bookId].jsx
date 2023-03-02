import {
  deleteBook,
  getBook,
  putBook,
} from "@/database/controllers/bookController";
import connect from "@/database/mongoconnect";

const handler = async (req, res) => {
  connect().catch(() => {
    res.status(405).json({ error: "Error in connection." });
  });

  const { method } = req;

  switch (method) {
    case "GET":
      getBook(req, res);
      break;
    case "PUT":
      putBook(req, res);
      break;
    case "DELETE":
      deleteBook(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not allowed`);
      break;
  }
};

export default handler;
