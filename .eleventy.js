module.exports = function(eleventyConfig) {

  // // 💡 baseurl global verfügbar machen
  // eleventyConfig.addGlobalData("global", require("./_data/global.json"))

  eleventyConfig.addPassthroughCopy("src/static/style.css")
  eleventyConfig.addPassthroughCopy("src/static/script.js")
  eleventyConfig.addPassthroughCopy("src/static/img")
  eleventyConfig.addPassthroughCopy("src/static/svg")
  eleventyConfig.addPassthroughCopy("src/sitemap.xml")
  eleventyConfig.addPassthroughCopy("src/robots.txt")


  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
}
