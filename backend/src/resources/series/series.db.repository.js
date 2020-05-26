const Series = require('./series.model');

const getAll = () => Series.find({});

const getById = _id => Series.findOne({ _id });

const getByTag = tag => Series.find({ tag });

const createSeries = seriesInfo => Series.create(seriesInfo);

const updateSeries = updateInfo =>
  Series.updateOne({ _id: updateInfo._id }, updateInfo);

const deleteSeries = _id => Series.deleteOne({ _id });

const completeChamp = () =>
  Series.updateOne({ tag: 'NYCS Finals' }, { isChampComplete: true });

module.exports = {
  getAll,
  getById,
  getByTag,
  createSeries,
  updateSeries,
  deleteSeries,
  completeChamp
};
