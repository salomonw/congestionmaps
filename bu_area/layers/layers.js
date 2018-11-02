var wms_layers = [];

        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'GoogleMaps_0',
            'type': 'base',
            'opacity': 0.681000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_cong_comparison_PM_1 = new ol.format.GeoJSON();
var features_cong_comparison_PM_1 = format_cong_comparison_PM_1.readFeatures(json_cong_comparison_PM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_comparison_PM_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_comparison_PM_1.addFeatures(features_cong_comparison_PM_1);var lyr_cong_comparison_PM_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_comparison_PM_1, 
                style: style_cong_comparison_PM_1,
    title: 'cong_comparison_PM<br />\
    <img src="styles/legend/cong_comparison_PM_1_0.png" />  -2.00 - -1.12 <br />\
    <img src="styles/legend/cong_comparison_PM_1_1.png" />  -1.12 - -0.10 <br />\
    <img src="styles/legend/cong_comparison_PM_1_2.png" />  -0.10 - 0.10 <br />\
    <img src="styles/legend/cong_comparison_PM_1_3.png" />  0.10 - 0.50 <br />\
    <img src="styles/legend/cong_comparison_PM_1_4.png" />  0.50 - 1.00 <br />\
    <img src="styles/legend/cong_comparison_PM_1_5.png" />  1.00 - 2.00 <br />'
        });var format_cong_comparison_NT_2 = new ol.format.GeoJSON();
var features_cong_comparison_NT_2 = format_cong_comparison_NT_2.readFeatures(json_cong_comparison_NT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_comparison_NT_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_comparison_NT_2.addFeatures(features_cong_comparison_NT_2);var lyr_cong_comparison_NT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_comparison_NT_2, 
                style: style_cong_comparison_NT_2,
    title: 'cong_comparison_NT<br />\
    <img src="styles/legend/cong_comparison_NT_2_0.png" />  -2.00 - -1.12 <br />\
    <img src="styles/legend/cong_comparison_NT_2_1.png" />  -1.12 - -0.10 <br />\
    <img src="styles/legend/cong_comparison_NT_2_2.png" />  -0.10 - 0.10 <br />\
    <img src="styles/legend/cong_comparison_NT_2_3.png" />  0.10 - 0.50 <br />\
    <img src="styles/legend/cong_comparison_NT_2_4.png" />  0.50 - 1.00 <br />\
    <img src="styles/legend/cong_comparison_NT_2_5.png" />  1.00 - 2.00 <br />'
        });var format_cong_comparison_MD_3 = new ol.format.GeoJSON();
var features_cong_comparison_MD_3 = format_cong_comparison_MD_3.readFeatures(json_cong_comparison_MD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_comparison_MD_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_comparison_MD_3.addFeatures(features_cong_comparison_MD_3);var lyr_cong_comparison_MD_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_comparison_MD_3, 
                style: style_cong_comparison_MD_3,
    title: 'cong_comparison_MD<br />\
    <img src="styles/legend/cong_comparison_MD_3_0.png" />  -2.00 - -1.12 <br />\
    <img src="styles/legend/cong_comparison_MD_3_1.png" />  -1.12 - -0.10 <br />\
    <img src="styles/legend/cong_comparison_MD_3_2.png" />  -0.10 - 0.10 <br />\
    <img src="styles/legend/cong_comparison_MD_3_3.png" />  0.10 - 0.50 <br />\
    <img src="styles/legend/cong_comparison_MD_3_4.png" />  0.50 - 1.00 <br />\
    <img src="styles/legend/cong_comparison_MD_3_5.png" />  1.00 - 2.00 <br />'
        });var format_cong_comparison_AM_4 = new ol.format.GeoJSON();
var features_cong_comparison_AM_4 = format_cong_comparison_AM_4.readFeatures(json_cong_comparison_AM_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_comparison_AM_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_comparison_AM_4.addFeatures(features_cong_comparison_AM_4);var lyr_cong_comparison_AM_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_comparison_AM_4, 
                style: style_cong_comparison_AM_4,
    title: 'cong_comparison_AM<br />\
    <img src="styles/legend/cong_comparison_AM_4_0.png" />  -2.00 - -1.12 <br />\
    <img src="styles/legend/cong_comparison_AM_4_1.png" />  -1.12 - -0.10 <br />\
    <img src="styles/legend/cong_comparison_AM_4_2.png" />  -0.10 - 0.10 <br />\
    <img src="styles/legend/cong_comparison_AM_4_3.png" />  0.10 - 0.50 <br />\
    <img src="styles/legend/cong_comparison_AM_4_4.png" />  0.50 - 1.00 <br />\
    <img src="styles/legend/cong_comparison_AM_4_5.png" />  1.00 - 2.00 <br />'
        });var format_cong_comparison_all_5 = new ol.format.GeoJSON();
