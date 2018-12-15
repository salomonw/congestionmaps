var wms_layers = [];

        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'GoogleMaps_0',
            'type': 'base',
            'opacity': 0.681000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_CongNT2012vs2015_1 = new ol.format.GeoJSON();
var features_CongNT2012vs2015_1 = format_CongNT2012vs2015_1.readFeatures(json_CongNT2012vs2015_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongNT2012vs2015_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongNT2012vs2015_1.addFeatures(features_CongNT2012vs2015_1);var lyr_CongNT2012vs2015_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongNT2012vs2015_1, 
                style: style_CongNT2012vs2015_1,
    title: 'Cong (NT) 2012 vs 2015<br />\
    <img src="styles/legend/CongNT2012vs2015_1_0.png" />  -2.0 to -1.1  hrs<br />\
    <img src="styles/legend/CongNT2012vs2015_1_1.png" />  -1.1 to -0.1  hrs<br />\
    <img src="styles/legend/CongNT2012vs2015_1_2.png" />  -0.1 to 0.1  hrs<br />\
    <img src="styles/legend/CongNT2012vs2015_1_3.png" />  0.1 to 0.5  hrs<br />\
    <img src="styles/legend/CongNT2012vs2015_1_4.png" />  0.5 to 1.0  hrs<br />\
    <img src="styles/legend/CongNT2012vs2015_1_5.png" />  1.0 to 2.0  hrs<br />'
        });var format_CongPM2012vs2015_2 = new ol.format.GeoJSON();
var features_CongPM2012vs2015_2 = format_CongPM2012vs2015_2.readFeatures(json_CongPM2012vs2015_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongPM2012vs2015_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongPM2012vs2015_2.addFeatures(features_CongPM2012vs2015_2);var lyr_CongPM2012vs2015_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongPM2012vs2015_2, 
                style: style_CongPM2012vs2015_2,
    title: 'Cong (PM) 2012 vs 2015<br />\
    <img src="styles/legend/CongPM2012vs2015_2_0.png" />  -2.0 to -1.1  hrs<br />\
    <img src="styles/legend/CongPM2012vs2015_2_1.png" />  -1.1 to -0.1  hrs<br />\
    <img src="styles/legend/CongPM2012vs2015_2_2.png" />  -0.1 to 0.1  hrs<br />\
    <img src="styles/legend/CongPM2012vs2015_2_3.png" />  0.1 to 0.5  hrs<br />\
    <img src="styles/legend/CongPM2012vs2015_2_4.png" />  0.5 to 1.0  hrs<br />\
    <img src="styles/legend/CongPM2012vs2015_2_5.png" />  1.0 to 2.0  hrs<br />'
        });var format_CongMD2012vs2015_3 = new ol.format.GeoJSON();
var features_CongMD2012vs2015_3 = format_CongMD2012vs2015_3.readFeatures(json_CongMD2012vs2015_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongMD2012vs2015_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongMD2012vs2015_3.addFeatures(features_CongMD2012vs2015_3);var lyr_CongMD2012vs2015_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongMD2012vs2015_3, 
                style: style_CongMD2012vs2015_3,
    title: 'Cong (MD) 2012 vs 2015<br />\
    <img src="styles/legend/CongMD2012vs2015_3_0.png" />  -2.0 to -1.1  hrs<br />\
    <img src="styles/legend/CongMD2012vs2015_3_1.png" />  -1.1 to -0.1  hrs<br />\
    <img src="styles/legend/CongMD2012vs2015_3_2.png" />  -0.1 to 0.1  hrs<br />\
    <img src="styles/legend/CongMD2012vs2015_3_3.png" />  0.1 to 0.5  hrs<br />\
    <img src="styles/legend/CongMD2012vs2015_3_4.png" />  0.5 to 1.0  hrs<br />\
    <img src="styles/legend/CongMD2012vs2015_3_5.png" />  1.0 to 2.0  hrs<br />'
        });var format_CongAM2012vs2015_4 = new ol.format.GeoJSON();
var features_CongAM2012vs2015_4 = format_CongAM2012vs2015_4.readFeatures(json_CongAM2012vs2015_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongAM2012vs2015_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongAM2012vs2015_4.addFeatures(features_CongAM2012vs2015_4);var lyr_CongAM2012vs2015_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongAM2012vs2015_4, 
                style: style_CongAM2012vs2015_4,
    title: 'Cong (AM) 2012 vs 2015<br />\
    <img src="styles/legend/CongAM2012vs2015_4_0.png" />  -2.0 to -1.1  hrs<br />\
    <img src="styles/legend/CongAM2012vs2015_4_1.png" />  -1.1 to -0.1  hrs<br />\
    <img src="styles/legend/CongAM2012vs2015_4_2.png" />  -0.1 to 0.1  hrs<br />\
    <img src="styles/legend/CongAM2012vs2015_4_3.png" />  0.1 to 0.5  hrs<br />\
    <img src="styles/legend/CongAM2012vs2015_4_4.png" />  0.5 to 1.0  hrs<br />\
    <img src="styles/legend/CongAM2012vs2015_4_5.png" />  1.0 to 2.0  hrs<br />'
        });var format_CongAll2012vs2015_5 = new ol.format.GeoJSON();
