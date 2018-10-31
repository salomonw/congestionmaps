var wms_layers = [];

        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'GoogleMaps_0',
            'type': 'base',
            'opacity': 0.681000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });var format_Merged_1 = new ol.format.GeoJSON();
var features_Merged_1 = format_Merged_1.readFeatures(json_Merged_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Merged_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Merged_1.addFeatures(features_Merged_1);var lyr_Merged_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Merged_1, 
                style: style_Merged_1,
    title: 'Merged<br />\
    <img src="styles/legend/Merged_1_0.png" />  0.00 - 0.28 <br />\
    <img src="styles/legend/Merged_1_1.png" />  0.28 - 0.88 <br />\
    <img src="styles/legend/Merged_1_2.png" />  0.88 - 1.64 <br />\
    <img src="styles/legend/Merged_1_3.png" />  1.64 - 2.59 <br />\
    <img src="styles/legend/Merged_1_4.png" />  2.59 - 3.82 <br />\
    <img src="styles/legend/Merged_1_5.png" />  3.82 - 5.74 <br />\
    <img src="styles/legend/Merged_1_6.png" />  5.74 - 11.00 <br />\
    <img src="styles/legend/Merged_1_7.png" />  11.00 - 23.50 <br />'
        });

lyr_GoogleMaps_0.setVisible(true);lyr_Merged_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Merged_1];
lyr_Merged_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TMC': 'TMC', 'ROAD_NUMBE': 'ROAD_NUMBE', 'ROAD_NAME': 'ROAD_NAME', 'DIRECTION': 'DIRECTION', 'SEGMENT_BE': 'SEGMENT_BE', 'SEGMENT_EN': 'SEGMENT_EN', 'COUNTY': 'COUNTY', 'ZIP': 'ZIP', 'SORT_KEY': 'SORT_KEY', 'XWAY': 'XWAY', 'ABS_DIRECT': 'ABS_DIRECT', 'Shape_Leng': 'Shape_Leng', 'cong_time': 'cong_time', 'layer': 'layer', 'path': 'path', });
lyr_Merged_1.set('fieldImages', {'OBJECTID': 'Hidden', 'TMC': 'Hidden', 'ROAD_NUMBE': 'Hidden', 'ROAD_NAME': 'TextEdit', 'DIRECTION': 'TextEdit', 'SEGMENT_BE': 'Hidden', 'SEGMENT_EN': 'Hidden', 'COUNTY': 'Hidden', 'ZIP': 'TextEdit', 'SORT_KEY': 'Hidden', 'XWAY': 'Hidden', 'ABS_DIRECT': 'Hidden', 'Shape_Leng': 'Hidden', 'cong_time': 'TextEdit', 'layer': 'Hidden', 'path': 'Hidden', });
lyr_Merged_1.set('fieldLabels', {'ROAD_NAME': 'inline label', 'DIRECTION': 'inline label', 'ZIP': 'inline label', 'cong_time': 'inline label', });
lyr_Merged_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});