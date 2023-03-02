import Role from "../models/roleModel";

// <--- GET ALL ROLE --->
export const getRoles = async (req, res) => {
  try {
    const roles = await Role.find({});

    if (!roles) {
      res.status(404).json({ error: "Roles not found" });
    }

    res.status(200).json(roles);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching role." });
  }
};

// <--- GET ROLE --->
export const getRole = async (req, res) => {
  const { roleId } = req.query;
  try {
    const role = await Role.findById(roleId);

    if (!role) {
      res.status(404).json({ error: "Role not found" });
    }

    res.status(200).json(role);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching role." });
  }
};

// <--- CREATE ROLE --->
export const postRole = async (req, res) => {
  try {
    const role = req.body;

    Role.create(role, function (err, newRole) {
      if (err) {
        res.status(400).json({ error: "Error in adding role" });
      } else {
        res.status(201).json({
          message: "Role added successfully.",
          role: newRole,
        });
      }
    });
  } catch (error) {
    res.status(400).json({ error: "Error in adding role" });
  }
};

// <--- UPDATE ROLE --->
export const putRole = async (req, res) => {
  try {
    const role = req.body;
    const { roleId } = req.query;
    if (imprint && roleId) {
      Role.findByIdAndUpdate(
        roleId,
        role,
        { new: true },
        function (err, updatedRole) {
          if (err) {
            res.status(400).json({ error: "Error in updating the role" });
          } else {
            res.status(200).json({
              message: "Role updated successfully.",
              imprint: updatedRole,
            });
          }
        }
      );
    }
  } catch (error) {
    res.status(400).json({ error: "Error in updating the role" });
  }
};

// <--- DELETE ROLE --->
export const deleteRole = async (req, res) => {
  try {
    const { roleId } = req.query;

    if (roleId) {
      Role.findByIdAndDelete(roleId, function (err) {
        if (err) {
          res.status(400).json({ error: "Error in deleting the role" });
        } else {
          res.status(200).json({
            message: "Imprint deleted successfully.",
          });
        }
      });
    }
  } catch (error) {
    res.status(404).json({ error: "Error in deleting the role" });
  }
};
