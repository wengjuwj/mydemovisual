var nenghao=`
    <div class="neng-hao">
        <img class="middle-bg" src="./images/map.png" alt="" srcset="">
        <img class="screen-left" src="./images/screen-left.png" alt="" srcset="">
        <img class="screen-right" src="./images/screen-right.png" alt="" srcset="">
        <div class="operate-area">
            <div class="nenghao-control" style="display:none">
                <div class="nenghao-control-box">
                    <img class="nenghao-control-img" src="./images/control.png" alt="" srcset="" @click.stop="changePanel">
                    <div class="nenghao-control-panel" v-show="showPanel">
                        <div class="nenghao-panel-box">
                            <div class="nenghao-panel-item" :class="[nenghao.active?'active':'']" v-for="(nenghao,nenghaoIndex) in nenghao_panel" :key="nenghaoIndex" @click="changeControl(nenghaoIndex)">
                                <img class="nenghao-panel-icon"  :src="'./images/'+nenghao.imgSrc" alt="" srcset=""/>
                                <div class="nenghao-panel-text">{{nenghao.text}}</div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="trouble-list">
                <div class="trouble-item" :style="trouble.position" v-for="(trouble,troubleIndex) in troubleShowList" :key="troubleIndex" @mouseover.stop="showDetail(troubleIndex)" @mouseleave.stop="hideDetail(troubleIndex)">
                    <div class="trouble-item-box">
                    <img  class="trouble-item-img" src="./images/nh.png" alt=""> 
                        
                        <div class="trouble-simplify">{{trouble.adress}}</div>
                        <div class="trouble-detail" v-show="trouble.showDetail"  :style="setStyle(trouble)">
                            <div class="trouble-detail-box">
                                <div class="trouble-title">{{trouble.adress}}</div>
                                <div class="trouble-content">
                                    <div class="trouble-overhidden">
                                        <div class="trouble-over-scroll">
                                            <div class="trouble-scroll">
                                                <div class="trouble-table-title">
                                                    <div class="table-left">指标</div>
                                                    <div class="table-left">数值</div>
                                                </div>
                                                <div class="trouble-detail-item">
                                                    <div class="trouble-table-tr">
                                                        <div class="table-left">今日用水</div>
                                                        <div class="table-left">666m³</div>
                                                    </div>
                                                    <div class="trouble-table-tr">
                                                        <div class="table-left">今日用电</div>
                                                        <div class="table-left">1266kwh</div>
                                                    </div>
                                                    <div class="trouble-table-tr">
                                                        <div class="table-left">今日用气</div>
                                                        <div class="table-left">466m³</div>
                                                    </div>
                                                    <div class="trouble-table-tr">
                                                        <div class="table-left">今日供暖</div>
                                                        <div class="table-left">666GJ</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
Vue.component('neng-hao',{
    template:nenghao,
    data(){
        return {
            showPanel:true,
            activeIndex:0,
            nenghao_panel:[
                {
                    text:'全部',
                    imgSrc:"zk_0.png",
                    active:true
                },
                {
                    text:'运行',
                    imgSrc:"zk_1.png",
                    active:false
                },
                {
                    text:'故障',
                    imgSrc:"zk_2.png",
                    active:false
                },
                {
                    text:'停运',
                    imgSrc:"zk_3.png",
                    active:false
                },
            ],
            troubleList:[
                {
                    adress:"门诊一楼",
                    troubleText:"线路",
                    position:{
                        left:"37%",
                        top:"45%"
                    },
                    troubleLevel:0,
                    troubleLevelText:"正常",
                    // 监控类别
                    panelType:0,
                    panelTypeText:"正常",
                    addressArea:"门诊楼",
                    status:"未处理",
                    troubleType:"设备故障",
                    reportMan:"王XX",
                    repairMan:"张XX",
                    reportTime:"2022/08/08",
                    showDetail:false,
                    inlineStatus:0,
                    equipmentDetail:{
                        total:10,
                        list:[
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"28",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"26",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                        ]
                    }
                    
                },
                {
                    adress:"住院一楼",
                    troubleText:"线路",
                    position:{
                        left:"16%",
                        top:"23%"
                    },
                    troubleLevel:0,
                    troubleLevelText:"正常",
                     // 监控类别
                     panelType:1,
                     panelTypeText:"正常",
                    addressArea:"住院楼",
                    status:"未处理",
                    troubleType:"设备故障",
                    reportMan:"王XX",
                    repairMan:"张XX",
                    reportTime:"2022/08/08",
                    showDetail:false,
                    inlineStatus:0,
                    equipmentDetail:{
                        total:60,
                        list:[
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"28",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"26",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                        ]
                    }
                },
                {
                    adress:"住院二楼",
                    troubleText:"线路",
                    position:{
                        left:"12%",
                        top:"52%"
                    },
                    troubleLevel:1,
                    troubleLevelText:"一级",
                     // 监控类别
                     panelType:0,
                     panelTypeText:"正常",
                    addressArea:"住院楼",
                    status:"未处理",
                    troubleType:"设备故障",
                    reportMan:"王XX",
                    repairMan:"张XX",
                    reportTime:"2022/08/08",
                    showDetail:false,
                    inlineStatus:0,
                    equipmentDetail:{
                        total:30,
                        list:[
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"28",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"26",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                        ]
                    }
                },
                {
                    adress:"医技一楼",
                    troubleText:"线路",
                    position:{
                        left:"11%",
                        top:"75%"
                    },
                    troubleLevel:0,
                    troubleLevelText:"正常",
                     // 监控类别
                    panelType:2,
                    panelTypeText:"正常",
                    addressArea:"医技楼",
                    status:"未处理",
                    troubleType:"设备故障",
                    reportMan:"王XX",
                    repairMan:"张XX",
                    reportTime:"2022/08/08",
                    showDetail:false,
                    inlineStatus:0,
                    equipmentDetail:{
                        total:60,
                        list:[
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"28",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"26",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                        ]
                    }
                },
                {
                    adress:"综合一楼",
                    troubleText:"线路",
                    position:{
                        left:"48%",
                        top:"13%"
                    },
                    troubleLevel:2,
                    troubleLevelText:"二级",
                    // 监控类别
                    panelType:3,
                    panelTypeText:"正常",
                    addressArea:"综合楼",
                    status:"未处理",
                    troubleType:"设备故障",
                    reportMan:"王XX",
                    repairMan:"张XX",
                    reportTime:"2022/08/08",
                    showDetail:false,
                    inlineStatus:0,
                    equipmentDetail:{
                        total:60,
                        list:[
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"28",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"26",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                        ]
                    }
                },
                {
                    adress:"门诊二楼",
                    troubleText:"线路",
                    position:{
                        left:"36%",
                        top:"82%"
                    },
                    troubleLevel:0,
                    troubleLevelText:"正常",
                    // 监控类别
                    panelType:0,
                    panelTypeText:"正常",
                    addressArea:"门诊楼",
                    status:"未处理",
                    troubleType:"设备故障",
                    reportMan:"王XX",
                    repairMan:"张XX",
                    reportTime:"2022/08/08",
                    showDetail:false,
                    inlineStatus:0,
                    equipmentDetail:{
                        total:50,
                        list:[
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"28",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"26",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                        ]
                    }
                },
                {
                    adress:"门诊三楼",
                    troubleText:"线路",
                    position:{
                        left:"70%",
                        top:"46%"
                    },
                    troubleLevel:0,
                    troubleLevelText:"正常",
                     // 监控类别
                    panelType:3,
                    panelTypeText:"正常",
                    addressArea:"门诊楼",
                    status:"未处理",
                    troubleType:"设备故障",
                    reportMan:"王XX",
                    repairMan:"张XX",
                    reportTime:"2022/08/08",
                    showDetail:false,
                    inlineStatus:0,
                    equipmentDetail:{
                        total:6,
                        list:[
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"28",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"26",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                        ]
                    }
                },
                {
                    adress:"医技二楼",
                    troubleText:"线路",
                    position:{
                        left:"70%",
                        top:"74%"
                    },
                    troubleLevel:3,
                    troubleLevelText:"三级",
                    // 监控类别
                    panelType:0,
                    panelTypeText:"正常",
                    addressArea:"门诊楼",
                    status:"未处理",
                    troubleType:"设备故障",
                    reportMan:"王XX",
                    repairMan:"张XX",
                    reportTime:"2022/08/08",
                    showDetail:false,
                    inlineStatus:0,
                    equipmentDetail:{
                        total:60,
                        list:[
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"28",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"26",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                            {
                                address_1:"住院一楼",
                                address_2:"一号病房",
                                setting:"26",
                                actual:"29",
                                status:0
                            },
                        ]
                    }
                },
            ],
            troubleShowList:[]
        }
    },
    watch:{
    },
    created(){
        this.troubleShowList=this.troubleList;
    },
    methods:{
        // 切换面板展示状态
        changePanel(){
            this.showPanel=!this.showPanel
        },
        // 切换故障类型
        changeControl(index){
            this.activeIndex=index;
            this.nenghao_panel.forEach((e,i)=>{
                index==i?e.active=true:e.active=false
            });
            this.troubleShowList=this.troubleList.filter((item)=>{
                if(index==0){
                    return item
                }else{
                    if(item.panelType==index){
                        return item
                    }
                }
            })
        },
        // 点击/悬浮故障点时显示详细内容
        showDetail(index){
            console.log(index,'mouseEnter')
            this.troubleShowList[index].showDetail=true;
            // this.troubleShowList.forEach((item,i)=>{
            //     if(index==i){
            //         item.showDetail=!this.troubleShowList[index].showDetail
            //     }else{
            //         item.showDetail=false
            //     }
            // })
          
        },
        // 鼠标移出故障点时隐藏详细内容
        hideDetail(index){
            this.troubleShowList[index].showDetail=false;
        },
        // 设置style
        setStyle(item){
            let defineStyle={};
            let parentLeft=Number(item.position.left.split("%")[0]);
            let parentTop=Number(item.position.top.split("%")[0]);
            if(parentTop>50){
                defineStyle['bottom']=0;
                defineStyle['left']='100%';
            }
            if(parentLeft>60){
                defineStyle['left']='';
                defineStyle['right']='100%';
            }
            return defineStyle
        }
    }
})
