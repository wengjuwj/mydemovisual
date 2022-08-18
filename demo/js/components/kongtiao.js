var kongtiao=`
    <div class="kong-tiao">
        <img class="middle-bg" src="./images/map.png" alt="" srcset="">
        <img class="screen-left" src="./images/screen-left.png" alt="" srcset="">
        <img class="screen-right" src="./images/screen-right.png" alt="" srcset="">
        <div class="operate-area">
            <div class="kongtiao-control">
                <div class="kongtiao-control-box">
                    <img class="kongtiao-control-img" src="./images/control.png" alt="" srcset="" @click.stop="changePanel">
                    <div class="kongtiao-control-panel" v-show="showPanel">
                        <div class="kongtiao-panel-box">
                            <div class="kongtiao-panel-item" :class="[kongtiao.active?'active':'']" v-for="(kongtiao,kongtiaoIndex) in kongtiao_panel" :key="kongtiaoIndex" @click="changeControl(kongtiaoIndex)">
                                <img class="kongtiao-panel-icon"  :src="'./images/'+kongtiao.imgSrc" alt="" srcset=""/>
                                <div class="kongtiao-panel-text">{{kongtiao.text}}</div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="trouble-list">
                <div class="trouble-item" :style="trouble.position" v-for="(trouble,troubleIndex) in troubleShowList" :key="troubleIndex" @mouseover.stop="showDetail(troubleIndex)" @mouseleave.stop="hideDetail(troubleIndex)">
                    <div class="trouble-item-box">
                        <template  v-if="trouble.panelType==0">
                            <img  class="trouble-item-img" :style="setIconStyle(trouble)" src="./images/zk_0.png" alt=""> 
                        </template>
                        <template  v-if="trouble.panelType==1">
                            <img  class="trouble-item-img" :style="setIconStyle(trouble)" src="./images/zk_1.png" alt=""> 
                        </template>
                        <template  v-if="trouble.panelType==2">
                            <img  class="trouble-item-img" :style="setIconStyle(trouble)" src="./images/zk_2.png" alt=""> 
                        </template>
                        <template  v-if="trouble.panelType==3">
                            <img  class="trouble-item-img" :style="setIconStyle(trouble)" src="./images/zk_3.png" alt="">  
                        </template>
                        <div class="trouble-number" :class="[trouble.equipmentDetail.total>30?'big':'']">{{trouble.equipmentDetail.total}}</div> 
                        <div class="trouble-simplify">{{trouble.adress}}</div>
                        <div class="trouble-detail" v-show="trouble.showDetail"  :style="setStyle(trouble)">
                            <div class="trouble-detail-box">
                                <div class="trouble-title">{{trouble.equipmentDetail.total}}台空调终端</div>
                                <div class="trouble-content">
                                    <div class="trouble-overhidden">
                                        <div class="trouble-over-scroll">
                                            <div class="trouble-scroll">
                                                <div class="trouble-detail-item" v-for="(equipment,equipmentIndex) in trouble.equipmentDetail.list" :key="equipmentIndex">
                                                    <div class="trouble-address">
                                                        <span>{{equipment.address_1}}</span><span>{{equipment.address_2}}</span>
                                                    </div>
                                                    <div class="trouble-adress-detail">
                                                        <span>设定温度 <i class="address-info">{{equipment.setting}}℃</i></span>
                                                        <span>室内温度 <i class="address-info">{{equipment.actual}}℃</i></span>
                                                    </div>
                                                    <div class="adress-status">
                                                        <img v-if="equipment.actual<=26" class="trouble-adress-img" src="./images/zk_success.png" alt="" @click.stop="showModal"> 
                                                        <img v-if="equipment.actual>26&&equipment.actual<29" class="trouble-adress-img" src="./images/zk-warning.png" alt="" @click.stop="showModal"> 
                                                        <img v-if="equipment.actual>=29" class="trouble-adress-img" src="./images/zk_error.png" alt="" @click.stop="showModal"> 
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
Vue.component('kong-tiao',{
    template:kongtiao,
    data(){
        return {
            showPanel:true,
            activeIndex:0,
            kongtiao_panel:[
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
                        total:40,
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
            this.kongtiao_panel.forEach((e,i)=>{
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
        },
        // 设置图标大小，跟数量有关
        setIconStyle(item){
            let iconStyle={}
            if(item.equipmentDetail.total<10){
                iconStyle['width']="0.35rem"
            }else{
                let addRate=Math.floor(item.equipmentDetail.total/10);
                let addValue=0.1*addRate
                iconStyle['width']=(0.3+addValue)+"rem";
            }
            return iconStyle
        },
        // 点击时显示智能控制弹框
        showModal(){
            console.log("点击事件")
            this.$emit("modalshow")
        },
    }
})
