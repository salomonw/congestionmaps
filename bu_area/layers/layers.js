var wms_layers = [];

        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'GoogleMaps_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_INRIXTMCRoad_Network_1 = new ol.format.GeoJSON();
var features_INRIXTMCRoad_Network_1 = format_INRIXTMCRoad_Network_1.readFeatures(json_INRIXTMCRoad_Network_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INRIXTMCRoad_Network_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_INRIXTMCRoad_Network_1.addFeatures(features_INRIXTMCRoad_Network_1);var lyr_INRIXTMCRoad_Network_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INRIXTMCRoad_Network_1, 
                style: style_INRIXTMCRoad_Network_1,
                title: '<img src="styles/legend/INRIXTMCRoad_Network_1.png" /> INRIX TMC Road_Network'
            });var format_Congestedhrsperday_2 = new ol.format.GeoJSON();
var features_Congestedhrsperday_2 = format_Congestedhrsperday_2.readFeatures(json_Congestedhrsperday_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Congestedhrsperday_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Congestedhrsperday_2.addFeatures(features_Congestedhrsperday_2);var lyr_Congestedhrsperday_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Congestedhrsperday_2, 
                style: style_Congestedhrsperday_2,
    title: 'Congested hrs per day<br />\
    <img src="styles/legend/Congestedhrsperday_2_0.png" />  0.00 - 1.12 <br />\
    <img src="styles/legend/Congestedhrsperday_2_1.png" />  1.12 - 2.82 <br />\
    <img src="styles/legend/Congestedhrsperday_2_2.png" />  2.82 - 5.09 <br />\
    <img src="styles/legend/Congestedhrsperday_2_3.png" />  5.09 - 10.80 <br />\
    <img src="styles/legend/Congestedhrsperday_2_4.png" />  10.80 - 16.78 <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_INRIXTMCRoad_Network_1.setVisible(true);lyr_Congestedhrsperday_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_INRIXTMCRoad_Network_1,lyr_Congestedhrsperday_2];
lyr_INRIXTMCRoad_Network_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', });
lyr_Congestedhrsperday_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'Road name', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'Direction', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'Congestion hrs', });
lyr_INRIXTMCRoad_Network_1.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'TextEdit', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', });
lyr_Congestedhrsperday_2.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'TextEdit', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', });
lyr_INRIXTMCRoad_Network_1.set('fieldLabels', {'ROAD_NAME': 'header label', 'DIRECTION': 'header label', 'ZIP': 'header label', });
lyr_Congestedhrsperday_2.set('fieldLabels', {'ROAD_NAME': 'header label', 'DIRECTION': 'header label', 'ZIP': 'header label', 'cong_time': 'header label', });
lyr_Congestedhrsperday_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});