var features_cong_comparison_all_5 = format_cong_comparison_all_5.readFeatures(json_cong_comparison_all_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_comparison_all_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_comparison_all_5.addFeatures(features_cong_comparison_all_5);var lyr_cong_comparison_all_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_comparison_all_5, 
                style: style_cong_comparison_all_5,
    title: 'cong_comparison_all<br />\
    <img src="styles/legend/cong_comparison_all_5_0.png" />  -20.00 - -10.00 <br />\
    <img src="styles/legend/cong_comparison_all_5_1.png" />  -10.00 - -1.00 <br />\
    <img src="styles/legend/cong_comparison_all_5_2.png" />  -1.00 - 1.00 <br />\
    <img src="styles/legend/cong_comparison_all_5_3.png" />  1.00 - 5.00 <br />\
    <img src="styles/legend/cong_comparison_all_5_4.png" />  5.00 - 10.00 <br />\
    <img src="styles/legend/cong_comparison_all_5_5.png" />  10.00 - 10000.00 <br />'
        });var format_zip_comparison_NT_6 = new ol.format.GeoJSON();
var features_zip_comparison_NT_6 = format_zip_comparison_NT_6.readFeatures(json_zip_comparison_NT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zip_comparison_NT_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_zip_comparison_NT_6.addFeatures(features_zip_comparison_NT_6);var lyr_zip_comparison_NT_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zip_comparison_NT_6, 
                style: style_zip_comparison_NT_6,
    title: 'zip_comparison_NT<br />\
    <img src="styles/legend/zip_comparison_NT_6_0.png" />  -2.00 - -1.00 hrs<br />\
    <img src="styles/legend/zip_comparison_NT_6_1.png" />  -1.00 - -0.10 hrs<br />\
    <img src="styles/legend/zip_comparison_NT_6_2.png" />  -0.10 - 0.10 hrs<br />\
    <img src="styles/legend/zip_comparison_NT_6_3.png" />  0.10 - 0.50 hrs<br />\
    <img src="styles/legend/zip_comparison_NT_6_4.png" />  0.50 - 1.20 hrs<br />\
    <img src="styles/legend/zip_comparison_NT_6_5.png" />  1.20 - 2.00 hrs<br />'
        });var format_zip_comparison_PM_7 = new ol.format.GeoJSON();
var features_zip_comparison_PM_7 = format_zip_comparison_PM_7.readFeatures(json_zip_comparison_PM_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zip_comparison_PM_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_zip_comparison_PM_7.addFeatures(features_zip_comparison_PM_7);var lyr_zip_comparison_PM_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zip_comparison_PM_7, 
                style: style_zip_comparison_PM_7,
    title: 'zip_comparison_PM<br />\
    <img src="styles/legend/zip_comparison_PM_7_0.png" />  -2.00 - -1.00 hrs<br />\
    <img src="styles/legend/zip_comparison_PM_7_1.png" />  -1.00 - -0.10 hrs<br />\
    <img src="styles/legend/zip_comparison_PM_7_2.png" />  -0.10 - 0.10 hrs<br />\
    <img src="styles/legend/zip_comparison_PM_7_3.png" />  0.10 - 0.50 hrs<br />\
    <img src="styles/legend/zip_comparison_PM_7_4.png" />  0.50 - 1.20 hrs<br />\
    <img src="styles/legend/zip_comparison_PM_7_5.png" />  1.20 - 2.00 hrs<br />'
        });var format_zip_comparison_MD_8 = new ol.format.GeoJSON();
var features_zip_comparison_MD_8 = format_zip_comparison_MD_8.readFeatures(json_zip_comparison_MD_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zip_comparison_MD_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_zip_comparison_MD_8.addFeatures(features_zip_comparison_MD_8);var lyr_zip_comparison_MD_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zip_comparison_MD_8, 
                style: style_zip_comparison_MD_8,
    title: 'zip_comparison_MD<br />\
    <img src="styles/legend/zip_comparison_MD_8_0.png" />  -2.00 - -1.00 hrs<br />\
    <img src="styles/legend/zip_comparison_MD_8_1.png" />  -1.00 - -0.10 hrs<br />\
    <img src="styles/legend/zip_comparison_MD_8_2.png" />  -0.10 - 0.10 hrs<br />\
    <img src="styles/legend/zip_comparison_MD_8_3.png" />  0.10 - 0.50 hrs<br />\
    <img src="styles/legend/zip_comparison_MD_8_4.png" />  0.50 - 1.20 hrs<br />\
    <img src="styles/legend/zip_comparison_MD_8_5.png" />  1.20 - 2.00 hrs<br />'
        });var format_zip_comparison_AM_9 = new ol.format.GeoJSON();
