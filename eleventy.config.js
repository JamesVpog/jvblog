const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css");
    eleventyConfig.addPassthroughCopy("./src/assets")
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addWatchTarget("./src/js");

    return {
        dir : {
            input: 'src',
            includes: '_includes',
            output: '_site',
        },
        templateFormats: [
            "md",
            "njk",
            "html",
            "liquid",
            "11ty.js",
        ],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
    };
}