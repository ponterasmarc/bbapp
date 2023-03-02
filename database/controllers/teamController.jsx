import Team from "../models/teamModel";

// <--- GET ALL TEAM --->
export const getTeams = async (req, res) => {
  try {
    const teams = await Team.find({});

    if (!teams) {
      res.status(404).json({ error: "Teams not found" });
    }

    res.status(200).json(teams);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data." });
  }
};

// <--- GET TEAM --->
export const getTeam = async (req, res) => {
  const { teamId } = req.query;
  try {
    const team = await Team.findById(teamId);

    if (!team) {
      res.status(404).json({ error: "Team not found" });
    }

    res.status(200).json(team);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data." });
  }
};

// <--- CREATE TEAM --->
export const postTeam = async (req, res) => {
  try {
    const team = req.body;

    Team.create(team, function (err, newTeam) {
      if (err) {
        res.status(400).json({ error: "Error in adding team" });
      } else {
        res.status(201).json({
          message: "Team added successfully.",
          team: newTeam,
        });
      }
    });
  } catch (error) {
    res.status(400).json({ error: "Error in adding team" });
  }
};

// <--- UPDATE TEAM --->
export const putTeam = async (req, res) => {
  try {
    const team = req.body;
    const { teamId } = req.query;
    if (imprint && teamId) {
      Team.findByIdAndUpdate(
        teamId,
        Team,
        { new: true },
        function (err, updatedTeam) {
          if (err) {
            res.status(400).json({ error: "Error in updating the team" });
          } else {
            res.status(200).json({
              message: "Team updated successfully.",
              imprint: updatedTeam,
            });
          }
        }
      );
    }
  } catch (error) {
    res.status(400).json({ error: "Error in updating the team" });
  }
};

// <--- DELETE TEAM --->
export const deleteTeam = async (req, res) => {
  try {
    const { teamId } = req.query;

    if (teamId) {
      Team.findByIdAndDelete(teamId, function (err) {
        if (err) {
          res.status(400).json({ error: "Error in deleting the team" });
        } else {
          res.status(200).json({
            message: "Team deleted successfully.",
          });
        }
      });
    }
  } catch (error) {
    res.status(404).json({ error: "Error in deleting the team" });
  }
};

// <--- GET ALL MEMBER --->
export const getMembers = async (req, res) => {
  try {
    const teamId = req.query;
    const members = await User.find({ team: teamId });
    if (members) {
      res.status(200).json(members);
    }
    res.status(400).json({ message: "Error while fetching data." });
  } catch (error) {
    res.status(400).json({ message: "Error while fetching data." });
  }
};
