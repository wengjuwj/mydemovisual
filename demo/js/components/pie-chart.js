var roseChart=`<div class="chartbox" id="pieChart" ref="pieChart"></div>`;
Vue.component('pie-chart',{
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
        this.pieChart();
    },
    methods:{
        pieChart(){
            var testData=this.chartData
            var colorList = ['#2AC693','#F66857','#CFE3FF', '#F754F5','#ff8347','#91CC75','#7697ff','#FAC858','#459fc3']
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
                    left: 'left',
                    top: 'top',
                    height:'105%',
                    itemGap: fontSize(0.15),
                    itemWidth: fontSize(0.12),
                    itemHeight: fontSize(0.07),
                    icon: 'rect',
                    data: lengendData,
                    textStyle: {
                        fontSize: fontSize(0.13),
                        color: '#bac1f5',
                        lineHeight :fontSize(0.16),
                    },
                },
                // title: [
                //     {
                //         text: total.value,
                //         left: '65%',
                //         top: '55%',
                //         textAlign: 'center',
                //         textBaseline: 'middle',
                //         textStyle: {
                //             color: '#fff',
                //             fontWeight: 'bold',
                //             fontSize: fontSize(0.2),
                //         }
                //     }, {
                //         text: total.name,
                //         left: '65%',
                //         top: '66%',
                //         textAlign: 'center',
                //         textBaseline: 'middle',
                //         textStyle: {
                //             color: '#6b76ed',
                //             fontWeight: 'normal',
                //             fontSize: fontSize(0.12),
                //         }
                //     }],
                // graphic: [
                //     {
                //         z: 4,
                //         type: 'image',
                //         left: '50%',
                //         top: '5%',
                //         z: -10,
                //         bounding: 'raw',
                //         rotation: 0, //旋转
                //         scale: [0.65, 0.65], //缩放
                //         style: {
                //             image: '../images/pie-bg.png',
                //             opacity: 1,
                //         },
                //     },
                // ],
                series: [
                    {
                        name: '外边框',
                        type: 'pie',
                        clockWise: false,
                        center: ['50%', '55%'],//边框位置
                        radius: ['66%', '66%'],//边框大小
                        label: {
                            show: false,
                        },
                        tooltip: {
                            show: false,
                        },
                        hoverOffset: 0,
                        data: [{
                            value: 1,
                            itemStyle: {
                                normal: {
                                    borderWidth: 2,//设置边框粗细
                                    borderColor: '#36b4d7',//边框颜色
                                    borderType: [1, 3],//第一个数值是虚线的长度，第二个数值是虚线的间距
                                }
                            }
                        }],

                    },
                    {
                        type: 'pie',
                        center: ['50%', '55%'],
                        radius: ['43%', '60%'],
                        clockwise: true,
                        avoidLabelOverlap: true,
                        hoverOffset: 5,
                        itemStyle: {
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
                        // radius: '50%',
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
                                length: fontSize(0.26),
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
                        data:seriesData,
                    }]
            };
            var myChart = echarts.init(this.$refs.pieChart);
            //echarts自适应缩放
            $(window).resize(function () {
                myChart.resize();
            });
            myChart.setOption(option);
        },
    }
})