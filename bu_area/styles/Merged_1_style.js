var size = 0;
var placement = 'point';

var style_Merged_1 = function(feature, resolution){
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
    if (value >= 0.000000 && value <= 0.279720) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(5,236,248,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.279720 && value <= 0.876457) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(13,120,233,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 0.876457 && value <= 1.641026) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(33,38,245,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 1.641026 && value <= 2.592075) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(133,20,247,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 2.592075 && value <= 3.822844) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(233,2,248,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 3.822844 && value <= 5.743590) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(252,0,108,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 5.743590 && value <= 11.002331) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(202,0,17,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 11.002331 && value <= 23.496503) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(99,2,2,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
