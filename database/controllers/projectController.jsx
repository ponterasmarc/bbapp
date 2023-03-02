import Project from "../models/projectModel";

// <--- GET ALL PROJECT --->
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({});

    if (!projects) {
      res.status(404).json({ error: "Project not found" });
    }

    res.status(200).json(projects);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching projects." });
  }
};

// <--- GET PROJECT --->
export const getProject = async (req, res) => {
  const { projectId } = req.query;
  try {
    const project = await Project.findById(projectId);

    if (!project) {
      res.status(404).json({ error: "Project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching project." });
  }
};

// <--- CREATE PROJECT --->
export const postProject = async (req, res) => {
  try {
    const project = req.body;

    Project.create(project, function (err, newProject) {
      if (err) {
        res.status(400).json({ error: "Error in adding project" });
      } else {
        res.status(201).json({
          message: "Project added successfully.",
          project: newProject,
        });
      }
    });
  } catch (error) {
    res.status(400).json({ error: "Error in adding project" });
  }
};

// <--- UPDATE PROJECT --->
export const putProject = async (req, res) => {
  try {
    const project = req.body;
    const { projectId } = req.query;
    if (project && projectId) {
      Project.findByIdAndUpdate(
        projectId,
        project,
        { new: true },
        function (err, updatedProject) {
          if (err) {
            res.status(400).json({ error: "Error in updating the project" });
          } else {
            res.status(200).json({
              message: "Project updated successfully.",
              project: updatedProject,
            });
          }
        }
      );
    }
  } catch (error) {
    res.status(400).json({ error: "Error in updating the project" });
  }
};

// <--- DELETE PROJECT --->
export const deleteProject = async (req, res) => {
  try {
    const { projectId } = req.query;

    if (projectId) {
      Project.findByIdAndDelete(projectId, function (err) {
        if (err) {
          res.status(400).json({ error: "Error in deleting the project" });
        } else {
          res.status(200).json({
            message: "Project deleted successfully.",
          });
        }
      });
    }
  } catch (error) {
    res.status(404).json({ error: "Error in deleting the project" });
  }
};
