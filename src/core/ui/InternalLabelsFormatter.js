goog.provide('anychart.core.ui.InternalLabelsFormatter');


/**
 *
 * @param {function(string)=} opt_formatter - .
 * @constructor
 */
anychart.core.ui.InternalLabelsFormatter = function (opt_formatter) {
   this.formatter = opt_formatter;
};


/**
 * Set formatter function.
 *
 * @param {function(string)} formatter - Formatter function.
 */
anychart.core.ui.InternalLabelsFormatter.prototype.set = function (formatter) {
  this.formatter = formatter;
};

/**
 * Applies formatter function to the text and return formatted value.
 *
 * @param {string} text - Initial text value.
 * @return {string} - Formatted text.
 */
anychart.core.ui.InternalLabelsFormatter.prototype.applyFormat = function (text) {
    if (this.formatter) {
        return this.formatter(text);
    }

    return text;
};

anychart.core.ui.InternalLabelsFormatter.formatters = {};

/**
 * Return formatter function that changes text depend on closure values.
 *
 * @param {?number} maxLength - Maximum length of string.
 * @param {string=} opt_paddingRightChars - Characters that will appended to the string if string has more characters
 *   needed.
 *
 * @return {function(string)} - Formatter function.
 */
anychart.core.ui.InternalLabelsFormatter.formatters.getLengthFormatter = function (maxLength, opt_paddingRightChars) {
    opt_paddingRightChars = opt_paddingRightChars || '';

    return function (text) {
        if (goog.isDefAndNotNull(maxLength)) {
            return text.slice(0, maxLength) + (text.length > maxLength ? opt_paddingRightChars : '');
        }

        return text;
    };
};
