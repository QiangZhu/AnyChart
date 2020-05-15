goog.provide('anychart.ganttModule.elements.MilestonesElement');
goog.provide('anychart.ganttModule.elements.MilestonesElement.Preview');

//region -- Requirements.
goog.require('anychart.core.settings');
goog.require('anychart.ganttModule.elements.TimelineElement');



//endregion
//region -- Constructor.
/**
 * Base element settings storage and provider.
 * @param {anychart.ganttModule.TimeLine} timeline - Related timeline.
 * @constructor
 * @extends {anychart.ganttModule.elements.TimelineElement}
 */
anychart.ganttModule.elements.MilestonesElement = function(timeline) {
  anychart.ganttModule.elements.MilestonesElement.base(this, 'constructor', timeline);

  /**
   * Preview element.
   * @type {anychart.ganttModule.elements.MilestonesElement.Preview}
   * @private
   */
  this.preview_ = null;

  anychart.core.settings.createDescriptorsMeta(this.descriptorsMeta, [
    ['markerType', 0, anychart.Signal.NEEDS_REDRAW]
  ]);
};
goog.inherits(anychart.ganttModule.elements.MilestonesElement, anychart.ganttModule.elements.TimelineElement);


//endregion
//region -- Optimized props descriptors
/**
 * Simple descriptors.
 * @type {!Object.<anychart.core.settings.PropertyDescriptor>}
 */
anychart.ganttModule.elements.MilestonesElement.DESCRIPTORS = (function() {
  /** @type {!Object.<anychart.core.settings.PropertyDescriptor>} */
  var map = {};

  anychart.core.settings.createDescriptors(map, [
    [anychart.enums.PropertyHandlerType.SINGLE_ARG, 'markerType', anychart.enums.normalizeMarkerType]
  ]);
  return map;
})();
anychart.core.settings.populate(anychart.ganttModule.elements.MilestonesElement, anychart.ganttModule.elements.MilestonesElement.DESCRIPTORS);


//endregion
//region -- Inherited API.
/** @inheritDoc */
anychart.ganttModule.elements.MilestonesElement.prototype.getType = function() {
  return anychart.enums.TLElementTypes.MILESTONES;
};


/** @inheritDoc */
anychart.ganttModule.elements.MilestonesElement.prototype.getPaletteNormalFill = function() {
  return this.getPalette().itemAt(9);
};


/** @inheritDoc */
anychart.ganttModule.elements.MilestonesElement.prototype.getPaletteNormalStroke = function() {
  return anychart.color.darken(this.getPalette().itemAt(9));
};


/** @inheritDoc */
anychart.ganttModule.elements.MilestonesElement.prototype.getPointSettingsResolutionOrder = function() {
  return this.pointSettingsResolution || (this.pointSettingsResolution = [this.getType(), 'milestone', 'actual']);
};


/** @inheritDoc */
anychart.ganttModule.elements.MilestonesElement.prototype.getHeight = function(dataItem, opt_periodIndex) {
  var pointSettings = this.getPointSettings(dataItem, opt_periodIndex);

  if (pointSettings) {
    var height = pointSettings['height'];

    if (goog.isDefAndNotNull(height))
      return height;
  }

  return anychart.ganttModule.elements.MilestonesElement.base(this, 'getHeight', dataItem, opt_periodIndex);
};


//endregion
//region -- Preview element.
/**
 *
 * @param {Object=} opt_value - Config object.
 * @return {anychart.ganttModule.elements.MilestonesElement|anychart.ganttModule.elements.MilestonesElement.Preview} - .
 */
anychart.ganttModule.elements.MilestonesElement.prototype.preview = function(opt_value) {
  if (this.getType() == anychart.enums.TLElementTypes.MILESTONES_PREVIEW)
    return null;
  if (!this.preview_) {
    this.preview_ = new anychart.ganttModule.elements.MilestonesElement.Preview(this.getTimeline());
    this.setupCreated('preview', this.preview_);
    this.preview_.setupStateSettings();
    this.preview_.parent(this);
  }

  if (goog.isDef(opt_value)) {
    this.preview_.setup(opt_value);
    return this;
  }
  return this.preview_;
};


//endregion
//region -- Serialize/Deserialize.
/** @inheritDoc */
anychart.ganttModule.elements.MilestonesElement.prototype.serialize = function() {
  var json = anychart.ganttModule.elements.MilestonesElement.base(this, 'serialize');
  if (this.getType() == anychart.enums.TLElementTypes.MILESTONES)
    json['preview'] = this.preview().serialize();
  return json;
};


/** @inheritDoc */
anychart.ganttModule.elements.MilestonesElement.prototype.setupByJSON = function(config, opt_default) {
  anychart.ganttModule.elements.MilestonesElement.base(this, 'setupByJSON', config, opt_default);
  if (this.getType() == anychart.enums.TLElementTypes.MILESTONES) {
    this.preview().setupInternal(!!opt_default, config['preview']);
  }
};


//endregion
//region -- Disposing.
/**
 * @inheritDoc
 */
anychart.ganttModule.elements.MilestonesElement.prototype.disposeInternal = function() {
  goog.disposeAll(this.preview_);
  anychart.ganttModule.elements.MilestonesElement.base(this, 'disposeInternal');
};



//endregion
//region -- MilestonesElement.Preview Constructor.
/**
 * Milestone preview element settings storage and provider.
 * @param {anychart.ganttModule.TimeLine} timeline - Related timeline.
 * @constructor
 * @extends {anychart.ganttModule.elements.MilestonesElement}
 */
