const Series = require('./series.model');

const createSeries = seriesInfo => Series.create(seriesInfo);

module.exports = { createSeries };
