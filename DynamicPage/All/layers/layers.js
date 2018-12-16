var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_TraveltimezipAll_0 = new ol.format.GeoJSON();
var features_TraveltimezipAll_0 = format_TraveltimezipAll_0.readFeatures(json_TraveltimezipAll_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TraveltimezipAll_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TraveltimezipAll_0.addFeatures(features_TraveltimezipAll_0);var lyr_TraveltimezipAll_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TraveltimezipAll_0, 
                style: style_TraveltimezipAll_0,
    title: 'Travel time (zip) All<br />\
    <img src="styles/legend/TraveltimezipAll_0_0.png" />  -60%  to  -30%<br />\
    <img src="styles/legend/TraveltimezipAll_0_1.png" />  -30%  to  -10%<br />\
    <img src="styles/legend/TraveltimezipAll_0_2.png" />  -10%  to  10%<br />\
    <img src="styles/legend/TraveltimezipAll_0_3.png" />  10%  to  40%<br />\
    <img src="styles/legend/TraveltimezipAll_0_4.png" />  40%  to  100%<br />\
    <img src="styles/legend/TraveltimezipAll_0_5.png" />  100%  to  200%<br />'
        });var format_CongestionComparisonzipAll_1 = new ol.format.GeoJSON();
var features_CongestionComparisonzipAll_1 = format_CongestionComparisonzipAll_1.readFeatures(json_CongestionComparisonzipAll_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongestionComparisonzipAll_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CongestionComparisonzipAll_1.addFeatures(features_CongestionComparisonzipAll_1);var lyr_CongestionComparisonzipAll_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongestionComparisonzipAll_1, 
                style: style_CongestionComparisonzipAll_1,
    title: 'Congestion Comparison (zip) All<br />\
    <img src="styles/legend/CongestionComparisonzipAll_1_0.png" />  -223 to -150  min<br />\
    <img src="styles/legend/CongestionComparisonzipAll_1_1.png" />  -150 to -50  min<br />\
    <img src="styles/legend/CongestionComparisonzipAll_1_2.png" />  -50 to -15  min<br />\
    <img src="styles/legend/CongestionComparisonzipAll_1_3.png" />  -15 to 15  min<br />\
    <img src="styles/legend/CongestionComparisonzipAll_1_4.png" />  15 to 70  min<br />\
    <img src="styles/legend/CongestionComparisonzipAll_1_5.png" />  70 to 150  min<br />\
    <img src="styles/legend/CongestionComparisonzipAll_1_6.png" /> 0.0 - 0.0<br />'
        });var format_CongestionComparisonStreetAll_2 = new ol.format.GeoJSON();
var features_CongestionComparisonStreetAll_2 = format_CongestionComparisonStreetAll_2.readFeatures(json_CongestionComparisonStreetAll_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongestionComparisonStreetAll_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CongestionComparisonStreetAll_2.addFeatures(features_CongestionComparisonStreetAll_2);var lyr_CongestionComparisonStreetAll_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongestionComparisonStreetAll_2, 
                style: style_CongestionComparisonStreetAll_2,
    title: 'Congestion Comparison (Street) All<br />\
    <img src="styles/legend/CongestionComparisonStreetAll_2_0.png" />  -1440 - -100 min<br />\
    <img src="styles/legend/CongestionComparisonStreetAll_2_1.png" />  -100 - -400 min<br />\
    <img src="styles/legend/CongestionComparisonStreetAll_2_2.png" />  -400 - -100 min<br />\
    <img src="styles/legend/CongestionComparisonStreetAll_2_3.png" />  -100 - 100 min<br />\
    <img src="styles/legend/CongestionComparisonStreetAll_2_4.png" />  100 - 800 min<br />\
    <img src="styles/legend/CongestionComparisonStreetAll_2_5.png" />  800 - 1440 min<br />'
        });

