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
var format_TraveltimezipMD_0 = new ol.format.GeoJSON();
var features_TraveltimezipMD_0 = format_TraveltimezipMD_0.readFeatures(json_TraveltimezipMD_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TraveltimezipMD_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_TraveltimezipMD_0.addFeatures(features_TraveltimezipMD_0);var lyr_TraveltimezipMD_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TraveltimezipMD_0, 
                style: style_TraveltimezipMD_0,
    title: 'Travel Time (zip) MD<br />\
    <img src="styles/legend/TraveltimezipMD_0_0.png" />  -60%  to  -30%<br />\
    <img src="styles/legend/TraveltimezipMD_0_1.png" />  -30%  to  -10%<br />\
    <img src="styles/legend/TraveltimezipMD_0_2.png" />  -10%  to  10%<br />\
    <img src="styles/legend/TraveltimezipMD_0_3.png" />  10%  to  40%<br />\
    <img src="styles/legend/TraveltimezipMD_0_4.png" />  40%  to  100%<br />\
    <img src="styles/legend/TraveltimezipMD_0_5.png" />  100%  to  200%<br />'
        });var format_CongestionComparisonzipMD_1 = new ol.format.GeoJSON();
var features_CongestionComparisonzipMD_1 = format_CongestionComparisonzipMD_1.readFeatures(json_CongestionComparisonzipMD_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongestionComparisonzipMD_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CongestionComparisonzipMD_1.addFeatures(features_CongestionComparisonzipMD_1);var lyr_CongestionComparisonzipMD_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongestionComparisonzipMD_1, 
                style: style_CongestionComparisonzipMD_1,
    title: 'Congestion Comparison (zip) MD<br />\
    <img src="styles/legend/CongestionComparisonzipMD_1_0.png" />  -120 to -60  min<br />\
    <img src="styles/legend/CongestionComparisonzipMD_1_1.png" />  -60 to -5  min<br />\
    <img src="styles/legend/CongestionComparisonzipMD_1_2.png" />  -5 to 5  min<br />\
    <img src="styles/legend/CongestionComparisonzipMD_1_3.png" />  5 to 30  min<br />\
    <img src="styles/legend/CongestionComparisonzipMD_1_4.png" />  30 to 60  min<br />\
    <img src="styles/legend/CongestionComparisonzipMD_1_5.png" />  60 to 120  min<br />'
        });var format_CongestionComparisonStreetMD_2 = new ol.format.GeoJSON();
var features_CongestionComparisonStreetMD_2 = format_CongestionComparisonStreetMD_2.readFeatures(json_CongestionComparisonStreetMD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongestionComparisonStreetMD_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CongestionComparisonStreetMD_2.addFeatures(features_CongestionComparisonStreetMD_2);var lyr_CongestionComparisonStreetMD_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongestionComparisonStreetMD_2, 
                style: style_CongestionComparisonStreetMD_2,
    title: 'Congestion Comparison (Street) MD<br />\
    <img src="styles/legend/CongestionComparisonStreetMD_2_0.png" />  -120 - -60 min<br />\
    <img src="styles/legend/CongestionComparisonStreetMD_2_1.png" />  -60 - -5 min<br />\
    <img src="styles/legend/CongestionComparisonStreetMD_2_2.png" />  -5 - 5 min<br />\
    <img src="styles/legend/CongestionComparisonStreetMD_2_3.png" />  5 - 30 min<br />\
    <img src="styles/legend/CongestionComparisonStreetMD_2_4.png" />  30 - 60 min<br />\
    <img src="styles/legend/CongestionComparisonStreetMD_2_5.png" />  60 - 120 min<br />'
        });

