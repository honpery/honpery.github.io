---
title: WP 2025W18：逛馆
layout: weekly-project
---

## 缘起

我自己是非常喜欢逛博物馆的，到一个新城市去旅行会优先去看当地的省/市博物馆，会较为全面的了解当地的历史、人文、地理、风俗习惯等。

但是目前个人体感上发现几个问题：

1. 找博物馆的过程，基本依赖于搜索、地图等，比较单点没有太个性化的体验，花费很多时间去判断是否值得去。
2. 逛后没有太好的记录方式，没有办法可视化自己的成长。
3. 讲解都花钱而且都是预制内容，很难和我的知识程度契合，之前找过人工的专业陪讲，体验上非常好，可以针对自己的认知进行讲解。

由此诞生了「逛馆」这个 app 的 idea，主要解决博物馆相关场景下的导览、记录、分享、讲解等需求。

## 一、 市场分析

### 1.1 市场规模

{% chart 100% 400 %}
{
  type: 'line',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: '博物馆数量',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        fill: true,
        data: [4692, 4873, 5136, 5354, 5535, 5788, 6183, 6535, 6833],
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        tension: 0.4,
        cubicInterpolationMode: 'monotone',
        datalabels: {
          align: 'top',
          anchor: 'end',
          font: { weight: 'bold' },
          formatter: function(value) {
            return value;
          }
        },
      },
    ],
 },
 options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '国内博物馆数量',
        align: 'center',
        font: { size: 16, weight: 'bold' },
        padding: { top: 0, bottom: 30 },
      },
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: '单位：个',
          align: 'end',
          font: { size: 12 }
        }
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      axis: 'x',
      intersect: false,
    },
    tooltip: {
      enabled: true,
      mode: 'nearest',
      axis: 'x',
      intersect: false,
      displayColors: true,
      callbacks: {
        title: function(tooltipItems) {
          return tooltipItems[0].label;
        },
        label: function(context) {
          return context.dataset.label + ': ' + context.parsed.y;
        }
      }
    },
  }
}
{% endchart %}

截至2023年底，中国备案博物馆总数已超 **6800家**，并持续呈现高速增长态势，平均每日新增博物馆数量可观，尤其 **非国有博物馆** 成为重要的增长力量，占比显著提升。这一庞大且持续扩容的市场不仅提供了极其广阔的 **潜在用户基础和内容合作资源**，也凸显了在海量信息面前，用户对 **高效信息整合、个性化深度导览体验** 的迫切需求。然而，这也意味着App在 **内容获取、版权合作、以及应对区域分布不均** 方面将面临挑战，需制定针对性的策略。总而言之，国内博物馆市场的现状和趋势为AI导览应用创造了巨大的 **市场机遇**，但也要求产品具备强大的 **内容整合能力和技术优势** 来抓住机会。

{% chart 100% 400 %}
{
  type: 'line',
  data: {
    labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: [
      {
        label: '接待访客数量',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgb(54, 162, 235)',
        fill: true,
        data: [8.5, 9, 9.9, 11.26, 12.27, 5.4, 7.79, 5.78, 12.9],
        pointRadius: 5,
        pointHoverRadius: 7,
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        tension: 0.4,
        cubicInterpolationMode: 'monotone',
        datalabels: {
          align: 'top',
          anchor: 'end',
          font: { weight: 'bold' },
          formatter: function(value) {
            return value + "亿人次";
          }
        }
      }
    ],
 },
 options: {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '国内博物馆接待访客数量',
        align: 'center',
        font: { size: 16, weight: 'bold' },
        padding: { top: 30, bottom: 30 },
      },
      legend: { display: false },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: '单位：亿人次',
          align: 'end',
          font: { size: 12 }
        }
      }
    },
    interaction: { mode: 'nearest', axis: 'x', intersect: false },
    hover: { mode: 'nearest', axis: 'x', intersect: false },
    tooltip: {
      enabled: true,
      mode: 'nearest',
      axis: 'x',
      intersect: false,
      displayColors: true,
      callbacks: {
        title: function(tooltipItems) {
          return tooltipItems[0].label;
        },
        label: function(context) {
          return context.dataset.label + ': ' + context.parsed.y.toFixed(2) + '亿人次';
        }
      }
    },
  }
}
{% endchart %}

