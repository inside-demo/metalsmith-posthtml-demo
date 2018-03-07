const metalsmith = require('metalsmith')
const posthtml = require('metalsmith-posthtml')

const plugins = [
	require('posthtml-bem')()
]

metalsmith(__dirname)
  .source('fixtures')
  .destination('expect')
  .use(posthtml(plugins))
  .build((err) => {
    if (err) throw err
    console.log('build success')
  })