var features_CongAll2012vs2015_5 = format_CongAll2012vs2015_5.readFeatures(json_CongAll2012vs2015_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongAll2012vs2015_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongAll2012vs2015_5.addFeatures(features_CongAll2012vs2015_5);var lyr_CongAll2012vs2015_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongAll2012vs2015_5, 
                style: style_CongAll2012vs2015_5,
    title: 'Cong (All) 2012 vs 2015<br />\
    <img src="styles/legend/CongAll2012vs2015_5_0.png" />  -20 to -10  hrs<br />\
    <img src="styles/legend/CongAll2012vs2015_5_1.png" />  -10 to -1  hrs<br />\
    <img src="styles/legend/CongAll2012vs2015_5_2.png" />  -1 to 1  hrs<br />\
    <img src="styles/legend/CongAll2012vs2015_5_3.png" />  1 to 5  hrs<br />\
    <img src="styles/legend/CongAll2012vs2015_5_4.png" />  5 to 10  hrs<br />\
    <img src="styles/legend/CongAll2012vs2015_5_5.png" />  10 to 10000  hrs<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_CongNT2012vs2015_1.setVisible(false);lyr_CongPM2012vs2015_2.setVisible(false);lyr_CongMD2012vs2015_3.setVisible(false);lyr_CongAM2012vs2015_4.setVisible(false);lyr_CongAll2012vs2015_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_CongNT2012vs2015_1,lyr_CongPM2012vs2015_2,lyr_CongMD2012vs2015_3,lyr_CongAM2012vs2015_4,lyr_CongAll2012vs2015_5];
lyr_CongNT2012vs2015_1.set('fieldAliases', {'OBJECTID_x': 'OBJECTID_x', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME_': 'ROAD_NAME_', 'DIRECTION_': 'DIRECTION_', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY_x': 'COUNTY_x', 'ZIP_x': 'ZIP_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'ROAD_NUM_1': 'ROAD_NUM_1', 'ROAD_NAM_1': 'ROAD_NAM_1', 'DIRECTIO_1': 'DIRECTIO_1', 'SEGMENT__1': 'SEGMENT__1', 'SEGMENT__2': 'SEGMENT__2', 'COUNTY_y': 'COUNTY_y', 'ZIP_y': 'ZIP_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'ABS_DIRE_1': 'ABS_DIRE_1', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', });
lyr_CongPM2012vs2015_2.set('fieldAliases', {'OBJECTID_x': 'OBJECTID_x', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME_': 'ROAD_NAME_', 'DIRECTION_': 'DIRECTION_', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY_x': 'COUNTY_x', 'ZIP_x': 'ZIP_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'ROAD_NUM_1': 'ROAD_NUM_1', 'ROAD_NAM_1': 'ROAD_NAM_1', 'DIRECTIO_1': 'DIRECTIO_1', 'SEGMENT__1': 'SEGMENT__1', 'SEGMENT__2': 'SEGMENT__2', 'COUNTY_y': 'COUNTY_y', 'ZIP_y': 'ZIP_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'ABS_DIRE_1': 'ABS_DIRE_1', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', });
lyr_CongMD2012vs2015_3.set('fieldAliases', {'OBJECTID_x': 'OBJECTID_x', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME_': 'ROAD_NAME_', 'DIRECTION_': 'DIRECTION_', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY_x': 'COUNTY_x', 'ZIP_x': 'ZIP_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'ROAD_NUM_1': 'ROAD_NUM_1', 'ROAD_NAM_1': 'ROAD_NAM_1', 'DIRECTIO_1': 'DIRECTIO_1', 'SEGMENT__1': 'SEGMENT__1', 'SEGMENT__2': 'SEGMENT__2', 'COUNTY_y': 'COUNTY_y', 'ZIP_y': 'ZIP_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'ABS_DIRE_1': 'ABS_DIRE_1', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', });
lyr_CongAM2012vs2015_4.set('fieldAliases', {'OBJECTID_x': 'OBJECTID_x', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME_': 'ROAD_NAME_', 'DIRECTION_': 'DIRECTION_', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY_x': 'COUNTY_x', 'ZIP_x': 'ZIP_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'ROAD_NUM_1': 'ROAD_NUM_1', 'ROAD_NAM_1': 'ROAD_NAM_1', 'DIRECTIO_1': 'DIRECTIO_1', 'SEGMENT__1': 'SEGMENT__1', 'SEGMENT__2': 'SEGMENT__2', 'COUNTY_y': 'COUNTY_y', 'ZIP_y': 'ZIP_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'ABS_DIRE_1': 'ABS_DIRE_1', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', });
lyr_CongAll2012vs2015_5.set('fieldAliases', {'OBJECTID_x': 'OBJECTID_x', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME_': 'ROAD_NAME_', 'DIRECTION_': 'DIRECTION_', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY_x': 'COUNTY_x', 'ZIP_x': 'ZIP_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'ROAD_NUM_1': 'ROAD_NUM_1', 'ROAD_NAM_1': 'ROAD_NAM_1', 'DIRECTIO_1': 'DIRECTIO_1', 'SEGMENT__1': 'SEGMENT__1', 'SEGMENT__2': 'SEGMENT__2', 'COUNTY_y': 'COUNTY_y', 'ZIP_y': 'ZIP_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'ABS_DIRE_1': 'ABS_DIRE_1', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', });
lyr_CongNT2012vs2015_1.set('fieldImages', {'OBJECTID_x': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME_': 'TextEdit', 'DIRECTION_': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY_x': 'Hidden', 'ZIP_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'ROAD_NUM_1': 'Hidden', 'ROAD_NAM_1': 'Hidden', 'DIRECTIO_1': 'Hidden', 'SEGMENT__1': 'Hidden', 'SEGMENT__2': 'Hidden', 'COUNTY_y': 'Hidden', 'ZIP_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'ABS_DIRE_1': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'cong_diff': 'TextEdit', });
lyr_CongPM2012vs2015_2.set('fieldImages', {'OBJECTID_x': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME_': 'TextEdit', 'DIRECTION_': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY_x': 'Hidden', 'ZIP_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'ROAD_NUM_1': 'Hidden', 'ROAD_NAM_1': 'Hidden', 'DIRECTIO_1': 'Hidden', 'SEGMENT__1': 'Hidden', 'SEGMENT__2': 'Hidden', 'COUNTY_y': 'Hidden', 'ZIP_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'ABS_DIRE_1': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'cong_diff': 'TextEdit', });
lyr_CongMD2012vs2015_3.set('fieldImages', {'OBJECTID_x': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME_': 'TextEdit', 'DIRECTION_': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY_x': 'Hidden', 'ZIP_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'ROAD_NUM_1': 'Hidden', 'ROAD_NAM_1': 'Hidden', 'DIRECTIO_1': 'Hidden', 'SEGMENT__1': 'Hidden', 'SEGMENT__2': 'Hidden', 'COUNTY_y': 'Hidden', 'ZIP_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'ABS_DIRE_1': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'cong_diff': 'TextEdit', });
lyr_CongAM2012vs2015_4.set('fieldImages', {'OBJECTID_x': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME_': 'TextEdit', 'DIRECTION_': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY_x': 'Hidden', 'ZIP_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'ROAD_NUM_1': 'Hidden', 'ROAD_NAM_1': 'Hidden', 'DIRECTIO_1': 'Hidden', 'SEGMENT__1': 'Hidden', 'SEGMENT__2': 'Hidden', 'COUNTY_y': 'Hidden', 'ZIP_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'ABS_DIRE_1': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'cong_diff': 'TextEdit', });
lyr_CongAll2012vs2015_5.set('fieldImages', {'OBJECTID_x': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME_': 'TextEdit', 'DIRECTION_': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY_x': 'Hidden', 'ZIP_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'ROAD_NUM_1': 'Hidden', 'ROAD_NAM_1': 'Hidden', 'DIRECTIO_1': 'Hidden', 'SEGMENT__1': 'Hidden', 'SEGMENT__2': 'Hidden', 'COUNTY_y': 'Hidden', 'ZIP_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'ABS_DIRE_1': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'cong_diff': 'TextEdit', });
lyr_CongNT2012vs2015_1.set('fieldLabels', {'ROAD_NAME_': 'no label', 'DIRECTION_': 'no label', 'cong_diff': 'no label', });
lyr_CongPM2012vs2015_2.set('fieldLabels', {'ROAD_NAME_': 'inline label', 'DIRECTION_': 'inline label', 'cong_diff': 'inline label', });
lyr_CongMD2012vs2015_3.set('fieldLabels', {'ROAD_NAME_': 'inline label', 'DIRECTION_': 'inline label', 'cong_diff': 'inline label', });
lyr_CongAM2012vs2015_4.set('fieldLabels', {'ROAD_NAME_': 'inline label', 'DIRECTION_': 'inline label', 'cong_diff': 'inline label', });
lyr_CongAll2012vs2015_5.set('fieldLabels', {'ROAD_NAME_': 'inline label', 'DIRECTION_': 'header label', 'cong_diff': 'header label', });
lyr_CongAll2012vs2015_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});