var features_zip_comparison_AM_9 = format_zip_comparison_AM_9.readFeatures(json_zip_comparison_AM_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zip_comparison_AM_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_zip_comparison_AM_9.addFeatures(features_zip_comparison_AM_9);var lyr_zip_comparison_AM_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zip_comparison_AM_9, 
                style: style_zip_comparison_AM_9,
    title: 'zip_comparison_AM<br />\
    <img src="styles/legend/zip_comparison_AM_9_0.png" />  -2.00 - -1.00 hrs<br />\
    <img src="styles/legend/zip_comparison_AM_9_1.png" />  -1.00 - -0.10 hrs<br />\
    <img src="styles/legend/zip_comparison_AM_9_2.png" />  -0.10 - 0.10 hrs<br />\
    <img src="styles/legend/zip_comparison_AM_9_3.png" />  0.10 - 0.50 hrs<br />\
    <img src="styles/legend/zip_comparison_AM_9_4.png" />  0.50 - 1.20 hrs<br />\
    <img src="styles/legend/zip_comparison_AM_9_5.png" />  1.20 - 2.00 hrs<br />'
        });var format_zip_comparison_all_10 = new ol.format.GeoJSON();
var features_zip_comparison_all_10 = format_zip_comparison_all_10.readFeatures(json_zip_comparison_all_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zip_comparison_all_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_zip_comparison_all_10.addFeatures(features_zip_comparison_all_10);var lyr_zip_comparison_all_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_zip_comparison_all_10, 
                style: style_zip_comparison_all_10,
    title: 'zip_comparison_all<br />\
    <img src="styles/legend/zip_comparison_all_10_0.png" />  -3.7 - -1.5 hrs<br />\
    <img src="styles/legend/zip_comparison_all_10_1.png" />  -1.5 - 0.0 hrs<br />\
    <img src="styles/legend/zip_comparison_all_10_2.png" />  0.0 - 0.1 hrs<br />\
    <img src="styles/legend/zip_comparison_all_10_3.png" />  0.1 - 2.5 hrs<br />\
    <img src="styles/legend/zip_comparison_all_10_4.png" />  2.5 - 4.4 hrs<br />'
        });var format_cong_PM_2012_46__11 = new ol.format.GeoJSON();
var features_cong_PM_2012_46__11 = format_cong_PM_2012_46__11.readFeatures(json_cong_PM_2012_46__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_PM_2012_46__11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_PM_2012_46__11.addFeatures(features_cong_PM_2012_46__11);var lyr_cong_PM_2012_46__11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_PM_2012_46__11, 
                style: style_cong_PM_2012_46__11,
    title: 'cong_PM_2012_4-6_<br />\
    <img src="styles/legend/cong_PM_2012_46__11_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/cong_PM_2012_46__11_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/cong_PM_2012_46__11_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/cong_PM_2012_46__11_3.png" />  1.31 - 2.00 <br />'
        });var format_cong_PM_2015_46_new_12 = new ol.format.GeoJSON();
var features_cong_PM_2015_46_new_12 = format_cong_PM_2015_46_new_12.readFeatures(json_cong_PM_2015_46_new_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_PM_2015_46_new_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_PM_2015_46_new_12.addFeatures(features_cong_PM_2015_46_new_12);var lyr_cong_PM_2015_46_new_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_PM_2015_46_new_12, 
                style: style_cong_PM_2015_46_new_12,
    title: 'cong_PM_2015_4-6_new<br />\
    <img src="styles/legend/cong_PM_2015_46_new_12_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/cong_PM_2015_46_new_12_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/cong_PM_2015_46_new_12_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/cong_PM_2015_46_new_12_3.png" />  1.31 - 2.00 <br />'
        });var format_cong_NT_2012_46__13 = new ol.format.GeoJSON();
var features_cong_NT_2012_46__13 = format_cong_NT_2012_46__13.readFeatures(json_cong_NT_2012_46__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_NT_2012_46__13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_NT_2012_46__13.addFeatures(features_cong_NT_2012_46__13);var lyr_cong_NT_2012_46__13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_NT_2012_46__13, 
                style: style_cong_NT_2012_46__13,
    title: 'cong_NT_2012_4-6_<br />\
    <img src="styles/legend/cong_NT_2012_46__13_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/cong_NT_2012_46__13_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/cong_NT_2012_46__13_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/cong_NT_2012_46__13_3.png" />  1.31 - 2.00 <br />'
        });var format_cong_NT_2015_46_new_14 = new ol.format.GeoJSON();
