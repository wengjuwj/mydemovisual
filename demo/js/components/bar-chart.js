var barChart=`<div class="chartbox" id="barChart" ref="barChart"></div>`;
Vue.component('bar-chart',{
    template:barChart,
    props:{
        chartData:{
            type:Object,
            default:{
                xAxisData:['门诊楼','综合楼','住院楼','医技楼'],
                yAxisData:[
                    {
                        name:"一级",
                        data:[30,10,40,20]
                    },
                    {
                        name:"二级",
                        data:[10,40,20,30]
                    },
                    {
                        name:"三级",
                        data:[50,15,20,20]
                    },
                ]
            }
        }
    },
    data(){
        return{}
    },
    mounted(){
        this.setBarChart();
    },
    methods:{
        setBarChart(){
            let testData=this.chartData
            let seriesData=[];
            for(let i=0;i< testData.yAxisData.length;i++){
                    let name=testData.yAxisData[i].name
                    let seriesItem={
                        name: name,
                        type: 'bar',
                        stack: 'total',
                        label: {
                            show: true
                        },
                        barWidth: fontSize(0.4),
                        emphasis: {
                            focus: 'series'
                        },
                        data: testData.yAxisData[i].data
                    }
                    seriesData.push(seriesItem)
            } 
            var option = {
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    // Use axis to trigger tooltip
                    type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
                  }
                },
                color: ['#FF2525', '#E6CE30', '#55C331', '#3458F5', '#899EF7',],
                legend: {
                    type:"scroll",
                    textStyle: {
                        fontSize: fontSize(0.12),
                        color: '#d5f2fd'
                    },
                },
                grid: {
                    top: '20%',
                    left: '2%',
                    right: '4%',
                    bottom: 0,
                    containLabel: true
                },
                xAxis: {
                  type: 'category',
                  axisLabel: {
                    interval: 0, // 全部显示x轴
                    // rotate: 10,
                    color: '#d5f2fd',
                  },
                  data: testData.xAxisData
                },
                yAxis: {
                  type: 'value',
                  axisLabel: {
                    inside: false,
                    color: '#d5f2fd',
                  },
                  axisLine: {
                    show: true
        
                  },
                  splitLine: {
                    show: false,
                    lineStyle: {
                      type: 'dashed'
                    }
                  }
                },
                series: seriesData
              };
            var myChart = echarts.init(this.$refs.barChart);
            //echarts自适应缩放
            $(window).resize(function () {
                myChart.resize();
            });
            myChart.setOption(option);
        } 
    }
})