lyr_TraveltimezipMD_0.setVisible(false);lyr_CongestionComparisonzipMD_1.setVisible(true);lyr_CongestionComparisonStreetMD_2.setVisible(false);
var layersList = [baseLayer,lyr_TraveltimezipMD_0,lyr_CongestionComparisonzipMD_1,lyr_CongestionComparisonStreetMD_2];
lyr_TraveltimezipMD_0.set('fieldAliases', {'Zip': 'Zip', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'City': 'City', 'County': 'County', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', 'tT_2012': 'tT_2012', 'tT_2015': 'tT_2015', 'speed_2012': 'speed_2012', 'speed_2015': 'speed_2015', 'tT_increas': 'tT_increas', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'Cong 2012': 'Cong 2012', 'Cong 2015': 'Cong 2015', 'congDiff': 'congDiff', 'congPercen': 'congPercen', 'tTZip2012': 'tTZip2012', 'tTZip2015': 'tTZip2015', 'travelTPer': 'travelTPer', 'speedZip20': 'speedZip20', 'speedZip_1': 'speedZip_1', 'speedPerce': 'speedPerce', 'Travel Time 2012': 'Travel Time 2012', 'Travel Time 2015': 'Travel Time 2015', 'Travel Time Diff': 'Travel Time Diff', 'Speed 2012': 'Speed 2012', 'Speed 2015': 'Speed 2015', 'Speed Diff': 'Speed Diff', 'Cong Diff': 'Cong Diff', });
lyr_CongestionComparisonzipMD_1.set('fieldAliases', {'Zip': 'Zip', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'City': 'City', 'County': 'County', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', 'tT_2012': 'tT_2012', 'tT_2015': 'tT_2015', 'speed_2012': 'speed_2012', 'speed_2015': 'speed_2015', 'tT_increas': 'tT_increas', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'Cong 2012': 'Cong 2012', 'Cong 2015': 'Cong 2015', 'congDiff': 'congDiff', 'congPercen': 'congPercen', 'tTZip2012': 'tTZip2012', 'tTZip2015': 'tTZip2015', 'travelTPer': 'travelTPer', 'speedZip20': 'speedZip20', 'speedZip_1': 'speedZip_1', 'speedPerce': 'speedPerce', 'Travel Time 2012': 'Travel Time 2012', 'Travel Time 2015': 'Travel Time 2015', 'Travel Time Diff': 'Travel Time Diff', 'Speed 2012': 'Speed 2012', 'Speed 2015': 'Speed 2015', 'Speed Diff': 'Speed Diff', 'Cong Diff': 'Cong Diff', });
lyr_CongestionComparisonStreetMD_2.set('fieldAliases', {'OBJECTID_x': 'OBJECTID_x', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'Road': 'Road', 'DIRECTION_': 'DIRECTION_', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY_x': 'COUNTY_x', 'ZIP_x': 'ZIP_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'ROAD_NUM_1': 'ROAD_NUM_1', 'ROAD_NAM_1': 'ROAD_NAM_1', 'DIRECTIO_1': 'DIRECTIO_1', 'SEGMENT__1': 'SEGMENT__1', 'SEGMENT__2': 'SEGMENT__2', 'COUNTY_y': 'COUNTY_y', 'ZIP_y': 'ZIP_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'ABS_DIRE_1': 'ABS_DIRE_1', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', 'tT_2012': 'tT_2012', 'tT_2015': 'tT_2015', 'speed_2012': 'speed_2012', 'speed_2015': 'speed_2015', 'tT_increas': 'tT_increas', 'Travel Time Diff': 'Travel Time Diff', 'Travel Time 2012': 'Travel Time 2012', 'Travel Time 2015': 'Travel Time 2015', 'Cong Diff': 'Cong Diff', 'Cong 2012': 'Cong 2012', 'Cong 2015': 'Cong 2015', 'Speed 2012': 'Speed 2012', 'Speed 2015': 'Speed 2015', });
lyr_TraveltimezipMD_0.set('fieldImages', {'Zip': 'TextEdit', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'City': 'TextEdit', 'County': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'Hidden', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'cong_diff': 'Hidden', 'tT_2012': 'Hidden', 'tT_2015': 'Hidden', 'speed_2012': 'Hidden', 'speed_2015': 'Hidden', 'tT_increas': 'Hidden', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'Cong 2012': 'TextEdit', 'Cong 2015': 'TextEdit', 'congDiff': 'Hidden', 'congPercen': 'Hidden', 'tTZip2012': 'Hidden', 'tTZip2015': 'Hidden', 'travelTPer': 'Hidden', 'speedZip20': 'Hidden', 'speedZip_1': 'Hidden', 'speedPerce': 'Hidden', 'Travel Time 2012': 'TextEdit', 'Travel Time 2015': 'TextEdit', 'Travel Time Diff': 'TextEdit', 'Speed 2012': 'TextEdit', 'Speed 2015': 'TextEdit', 'Speed Diff': 'Hidden', 'Cong Diff': 'TextEdit', });
lyr_CongestionComparisonzipMD_1.set('fieldImages', {'Zip': 'TextEdit', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'City': 'TextEdit', 'County': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'Hidden', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'cong_diff': 'Hidden', 'tT_2012': 'Hidden', 'tT_2015': 'Hidden', 'speed_2012': 'Hidden', 'speed_2015': 'Hidden', 'tT_increas': 'Hidden', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'Cong 2012': 'TextEdit', 'Cong 2015': 'TextEdit', 'congDiff': 'Hidden', 'congPercen': 'Hidden', 'tTZip2012': 'Hidden', 'tTZip2015': 'Hidden', 'travelTPer': 'Hidden', 'speedZip20': 'Hidden', 'speedZip_1': 'Hidden', 'speedPerce': 'Hidden', 'Travel Time 2012': 'TextEdit', 'Travel Time 2015': 'TextEdit', 'Travel Time Diff': 'TextEdit', 'Speed 2012': 'TextEdit', 'Speed 2015': 'TextEdit', 'Speed Diff': 'TextEdit', 'Cong Diff': 'TextEdit', });
lyr_CongestionComparisonStreetMD_2.set('fieldImages', {'OBJECTID_x': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'Road': 'TextEdit', 'DIRECTION_': 'Hidden', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY_x': 'Hidden', 'ZIP_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'ROAD_NUM_1': 'Hidden', 'ROAD_NAM_1': 'Hidden', 'DIRECTIO_1': 'Hidden', 'SEGMENT__1': 'Hidden', 'SEGMENT__2': 'Hidden', 'COUNTY_y': 'Hidden', 'ZIP_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'ABS_DIRE_1': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'cong_diff': 'Hidden', 'tT_2012': 'Hidden', 'tT_2015': 'Hidden', 'speed_2012': 'Hidden', 'speed_2015': 'Hidden', 'tT_increas': 'Hidden', 'Travel Time Diff': 'TextEdit', 'Travel Time 2012': 'TextEdit', 'Travel Time 2015': 'TextEdit', 'Cong Diff': 'TextEdit', 'Cong 2012': 'TextEdit', 'Cong 2015': 'TextEdit', 'Speed 2012': 'TextEdit', 'Speed 2015': 'TextEdit', });
lyr_TraveltimezipMD_0.set('fieldLabels', {'Zip': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Cong 2012': 'inline label', 'Cong 2015': 'inline label', 'Travel Time 2012': 'inline label', 'Travel Time 2015': 'inline label', 'Travel Time Diff': 'inline label', 'Speed 2012': 'inline label', 'Speed 2015': 'inline label', 'Cong Diff': 'inline label', });
lyr_CongestionComparisonzipMD_1.set('fieldLabels', {'Zip': 'inline label', 'City': 'inline label', 'County': 'inline label', 'Cong 2012': 'inline label', 'Cong 2015': 'inline label', 'Travel Time 2012': 'inline label', 'Travel Time 2015': 'inline label', 'Travel Time Diff': 'inline label', 'Speed 2012': 'inline label', 'Speed 2015': 'inline label', 'Speed Diff': 'inline label', 'Cong Diff': 'inline label', });
lyr_CongestionComparisonStreetMD_2.set('fieldLabels', {'Road': 'inline label', 'Travel Time Diff': 'inline label', 'Travel Time 2012': 'inline label', 'Travel Time 2015': 'inline label', 'Cong Diff': 'inline label', 'Cong 2012': 'inline label', 'Cong 2015': 'inline label', 'Speed 2012': 'inline label', 'Speed 2015': 'inline label', });
lyr_CongestionComparisonStreetMD_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});