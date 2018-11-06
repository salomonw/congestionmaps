var wms_layers = [];

        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'GoogleMaps_0',
            'type': 'base',
            'opacity': 0.681000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_ZipNT2012vs2015_1 = new ol.format.GeoJSON();
var features_ZipNT2012vs2015_1 = format_ZipNT2012vs2015_1.readFeatures(json_ZipNT2012vs2015_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZipNT2012vs2015_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ZipNT2012vs2015_1.addFeatures(features_ZipNT2012vs2015_1);var lyr_ZipNT2012vs2015_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZipNT2012vs2015_1, 
                style: style_ZipNT2012vs2015_1,
    title: 'Zip (NT) 2012 vs 2015<br />\
    <img src="styles/legend/ZipNT2012vs2015_1_0.png" />  -2.0 to -1.0 hrs<br />\
    <img src="styles/legend/ZipNT2012vs2015_1_1.png" />  -1.0 to -0.1 hrs<br />\
    <img src="styles/legend/ZipNT2012vs2015_1_2.png" />  -0.1 to 0.1 hrs<br />\
    <img src="styles/legend/ZipNT2012vs2015_1_3.png" />  0.1 to 0.5 hrs<br />\
    <img src="styles/legend/ZipNT2012vs2015_1_4.png" />  0.5 to 1.2 hrs<br />\
    <img src="styles/legend/ZipNT2012vs2015_1_5.png" />  1.2 to 2.0 hrs<br />'
        });var format_ZipPM2012vs2015_2 = new ol.format.GeoJSON();
var features_ZipPM2012vs2015_2 = format_ZipPM2012vs2015_2.readFeatures(json_ZipPM2012vs2015_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZipPM2012vs2015_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ZipPM2012vs2015_2.addFeatures(features_ZipPM2012vs2015_2);var lyr_ZipPM2012vs2015_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZipPM2012vs2015_2, 
                style: style_ZipPM2012vs2015_2,
    title: 'Zip (PM) 2012 vs 2015<br />\
    <img src="styles/legend/ZipPM2012vs2015_2_0.png" />  -2.0 to -1.0 hrs<br />\
    <img src="styles/legend/ZipPM2012vs2015_2_1.png" />  -1.0 to -0.1 hrs<br />\
    <img src="styles/legend/ZipPM2012vs2015_2_2.png" />  -0.1 to 0.1 hrs<br />\
    <img src="styles/legend/ZipPM2012vs2015_2_3.png" />  0.1 to 0.5 hrs<br />\
    <img src="styles/legend/ZipPM2012vs2015_2_4.png" />  0.5 to 1.2 hrs<br />\
    <img src="styles/legend/ZipPM2012vs2015_2_5.png" />  1.2 to 2.0 hrs<br />'
        });var format_ZipMD2012vs2015_3 = new ol.format.GeoJSON();
var features_ZipMD2012vs2015_3 = format_ZipMD2012vs2015_3.readFeatures(json_ZipMD2012vs2015_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZipMD2012vs2015_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ZipMD2012vs2015_3.addFeatures(features_ZipMD2012vs2015_3);var lyr_ZipMD2012vs2015_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZipMD2012vs2015_3, 
                style: style_ZipMD2012vs2015_3,
    title: 'Zip (MD) 2012 vs 2015<br />\
    <img src="styles/legend/ZipMD2012vs2015_3_0.png" />  -2.0 to -1.0 hrs<br />\
    <img src="styles/legend/ZipMD2012vs2015_3_1.png" />  -1.0 to -0.1 hrs<br />\
    <img src="styles/legend/ZipMD2012vs2015_3_2.png" />  -0.1 to 0.1 hrs<br />\
    <img src="styles/legend/ZipMD2012vs2015_3_3.png" />  0.1 to 0.5 hrs<br />\
    <img src="styles/legend/ZipMD2012vs2015_3_4.png" />  0.5 to 1.2 hrs<br />\
    <img src="styles/legend/ZipMD2012vs2015_3_5.png" />  1.2 to 2.0 hrs<br />'
        });var format_ZipAM2012vs2015_4 = new ol.format.GeoJSON();
var features_ZipAM2012vs2015_4 = format_ZipAM2012vs2015_4.readFeatures(json_ZipAM2012vs2015_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZipAM2012vs2015_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ZipAM2012vs2015_4.addFeatures(features_ZipAM2012vs2015_4);var lyr_ZipAM2012vs2015_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZipAM2012vs2015_4, 
                style: style_ZipAM2012vs2015_4,
    title: 'Zip (AM) 2012 vs 2015<br />\
    <img src="styles/legend/ZipAM2012vs2015_4_0.png" />  -2.0 to -1.0 hrs<br />\
    <img src="styles/legend/ZipAM2012vs2015_4_1.png" />  -1.0 to -0.1 hrs<br />\
    <img src="styles/legend/ZipAM2012vs2015_4_2.png" />  -0.1 to 0.1 hrs<br />\
    <img src="styles/legend/ZipAM2012vs2015_4_3.png" />  0.1 to 0.5 hrs<br />\
    <img src="styles/legend/ZipAM2012vs2015_4_4.png" />  0.5 to 1.2 hrs<br />\
    <img src="styles/legend/ZipAM2012vs2015_4_5.png" />  1.2 to 2.0 hrs<br />'
        });var format_ZipAll2012vs2015_5 = new ol.format.GeoJSON();
