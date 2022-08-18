var jiankong=`
    <div class="jian-kong">
        <img class="middle-bg" src="./images/map.png" alt="" srcset="">
        <img class="screen-left" src="./images/screen-left.png" alt="" srcset="">
        <img class="screen-right" src="./images/screen-right.png" alt="" srcset="">
        <div class="operate-area">
            <div class="jiankong-control">
                <div class="jiankong-control-box">
                    <img class="jiankong-control-img" src="./images/control.png" alt="" srcset="" @click.stop="changePanel">
                    <div class="jiankong-control-panel" v-show="showPanel">
                        <div class="jiankong-panel-box">
                            <div class="jiankong-panel-item" :class="[jiankong.active?'active':'']" v-for="(jiankong,jiankongIndex) in jiankong_panel" :key="jiankongIndex" @click="changeControl(jiankongIndex)">
                                <img class="jiankong-panel-icon"  :src="'./images/'+jiankong.imgSrc" alt="" srcset=""/>
                                <div class="jiankong-panel-text">{{jiankong.text}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="online-status">
                <div class="jiankong-control-box">
                    <img class="jiankong-control-img" src="./images/control.png" alt="" srcset="" @click.stop="changeOnlinePanel">
                    <div class="online-status-panel" v-show="showOnlinePanel">
                        <div class="jiankong-panel-box">
                            <div class="jiankong-panel-item" :class="[online.active?'active':'']" v-for="(online,onlineIndex) in onlinestatus_panel" :key="onlineIndex" @click="changeOnlineStatus(onlineIndex)">
                                <img class="jiankong-panel-icon"  :src="'./images/'+online.imgSrc" alt="" srcset=""/>
                                <div class="jiankong-panel-text">{{online.text}}</div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="trouble-list">
                <div class="trouble-item" :style="trouble.position" v-for="(trouble,troubleIndex) in troubleShowList" :key="troubleIndex">
                    <div class="trouble-item-box">
                        <template  v-if="trouble.panelType==0">
                            <img  v-if="trouble.inlineStatus==0" class="trouble-item-img" src="./images/online_0.png" alt=""> 
                            <img  v-else class="trouble-item-img" src="./images/online_0_active.png" alt=""> 
                        </template>
                        <template  v-if="trouble.panelType==1">
                            <img  v-if="trouble.inlineStatus==0" class="trouble-item-img" src="./images/online_1.png" alt=""> 
                            <img  v-else class="trouble-item-img" src="./images/online_1_active.png" alt=""> 
                        </template>
                        <template  v-if="trouble.panelType==2">
                            <img  v-if="trouble.inlineStatus==0" class="trouble-item-img" src="./images/online_2.png" alt=""> 
                            <img  v-else class="trouble-item-img" src="./images/online_2_active.png" alt=""> 
                        </template>
                        <template  v-if="trouble.panelType==3">
                            <img  v-if="trouble.inlineStatus==0" class="trouble-item-img" src="./images/online_3.png" alt=""> 
                            <img  v-else class="trouble-item-img" src="./images/online_3_active.png" alt=""> 
                        </template>
                        <div class="trouble-simplify">{{trouble.adress}}{{trouble.troubleText}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
Vue.component('jian-kong',{
    template:jiankong,
    data(){
        return {
            showPanel:true,
            showOnlinePanel:true,
            activeIndex:0,
            jiankong_panel:[
                {
                    text:'一类监控',
                    imgSrc:"jk_panel_1.png",
                    active:false
                },
                {
                    text:'二类监控',
                    imgSrc:"jk_panel_2.png",
                    active:false
                },
                {
                    text:'三类监控',
                    imgSrc:"jk_panel_3.png",
                    active:false
                },
                {
                    text:'四类监控',
                    imgSrc:"jk_panel_4.png",
                    active:false
                },
            ],
            onlinestatus_panel:[
                {
                    text:'离线',
                    imgSrc:"isonline_1.png",
                    active:false
                },
                {
                    text:'正常',
                    imgSrc:"isonline_2.png",
                    active:false
                },
            ],
            troubleList:[
                {
                    adress:"门诊一楼",
                    troubleText:"视频监控",
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
                    adress:"住院一楼",
                    troubleText:"视频监控",
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
                    adress:"住院二楼",
                    troubleText:"视频监控",
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
                    inlineStatus:0
                },
                {
                    adress:"医技一楼",
                    troubleText:"视频监控",
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
                    adress:"综合一楼",
                    troubleText:"视频监控",
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
                    inlineStatus:0
                },
                {
                    adress:"门诊二楼",
                    troubleText:"视频监控",
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
                    troubleText:"视频监控",
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
                    adress:"医技二楼",
                    troubleText:"视频监控",
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
            this.jiankong_panel.forEach((item,i)=>{
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
        // 点击故障点时显示详细内容
        showDetail(index){
            this.troubleShowList.forEach((item,i)=>{
                if(index==i){
                    item.showDetail=!this.troubleShowList[index].showDetail
                }else{
                    item.showDetail=false
                }
            })
          
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
