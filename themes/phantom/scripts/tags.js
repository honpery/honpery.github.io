const yaml = require('js-yaml');

hexo.extend.tag.register('project', function(args, content) {
  const data = yaml.load(content);

  let html = `
    <div class="project-block">
      <div class="project-block-header">${data.range} （${data.date}）</div>
      <div class="project-block-content">
        <p class="project-block-content-name">${data.name}</p>
        <p class="project-block-content-desc">${data.description}</p>
        <div class="project-block-content-buttons">
          <a href="${data.link}" target="_blank" class="project-block-content-button">查看项目</a>
          <a href="/weekly-project/${data.range}" class="project-block-content-button">白皮书</a>
        </div>
      </div>
    </div>
  `;
  
  return html;
}, {ends: true});