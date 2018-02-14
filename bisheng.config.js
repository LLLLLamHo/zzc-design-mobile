const path = require('path');
module.exports = {
  port: 9001,
  output: './page',
  source: {
    components: './components',
    docs: './docs',
    changelog: [
      'CHANGELOG.zh-CN.md',
      'CHANGELOG.en-US.md',
    ],
  },
  theme: './theme',
  htmlTemplate: './theme/static/template.html',
  port: 9001,
  root: './'
};