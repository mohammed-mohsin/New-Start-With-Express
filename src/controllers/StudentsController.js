const StudentsModel = require("../models/StudentsModel");


// Create Student
exports.InsertStudent = (req, res) => {
  let reqBody = req.body;

  StudentsModel.create(reqBody, (error, result) => {
    if (error) {
      res.status(500).json({
        message: "Error Occured",
        error: error,
      });
    } else {
      res.status(201).json({
        message: "Data Inserted",
        result: result,
      });
    }
  });
};


// Read Student

exports.ReadStudent = (req, res) => {
  let quey = {};
  let projections = "Name Roll Age Class Remark";

  StudentsModel.find(quey, projections,(error, result) => {
    if (error) {
      res.status(500).json({
        message: "Error Occurred",
        error: error,
      });
    } else {
      res.status(200).json({
        message: "Data Fetched",
        result: result,
      });
    }
  });
}


// Update Student

exports.UpdateStudent = (req, res) => {
  let id= req.params.id;
  let quey = {_id:id};
  let UpdateData = req.body;

  StudentsModel.updateOne(quey, UpdateData,(error, result) => {
    if (error) {
      res.status(400).json({
        message: "Error Occurred",
        error: error,
      });
    } else {
      res.status(200).json({
        message: "Data Fetched",
        result: result,
      });
    }
  });
}

// Delete Student

exports.DeleteStudent = (req, res) => {
  let id= req.params.id;
  let quey = {_id:id};
  let UpdateData = req.body;

  StudentsModel.remove(quey,(error, result) => {
    if (error) {
      res.status(400).json({
        message: "Error Occurred",
        error: error,
      });
    } else {
      res.status(200).json({
        message: "Data Deleted Successfully",
        result: result,
      });
    }
  });
}

