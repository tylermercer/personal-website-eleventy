const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");
const anchor = require('markdown-it-anchor');
const footnote = require('markdown-it-footnote');

const UpgradeHelper = require("@11ty/eleventy-upgrade-help");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(UpgradeHelper);

    eleventyConfig.addLayoutAlias('base', 'layouts/base.njk');
    eleventyConfig.addLayoutAlias('post', 'layouts/post.njk');
    eleventyConfig.addLayoutAlias('page', 'layouts/page.njk');

    eleventyConfig.addFilter("postDate", (date) => {
      return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addFilter('dateIso', date => {
      return DateTime.fromJSDate(date).toISO();
    });

    eleventyConfig.addFilter("numCommas", function(value) {
      return value.toLocaleString()
    });

    let markdown = markdownIt({
      html: true,
      typographer: true
    }).use(anchor,  {
      permalink: anchor.permalink.headerLink({
        safariReaderFix: true
      })
    }).use(footnote);
  
    eleventyConfig.setLibrary("md", markdown);

    eleventyConfig.addPassthroughCopy("./src/fonts/*");

    eleventyConfig.addWatchTarget("./src/sass/");

    eleventyConfig.addFilter("pageScopedStyle", (filePathStem) => {
      var foo = ('/css' + (filePathStem === '/' ? '/index' : filePathStem) + '.css')
      console.log(foo)
      return foo
    });

    return {
      dir: {
        input: "src",
        output: "dist",
      },
    };
  };