中国博物馆接待访客数量近年来呈现 **先扬、后抑、再强劲反弹并持续增长** 的总体走势。在COVID-19疫情爆发前，受益于博物馆数量的快速增加、免费开放政策的普及以及公众文化需求的日益旺盛，全国博物馆年接待观众人次 **持续多年高速增长**，在2019年达到约12亿人次的峰值。疫情期间（主要为2020-2022年），受出行限制和场馆管控影响，访客数量 **一度锐减**。然而，随着2023年社会经济活动的全面恢复，博物馆迅速成为文化消费和旅游的热点，访客数量迎来 **爆发式“V”型反弹**，根据国家文物局数据，2023年全国博物馆接待观众达到创纪录的 **12.9亿人次**，超越了疫情前水平。展望未来（基于当前2025年初的视角），预计随着文化旅游热度的持续和博物馆服务能力的提升，访客数量有望在 **高位基础上继续保持稳定或温和增长**。这一庞大且恢复强劲增长态势的访客群体，为旨在提升参观效率和体验的数字化应用提供了 **坚实的市场需求基础和巨大的发展潜力**。


### 1.2 政策导向

中国政府在政策层面对博物馆事业展现出 **持续、积极且不断深化** 的支持态度。关键政策导向包括：
- **大力推动数量增长与质量提升：** 从早期侧重数量扩张（如“县县有馆”），到“十四五”规划等强调高质量发展，提升管理运营水平和公共服务效能。
- **强化公共服务与教育职能：** 以“免费开放”政策为代表，极大促进了公众参观热情；同时鼓励博物馆拓展教育功能，如支持“研学旅行”等。
- **明确鼓励数字化转型：** “国家文化数字化战略”等顶层设计明确提出要应用大数据、云计算、人工智能（AI）等技术赋能文化机构，推动“智慧博物馆”建设，提升藏品管理、研究、展示和观众互动体验。
- **支持与规范社会力量办馆：** 出台政策鼓励非国有博物馆发展，丰富博物馆体系，同时也加强对其设立、运营的规范管理。
- **强调文物保护与合理利用：** 在鼓励开放利用的同时，始终将文物安全和科学保护放在首位，相关法律法规是所有活动的基础。


### 1.3 小结

**从宏观层面可以察觉到，博物馆行业整体是稳步上升的，市场规模和增长潜力巨大。在数字能力的冲击下存在着巨大的变革机会，博物馆行业将迎来新的发展机遇。**

## 二、 用户分析

### 2.1 用户分布

#### 2.1.1 用户年龄分布

{% chart 100% 400 %}
{
  type: 'pie',
  data: {
    labels: ['0-18周岁', '19-35周岁', '36-59周岁', '60周岁以上'],
    datasets: [{
      data: [20.15, 42.29, 30.48, 7.08],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(255, 206, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 10
      }
    },
    plugins: {
      title: {
        display: true,
        text: '2024年国家博物馆观众年龄分布',
        font: { size: 16, weight: 'bold' },
        align: 'center',
        padding: { top: 10, bottom: 20 }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.raw + '%';
          }
        }
      },
      legend: {
        display: true,
        position: 'bottom',
        align: 'center',
      },
      datalabels: {
        display: true,
        color: '#fff',
        font: { weight: 'bold', size: 14 },
        formatter: function(value, context) {
          return context.chart.data.labels[context.dataIndex] + '\n' + value + '%';
        },
        anchor: 'center',
        align: 'center',
        textAlign: 'center'
      }
    }
  }
}
{% endchart %}

根据国家博物馆2024年的访客数据，博物馆观众呈现出明显的**年轻化趋势**。在全年接待的近700万观众中，**19-35周岁的青年群体**以42.29%的比例成为最主要的参观人群，与**0-18周岁的未成年人**(20.15%)一起，使35岁以下观众占比超过60%。**中年群体**(36-59周岁)也保持着30.48%的稳定占比，而**老年群体**(60周岁以上)则相对较少，仅占7.08%。这一数据表明，博物馆已经成功吸引了大量年轻受众，这些数字化原住民对博物馆服务的数字化转型有着天然的接受度和更高的期望。同时，国家博物馆严格执行"限量、预约、错峰"原则，日均接待观众2.2万人次，这种大流量场景下的观众管理和体验优化需求尤为突出。

#### 2.1.2 用户性别分布