var features_cong_NT_2015_46_new_14 = format_cong_NT_2015_46_new_14.readFeatures(json_cong_NT_2015_46_new_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_NT_2015_46_new_14 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_NT_2015_46_new_14.addFeatures(features_cong_NT_2015_46_new_14);var lyr_cong_NT_2015_46_new_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_NT_2015_46_new_14, 
                style: style_cong_NT_2015_46_new_14,
    title: 'cong_NT_2015_4-6_new<br />\
    <img src="styles/legend/cong_NT_2015_46_new_14_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/cong_NT_2015_46_new_14_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/cong_NT_2015_46_new_14_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/cong_NT_2015_46_new_14_3.png" />  1.31 - 2.00 <br />'
        });var format_cong_MD_2012_46__15 = new ol.format.GeoJSON();
var features_cong_MD_2012_46__15 = format_cong_MD_2012_46__15.readFeatures(json_cong_MD_2012_46__15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_MD_2012_46__15 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_MD_2012_46__15.addFeatures(features_cong_MD_2012_46__15);var lyr_cong_MD_2012_46__15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_MD_2012_46__15, 
                style: style_cong_MD_2012_46__15,
    title: 'cong_MD_2012_4-6_<br />\
    <img src="styles/legend/cong_MD_2012_46__15_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/cong_MD_2012_46__15_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/cong_MD_2012_46__15_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/cong_MD_2012_46__15_3.png" />  1.31 - 2.00 <br />'
        });var format_cong_MD_2015_46_new_16 = new ol.format.GeoJSON();
var features_cong_MD_2015_46_new_16 = format_cong_MD_2015_46_new_16.readFeatures(json_cong_MD_2015_46_new_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_MD_2015_46_new_16 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_MD_2015_46_new_16.addFeatures(features_cong_MD_2015_46_new_16);var lyr_cong_MD_2015_46_new_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_MD_2015_46_new_16, 
                style: style_cong_MD_2015_46_new_16,
    title: 'cong_MD_2015_4-6_new<br />\
    <img src="styles/legend/cong_MD_2015_46_new_16_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/cong_MD_2015_46_new_16_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/cong_MD_2015_46_new_16_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/cong_MD_2015_46_new_16_3.png" />  1.31 - 2.00 <br />'
        });var format_cong_AM_2012_46__17 = new ol.format.GeoJSON();
var features_cong_AM_2012_46__17 = format_cong_AM_2012_46__17.readFeatures(json_cong_AM_2012_46__17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_AM_2012_46__17 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_AM_2012_46__17.addFeatures(features_cong_AM_2012_46__17);var lyr_cong_AM_2012_46__17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_AM_2012_46__17, 
                style: style_cong_AM_2012_46__17,
    title: 'cong_AM_2012_4-6_<br />\
    <img src="styles/legend/cong_AM_2012_46__17_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/cong_AM_2012_46__17_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/cong_AM_2012_46__17_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/cong_AM_2012_46__17_3.png" />  1.31 - 2.00 <br />'
        });var format_cong_AM_2015_46_new_18 = new ol.format.GeoJSON();
var features_cong_AM_2015_46_new_18 = format_cong_AM_2015_46_new_18.readFeatures(json_cong_AM_2015_46_new_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_AM_2015_46_new_18 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_AM_2015_46_new_18.addFeatures(features_cong_AM_2015_46_new_18);var lyr_cong_AM_2015_46_new_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_AM_2015_46_new_18, 
                style: style_cong_AM_2015_46_new_18,
    title: 'cong_AM_2015_4-6_new<br />\
    <img src="styles/legend/cong_AM_2015_46_new_18_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/cong_AM_2015_46_new_18_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/cong_AM_2015_46_new_18_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/cong_AM_2015_46_new_18_3.png" />  1.31 - 2.00 <br />'
        });var format_cong_all_2012_46__19 = new ol.format.GeoJSON();
var features_cong_all_2012_46__19 = format_cong_all_2012_46__19.readFeatures(json_cong_all_2012_46__19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_all_2012_46__19 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_all_2012_46__19.addFeatures(features_cong_all_2012_46__19);var lyr_cong_all_2012_46__19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_all_2012_46__19, 
                style: style_cong_all_2012_46__19,
    title: 'cong_all_2012_4-6_<br />\
    <img src="styles/legend/cong_all_2012_46__19_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/cong_all_2012_46__19_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/cong_all_2012_46__19_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/cong_all_2012_46__19_3.png" />  1.31 - 2.00 <br />'
        });var format_cong_all_2015_46_new_20 = new ol.format.GeoJSON();
