goog.provide('anychart.axisMarkers.Line');
goog.require('anychart.core.axisMarkers.Line');



/**
 * @constructor
 * @extends {anychart.core.axisMarkers.Line}
 */
anychart.axisMarkers.Line = function() {
  goog.base(this);
};
goog.inherits(anychart.axisMarkers.Line, anychart.core.axisMarkers.Line);


/**
 * Constructor function.
 * @return {!anychart.axisMarkers.Line}
 */
anychart.axisMarkers.line = function() {
  var res = new anychart.axisMarkers.Line();
  res.setup(anychart.getFullTheme()['standalones']['lineAxisMarker']);
  return res;
};


//exports
goog.exportSymbol('anychart.axisMarkers.line', anychart.axisMarkers.line);
anychart.axisMarkers.Line.prototype['draw'] = anychart.axisMarkers.Line.prototype.draw;
anychart.axisMarkers.Line.prototype['parentBounds'] = anychart.axisMarkers.Line.prototype.parentBounds;
anychart.axisMarkers.Line.prototype['container'] = anychart.axisMarkers.Line.prototype.container;