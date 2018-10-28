var wms_layers = [];

        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'GoogleMaps_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_INRIX_TMC_Road_Network_1 = new ol.format.GeoJSON();
var features_INRIX_TMC_Road_Network_1 = format_INRIX_TMC_Road_Network_1.readFeatures(json_INRIX_TMC_Road_Network_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INRIX_TMC_Road_Network_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_INRIX_TMC_Road_Network_1.addFeatures(features_INRIX_TMC_Road_Network_1);var lyr_INRIX_TMC_Road_Network_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INRIX_TMC_Road_Network_1, 
                style: style_INRIX_TMC_Road_Network_1,
                title: '<img src="styles/legend/INRIX_TMC_Road_Network_1.png" /> INRIX_TMC_Road_Network'
            });var format_cong_2015_46_2 = new ol.format.GeoJSON();
var features_cong_2015_46_2 = format_cong_2015_46_2.readFeatures(json_cong_2015_46_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cong_2015_46_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_cong_2015_46_2.addFeatures(features_cong_2015_46_2);var lyr_cong_2015_46_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cong_2015_46_2, 
                style: style_cong_2015_46_2,
    title: 'cong_2015_4-6<br />\
    <img src="styles/legend/cong_2015_46_2_0.png" />  0.00 - 1.12 <br />\
    <img src="styles/legend/cong_2015_46_2_1.png" />  1.12 - 2.82 <br />\
    <img src="styles/legend/cong_2015_46_2_2.png" />  2.82 - 5.09 <br />\
    <img src="styles/legend/cong_2015_46_2_3.png" />  5.09 - 10.80 <br />\
    <img src="styles/legend/cong_2015_46_2_4.png" />  10.80 - 16.78 <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_INRIX_TMC_Road_Network_1.setVisible(true);lyr_cong_2015_46_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_INRIX_TMC_Road_Network_1,lyr_cong_2015_46_2];
lyr_INRIX_TMC_Road_Network_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', });
lyr_cong_2015_46_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', });
lyr_INRIX_TMC_Road_Network_1.set('fieldImages', {'OBJECTID': '', 'TMC': '', 'ROAD_NUMBE': '', 'ROAD_NAME': '', 'DIRECTION': '', 'SEGMENT_BE': '', 'SEGMENT_EN': '', 'COUNTY': '', 'ZIP': '', 'SORT_KEY': '', 'XWAY': '', 'ABS_DIRECT': '', 'Shape_Leng': '', });
lyr_cong_2015_46_2.set('fieldImages', {'OBJECTID': 'Range', 'TMC': 'TextEdit', 'ROAD_NUMBE': 'TextEdit', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'TextEdit', 'SEGMENT_EN': 'TextEdit', 'COUNTY': 'TextEdit', 'ZIP': 'TextEdit', 'SORT_KEY': 'TextEdit', 'XWAY': 'Range', 'ABS_DIRECT': 'TextEdit', 'Shape_Leng': 'TextEdit', 'cong_time': 'TextEdit', });
lyr_INRIX_TMC_Road_Network_1.set('fieldLabels', {'OBJECTID': 'no label', 'TMC': 'header label', 'ROAD_NUMBE': 'no label', 'ROAD_NAME': 'no label', 'DIRECTION': 'no label', 'SEGMENT_BE': 'no label', 'SEGMENT_EN': 'no label', 'COUNTY': 'no label', 'ZIP': 'header label', 'SORT_KEY': 'no label', 'XWAY': 'no label', 'ABS_DIRECT': 'no label', 'Shape_Leng': 'no label', });
lyr_cong_2015_46_2.set('fieldLabels', {'OBJECTID': 'no label', 'TMC': 'header label', 'ROAD_NUMBE': 'no label', 'ROAD_NAME': 'no label', 'DIRECTION': 'no label', 'SEGMENT_BE': 'no label', 'SEGMENT_EN': 'no label', 'COUNTY': 'no label', 'ZIP': 'no label', 'SORT_KEY': 'no label', 'XWAY': 'no label', 'ABS_DIRECT': 'no label', 'Shape_Leng': 'no label', 'cong_time': 'header label', });
lyr_cong_2015_46_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});