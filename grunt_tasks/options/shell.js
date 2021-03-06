/*eslint-env node*/

var algoliaApiKey = require('grunt').file.read('./_algolia_api_key').trim();
module.exports = {
  jekyllDev: {
    command: 'jekyll build \
               --source tmp/jekyll \
               --destination dist/ \
               --config _config.yml \
               --drafts \
               --limit_posts 30'
  },
  jekyllProd: {
    command: 'jekyll build \
               --source tmp/jekyll \
               --destination dist/ \
               --config _config.yml'
  },
  jekyllAlgolia: {
    options: {
      stderr: false
    },
    command: 'ALGOLIA_API_KEY="' + algoliaApiKey + '" \
             jekyll algolia push \
             --source tmp/jekyll \
             --destination dist/ \
             --config _config.yml'
  }
};
