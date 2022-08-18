var shebei=`
    <div class="she-bei">
        <img class="middle-bg" src="./images/map.png" alt="" srcset="">
        <img class="screen-left" src="./images/screen-left.png" alt="" srcset="">
        <img class="screen-right" src="./images/screen-right.png" alt="" srcset="">
        <div class="operate-area">
            <div class="shebei-control">
                <div class="shebei-control-box">
                    <img class="shebei-control-img" src="./images/control.png" alt="" srcset="" @click.stop="changePanel">
                    <div class="shebei-control-panel" v-show="showPanel">
                        <div class="shebei-panel-box">
                            <div class="shebei-panel-item" :class="[shebei.active?'active':'']" v-for="(shebei,shebeiIndex) in shebei_panel" :key="shebeiIndex" @click="changeControl(shebeiIndex)">
                                <img class="shebei-panel-icon"  :src="'./images/'+shebei.imgSrc" alt="" srcset=""/>
                                <div class="shebei-panel-text">{{shebei.text}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="online-status">
                <div class="shebei-control-box">
                    <img class="shebei-control-img" src="./images/control.png" alt="" srcset="" @click.stop="changeOnlinePanel">
                    <div class="online-status-panel" v-show="showOnlinePanel">
                        <div class="shebei-panel-box">
                            <div class="shebei-panel-item" :class="[online.active?'active':'']" v-for="(online,onlineIndex) in onlinestatus_panel" :key="onlineIndex" @click="changeOnlineStatus(onlineIndex)">
                                <img class="shebei-panel-icon"  :src="'./images/'+online.imgSrc" alt="" srcset=""/>
                                <div class="shebei-panel-text">{{online.text}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="trouble-list">
                <div class="trouble-item" :style="trouble.position" v-for="(trouble,troubleIndex) in troubleShowList" :key="troubleIndex"  @mouseover.stop="showDetail(troubleIndex)" @mouseleave.stop="hideDetail(troubleIndex)">
                    <div class="trouble-item-box">
                        <template  v-if="trouble.panelType==0">
                            <img  v-if="trouble.inlineStatus==0" class="trouble-item-img" src="./images/sb_status_0.png" alt="" @click.stop="showModal"> 
                            <img  v-if="trouble.inlineStatus==1" class="trouble-item-img" src="./images/sb_status_0_not.png" alt="" @click.stop="showModal"> 
                            <img  v-if="trouble.inlineStatus==2" class="trouble-item-img" src="./images/sb_status_0_yet.png.png" alt="" @click.stop="showModal"> 
                        </template>
                        <template  v-if="trouble.panelType==1">
                            <img  v-if="trouble.inlineStatus==0" class="trouble-item-img" src="./images/sb_status_1.png" alt="" @click.stop="showModal"> 
                            <img  v-if="trouble.inlineStatus==1" class="trouble-item-img" src="./images/sb_status_1_not.png" alt="" @click.stop="showModal"> 
                            <img  v-if="trouble.inlineStatus==2" class="trouble-item-img" src="./images/sb_status_1_yet.png" alt="" @click.stop="showModal">  
                        </template>
                        <template  v-if="trouble.panelType==2">
                            <img  v-if="trouble.inlineStatus==0" class="trouble-item-img" src="./images/sb_status_2.png" alt="" @click.stop="showModal"> 
                            <img  v-if="trouble.inlineStatus==1" class="trouble-item-img" src="./images/sb_status_2_not.png" alt="" @click.stop="showModal"> 
                            <img  v-if="trouble.inlineStatus==2" class="trouble-item-img" src="./images/sb_status_2_yet.png" alt="" @click.stop="showModal"> 
                        </template>
                        <div class="trouble-simplify">{{trouble.adress}}</div>
                        <div class="trouble-detail" v-show="trouble.showDetail"  :style="setStyle(trouble)">
                            <div class="trouble-detail-box">
                                <div class="trouble-title">{{trouble.adress}}</div>
                                <div class="trouble-content">
                                    <div class="trouble-overhidden">
                                        <div class="trouble-over-scroll">
                                            <div class="trouble-scroll">
                                                <div class="trouble-table-title">
                                                    <div class="table-left">区域</div>
                                                    <div class="table-left">运行状态</div>
                                                    <div class="table-left">检修状态</div>
                                                </div>
                                                <div class="trouble-detail-item">
                                                    <div class="trouble-table-tr">
                                                        <div class="table-left">医技一楼</div>
                                                        <div class="table-left">故障</div>
                                                        <div class="table-left">当前需维修</div>
                                                    </div>
                                                    <div class="trouble-table-tr">
                                                        <div class="table-left">医技一楼</div>
                                                        <div class="table-left">故障</div>
                                                        <div class="table-left">当前需维修</div>
                                                    </div>
                                                    <div class="trouble-table-tr">
                                                        <div class="table-left">医技一楼</div>
                                                        <div class="table-left">故障</div>
                                                        <div class="table-left">当前需维修</div>
                                                    </div>
                                                    <div class="trouble-table-tr">
                                                        <div class="table-left">医技一楼</div>
                                                        <div class="table-left">故障</div>
                                                        <div class="table-left">当前需维修</div>
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
Vue.component('she-bei',{
    template:shebei,
    data(){
        return {
            showPanel:true,
            showOnlinePanel:true,
            activeIndex:0,
            shebei_panel:[
                {
                    text:'故障',
                    imgSrc:"shebei_panel_1.png",
                    active:false
                },
                {
                    text:'检修',
                    imgSrc:"shebei_panel_2.png",
                    active:false
                },
                {
                    text:'正常',
                    imgSrc:"shebei_panel_3.png",
                    active:false
                },
            ],
            onlinestatus_panel:[
                {
                    text:'无需维修',
                    imgSrc:"jk_panel_1.png",
                    active:false
                },
                {
                    text:'30天需维修',
                    imgSrc:"jk_panel_3.png",
                    active:false
                },
                {
                    text:'当前需维修',
                    imgSrc:"jk_panel_4.png",
                    active:false
                },
                
                
            ],
            troubleList:[
                {
                    adress:"中央空调一号",
                    troubleText:"线路",
                    position:{
                        left:"43%",
                        top:"42%"
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
                    inlineStatus:1
                    
                },
                {
                    adress:"制氧机一号",
                    troubleText:"线路",
                    position:{
                        left:"36%",
                        top:"62%"
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
                    inlineStatus:0
                },
                {
                    adress:"电梯一号",
                    troubleText:"线路",
                    position:{
                        left:"12%",
                        top:"52%"
                    },
                    troubleLevel:1,
                    troubleLevelText:"一级",
                     // 监控类别
                     panelType:2,
                     panelTypeText:"正常",
                    addressArea:"住院楼",
                    status:"未处理",
                    troubleType:"设备故障",
                    reportMan:"王XX",
                    repairMan:"张XX",
                    reportTime:"2022/08/08",
                    showDetail:false,
                    inlineStatus:2
                },
                {
                    adress:"门诊一楼-CT机",
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
                    inlineStatus:1
                },
                {
                    adress:"综合二楼-离心机",
                    troubleText:"线路",
                    position:{
                        left:"48%",
                        top:"13%"
                    },
                    troubleLevel:2,
                    troubleLevelText:"二级",
                    // 监控类别
                    panelType:1,
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
                    adress:"门诊一楼-CT机",
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
                    inlineStatus:1
                },
                {
                    adress:"中央空调二号",
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
                    inlineStatus:1
                },
                {
                    adress:"电梯一号",
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
               
               
            }
        }
    },
    created(){
        this.troubleShowList=this.troubleList
    },
    methods:{
        // 切换面板展示状态
        changePanel(){
            this.showPanel=!this.showPanel
        },
        // 切换在线状态面板展示状态
        changeOnlinePanel(){
            this.showOnlinePanel=!this.showOnlinePanel
        },
        // 切换故障类型
        changeControl(index){
            this.shebei_panel.forEach((item,i)=>{
                if(i==index){
                    item.active=true
                }else{
                    item.active=false
                }
            })
            this.troubleShowList=this.troubleList.filter((item)=>{return item.panelType==index})
        },
        // 切换离线状态
        changeOnlineStatus(index){
            this.onlinestatus_panel.forEach((item,i)=>{
                if(i==index){
                    item.active=true
                }else{
                    item.active=false
                }
            })
            this.troubleShowList=this.troubleList.filter((item)=>{return item.inlineStatus==index})
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
        // 点击时显示设备弹框
        showModal(){
            this.$emit("modalshow")
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
