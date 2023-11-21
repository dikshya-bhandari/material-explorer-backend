const client = require("./elasticSetup");
const { allMaterialData } = require("./output");

const uploadBulkData = () =>
  new Promise((resolve, reject) => {
    client.helpers
      .bulk({
        datasource: allMaterialData.slice(1),
        pipeline: "ent-search-generic-ingestion",
        onDocument: (doc) => ({ index: { _index: "search-material-index" } }),
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });

const getAllData = () =>
  new Promise((resolve, reject) => {
    client
      .search({
        index: "search-material-index",
        size: 200,
      })
      .then((res) => {
        const requiredData = res.hits.hits.map((x) => {
          return {
            elasticId: x._id,
            ID: x._source.ID,
            pretty_formula: x._source.pretty_formula,
          };
        });
        resolve(requiredData);
      })
      .catch((err) => {
        reject(err);
      });
  });

const searchData = (query) =>
  new Promise((resolve, reject) => {
    const searchBody = {
      query: {
        multi_match: {
          query: query,
          fields: [
            "reference.bibtex",
            "magnetic_ordering",
            "pretty_formula",
            "ID",
          ],
          operator: "and",
        },
      },
    };
    client
      .search({
        index: "search-material-index",
        size: 200,
        body: searchBody,
      })
      .then((res) => {
        const requiredData = res.hits.hits.map((x) => {
          return {
            elasticId: x._id,
            ID: x._source.ID,
            pretty_formula: x._source.pretty_formula,
          };
        });
        resolve(requiredData);
      })
      .catch((err) => {
        reject(err);
      });
  });

const getDetail = (id) =>
  new Promise((resolve, reject) => {
    const searchBody = {
      query: {
        term: {
          _id: id,
        },
      },
    };

    client
      .search({
        index: "search-material-index",
        body: searchBody,
      })
      .then((res) => {
        const hits = res.hits.hits;
        resolve(hits[0]._source);
      })
      .catch((err) => reject(err));
  });

module.exports = {
  uploadBulkData,
  getAllData,
  getDetail,
  searchData,
};