{% chart 100% 400 %}
{
  type: 'pie',
  data: {
    labels: ['女性', '男性'],
    datasets: [{
      data: [59.07, 40.93],
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(54, 162, 235, 0.7)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 10
      }
    },
    plugins: {
      title: {
        display: true,
        text: '博物馆参观人群性别分布（预估）',
        font: { size: 16, weight: 'bold' },
        align: 'center',
        padding: { top: 10, bottom: 20 }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.raw + '%';
          }
        }
      },
      legend: {
        display: true,
        position: 'bottom',
        align: 'center',
      },
      datalabels: {
        display: true,
        color: '#fff',
        font: { weight: 'bold', size: 14 },
        formatter: function(value, context) {
          return context.chart.data.labels[context.dataIndex] + '\n' + value + '%';
        },
        anchor: 'center',
        align: 'center',
        textAlign: 'center'
      }
    }
  }
}
{% endchart %}

博物馆观众的性别分布呈现出**女性略占优势**的特点。根据国家博物馆2024年的预约数据显示，**女性观众**占比达到**59.07%**，而**男性观众**则为**40.93%**。这一趋势在其他博物馆的调研中也得到印证，如天宇博物馆2023年的调研参与者中女性比例高达67.5%（虽然该数据可能受参与意愿影响）。总体而言，博物馆女性观众比例通常在55%-60%之间，这一现象反映了女性群体对文化艺术活动可能具有更高的参与热情和兴趣。这种性别分布特征对博物馆展览策划、服务设计以及数字化产品开发都提供了重要的参考依据。

#### 2.1.3 用户学历分布

{% chart 100% 400 %}
{
  type: 'pie',
  data: {
    labels: ['本科', '硕士及以上', '大专', '高中及以下'],
    datasets: [{
      data: [55, 20, 15, 10],
      backgroundColor: [
        '#4e73df',
        '#1cc88a',
        '#36b9cc',
        '#f6c23e'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 10,
        bottom: 10
      }
    },
    plugins: {
      title: {
        display: true,
        text: '博物馆参观人群学历分布（预估）',
        font: { size: 16, weight: 'bold' },
        align: 'center',
        padding: { top: 10, bottom: 20 }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.label + ': ' + context.raw + '%';
          }
        }
      },
      legend: {
        display: true,
        position: 'bottom',
        align: 'center',
      },
      datalabels: {
        display: true,
        color: '#fff',
        font: { weight: 'bold', size: 14 },
        formatter: function(value, context) {
          return context.chart.data.labels[context.dataIndex] + '\n' + value + '%';
        },
        anchor: 'center',
        align: 'center',
        textAlign: 'center'
      }
    }
  }
}
{% endchart %}

博物馆观众的学历分布普遍呈现出 **较高** 的特点。以中国丝绸博物馆2021年的观众调研数据为例，**大专及本科学历** 的观众占比高达 **68.14%**，而拥有 **硕士及以上学历** 的观众也达到了 **15.83%**，两者合计占比 **超过80%**。虽然此数据来源于单一博物馆且有一定时效性，可能无法完全代表全国所有类型博物馆的普遍情况，但它清晰地 **指示了大型或专业性博物馆吸引高学历人群的显著趋势**。总体而言，**接受过高等教育** 是当前中国博物馆核心参观群体的一个重要特征。这种 **“高知化”** 的观众构成，要求博物馆在内容策划、讲解深度、教育活动以及AI助手等数字化服务的设计上，需要 **充分考虑其信息处理能力和求知需求**，提供兼具专业性、知识性和深度的内容与体验。

#### 2.1.4 用户参观动机

博物馆参观者的动机呈现出**多元化**的特点：
  - **主要动机：** 包括学习知识/兴趣爱好、休闲娱乐/体验、亲子教育、社交需求（打卡/陪伴）、观看特定展览等。
  - **学习与体验并重：** “求知欲”和“寻求独特体验/放松”通常是两大核心驱动力。


#### 2.1.5 技术应用习惯

- **高智能手机普及率：** 这是中国互联网用户的普遍特征。
- **习惯线上服务：** 在线预订（票务、行程）接受度高。
- **对新技术的兴趣：** 对沉浸式体验（如AR/VR）、AI等有较高认知度和尝试意愿 (如85.5%游客体验过沉浸式活动)。但对现有导览工具（尤其传统或体验不佳的数字工具）的使用率可能不高或评价不高。

