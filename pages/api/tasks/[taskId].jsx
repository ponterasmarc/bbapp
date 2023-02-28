import {
  deleteTask,
  getTask,
  putTask,
} from "@/database/controllers/taskController";
import connect from "@/database/mongoconnect";

const handler = async (req, res) => {
  connect().catch(() => {
    res.status(405).json({ error: "Error in connection." });
  });

  const { method } = req;

  switch (method) {
    case "GET":
      getTask(req, res);
      break;
    case "PUT":
      putTask(req, res);
      break;
    case "DELETE":
      deleteTask(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} is not allowed`);
      break;
  }
};

export default handler;
