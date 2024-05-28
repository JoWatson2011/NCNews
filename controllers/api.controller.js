const { fetchEndpoints } = require("../models/api");
exports.getEndpoints = (req, res, next) => {
  fetchEndpoints().then((endpointsData) => {
    res.status(200).send({ endpoints: endpointsData });
  });
};