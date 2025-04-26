const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const templatePath = path.join(__dirname, 'chart.html');
const template = fs.readFileSync(templatePath, 'utf8');

hexo.extend.injector.register('head_end', '<script src="https://cdn.bootcdn.net/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"></script>');

hexo.extend.tag.register('chart', function(args, content) {
  let chartConfig;
  try {
    chartConfig = content.trim();
  } catch (err) {
    console.error('Error parsing chart configuration:', err);
    return '<p>Error rendering chart: Invalid configuration</p>';
  }
  
  const html = _.template(template)({
    width: args[0] || '100%',
    height: args[1] || 300,
    chartId: 'chart-' + Math.random().toString(36).substring(2, 10),
    chartConfig: chartConfig
  });
  
  return html;
}, {ends: true});

