var barChart=`<div class="chartbox" id="barReverseChart" ref="barReverseChart"></div>`;
Vue.component('bar-reverse-chart',{
    template:barChart,
    props:{
        chartData:{
            type:Object,
            default:()=>{
                return {
                    xAxisData:['中心制氧机', '门诊口电梯', '化验室离心机', '检验科CT机', '综合楼中央空调'],
                    yAxisData:[10, 52, 200, 334, 390, 330]
                }
            }
        }
    },
    data(){
        return{
            // 柱形图颜色
            LinearColor:{
                normal:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#83bff6' },
                    { offset: 0.5, color: '#188df0' },
                    { offset: 1, color: '#188df0' }
                ]),
                special:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: '#FF9E17' },
                    { offset: 0.7, color: '#D04597' },
                    { offset: 1, color: '#D04597' }
                ])
                
            }
        }
    },
    mounted(){
        this.setBarReverseChart();
    },
    methods:{
        setBarReverseChart(){
            let testData=this.chartData
            let seriesData=[];
            for(let i=0;i< testData.xAxisData.length;i++){
                    let color=this.LinearColor.normal;
                    if(i==testData.xAxisData.length-1){
                        color=this.LinearColor.special;
                    }
                    let dataItem={
                        value:testData.yAxisData[i],
                        itemStyle: {
                            barBorderRadius: [0, 15, 15, 0] ,
                            color: color
                        },
                        emphasis: {
                            itemStyle: {
                                color: color
                            }
                        },
                    }
                    seriesData.push(dataItem)
            } 
            var option = {
                tooltip: {
                  trigger: 'axis',
                  axisPointer: {
                    type: 'shadow'
                  }
                },
                grid: {
                  left: '1%',
                  right: '1%',
                  bottom: '1%',
                  top:'3%',
                  containLabel: true
                },
                xAxis: [
                    {
                      type: 'value',
                      axisLabel: {
                        color: '#d5f2fd',
                      },
                    }
                ],
                yAxis: [
                  {
                    type: 'category',
                    axisLabel: {
                        interval: 0,
                        // rotate: 10,
                        color: '#d5f2fd',
                        textStyle:{
                            textAlign:"center"
                        },
                        formatter:function(params){
                            var newParamsName="";
                            var paramsNameNumber=params.length;
                            var providerNumber=3;//一行显示几个字
                            var rowNumber=Math.ceil(paramsNameNumber/providerNumber);
                            if(paramsNameNumber>providerNumber){
                                for(var p=0;p<rowNumber;p++){
                                    var tempStr="";
                                    var start=p*providerNumber;
                                    var end=start+providerNumber;
                                    // if(p=rowNumber-1){
                                        // tempStr=params.substring(start,paramsNameNumber)
                                    // }else{
                                        tempStr=params.substring(start,end)+"\n";

                                    // }
                                    newParamsName+=tempStr
                                }
                            }else{
                                newParamsName=params
                            }
                            return newParamsName
                        }
                    },
                    data: this.chartData.xAxisData,
                    axisTick: {
                      alignWithLabel: true
                    }
                  }
                ],
                // [10, 52, 200, 334, 390, 330, 220]
                series: [
                  {
                    name: '',
                    type: 'bar',
                    barWidth: fontSize(0.2),
                    data: seriesData,
                    
                  }
                ]
              };
            var myChart = echarts.init(this.$refs.barReverseChart);
            //echarts自适应缩放
            $(window).resize(function () {
                myChart.resize();
            });
            myChart.setOption(option);
        } 
    }
})