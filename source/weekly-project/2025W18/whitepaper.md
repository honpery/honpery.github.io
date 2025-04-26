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





