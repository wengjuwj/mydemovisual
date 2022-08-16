var lineChart=`<div class="chartbox" id="lineChart" ref="lineChart"></div>`;
Vue.component('line-chart',{
    template:lineChart,
    props:{
        // 图表数据
        chartData:{
            type:Object,
            default:{
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
        }
    },
    data(){
        return{}
    },
    mounted(){
        this.setLineChart();
    },
    methods:{
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
            let testData=this.chartData;
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
                        fontSize: fontSize(0.14),
                    }
                },
                color:colors,
                legend: {
                    type:"scroll",
                    right: 0,
                    top: 0,
                    itemWidth: fontSize(0.18),
                    itemHeight: fontSize(0.12),
                    itemGap: fontSize(0.16),
                    textStyle: {
                        fontSize: fontSize(0.12),
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
                        fontSize: fontSize(0.12),
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
                            fontSize: fontSize(0.14),
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
            // // 每次向后滚动一个，最后一个从头开始。
            // if (option.dataZoom[0].endValue == _this.finsFour.data.month.length) {
            //     option.dataZoom[0].endValue = 7;
            //     option.dataZoom[0].startValue = 0;
            //     // myChart.setOption(option);
            // }
            // else {
            //     option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
            //     option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
            //     // myChart.setOption(option);
            // }
           

        },
    }
})