lyr_TraveltimezipAll_0.setVisible(false);lyr_CongestionComparisonzipAll_1.setVisible(true);lyr_CongestionComparisonStreetAll_2.setVisible(false);
var layersList = [baseLayer,lyr_TraveltimezipAll_0,lyr_CongestionComparisonzipAll_1,lyr_CongestionComparisonStreetAll_2];
lyr_TraveltimezipAll_0.set('fieldAliases', {'Zip': 'Zip', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'City': 'City', 'County': 'County', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', 'tT_2012': 'tT_2012', 'tT_2015': 'tT_2015', 'speed_2012': 'speed_2012', 'speed_2015': 'speed_2015', 'tT_increas': 'tT_increas', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'Cong 2012': 'Cong 2012', 'Cong 2015': 'Cong 2015', 'congDiff': 'congDiff', 'congPercen': 'congPercen', 'tTZip2012': 'tTZip2012', 'tTZip2015': 'tTZip2015', 'travelTPer': 'travelTPer', 'speedZip20': 'speedZip20', 'speedZip_1': 'speedZip_1', 'speedPerce': 'speedPerce', 'Travel Time 2012': 'Travel Time 2012', 'Travel Time 2015': 'Travel Time 2015', 'Travel Time Diff': 'Travel Time Diff', 'Speed 2012': 'Speed 2012', 'Speed 2015': 'Speed 2015', 'S': 'S', 'Cong Diff': 'Cong Diff', });
lyr_CongestionComparisonzipAll_1.set('fieldAliases', {'Zip': 'Zip', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'City': 'City', 'County': 'County', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', 'tT_2012': 'tT_2012', 'tT_2015': 'tT_2015', 'speed_2012': 'speed_2012', 'speed_2015': 'speed_2015', 'tT_increas': 'tT_increas', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'Cong 2012': 'Cong 2012', 'Cong 2015': 'Cong 2015', 'congDiff': 'congDiff', 'congPercen': 'congPercen', 'tTZip2012': 'tTZip2012', 'tTZip2015': 'tTZip2015', 'travelTPer': 'travelTPer', 'speedZip20': 'speedZip20', 'speedZip_1': 'speedZip_1', 'speedPerce': 'speedPerce', 'Travel Time 2012': 'Travel Time 2012', 'Travel Time 2015': 'Travel Time 2015', 'Travel Time Diff': 'Travel Time Diff', 'Speed 2012': 'Speed 2012', 'Speed 2015': 'Speed 2015', 'S': 'S', 'Cong Diff': 'Cong Diff', });
lyr_CongestionComparisonStreetAll_2.set('fieldAliases', {'OBJECTID_x': 'OBJECTID_x', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'Road': 'Road', 'DIRECTION_': 'DIRECTION_', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY_x': 'COUNTY_x', 'ZIP_x': 'ZIP_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'ROAD_NUM_1': 'ROAD_NUM_1', 'ROAD_NAM_1': 'ROAD_NAM_1', 'DIRECTIO_1': 'DIRECTIO_1', 'SEGMENT__1': 'SEGMENT__1', 'SEGMENT__2': 'SEGMENT__2', 'COUNTY_y': 'COUNTY_y', 'ZIP_y': 'ZIP_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'ABS_DIRE_1': 'ABS_DIRE_1', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', 'tT_2012': 'tT_2012', 'tT_2015': 'tT_2015', 'speed_2012': 'speed_2012', 'speed_2015': 'speed_2015', 'tT_increas': 'tT_increas', 'Travel Time Diff': 'Travel Time Diff', 'Travel Time 2012': 'Travel Time 2012', 'Travel Time 2015': 'Travel Time 2015', 'Cong Diff': 'Cong Diff', 'Cong 2012': 'Cong 2012', 'Cong 2015': 'Cong 2015', 'Speed 2012': 'Speed 2012', 'Speed 2015': 'Speed 2015', });
lyr_TraveltimezipAll_0.set('fieldImages', {'Zip': 'TextEdit', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'City': 'TextEdit', 'County': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'Hidden', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'cong_diff': 'Hidden', 'tT_2012': 'Hidden', 'tT_2015': 'Hidden', 'speed_2012': 'Hidden', 'speed_2015': 'Hidden', 'tT_increas': 'Hidden', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'Cong 2012': 'TextEdit', 'Cong 2015': 'TextEdit', 'congDiff': 'Hidden', 'congPercen': 'Hidden', 'tTZip2012': 'Hidden', 'tTZip2015': 'Hidden', 'travelTPer': 'Hidden', 'speedZip20': 'Hidden', 'speedZip_1': 'Hidden', 'speedPerce': 'Hidden', 'Travel Time 2012': 'TextEdit', 'Travel Time 2015': 'TextEdit', 'Travel Time Diff': 'TextEdit', 'Speed 2012': 'TextEdit', 'Speed 2015': 'TextEdit', 'S': 'Hidden', 'Cong Diff': 'TextEdit', });
lyr_CongestionComparisonzipAll_1.set('fieldImages', {'Zip': 'TextEdit', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'City': 'TextEdit', 'County': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'Hidden', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'cong_diff': 'Hidden', 'tT_2012': 'Hidden', 'tT_2015': 'Hidden', 'speed_2012': 'Hidden', 'speed_2015': 'Hidden', 'tT_increas': 'Hidden', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'Cong 2012': 'TextEdit', 'Cong 2015': 'TextEdit', 'congDiff': 'Hidden', 'congPercen': 'Hidden', 'tTZip2012': 'Hidden', 'tTZip2015': 'Hidden', 'travelTPer': 'Hidden', 'speedZip20': 'Hidden', 'speedZip_1': 'Hidden', 'speedPerce': 'Hidden', 'Travel Time 2012': 'TextEdit', 'Travel Time 2015': 'TextEdit', 'Travel Time Diff': 'TextEdit', 'Speed 2012': 'TextEdit', 'Speed 2015': 'TextEdit', 'S': 'Hidden', 'Cong Diff': 'TextEdit', });
lyr_CongestionComparisonStreetAll_2.set('fieldImages', {'OBJECTID_x': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'Road': 'TextEdit', 'DIRECTION_': 'Hidden', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY_x': 'Hidden', 'ZIP_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'ROAD_NUM_1': 'Hidden', 'ROAD_NAM_1': 'Hidden', 'DIRECTIO_1': 'Hidden', 'SEGMENT__1': 'Hidden', 'SEGMENT__2': 'Hidden', 'COUNTY_y': 'Hidden', 'ZIP_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'ABS_DIRE_1': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'cong_diff': 'Hidden', 'tT_2012': 'Hidden', 'tT_2015': 'Hidden', 'speed_2012': 'Hidden', 'speed_2015': 'Hidden', 'tT_increas': 'Hidden', 'Travel Time Diff': 'TextEdit', 'Travel Time 2012': 'TextEdit', 'Travel Time 2015': 'TextEdit', 'Cong Diff': 'TextEdit', 'Cong 2012': 'TextEdit', 'Cong 2015': 'TextEdit', 'Speed 2012': 'TextEdit', 'Speed 2015': 'TextEdit', });
lyr_TraveltimezipAll_0.set('fieldLabels', {'Zip': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Cong 2012': 'inline label', 'Cong 2015': 'inline label', 'Travel Time 2012': 'inline label', 'Travel Time 2015': 'inline label', 'Travel Time Diff': 'inline label', 'Speed 2012': 'inline label', 'Speed 2015': 'inline label', 'Cong Diff': 'inline label', });
lyr_CongestionComparisonzipAll_1.set('fieldLabels', {'Zip': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Cong 2012': 'inline label', 'Cong 2015': 'inline label', 'Travel Time 2012': 'inline label', 'Travel Time 2015': 'inline label', 'Travel Time Diff': 'inline label', 'Speed 2012': 'inline label', 'Speed 2015': 'inline label', 'Cong Diff': 'inline label', });
lyr_CongestionComparisonStreetAll_2.set('fieldLabels', {'Road': 'inline label', 'Travel Time Diff': 'inline label', 'Travel Time 2012': 'inline label', 'Travel Time 2015': 'inline label', 'Cong Diff': 'inline label', 'Cong 2012': 'inline label', 'Cong 2015': 'inline label', 'Speed 2012': 'inline label', 'Speed 2015': 'inline label', });
lyr_CongestionComparisonStreetAll_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});