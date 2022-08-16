var mixins={
    methods: {
        // 本月工单分布占比
        pieRoseChart(){
            var testData={
                "data": [
                    {
                        "name": "住院楼",
                        "num": "31.2587",
                        "proportion": "77.21"
                    },
                    {
                        "name": "医技楼",
                        "num": "27.6939",
                        "proportion": "8.09"
                    },
                    {
                        "name": "门诊楼",
                        "num": "33.5782",
                        "proportion": "4.41"
                    },
                    {
                        "name": "综合楼",
                        "num": "30.1816",
                        "proportion": "3.68"
                    },
                ]
            }
            var colorList = ['#2AC693','#F66857','#CFE3FF', '#F754F5','#ff8347','#91CC75','#7697ff','#FAC858','#459fc3']
            let pageSize=0;
            let scrollIndex=1;
            // 动态设置lend数据
            let lengendData=[];
            let lengendCount=[];
            let seriesData=[];
            for(let i=0;i<testData.data.length;i++){
                let name=testData.data[i].name
                lengendData.push(name);
                lengendCount.push(testData.data[i].num);
                seriesData.push(
                    {
                        name:name,
                        value:testData.data[i].num
                    }
                )
            }
            var option = {
                tooltip: {
                trigger: 'item',
                textStyle: { // 提示框浮层的文本样式。
                    fontSize: this.fontSize(0.12),
                },
                },
                legend: {
                    type: 'scroll',
                    orient: 'vertical',
                    right: '0',
                    top: 'middle',
                    height:'105%',
                    itemGap: this.fontSize(0.15),
                    itemWidth: this.fontSize(0.12),
                    itemHeight: this.fontSize(0.07),
                    icon: 'rect',
                    data: lengendData,
                    textStyle: {
                        fontSize: this.fontSize(0.13),
                        color: '#bac1f5',
                        lineHeight :this.fontSize(0.16),
                    },
                formatter: function (name) {
                    var index = 0;
                    var clientlabels = lengendData;
                    var clientcounts = lengendCount;
                    clientlabels.forEach(function (value, i) {
                        if (value == name) {
                            index = i;
                        }
                    });
                    // return name +'  ' + clientcounts[index] +'亿元';
                    return name;
                },
                pageFormatter:function(current){
                    pageSize=current.total
                    console.log(pageSize,'pageSize')
                    return ''
                },
                pageIconSize:0
                },
                series: [
                {
                    type: 'pie',
                    center: ['35%', '55%'],
                    radius: ['40%', '70%'],
                    roseType: 'area',
                    clockwise: true,
                    avoidLabelOverlap: true,
                    hoverOffset: 5,
                    itemStyle: {
                        borderRadius: 5,
                        normal: {
                            color: function (params) {
                                if(colorList[params.dataIndex]){
                                    return colorList[params.dataIndex]
                                }else{
                                    return colorList[params.dataIndex % colorList.length]
                                }
                                
                            }
                        }
                    },
                    startAngle:0,
                    label: {
                        show: true,
                        position: 'outside',
                        length:2,
                        // formatter: '{a|{b}:{d}%}\n{hr|}',
                        // rich: {
                        //     hr: {
                        //         backgroundColor: 't',
                        //         borderRadius: 3,
                        //         width: 3,
                        //         height: 3,
                        //         padding: [3, 3, 0, -12]
                        //     },
                        //     a: {
                        //         padding: [-30, 8, -20, 8],
                        //         fontSize: fontSize(0.16),
                        //     }
                        // },
                        formatter: '{d}%',
                        fontSize: this.fontSize(0.12)
                    },
                    minAngle:20,
                    labelLine: {
                        normal: {
                            length: this.fontSize(0.08),
                            length2: this.fontSize(0.1),
                            lineStyle: {
                                width: 1
                            }
                        },
                        maxSurfaceAngle: 90,
                        minTurnAngle: 90,
                    
                    },
                    labelLayout:{
                        moveOverlap:"shiftX",
                        verticalAlign:'middle'
                    },
                    data: seriesData
                }
                ]
            };
            var myChart = echarts.init(this.$refs.pieRoseChart);
            //echarts自适应缩放
            $(window).resize(function () {
                myChart.resize();
            });
            myChart.setOption(option);
        },
        // 本月排单状态统计
        setLineChart(){
            let _this=this;
            let colors=['#1293FD','#E6CE30','#E6307B','#07D870','#44D5FF'];
            let areaStyle=[
                {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(18, 147, 253, 1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(18, 147, 253, 0)'
                    }
                    ], false),
                },
                {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(230, 206, 48, 1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(230, 206, 48, 0)'
                    }
                    ], false),
                },
                {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(230, 48, 123, 1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(230, 48, 123, 0)'
                    }
                    ], false),
                },
                {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(7, 216, 112, 1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(7, 216, 112, 0)'
                    }
                    ], false),
                },
                {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(68, 213, 255, 1)'
                    },
                    {
                        offset: 1,
                        color: 'rgba(68, 213, 255, 0)'
                    }
                    ], false),
                }
            ];
            // 动态设置lengendData
            let testData={
                    xAxisData:['一','二','三','四'],
                    yAxisData:[
                        {
                            name:"总报修",
                            data:[300,100,400,200]
                        },
                        {
                            name:"未处理",
                            data:[100,400,200,300]
                        },
                        {
                            name:"进行中",
                            data:[50,150,20,200]
                        },
                        {
                            name:"已处理",
                            data:[200,150,20,400]
                        },
                        {
                            name:"延缓报修",
                            data:[150,300,100,350]
                        }
                    ]
                }
            let lendData=[];
            let seriesData=[];
           for(let i=0;i< testData.yAxisData.length;i++){
                let name=testData.yAxisData[i].name
                let item={
                        name: name,
                        textStyle: {
                            color: colors[i],
                        }
                    }
                    lendData.push(item);
                let seriesItem={
                        name: name,
                        type: 'line',
                        symbol: 'none',
                        areaStyle: {
                            normal: areaStyle[i]
                        },
                        smooth: true,
                        data: testData.yAxisData[i].data
                    }
                    seriesData.push(seriesItem)
           }
            var option = {
                tooltip: {
                    trigger: 'axis',
                    textStyle: {
                        fontSize: this.fontSize(0.14),
                    }
                },
                color:colors,
                legend: {
                    type:"scroll",
                    right: 0,
                    top: 0,
                    itemWidth: this.fontSize(0.18),
                    itemHeight: this.fontSize(0.12),
                    itemGap: this.fontSize(0.16),
                    textStyle: {
                        fontSize: this.fontSize(0.12),
                        color: '#51d7ff'
                    },
                    data: lendData,
                },
                grid: {
                    top: '28%',
                    left: '2%',
                    right: '4%',
                    bottom: 0,
                    containLabel: true
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: false,
                    data: testData.xAxisData,
                    axisLine: {
                        lineStyle: {
                            color: '#195fc5',
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        color: '#d5f2fd',
                        margin: 15,
                        rotate: 10,
                        fontSize: this.fontSize(0.12),
                        formatter:function(value){
                            return '第'+value +'周'
                        }
                    },
                    axisTick: {
                        show: false
                    }
                }],
                // dataZoom: [//滑动条
                //     {
                //         xAxisIndex: 0,//这里是从X轴的0刻度开始
                //         show: false,//是否显示滑动条，不影响使用
                //         type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                //         startValue: 0, // 从头开始。
                //         endValue: 7  // 一次性展示6个。
                //     }
                // ],
                yAxis: [
                    {
                        type: 'value',
                        nameGap: 10,
                        min: 0,
                        // max: 250,
                        // interval: 20000,
                        axisLabel: {
                            color: '#d5f2fd',
                            fontSize: this.fontSize(0.14),
                        },
                        splitLine: {
                            show: true,
                            interval: 'auto',
                            lineStyle: {
                                color: ['#1438e0'],
                            }
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        }
                    }
                ],
                series: seriesData
            };
            var myChart = echarts.init(_this.$refs.lineChart);
            //echarts自适应缩放
            $(window).resize(function () {
                myChart.resize();
            });
            myChart.setOption(option);
            // 每次向后滚动一个，最后一个从头开始。
            if (option.dataZoom[0].endValue == _this.finsFour.data.month.length) {
                option.dataZoom[0].endValue = 7;
                option.dataZoom[0].startValue = 0;
                // myChart.setOption(option);
            }
            else {
                option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
                option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
                // myChart.setOption(option);
            }
           

        },
        // 本月工单问题等级分布
        setBarChart(){
            let testData={
                xAxisData:['门诊楼','综合楼','住院楼','医技楼'],
                yAxisData:[
                    {
                        name:"一级",
                        data:[300,100,400,200]
                    },
                    {
                        name:"二级",
                        data:[100,400,200,300]
                    },
                    {
                        name:"三级",
                        data:[50,150,20,200]
                    },
                ]
            }
            var option = {
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                  }
                },
                color: ['#899EF7', '#67c23a', '#e6a23c', '#f56c6c', '#899EF7', '#899EF7', '#899EF7', '#899EF7', '#899EF7'],
                legend: {},
                grid: {
                  left: '3%',
                  right: '4%',
                  bottom: '3%',
                  containLabel: true
                },
                xAxis: {
                  type: 'category',
                  axisLabel: {
                    interval: 0, // 全部显示x轴
                    rotate: 30
                  },
                  data: xAxisData
                },
                yAxis: {
                  type: 'value',
                  axisLabel: {
                    inside: false
                  },
                  axisLine: {
                    show: false
        
                  },
                  splitLine: {
                    show: true,
                    lineStyle: {
                      type: 'dashed'
                    }
                  }
                },
                series: [
                  {
                    name: '项目工时',
                    type: 'bar',
                    stack: 'total',
                    label: {
                      show: true
                    },
                    barWidth: 40,
                    emphasis: {
                      focus: 'series'
                    },
                    data: d.ttwh
                  },
                  {
                    name: '管理工时',
                    type: 'bar',
                    stack: 'total',
                    label: {
                      show: true
                    },
                    barWidth: 40,
                    emphasis: {
                      focus: 'series'
                    },
                    data: d.mtwh
                  },
                  {
                    name: '市场工时',
                    type: 'bar',
                    stack: 'total',
                    label: {
                      show: true
                    },
                    barWidth: 40,
                    emphasis: {
                      focus: 'series'
                    },
                    data: d.matwh
                  },
                  {
                    name: '缺失工时',
                    type: 'bar',
                    stack: 'total',
                    label: {
                      show: true
                    },
                    barWidth: 40,
                    emphasis: {
                      focus: 'series'
                    },
                    data: d.dtwh
                  },
                  {
                    name: '应填报工时',
                    type: 'line',
                    itemStyle: {
                      color: '#409EFF'
                    },
                    lineStyle: {
                      type: 'dotted',
                      color: '#409EFF',
                      width: 4
        
                    },
                    symbol: 'circle',
                    symbolSize: 10,
                    tooltip: {
                      valueFormatter: function (value) {
                        return value + ' °C';
                      }
                    },
                    data: d.ytbgs
                  }
                ]
              };
            var myChart = echarts.init(this.$refs.barChart);
            //echarts自适应缩放
            $(window).resize(function () {
                myChart.resize();
            });
            myChart.setOption(option);
        }
    }
}