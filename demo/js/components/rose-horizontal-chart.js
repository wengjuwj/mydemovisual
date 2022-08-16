var roseChart=`<div class="chartbox" id="roseHorizontalChart" ref="roseHorizontalChart"></div>`;
Vue.component('rose-horizontal-chart',{
    template:roseChart,
    props:{
        chartData:{
            type:Object,
            default:()=>{
                return {
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
            }
        }
    },
    data(){
        return{}
    },
    mounted(){
        this.pieRoseChart();
    },
    methods:{
        pieRoseChart(){
            var testData=this.chartData
            var colorList = ['#472AFA','#FB3878','#FFBF24', '#EF924E','#B03EC8','#91CC75','#7697ff','#FAC858','#459fc3']
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
                    fontSize: fontSize(0.12),
                },
                },
                legend: {
                    type: 'scroll',
                    orient: 'horizontal',
                    top: '0',
                    // height:'105%',
                    itemGap: fontSize(0.15),
                    itemWidth: fontSize(0.12),
                    itemHeight: fontSize(0.07),
                    icon: 'rect',
                    data: lengendData,
                    textStyle: {
                        fontSize: fontSize(0.13),
                        color: '#bac1f5',
                    },
                },
                series: [
                {
                    type: 'pie',
                    center: ['50%', '55%'],
                    radius: ['20%', '70%'],
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
                        fontSize: fontSize(0.12)
                    },
                    minAngle:20,
                    labelLine: {
                        normal: {
                            length: fontSize(0.08),
                            length2: fontSize(0.1),
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
            var myChart = echarts.init(this.$refs.roseHorizontalChart);
            //echarts自适应缩放
            $(window).resize(function () {
                myChart.resize();
            });
            myChart.setOption(option);
        },
    }
})