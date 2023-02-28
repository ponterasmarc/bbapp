import { getRoles, postRole } from "@/database/controllers/roleController";
import connect from "@/database/mongoconnect";

const handler = async (req, res) => {
  connect().catch(() => {
    res.status(405).json({ error: "Error in connection." });
  });

  const { method } = req;

  switch (method) {
    case "GET":
      getRoles(req, res);
      break;
    case "POST":
      postRole(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} is not allowed`);
      break;
  }
};

export default handler;