var features_ZipAll2012vs2015_5 = format_ZipAll2012vs2015_5.readFeatures(json_ZipAll2012vs2015_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZipAll2012vs2015_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_ZipAll2012vs2015_5.addFeatures(features_ZipAll2012vs2015_5);var lyr_ZipAll2012vs2015_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZipAll2012vs2015_5, 
                style: style_ZipAll2012vs2015_5,
    title: 'Zip (All) 2012 vs 2015<br />\
    <img src="styles/legend/ZipAll2012vs2015_5_0.png" />  -3.7 to -1.5 hrs<br />\
    <img src="styles/legend/ZipAll2012vs2015_5_1.png" />  -1.5 to -0.1 hrs<br />\
    <img src="styles/legend/ZipAll2012vs2015_5_2.png" />  -0.1 to 0.1 hrs<br />\
    <img src="styles/legend/ZipAll2012vs2015_5_3.png" />  0.1 to 2.5 hrs<br />\
    <img src="styles/legend/ZipAll2012vs2015_5_4.png" />  2.5 to 4.4 hrs<br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_ZipNT2012vs2015_1.setVisible(false);lyr_ZipPM2012vs2015_2.setVisible(false);lyr_ZipMD2012vs2015_3.setVisible(false);lyr_ZipAM2012vs2015_4.setVisible(false);lyr_ZipAll2012vs2015_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_ZipNT2012vs2015_1,lyr_ZipPM2012vs2015_2,lyr_ZipMD2012vs2015_3,lyr_ZipAM2012vs2015_4,lyr_ZipAll2012vs2015_5];
lyr_ZipNT2012vs2015_1.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'CITY_TOWN': 'CITY_TOWN', 'COUNTY': 'COUNTY', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'congZip2_2': 'congZip2_2', 'congZip2_3': 'congZip2_3', 'congDiff': 'congDiff', 'congPercen': 'congPercen', });
lyr_ZipPM2012vs2015_2.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'CITY_TOWN': 'CITY_TOWN', 'COUNTY': 'COUNTY', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'congZip2_2': 'congZip2_2', 'congZip2_3': 'congZip2_3', 'congDiff': 'congDiff', 'congPercen': 'congPercen', });
lyr_ZipMD2012vs2015_3.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'CITY_TOWN': 'CITY_TOWN', 'COUNTY': 'COUNTY', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'congZip2_2': 'congZip2_2', 'congZip2_3': 'congZip2_3', 'congDiff': 'congDiff', 'congPercen': 'congPercen', });
lyr_ZipAM2012vs2015_4.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'CITY_TOWN': 'CITY_TOWN', 'COUNTY': 'COUNTY', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'congZip2_2': 'congZip2_2', 'congZip2_3': 'congZip2_3', 'congDiff': 'congDiff', 'congPercen': 'congPercen', });
lyr_ZipAll2012vs2015_5.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'CITY_TOWN': 'CITY_TOWN', 'COUNTY': 'COUNTY', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'congZip2_2': 'congZip2_2', 'congZip2_3': 'congZip2_3', 'congDiff': 'congDiff', 'congPercen': 'congPercen', });
lyr_ZipNT2012vs2015_1.set('fieldImages', {'POSTCODE': 'Hidden', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'CITY_TOWN': 'TextEdit', 'COUNTY': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'TextEdit', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'congZip2_2': 'Hidden', 'congZip2_3': 'Hidden', 'congDiff': 'TextEdit', 'congPercen': 'Hidden', });
lyr_ZipPM2012vs2015_2.set('fieldImages', {'POSTCODE': 'Hidden', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'CITY_TOWN': 'TextEdit', 'COUNTY': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'TextEdit', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'congZip2_2': 'Hidden', 'congZip2_3': 'Hidden', 'congDiff': 'TextEdit', 'congPercen': 'Hidden', });
lyr_ZipMD2012vs2015_3.set('fieldImages', {'POSTCODE': 'Hidden', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'CITY_TOWN': 'TextEdit', 'COUNTY': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'TextEdit', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'congZip2_2': 'Hidden', 'congZip2_3': 'Hidden', 'congDiff': 'TextEdit', 'congPercen': 'Hidden', });
lyr_ZipAM2012vs2015_4.set('fieldImages', {'POSTCODE': 'Hidden', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'CITY_TOWN': 'TextEdit', 'COUNTY': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'TextEdit', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'congZip2_2': 'Hidden', 'congZip2_3': 'Hidden', 'congDiff': 'TextEdit', 'congPercen': 'Hidden', });
lyr_ZipAll2012vs2015_5.set('fieldImages', {'POSTCODE': 'Hidden', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'CITY_TOWN': 'TextEdit', 'COUNTY': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'TextEdit', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'Hidden', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'Hidden', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'congZip2_2': 'Hidden', 'congZip2_3': 'Hidden', 'congDiff': 'TextEdit', 'congPercen': 'Hidden', });
lyr_ZipNT2012vs2015_1.set('fieldLabels', {'CITY_TOWN': 'inline label', 'COUNTY': 'inline label', 'ZIP': 'inline label', 'congDiff': 'inline label', });
lyr_ZipPM2012vs2015_2.set('fieldLabels', {'CITY_TOWN': 'inline label', 'COUNTY': 'header label', 'ZIP': 'inline label', 'congDiff': 'inline label', });
lyr_ZipMD2012vs2015_3.set('fieldLabels', {'CITY_TOWN': 'inline label', 'COUNTY': 'inline label', 'ZIP': 'inline label', 'congDiff': 'inline label', });
lyr_ZipAM2012vs2015_4.set('fieldLabels', {'CITY_TOWN': 'inline label', 'COUNTY': 'inline label', 'ZIP': 'inline label', 'congDiff': 'inline label', });
lyr_ZipAll2012vs2015_5.set('fieldLabels', {'CITY_TOWN': 'inline label', 'COUNTY': 'inline label', 'ZIP': 'inline label', 'congDiff': 'inline label', });
lyr_ZipAll2012vs2015_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});