#### 2.1.6 小结

中国博物馆的核心用户群体呈现 **年轻化、高学历、女性偏多** 的特点。根据博物馆的级别和位置，**本地居民和外来游客** 都可能是重要组成部分。用户的参观动机多元，普遍对 **数字化、智能化** 的体验方式持开放态度，但对工具的 **实用性、易用性和内容质量** 有较高要求。

### 2.2 用户需求

#### 2.2.1 信息获取与学习需求

这是最核心的需求之一，用户希望通过App更方便、深入地了解展品和文化。
* **基础信息需求:** 快速了解展品名称、年代、材质、基本背景介绍。（普遍需求）
* **深度内容需求:** 获取展品背后的故事、历史背景、艺术价值、作者生平、相关知识链接、学术观点等。（满足“年轻探索者”、“深度学习者”）
* **趣味化/定制化内容需求:** 提供适合儿童理解的语言和互动形式；根据用户兴趣（如偏爱某个朝代、某类艺术）推送相关内容。（满足“家庭游客”、“年轻探索者”）
* **多媒体信息需求:** 结合文字、高清图片、音频讲解（多种风格可选，如标准、生动）、短视频、甚至3D模型或AR复原。（满足不同用户的偏好）
* **实用信息需求:** 博物馆开放时间、票务信息、特展预告、活动安排、设施分布（洗手间、餐厅、商店、母婴室）、无障碍设施信息。（普遍需求）
* **语言支持需求:** 提供多语言界面和内容翻译，或至少对专业术语提供解释。（满足“外国游客”及国内用户对生僻知识点的理解）

#### 2.2.2 导航与导览需求

在复杂的博物馆空间内高效移动是普遍痛点。
* **精准室内定位与地图:** 提供清晰、准确的室内地图和实时位置。（普遍需求）
* **路线规划与引导:** 规划到特定展厅/展品/设施的最优路径。（普遍需求）
* **主题路线推荐:** 提供官方或用户推荐的经典路线、快速游览路线、家庭路线、专业路线等。（满足各类用户，尤其“观光游客”、“家庭游客”）
* **个性化路线生成:** 根据用户选择的兴趣点和预设时长，智能生成定制化参观路线。（满足“年轻探索者”、“深度学习者”）
* **位置感知服务:** 当用户靠近某个展品或区域时，App能自动弹出相关信息或提示。（提升体验）

#### 2.2.3 互动与参与需求

提升参观的趣味性和参与感，变被动观看为主动探索。
* **智能问答(AI Q&A):** 允许用户通过文字或语音就看到的展品、相关历史文化知识提问，AI能提供准确、自然的回答。（核心AI功能，普遍需求）
* **展品识别:** 通过手机摄像头扫描展品（或其标签/二维码），快速识别并获取信息。（提升便捷性）
* **互动体验:** 设计与展览内容相关的知识问答、小游戏、成就收集（打卡/勋章）、AR互动（如文物复原、虚拟合影）等。（重点吸引“家庭游客”、“年轻探索者”）
* **记录与分享:** 提供收藏展品、记录笔记、一键生成带有图文的参观总结或分享至社交媒体的功能。（满足“深度学习者”、“年轻探索者”）

#### 2.2.4 便捷性与效率需求

让参观过程更顺畅、省心。
* **行前规划:** App内提供展览预览、开放信息查询、制定参观计划、甚至预约购票功能。（普遍需求）
* **票务整合:** 支持购买电子门票或导入已有门票，扫码入园。（提升便捷性）
* **离线功能:** 支持下载地图和核心内容，在网络信号不佳的区域也能使用。（普遍需求）
* **时间管理:** 估算路线时长，提供参观进度提醒，闭馆提醒。（满足时间敏感用户）

### 2.3 小结

**在产品定位上要尽可能年轻化，同时提供有一定深度的高质量内容，对于新业态要足够重视，同时提供社交化、个性化、趣味化的玩法。**


## 三、 产品设计

### 3.1 产品愿景

**打造一个以博物馆为核心，集展览、教育、文化、科技于一体的数字化平台，为用户提供全方位的文化体验。**

#### 3.1.1 目标用户

#### 3.1.2 产品核心功能

#### 3.1.3 产品差异化

#### 3.1.4 小结



