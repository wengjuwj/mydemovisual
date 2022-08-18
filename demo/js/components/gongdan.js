var gongdan=`
    <div class="gong-dan">
        <img class="middle-bg" src="./images/map.png" alt="" srcset="">
        <img class="screen-left" src="./images/screen-left.png" alt="" srcset="">
        <img class="screen-right" src="./images/screen-right.png" alt="" srcset="">
        <div class="operate-area">
            <div class="gongdan-control">
                <div class="gongdan-control-box">
                    <img class="gongdan-control-img" src="./images/control.png" alt="" srcset="" @click.stop="changePanel">
                    <div class="gongdan-control-panel" v-show="showPanel">
                        <div class="gongdan-panel-box">
                            <div class="gongdan-panel-item" :class="[gongdan.active?'active':'']" v-for="(gongdan,gongdanIndex) in gongdan_panel" :key="gongdanIndex" @click="changeControl(gongdanIndex)">
                                <img class="gongdan-panel-icon"  :src="'./images/'+gongdan.imgSrc" alt="" srcset=""/>
                                <div class="gongdan-panel-text">{{gongdan.text}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="trouble-list">
                <div class="trouble-item" :style="trouble.position" v-for="(trouble,troubleIndex) in troubleShowList" :key="troubleIndex"  @mouseover.stop="showDetail(troubleIndex)" @mouseleave.stop="hideDetail(troubleIndex)">
                    <div class="trouble-item-box">
                        <template  v-if="activeIndex==0">
                            <img v-if="!trouble.showDetail" class="trouble-item-img" src="./images/trouble_0.png" alt="" srcset="" @click="showDetail(troubleIndex)">
                            <img v-if="trouble.showDetail&&trouble.troubleLevel==0" class="trouble-item-img" src="./images/trouble_0.png" alt="" srcset="" @click="showDetail(troubleIndex)">
                            <img v-if="trouble.showDetail&&trouble.troubleLevel==1" class="trouble-item-img" src="./images/trouble_1.png" alt="" srcset="" @click="showDetail(troubleIndex)">
                            <img v-if="trouble.showDetail&&trouble.troubleLevel==2" class="trouble-item-img" src="./images/trouble_2.png" alt="" srcset="" @click="showDetail(troubleIndex)">
                            <img v-if="trouble.showDetail&&trouble.troubleLevel==3" class="trouble-item-img" src="./images/trouble_3.png" alt="" srcset="" @click="showDetail(troubleIndex)">
                            
                        </template>
                        
                        <img v-if="activeIndex==1" class="trouble-item-img" src="./images/trouble_1.png" alt="" srcset="">
                        <img v-if="activeIndex==2" class="trouble-item-img" src="./images/trouble_2.png" alt="" srcset="">
                        <img v-if="activeIndex==3" class="trouble-item-img" src="./images/trouble_3.png" alt="" srcset="">  
                        <div class="trouble-simplify">{{trouble.adress}}{{trouble.troubleText}}故障</div>
                        <div class="trouble-detail" v-show="trouble.showDetail" :class="['level_'+trouble.troubleLevel]" :style="setStyle(trouble)">
                            <div class="trouble-detail-box">
                                <div class="trouble-title">{{trouble.adress}}-{{trouble.troubleText}}问题</div>
                                <div class="trouble-content">
                                    <div class="trouble-detail-item">
                                        <img class="import-img" src="./images/import.png" alt="" srcset="">
                                        <div class="trouble-detail-item-label">等级:</div>
                                        <div class="trouble-detail-item-text">{{trouble.troubleLevelText}}</div>
                                    </div>
                                    <div class="trouble-detail-item">
                                        <div class="trouble-detail-item-label">地点:</div>
                                        <div class="trouble-detail-item-text">{{trouble.addressArea}}</div>
                                    </div>
                                    <div class="trouble-detail-item">
                                        <div class="trouble-detail-item-label">状态:</div>
                                        <div class="trouble-detail-item-text">{{trouble.status}}</div>
                                    </div>
                                    <div class="trouble-detail-item">
                                        <div class="trouble-detail-item-label">问题:</div>
                                        <div class="trouble-detail-item-text">{{trouble.troubleText}}问题</div>
                                    </div>
                                    <div class="trouble-detail-item">
                                        <div class="trouble-detail-item-label">类型:</div>
                                        <div class="trouble-detail-item-text">{{trouble.troubleType}}</div>
                                    </div>
                                    <div class="trouble-detail-item">
                                        <div class="trouble-detail-item-label">上报人:</div>
                                        <div class="trouble-detail-item-text">{{trouble.reportMan}}</div>
                                    </div>
                                    <div class="trouble-detail-item">
                                        <div class="trouble-detail-item-label">维修人:</div>
                                        <div class="trouble-detail-item-text">{{trouble.repairMan}}</div>
                                    </div>
                                    <div class="trouble-detail-item">
                                        <div class="trouble-detail-item-label">上报时间:</div>
                                        <div class="trouble-detail-item-text">{{trouble.reportTime}}</div>
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
Vue.component('gong-dan',{
    template:gongdan,
    data(){
        return {
            showPanel:true,
            activeIndex:0,
            gongdan_panel:[
                {
                    text:'全部故障点',
                    imgSrc:"panel_1.png",
                    active:true
                },
                {
                    text:'一级故障点',
                    imgSrc:"panel_2.png",
                    active:false
                },
                {
                    text:'二级故障点',
                    imgSrc:"panel_3.png",
                    active:false
                },
                {
                    text:'三级故障点',
                    imgSrc:"panel_4.png",
                    active:false
                },
            ],
            troubleList:[
                {
                    adress:"门诊一楼",
                    troubleText:"线路",
                    position:{
                        left:"18%",
                        top:"8%"
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
                    inlineStatus:0
                    
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
                     panelType:0,
                     panelTypeText:"正常",
                    addressArea:"住院楼",
                    status:"未处理",
                    troubleType:"设备故障",
                    reportMan:"王XX",
                    repairMan:"张XX",
                    reportTime:"2022/08/08",
                    showDetail:false,
                    inlineStatus:0
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
                    inlineStatus:0
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
                    panelType:0,
                    panelTypeText:"正常",
                    addressArea:"医技楼",
                    status:"未处理",
                    troubleType:"设备故障",
                    reportMan:"王XX",
                    repairMan:"张XX",
                    reportTime:"2022/08/08",
                    showDetail:false,
                    inlineStatus:0
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
                    panelType:0,
                    panelTypeText:"正常",
                    addressArea:"综合楼",
                    status:"未处理",
                    troubleType:"设备故障",
                    reportMan:"王XX",
                    repairMan:"张XX",
                    reportTime:"2022/08/08",
                    showDetail:false,
                    inlineStatus:0
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
                    inlineStatus:0
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
                    panelType:0,
                    panelTypeText:"正常",
                    addressArea:"门诊楼",
                    status:"未处理",
                    troubleType:"设备故障",
                    reportMan:"王XX",
                    repairMan:"张XX",
                    reportTime:"2022/08/08",
                    showDetail:false,
                    inlineStatus:0
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
                    inlineStatus:0
                },
            ],
            troubleShowList:[]
        }
    },
    watch:{
        activeIndex:{
            deep:true,
            handler(){
                if(this.activeIndex==0){
                    this.troubleShowList=this.troubleList.filter((item)=>{
                            item.showDetail=false;
                            return item
                    })
                }else{
                    this.troubleShowList=this.troubleList.filter((item)=>{
                        if(item.troubleLevel==this.activeIndex&&this.activeIndex!=0){
                            item.showDetail=true
                            return item
                        }else{
                            item.showDetail=false
                        }
                    })
                }
               
            }
        }
    },
    created(){
        if(this.activeIndex==0){
            this.troubleShowList=this.troubleList;
        }
    },
    methods:{
        // 切换面板展示状态
        changePanel(){
            this.showPanel=!this.showPanel
        },
        // 切换故障类型
        changeControl(index){
            this.activeIndex=index;
            this.gongdan_panel.forEach((e,i)=>{
                index==i?e.active=true:e.active=false
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
