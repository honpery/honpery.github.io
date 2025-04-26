const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const templatePath = path.join(__dirname, 'project.html');
const template = fs.readFileSync(templatePath, 'utf8');

hexo.extend.tag.register('project', function(args, content) {
  const data = yaml.load(content);

  let html = _.template(template)({
    data: data
  });
  
  return html;
}, {ends: true});