var features_cong_all_2015_46_new_20 = format_cong_all_2015_46_new_20.readFeatures(json_cong_all_2015_46_new_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_all_2015_46_new_20 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_all_2015_46_new_20.addFeatures(features_cong_all_2015_46_new_20);var lyr_cong_all_2015_46_new_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_all_2015_46_new_20, 
                style: style_cong_all_2015_46_new_20,
    title: 'cong_all_2015_4-6_new<br />\
    <img src="styles/legend/cong_all_2015_46_new_20_0.png" />  0.00 - 0.19 <br />\
    <img src="styles/legend/cong_all_2015_46_new_20_1.png" />  0.19 - 0.63 <br />\
    <img src="styles/legend/cong_all_2015_46_new_20_2.png" />  0.63 - 1.31 <br />\
    <img src="styles/legend/cong_all_2015_46_new_20_3.png" />  1.31 - 2.00 <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_cong_comparison_PM_1.setVisible(false);lyr_cong_comparison_NT_2.setVisible(false);lyr_cong_comparison_MD_3.setVisible(false);lyr_cong_comparison_AM_4.setVisible(false);lyr_cong_comparison_all_5.setVisible(false);lyr_zip_comparison_NT_6.setVisible(false);lyr_zip_comparison_PM_7.setVisible(false);lyr_zip_comparison_MD_8.setVisible(true);lyr_zip_comparison_AM_9.setVisible(false);lyr_zip_comparison_all_10.setVisible(true);lyr_cong_PM_2012_46__11.setVisible(false);lyr_cong_PM_2015_46_new_12.setVisible(false);lyr_cong_NT_2012_46__13.setVisible(false);lyr_cong_NT_2015_46_new_14.setVisible(false);lyr_cong_MD_2012_46__15.setVisible(false);lyr_cong_MD_2015_46_new_16.setVisible(false);lyr_cong_AM_2012_46__17.setVisible(false);lyr_cong_AM_2015_46_new_18.setVisible(false);lyr_cong_all_2012_46__19.setVisible(false);lyr_cong_all_2015_46_new_20.setVisible(false);
var layersList = [lyr_GoogleMaps_0,lyr_cong_comparison_PM_1,lyr_cong_comparison_NT_2,lyr_cong_comparison_MD_3,lyr_cong_comparison_AM_4,lyr_cong_comparison_all_5,lyr_zip_comparison_NT_6,lyr_zip_comparison_PM_7,lyr_zip_comparison_MD_8,lyr_zip_comparison_AM_9,lyr_zip_comparison_all_10,lyr_cong_PM_2012_46__11,lyr_cong_PM_2015_46_new_12,lyr_cong_NT_2012_46__13,lyr_cong_NT_2015_46_new_14,lyr_cong_MD_2012_46__15,lyr_cong_MD_2015_46_new_16,lyr_cong_AM_2012_46__17,lyr_cong_AM_2015_46_new_18,lyr_cong_all_2012_46__19,lyr_cong_all_2015_46_new_20];
lyr_cong_comparison_PM_1.set('fieldAliases', {'OBJECTID_x': 'OBJECTID_x', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME_': 'ROAD_NAME_', 'DIRECTION_': 'DIRECTION_', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY_x': 'COUNTY_x', 'ZIP_x': 'ZIP_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'ROAD_NUM_1': 'ROAD_NUM_1', 'ROAD_NAM_1': 'ROAD_NAM_1', 'DIRECTIO_1': 'DIRECTIO_1', 'SEGMENT__1': 'SEGMENT__1', 'SEGMENT__2': 'SEGMENT__2', 'COUNTY_y': 'COUNTY_y', 'ZIP_y': 'ZIP_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'ABS_DIRE_1': 'ABS_DIRE_1', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', });
lyr_cong_comparison_NT_2.set('fieldAliases', {'OBJECTID_x': 'OBJECTID_x', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME_': 'ROAD_NAME_', 'DIRECTION_': 'DIRECTION_', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY_x': 'COUNTY_x', 'ZIP_x': 'ZIP_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'ROAD_NUM_1': 'ROAD_NUM_1', 'ROAD_NAM_1': 'ROAD_NAM_1', 'DIRECTIO_1': 'DIRECTIO_1', 'SEGMENT__1': 'SEGMENT__1', 'SEGMENT__2': 'SEGMENT__2', 'COUNTY_y': 'COUNTY_y', 'ZIP_y': 'ZIP_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'ABS_DIRE_1': 'ABS_DIRE_1', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', });
lyr_cong_comparison_MD_3.set('fieldAliases', {'OBJECTID_x': 'OBJECTID_x', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME_': 'ROAD_NAME_', 'DIRECTION_': 'DIRECTION_', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY_x': 'COUNTY_x', 'ZIP_x': 'ZIP_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'ROAD_NUM_1': 'ROAD_NUM_1', 'ROAD_NAM_1': 'ROAD_NAM_1', 'DIRECTIO_1': 'DIRECTIO_1', 'SEGMENT__1': 'SEGMENT__1', 'SEGMENT__2': 'SEGMENT__2', 'COUNTY_y': 'COUNTY_y', 'ZIP_y': 'ZIP_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'ABS_DIRE_1': 'ABS_DIRE_1', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', });
lyr_cong_comparison_AM_4.set('fieldAliases', {'OBJECTID_x': 'OBJECTID_x', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME_': 'ROAD_NAME_', 'DIRECTION_': 'DIRECTION_', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY_x': 'COUNTY_x', 'ZIP_x': 'ZIP_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'ROAD_NUM_1': 'ROAD_NUM_1', 'ROAD_NAM_1': 'ROAD_NAM_1', 'DIRECTIO_1': 'DIRECTIO_1', 'SEGMENT__1': 'SEGMENT__1', 'SEGMENT__2': 'SEGMENT__2', 'COUNTY_y': 'COUNTY_y', 'ZIP_y': 'ZIP_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'ABS_DIRE_1': 'ABS_DIRE_1', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', });
lyr_cong_comparison_all_5.set('fieldAliases', {'OBJECTID_x': 'OBJECTID_x', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME_': 'ROAD_NAME_', 'DIRECTION_': 'DIRECTION_', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY_x': 'COUNTY_x', 'ZIP_x': 'ZIP_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'ROAD_NUM_1': 'ROAD_NUM_1', 'ROAD_NAM_1': 'ROAD_NAM_1', 'DIRECTIO_1': 'DIRECTIO_1', 'SEGMENT__1': 'SEGMENT__1', 'SEGMENT__2': 'SEGMENT__2', 'COUNTY_y': 'COUNTY_y', 'ZIP_y': 'ZIP_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'ABS_DIRE_1': 'ABS_DIRE_1', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'cong_diff': 'cong_diff', });
lyr_zip_comparison_NT_6.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'CITY_TOWN': 'CITY_TOWN', 'COUNTY': 'COUNTY', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'congZip2_2': 'congZip2_2', 'congZip2_3': 'congZip2_3', 'congDiff': 'congDiff', 'congPercen': 'congPercen', });
lyr_zip_comparison_PM_7.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'CITY_TOWN': 'CITY_TOWN', 'COUNTY': 'COUNTY', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'congZip2_2': 'congZip2_2', 'congZip2_3': 'congZip2_3', 'congDiff': 'congDiff', 'congPercen': 'congPercen', });
lyr_zip_comparison_MD_8.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'CITY_TOWN': 'CITY_TOWN', 'COUNTY': 'COUNTY', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'congZip2_2': 'congZip2_2', 'congZip2_3': 'congZip2_3', 'congDiff': 'congDiff', 'congPercen': 'congPercen', });
lyr_zip_comparison_AM_9.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'CITY_TOWN': 'CITY_TOWN', 'COUNTY': 'COUNTY', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'congZip2_2': 'congZip2_2', 'congZip2_3': 'congZip2_3', 'congDiff': 'congDiff', 'congPercen': 'congPercen', });
lyr_zip_comparison_all_10.set('fieldAliases', {'POSTCODE': 'POSTCODE', 'PC_NAME': 'PC_NAME', 'PC_TYPE': 'PC_TYPE', 'PA_NAME': 'PA_NAME', 'PA_FIPS': 'PA_FIPS', 'CITY_TOWN': 'CITY_TOWN', 'COUNTY': 'COUNTY', 'AREA_SQMI': 'AREA_SQMI', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'ZIP': 'ZIP', 'ZIP_x': 'ZIP_x', 'OBJECTID_x': 'OBJECTID_x', 'SORT_KEY_x': 'SORT_KEY_x', 'XWAY_x': 'XWAY_x', 'Shape_Leng': 'Shape_Leng', 'cong_2012': 'cong_2012', 'OBJECTID_y': 'OBJECTID_y', 'SORT_KEY_y': 'SORT_KEY_y', 'XWAY_y': 'XWAY_y', 'Shape_Le_1': 'Shape_Le_1', 'cong_2015': 'cong_2015', 'congZip201': 'congZip201', 'congZip2_1': 'congZip2_1', 'congZip2_2': 'congZip2_2', 'congZip2_3': 'congZip2_3', 'congDiff': 'congDiff', 'congPercen': 'congPercen', });
lyr_cong_PM_2012_46__11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_cong_PM_2015_46_new_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_cong_NT_2012_46__13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_cong_NT_2015_46_new_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_cong_MD_2012_46__15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_cong_MD_2015_46_new_16.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_cong_AM_2012_46__17.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_cong_AM_2015_46_new_18.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_cong_all_2012_46__19.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_cong_all_2015_46_new_20.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_cong_comparison_PM_1.set('fieldImages', {'OBJECTID_x': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME_': 'TextEdit', 'DIRECTION_': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY_x': 'Hidden', 'ZIP_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'TextEdit', 'OBJECTID_y': 'Hidden', 'ROAD_NUM_1': 'Hidden', 'ROAD_NAM_1': 'Hidden', 'DIRECTIO_1': 'Hidden', 'SEGMENT__1': 'Hidden', 'SEGMENT__2': 'Hidden', 'COUNTY_y': 'Hidden', 'ZIP_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'ABS_DIRE_1': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'TextEdit', 'cong_diff': 'TextEdit', });
lyr_cong_comparison_NT_2.set('fieldImages', {'OBJECTID_x': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME_': 'TextEdit', 'DIRECTION_': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY_x': 'Hidden', 'ZIP_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'TextEdit', 'OBJECTID_y': 'Hidden', 'ROAD_NUM_1': 'Hidden', 'ROAD_NAM_1': 'Hidden', 'DIRECTIO_1': 'Hidden', 'SEGMENT__1': 'Hidden', 'SEGMENT__2': 'Hidden', 'COUNTY_y': 'Hidden', 'ZIP_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'ABS_DIRE_1': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'TextEdit', 'cong_diff': 'TextEdit', });
lyr_cong_comparison_MD_3.set('fieldImages', {'OBJECTID_x': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME_': 'TextEdit', 'DIRECTION_': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY_x': 'Hidden', 'ZIP_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'TextEdit', 'OBJECTID_y': 'Hidden', 'ROAD_NUM_1': 'Hidden', 'ROAD_NAM_1': 'Hidden', 'DIRECTIO_1': 'Hidden', 'SEGMENT__1': 'Hidden', 'SEGMENT__2': 'Hidden', 'COUNTY_y': 'Hidden', 'ZIP_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'ABS_DIRE_1': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'TextEdit', 'cong_diff': 'TextEdit', });
lyr_cong_comparison_AM_4.set('fieldImages', {'OBJECTID_x': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME_': 'TextEdit', 'DIRECTION_': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY_x': 'Hidden', 'ZIP_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'TextEdit', 'OBJECTID_y': 'Hidden', 'ROAD_NUM_1': 'Hidden', 'ROAD_NAM_1': 'Hidden', 'DIRECTIO_1': 'Hidden', 'SEGMENT__1': 'Hidden', 'SEGMENT__2': 'Hidden', 'COUNTY_y': 'Hidden', 'ZIP_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'ABS_DIRE_1': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'TextEdit', 'cong_diff': 'TextEdit', });
lyr_cong_comparison_all_5.set('fieldImages', {'OBJECTID_x': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME_': 'TextEdit', 'DIRECTION_': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY_x': 'Hidden', 'ZIP_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'TextEdit', 'OBJECTID_y': 'Hidden', 'ROAD_NUM_1': 'Hidden', 'ROAD_NAM_1': 'Hidden', 'DIRECTIO_1': 'Hidden', 'SEGMENT__1': 'Hidden', 'SEGMENT__2': 'Hidden', 'COUNTY_y': 'Hidden', 'ZIP_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'ABS_DIRE_1': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'TextEdit', 'cong_diff': 'TextEdit', });
lyr_zip_comparison_NT_6.set('fieldImages', {'POSTCODE': 'Hidden', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'CITY_TOWN': 'TextEdit', 'COUNTY': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'TextEdit', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'TextEdit', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'TextEdit', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'congZip2_2': 'Hidden', 'congZip2_3': 'Hidden', 'congDiff': 'TextEdit', 'congPercen': 'Hidden', });
lyr_zip_comparison_PM_7.set('fieldImages', {'POSTCODE': 'Hidden', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'CITY_TOWN': 'TextEdit', 'COUNTY': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'TextEdit', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'TextEdit', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'TextEdit', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'congZip2_2': 'Hidden', 'congZip2_3': 'Hidden', 'congDiff': 'TextEdit', 'congPercen': 'Hidden', });
lyr_zip_comparison_MD_8.set('fieldImages', {'POSTCODE': 'Hidden', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'CITY_TOWN': 'TextEdit', 'COUNTY': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'TextEdit', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'TextEdit', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'TextEdit', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'congZip2_2': 'Hidden', 'congZip2_3': 'Hidden', 'congDiff': 'TextEdit', 'congPercen': 'Hidden', });
lyr_zip_comparison_AM_9.set('fieldImages', {'POSTCODE': 'Hidden', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'CITY_TOWN': 'TextEdit', 'COUNTY': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'TextEdit', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'TextEdit', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'TextEdit', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'congZip2_2': 'Hidden', 'congZip2_3': 'Hidden', 'congDiff': 'TextEdit', 'congPercen': 'Hidden', });
lyr_zip_comparison_all_10.set('fieldImages', {'POSTCODE': 'Hidden', 'PC_NAME': 'Hidden', 'PC_TYPE': 'Hidden', 'PA_NAME': 'Hidden', 'PA_FIPS': 'Hidden', 'CITY_TOWN': 'TextEdit', 'COUNTY': 'TextEdit', 'AREA_SQMI': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'ZIP': 'TextEdit', 'ZIP_x': 'Hidden', 'OBJECTID_x': 'Hidden', 'SORT_KEY_x': 'Hidden', 'XWAY_x': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_2012': 'TextEdit', 'OBJECTID_y': 'Hidden', 'SORT_KEY_y': 'Hidden', 'XWAY_y': 'Hidden', 'Shape_Le_1': 'Hidden', 'cong_2015': 'TextEdit', 'congZip201': 'Hidden', 'congZip2_1': 'Hidden', 'congZip2_2': 'Hidden', 'congZip2_3': 'Hidden', 'congDiff': 'TextEdit', 'congPercen': 'Hidden', });
lyr_cong_PM_2012_46__11.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_cong_PM_2015_46_new_12.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_cong_NT_2012_46__13.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_cong_NT_2015_46_new_14.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_cong_MD_2012_46__15.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_cong_MD_2015_46_new_16.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_cong_AM_2012_46__17.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_cong_AM_2015_46_new_18.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_cong_all_2012_46__19.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_cong_all_2015_46_new_20.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'Hidden', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_cong_comparison_PM_1.set('fieldLabels', {'ROAD_NAME_': 'inline label', 'DIRECTION_': 'inline label', 'cong_2012': 'inline label', 'cong_2015': 'inline label', 'cong_diff': 'inline label', });
lyr_cong_comparison_NT_2.set('fieldLabels', {'ROAD_NAME_': 'no label', 'DIRECTION_': 'no label', 'cong_2012': 'no label', 'cong_2015': 'no label', 'cong_diff': 'no label', });
lyr_cong_comparison_MD_3.set('fieldLabels', {'ROAD_NAME_': 'inline label', 'DIRECTION_': 'inline label', 'cong_2012': 'inline label', 'cong_2015': 'inline label', 'cong_diff': 'inline label', });
lyr_cong_comparison_AM_4.set('fieldLabels', {'ROAD_NAME_': 'inline label', 'DIRECTION_': 'inline label', 'cong_2012': 'inline label', 'cong_2015': 'inline label', 'cong_diff': 'inline label', });
lyr_cong_comparison_all_5.set('fieldLabels', {'ROAD_NAME_': 'inline label', 'DIRECTION_': 'inline label', 'cong_2012': 'inline label', 'cong_2015': 'inline label', 'cong_diff': 'inline label', });
lyr_zip_comparison_NT_6.set('fieldLabels', {'CITY_TOWN': 'inline label', 'COUNTY': 'inline label', 'ZIP': 'inline label', 'cong_2012': 'inline label', 'cong_2015': 'inline label', 'congDiff': 'inline label', });
lyr_zip_comparison_PM_7.set('fieldLabels', {'CITY_TOWN': 'inline label', 'COUNTY': 'inline label', 'ZIP': 'inline label', 'cong_2012': 'inline label', 'cong_2015': 'inline label', 'congDiff': 'inline label', });
lyr_zip_comparison_MD_8.set('fieldLabels', {'CITY_TOWN': 'no label', 'COUNTY': 'no label', 'ZIP': 'no label', 'cong_2012': 'no label', 'cong_2015': 'no label', 'congDiff': 'no label', });
lyr_zip_comparison_AM_9.set('fieldLabels', {'CITY_TOWN': 'inline label', 'COUNTY': 'inline label', 'ZIP': 'inline label', 'cong_2012': 'inline label', 'cong_2015': 'inline label', 'congDiff': 'inline label', });
lyr_zip_comparison_all_10.set('fieldLabels', {'CITY_TOWN': 'inline label', 'COUNTY': 'inline label', 'ZIP': 'inline label', 'cong_2012': 'inline label', 'cong_2015': 'inline label', 'congDiff': 'inline label', });
lyr_cong_PM_2012_46__11.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_cong_PM_2015_46_new_12.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_cong_NT_2012_46__13.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_cong_NT_2015_46_new_14.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_cong_MD_2012_46__15.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_cong_MD_2015_46_new_16.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_cong_AM_2012_46__17.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_cong_AM_2015_46_new_18.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_cong_all_2012_46__19.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_cong_all_2015_46_new_20.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'cong_time': 'inline label', });
lyr_cong_all_2015_46_new_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});