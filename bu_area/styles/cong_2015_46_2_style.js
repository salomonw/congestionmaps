var size = 0;
var placement = 'point';

var style_cong_2015_46_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("cong_time");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    if (value >= 0.000000 && value <= 1.118881) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(20,255,27,0.966)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.118881 && value <= 2.815851) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(143,253,14,0.966)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.815851 && value <= 5.090909) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(254,240,1,0.966)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5.090909 && value <= 10.797203) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(243,120,0,0.966)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 10.797203 && value <= 16.783217) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(232,0,0,0.966)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
