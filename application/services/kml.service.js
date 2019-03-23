const tj = require('togeojson');
const DOMParser = require('xmldom').DOMParser;
const fs = require('fs');
const commonConfig = require('../../config/common.config');
const inside = require('point-in-geopolygon');
const file = new DOMParser().parseFromString(fs.readFileSync(commonConfig.kml_file_path, 'utf8'));
const _ = require('lodash');
// keeping only Polygon geometry type
const filterGeoJSON = (geoJson) => {
    geoJson.features = _.filter(geoJson.features, feature => feature.geometry.type === 'Polygon');
    return geoJson;
}
const geoJson = filterGeoJSON(tj.kml(file));

module.exports.findNearestOutlet = async (lon, lat) => {
    const outlet = inside.feature(geoJson,[ lon, lat]);
    return outlet !== -1 ? outlet : null;
};
