var wms_layers = [];

        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'GoogleMaps_0',
            'type': 'base',
            'opacity': 0.681000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_CongNT2012_1 = new ol.format.GeoJSON();
var features_CongNT2012_1 = format_CongNT2012_1.readFeatures(json_CongNT2012_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongNT2012_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongNT2012_1.addFeatures(features_CongNT2012_1);var lyr_CongNT2012_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongNT2012_1, 
                style: style_CongNT2012_1,
    title: 'Cong (NT) 2012<br />\
    <img src="styles/legend/CongNT2012_1_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/CongNT2012_1_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/CongNT2012_1_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/CongNT2012_1_3.png" />  1.31 - 2.00 <br />'
        });var format_CongNT2015_2 = new ol.format.GeoJSON();
var features_CongNT2015_2 = format_CongNT2015_2.readFeatures(json_CongNT2015_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongNT2015_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongNT2015_2.addFeatures(features_CongNT2015_2);var lyr_CongNT2015_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongNT2015_2, 
                style: style_CongNT2015_2,
    title: 'Cong (NT) 2015<br />\
    <img src="styles/legend/CongNT2015_2_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/CongNT2015_2_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/CongNT2015_2_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/CongNT2015_2_3.png" />  1.31 - 2.00 <br />'
        });var format_CongPM2012_3 = new ol.format.GeoJSON();
var features_CongPM2012_3 = format_CongPM2012_3.readFeatures(json_CongPM2012_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongPM2012_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongPM2012_3.addFeatures(features_CongPM2012_3);var lyr_CongPM2012_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongPM2012_3, 
                style: style_CongPM2012_3,
    title: 'Cong (PM) 2012<br />\
    <img src="styles/legend/CongPM2012_3_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/CongPM2012_3_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/CongPM2012_3_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/CongPM2012_3_3.png" />  1.31 - 2.00 <br />'
        });var format_CongPM2015_4 = new ol.format.GeoJSON();
var features_CongPM2015_4 = format_CongPM2015_4.readFeatures(json_CongPM2015_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongPM2015_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongPM2015_4.addFeatures(features_CongPM2015_4);var lyr_CongPM2015_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongPM2015_4, 
                style: style_CongPM2015_4,
    title: 'Cong (PM) 2015<br />\
    <img src="styles/legend/CongPM2015_4_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/CongPM2015_4_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/CongPM2015_4_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/CongPM2015_4_3.png" />  1.31 - 2.00 <br />'
        });var format_CongMD2012_5 = new ol.format.GeoJSON();
var features_CongMD2012_5 = format_CongMD2012_5.readFeatures(json_CongMD2012_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongMD2012_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongMD2012_5.addFeatures(features_CongMD2012_5);var lyr_CongMD2012_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongMD2012_5, 
                style: style_CongMD2012_5,
    title: 'Cong (MD) 2012<br />\
    <img src="styles/legend/CongMD2012_5_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/CongMD2012_5_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/CongMD2012_5_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/CongMD2012_5_3.png" />  1.31 - 2.00 <br />'
        });var format_CongMD2015_6 = new ol.format.GeoJSON();
var features_CongMD2015_6 = format_CongMD2015_6.readFeatures(json_CongMD2015_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongMD2015_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongMD2015_6.addFeatures(features_CongMD2015_6);var lyr_CongMD2015_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongMD2015_6, 
                style: style_CongMD2015_6,
    title: 'Cong (MD) 2015<br />\
    <img src="styles/legend/CongMD2015_6_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/CongMD2015_6_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/CongMD2015_6_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/CongMD2015_6_3.png" />  1.31 - 2.00 <br />'
        });var format_CongAM2012_7 = new ol.format.GeoJSON();
var features_CongAM2012_7 = format_CongAM2012_7.readFeatures(json_CongAM2012_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongAM2012_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongAM2012_7.addFeatures(features_CongAM2012_7);var lyr_CongAM2012_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongAM2012_7, 
                style: style_CongAM2012_7,
    title: 'Cong (AM) 2012<br />\
    <img src="styles/legend/CongAM2012_7_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/CongAM2012_7_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/CongAM2012_7_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/CongAM2012_7_3.png" />  1.31 - 2.00 <br />'
        });var format_CongAM2015_8 = new ol.format.GeoJSON();
var features_CongAM2015_8 = format_CongAM2015_8.readFeatures(json_CongAM2015_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongAM2015_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongAM2015_8.addFeatures(features_CongAM2015_8);var lyr_CongAM2015_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongAM2015_8, 
                style: style_CongAM2015_8,
    title: 'Cong (AM) 2015<br />\
    <img src="styles/legend/CongAM2015_8_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/CongAM2015_8_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/CongAM2015_8_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/CongAM2015_8_3.png" />  1.31 - 2.00 <br />'
        });var format_CongAll2012_9 = new ol.format.GeoJSON();
var features_CongAll2012_9 = format_CongAll2012_9.readFeatures(json_CongAll2012_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongAll2012_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongAll2012_9.addFeatures(features_CongAll2012_9);var lyr_CongAll2012_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongAll2012_9, 
                style: style_CongAll2012_9,
    title: 'Cong (All) 2012<br />\
    <img src="styles/legend/CongAll2012_9_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/CongAll2012_9_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/CongAll2012_9_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/CongAll2012_9_3.png" />  1.31 - 2.00 <br />'
        });var format_CongAll2015_10 = new ol.format.GeoJSON();
var features_CongAll2015_10 = format_CongAll2015_10.readFeatures(json_CongAll2015_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CongAll2015_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CongAll2015_10.addFeatures(features_CongAll2015_10);var lyr_CongAll2015_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CongAll2015_10, 
                style: style_CongAll2015_10,
    title: 'Cong (All) 2015<br />\
    <img src="styles/legend/CongAll2015_10_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/CongAll2015_10_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/CongAll2015_10_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/CongAll2015_10_3.png" />  1.31 - 2.00 <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_CongNT2012_1.setVisible(false);lyr_CongNT2015_2.setVisible(false);lyr_CongPM2012_3.setVisible(false);lyr_CongPM2015_4.setVisible(true);lyr_CongMD2012_5.setVisible(false);lyr_CongMD2015_6.setVisible(false);lyr_CongAM2012_7.setVisible(false);lyr_CongAM2015_8.setVisible(false);lyr_CongAll2012_9.setVisible(false);lyr_CongAll2015_10.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_CongNT2012_1,lyr_CongNT2015_2,lyr_CongPM2012_3,lyr_CongPM2015_4,lyr_CongMD2012_5,lyr_CongMD2015_6,lyr_CongAM2012_7,lyr_CongAM2015_8,lyr_CongAll2012_9,lyr_CongAll2015_10];
lyr_CongNT2012_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_CongNT2015_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_CongPM2012_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_CongPM2015_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_CongMD2012_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_CongMD2015_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_CongAM2012_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_CongAM2015_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_CongAll2012_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_CongAll2015_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_CongNT2012_1.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_CongNT2015_2.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_CongPM2012_3.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_CongPM2015_4.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_CongMD2012_5.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_CongMD2015_6.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_CongAM2012_7.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_CongAM2015_8.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_CongAll2012_9.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_CongAll2015_10.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_CongNT2012_1.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_CongNT2015_2.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_CongPM2012_3.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_CongPM2015_4.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_CongMD2012_5.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_CongMD2015_6.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_CongAM2012_7.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_CongAM2015_8.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_CongAll2012_9.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_CongAll2015_10.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_CongAll2015_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});