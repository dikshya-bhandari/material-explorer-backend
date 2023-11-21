const express = require("express");
const app = express();
const router = require("express").Router();
const Controllers = require("./controllers");

const sendJson = (res, status, message, data) =>
  res.send({ status, message, data });

router.get("/uploadAllData", (req, res) => {
  Controllers.uploadBulkData()
    .then((response) => {
      sendJson(res, "success", "", response);
    })
    .catch((err) => {
      sendJson(res, "failed", err.message, "");
    });
});

router.get("/getAllData", (req, res) => {
  Controllers.getAllData()
    .then((response) => {
      sendJson(res, "success", "", response);
    })
    .catch((err) => {
      sendJson(res, "failed", err.message, "");
    });
});

router.get("/getDetail/:id", (req, res) => {
  Controllers.getDetail(req.params.id)
    .then((response) => {
      sendJson(res, "success", "", response);
    })
    .catch((err) => {
      sendJson(res, "failed", err.message, "");
    });
});

router.get("/searchData/:query", (req, res) => {
  Controllers.searchData(req.params.query)
    .then((response) => {
      sendJson(res, "success", "", response);
    })
    .catch((err) => {
      sendJson(res, "failed", err.message, "");
    });
});

module.exports = router;