anychart.ganttModule.elements.MilestonesElement.Preview = function(timeline) {
  anychart.ganttModule.elements.MilestonesElement.Preview.base(this, 'constructor', timeline);

  anychart.core.settings.createDescriptorsMeta(this.descriptorsMeta, [
    ['depth', 0, anychart.Signal.NEEDS_REDRAW]
  ]);
};
goog.inherits(anychart.ganttModule.elements.MilestonesElement.Preview, anychart.ganttModule.elements.MilestonesElement);


//endregion
//region -- Optimized props descriptors
/**
 * Simple descriptors.
 * @type {!Object.<anychart.core.settings.PropertyDescriptor>}
 */
anychart.ganttModule.elements.MilestonesElement.Preview.DESCRIPTORS = (function() {
  /** @type {!Object.<anychart.core.settings.PropertyDescriptor>} */
  var map = {};

  anychart.core.settings.createDescriptor(
      map,
      anychart.enums.PropertyHandlerType.SINGLE_ARG,
      'depth',
      anychart.core.settings.numberOrNullNormalizer);

  return map;
})();
anychart.core.settings.populate(anychart.ganttModule.elements.MilestonesElement.Preview, anychart.ganttModule.elements.MilestonesElement.Preview.DESCRIPTORS);


//endregion
//region -- Inherited API.
/** @inheritDoc */
anychart.ganttModule.elements.MilestonesElement.Preview.prototype.getType = function() {
  return anychart.enums.TLElementTypes.MILESTONES_PREVIEW;
};


/** @inheritDoc */
anychart.ganttModule.elements.MilestonesElement.Preview.prototype.getPointSettingsResolutionOrder = function() {
  if (!this.pointSettingsResolution) {
    this.pointSettingsResolution = [this.getType()];
    this.pointSettingsResolution.push.apply(this.pointSettingsResolution, this.parent().getPointSettingsResolutionOrder());
  }
  return this.pointSettingsResolution;
};


//endregion
//region -- Internal API.
/**
 * 
 * @param {(anychart.treeDataModule.Tree.DataItem|anychart.treeDataModule.View.DataItem)} item - Item to search
 *  preview milestones onto.
 * @param {number} row - Item row.
 * @returns {Array.<anychart.ganttModule.TimeLine.Tag>}
 */
anychart.ganttModule.elements.MilestonesElement.Preview.prototype.getSortedTagsByItemAndRow = function(item, row) {
  var depth = /** @type {number} */(this.getOption('depth'));
  var tagsArr = [];
  this.getSortedTags_(depth, tagsArr, item, row);
  return tagsArr;
};


/**
 * Populates tags array with preview milestone tag elements for given row.
 * Modifies tagsArr argument.
 * @param {number} depth - Current depth.
 * @param {Array.<anychart.ganttModule.TimeLine.Tag>} tagsArr - Sorted array of tags.
 * @param {(anychart.treeDataModule.Tree.DataItem|anychart.treeDataModule.View.DataItem)} item - Item to search
 *  preview milestones onto.
 * @param {number} row - Item row.
 * @private
 */
anychart.ganttModule.elements.MilestonesElement.Preview.prototype.getSortedTags_ = function(depth, tagsArr, item, row) {
  var depthMatches = !goog.isDefAndNotNull(depth) || //null or undefined value will display ALL submilestones of parent.
      (depth <= depth);

  if (depthMatches) {
    if (anychart.ganttModule.BaseGrid.isProjectMilestone(item)) {
      var tag = this.getTagByItemAndRow(item, row);
      var label = goog.isDefAndNotNull(tag) ? tag.label : void 0;
      if (goog.isDef(label) && label.enabled()) {
        goog.array.binaryInsert(tagsArr, tag, anychart.ganttModule.elements.TimelineElement.tagsBinaryInsertCallback);
      }
    } else {
      for (var i = 0; i < item.numChildren(); i++) {
        var child = item.getChildAt(i);
        if (goog.isDef(child)) {
          this.getSortedTags_(depth + 1, tagsArr, child, row);
        }
      }
    }
  }
};

//endregion
//region -- Serialization/Deserialization.
/**
 * @inheritDoc
 */
anychart.ganttModule.elements.MilestonesElement.Preview.prototype.setupByJSON = function(config, opt_default) {
  anychart.ganttModule.elements.MilestonesElement.Preview.base(this, 'setupByJSON', config, opt_default);
  anychart.core.settings.deserialize(this, anychart.ganttModule.elements.MilestonesElement.Preview.DESCRIPTORS, config, opt_default);
};


/**
 * @inheritDoc
 */
anychart.ganttModule.elements.MilestonesElement.Preview.prototype.serialize = function() {
  var json = anychart.ganttModule.elements.MilestonesElement.Preview.base(this, 'serialize');
  anychart.core.settings.serialize(this, anychart.ganttModule.elements.MilestonesElement.Preview.DESCRIPTORS, json, void 0, void 0, true);
  return json;
};


//endregion
//region -- Exports.
//exports
(function() {
  var proto = anychart.ganttModule.elements.MilestonesElement.prototype;
  proto['preview'] = proto.preview;

  //real juking.
  proto = anychart.ganttModule.elements.MilestonesElement.Preview.prototype;
  proto['preview'] = undefined;
})();


//endregion

