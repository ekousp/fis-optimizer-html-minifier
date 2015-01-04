/*
 * fis
 * http://fis.baidu.com/
 */

'use strict';

var minify = require('html-minifier').minify;

module.exports = function(content, file, conf){
    if (file.extras.minifyHTML) {
        var options = fis.util.merge(module.exports.defaultOptions, conf);
        return minify(content, options);
    }
};

module.exports.defaultOptions = {
    removeComments:                true,
    collapseWhitespace:            true,
    useShortDoctype:               true,
    removeScriptTypeAttributes:    true,
    removeStyleLinkTypeAttributes: true
};
