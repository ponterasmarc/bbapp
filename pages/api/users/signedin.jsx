import { getSignedInUser } from "@/database/controllers/userControllers";
import connect from "@/database/mongoconnect";

const handler = async (req, res) => {
  connect().catch(() => {
    res.status(405).json({ error: "Error in connection." });
  });

  const { method } = req;

  switch (method) {
    case "POST":
      getSignedInUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${method} is not allowed`);
      break;
  }
};

export default handler;
