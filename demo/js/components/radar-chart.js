var radarChart=`<div class="chartbox" id="radarChart" ref="radarChart"></div>`;
Vue.component('radar-chart',{
    template:radarChart,
    props:{
        chartData:{
            type:Object,
            default:{
                
            }
        }
    },
    data(){
        return{}
    },
    mounted(){
        this.setRadarChart();
    },
    methods:{
        setRadarChart(){
            let _this=this;
            let dataname = ['门诊楼', '检验科', '医技楼', '住院楼', '综合楼']
            let datamax = [1000, 1000, 1000, 1000, 1000]
            let datavaule = [800, 760, 720, 625, 580]
            let testData=[
                {
                    name:'离线',
                    data:[800, 760, 720, 625, 580]
                },
                {
                    name:'正常',
                    data:[200, 560, 420, 625, 480]
                },
            ]
            let indicator = []
            for (let i = 0; i < dataname.length; i++) {
                indicator.push({
                    name: dataname[i],
                    max: datamax[i],
                })
            }
            let seriesData=[];
            let lengendData=[];
            let areaColor=['117, 65, 206','61, 92, 241']
            for(let i=0;i< testData.length;i++){
                let name=testData[i].name
                lengendData.push(name);
                let seriesItem={
                        name: name,
                        type: "radar",
                        symbolSize: 8,
                        data: [
                            {
                                symbol: "circle",
                                symbolSize: 6,
                                value: testData[i].data,
                                areaStyle: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                        offset: 0,
                                        color: 'rgba('+areaColor[i]+',.8)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba('+areaColor[i]+',.1)'
                                    }]),
                                },
                                itemStyle: {
                                    normal: {
                                        color: "#1cf4ff",
                                    }
                                },
                                lineStyle: {
                                    color: 'rgba('+areaColor[i]+')',
                                    width: 1
                                }
                            }
                        ]
                }
                seriesData.push(seriesItem)
        }
            let option = {
                color: ['#8538CC', '#3D5CF1'],
                title: [
                    {
                        text: '',
                        left: '50%',
                        top: '45%',
                        textAlign: 'center',
                        textBaseline: 'middle',
                        textStyle: {
                            color: '#d1fefe',
                            fontWeight: 'bold',
                            fontSize: fontSize(0.36),
                        }
                    }],
                legend: {
                    left: 'left',
                    orient: 'horizontal',
                    icon: 'rect',
                    data: lengendData,
                    textStyle: {
                        fontSize: fontSize(0.13),
                        color: '#fff',
                        lineHeight :fontSize(0.16),
                    },
                },
                radar: {
                    center: ['50%', '65%'],
                    radius: "70%", //大小
                    nameGap: 20, // 图中工艺等字距离图的距离
                    name: {
                        textStyle: {
                            color: '#fff',
                        },
                    },
                    nameGap: 10, // 图中工艺等字距离图的距离
                    indicator: indicator,
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255, 255, 254, 0.1)"
                        },
                        show: true,
                    },
                    splitArea: {
                        show: false,
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            width: 1,
                            color: "#2360ca" // 设置网格的颜色
                        }
                    }
                },
                series:seriesData,
            };
            var myChart = echarts.init(_this.$refs.radarChart);
            //echarts自适应缩放
            $(window).resize(function () {
                myChart.resize();
            });
            myChart.setOption(option);
        } 
    }
})