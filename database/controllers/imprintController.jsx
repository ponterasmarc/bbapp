import Imprint from "../models/imprintModel";

// <--- GET ALL IMPRINT --->
export const getImprints = async (req, res) => {
  try {
    const imprints = await Imprint.find({});

    if (!imprints) {
      res.status(404).json({ error: "Imprints not found" });
    }

    res.status(200).json(imprints);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching imprint." });
  }
};

// <--- GET IMPRINT --->
export const getImprint = async (req, res) => {
  const { imprintId } = req.query;
  try {
    const imprint = await Imprint.findById(imprintId);

    if (!imprint) {
      res.status(404).json({ error: "Imprint not found" });
    }

    res.status(200).json(imprint);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching imprint." });
  }
};

// <--- CREATE IMPRINT --->
export const postImprint = async (req, res) => {
  try {
    const imprint = req.body;

    Imprint.create(imprint, function (err, newImprint) {
      if (err) {
        res.status(400).json({ error: "Error in adding imprint" });
      } else {
        res.status(201).json({
          message: "Imprint added successfully.",
          imprint: newImprint,
        });
      }
    });
  } catch (error) {
    res.status(400).json({ error: "Error in adding imprint" });
  }
};

// <--- UPDATE IMPRINT --->
export const putImprint = async (req, res) => {
  try {
    const imprint = req.body;
    const { imprintId } = req.query;
    if (imprint && imprintId) {
      Imprint.findByIdAndUpdate(
        imprintId,
        imprint,
        { new: true },
        function (err, updatedImprint) {
          if (err) {
            res.status(400).json({ error: "Error in updating the imprint" });
          } else {
            res.status(200).json({
              message: "Imprint updated successfully.",
              imprint: updatedImprint,
            });
          }
        }
      );
    }
  } catch (error) {
    res.status(400).json({ error: "Error in updating the imprint" });
  }
};

// <--- DELETE IMPRINT --->
export const deleteImprint = async (req, res) => {
  try {
    const { imprintId } = req.query;

    if (imprintId) {
      Imprint.findByIdAndDelete(imprintId, function (err) {
        if (err) {
          res.status(400).json({ error: "Error in deleting the imprint" });
        } else {
          res.status(200).json({
            message: "Imprint deleted successfully.",
          });
        }
      });
    }
  } catch (error) {
    res.status(404).json({ error: "Error in deleting the imprint" });
  }
};
