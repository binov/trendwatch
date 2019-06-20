const mongoose = require("mongoose");
const axios = require("axios");
const _ = require("lodash");
const TrendsModel = mongoose.model("trends");
const keys = require("../config/keys");
const moment = require("moment");

module.exports = app => {
  app.post("/api/trends", async (req, res) => {});

  app.get("/api/trends/sports", async (req, res) => {
    let trendsData;
    var pageNo = parseInt(req.query.pageNo);
    var size = parseInt(req.query.size);

    if (pageNo < 0 || pageNo === 0) {
      return res.status(400).send("Page number not valid");
    }

    try {
      totalCount = await TrendsModel.countDocuments();
    } catch (error) {
      return res.status(400).send("Invalid Input/DB Issue");
    }
    try {
      trendsData = await TrendsModel.find()
        .find({ eventCategory: "sports" })
        .sort("-_id")
        .skip(size * (pageNo - 1))
        .limit(size)
        .exec();
    } catch (error) {
      return res.status(400).send("Invalid Input/DB Issue");
    }

    if (trendsData.length > 0) {
      res.send(trendsData);
    } else {
      // No Content
      res.status(204).send("No Content");
    }
  });

  app.get("/api/trends/news", async (req, res) => {
    let trendsData;
    var pageNo = parseInt(req.query.pageNo);
    var size = parseInt(req.query.size);

    if (pageNo < 0 || pageNo === 0) {
      return res.status(400).send("Page number not valid");
    }

    try {
      totalCount = await TrendsModel.countDocuments();
    } catch (error) {
      return res.status(400).send("Invalid Input/DB Issue");
    }
    try {
      trendsData = await TrendsModel.find()
        .find({ eventCategory: "news" })
        .sort("-_id")
        .skip(size * (pageNo - 1))
        .limit(size)
        .exec();
    } catch (error) {
      return res.status(400).send("Invalid Input/DB Issue");
    }

    if (trendsData.length > 0) {
      res.send(trendsData);
    } else {
      // No Content
      res.status(204).send("No Content");
    }
  });

  app.get("/api/trends/movies", async (req, res) => {
    let trendsData;
    var pageNo = parseInt(req.query.pageNo);
    var size = parseInt(req.query.size);

    if (pageNo < 0 || pageNo === 0) {
      return res.status(400).send("Page number not valid");
    }

    try {
      totalCount = await TrendsModel.countDocuments();
    } catch (error) {
      return res.status(400).send("Invalid Input/DB Issue");
    }
    try {
      trendsData = await TrendsModel.find()
        .find({ eventCategory: "movies" })
        .sort("-_id")
        .skip(size * (pageNo - 1))
        .limit(size)
        .exec();
    } catch (error) {
      return res.status(400).send("Invalid Input/DB Issue");
    }

    if (trendsData.length > 0) {
      res.send(trendsData);
    } else {
      // No Content
      res.status(204).send("No Content");
    }
  });
};
