import {
  deleteProject,
  getProject,
  putProject,
} from "@/database/controllers/projectController";
import connect from "@/database/mongoconnect";

const handler = async (req, res) => {
  connect().catch(() => {
    res.status(405).json({ error: "Error in connection." });
  });

  const { method } = req;

  switch (method) {
    case "GET":
      getProject(req, res);
      break;
    case "PUT":
      putProject(req, res);
      break;
    case "DELETE":
      deleteProject(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not allowed`);
      break;
  }
};

export default handler;
