const Series = require('./series.model');

const getAll = () => Series.find({});

const getById = _id => Series.findOne({ _id });

const createSeries = seriesInfo => Series.create(seriesInfo);

const updateSeries = updateInfo =>
  Series.updateOne({ _id: updateInfo._id }, updateInfo);

module.exports = { getAll, getById, createSeries, updateSeries };
