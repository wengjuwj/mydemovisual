var headerBar=`
<div class="nav-wrap">
    <div class="nav-header">
        <div class="header-logo">
            <div class="logo">
                <img src="./images/nav-logo.png" alt="" srcset="">
            </div>
        </div>
        <div class="header-tabs">
            <div class="header-tab-item" @click="pageTo(item)" :class="[item.active?'active':'']" v-for="(item,index) in navTabs" :key="index">
                <div class="header-tab-contain">
                    <div class="left">
                        <div class="zh-text">{{item.zh_text}}</div>
                        <div class="cn-text">{{item.en_text}}</div>
                    </div>
                    <div class="right">
                        <div class="raquo">&raquo;</div>
                    </div>
                </div>
                <div class="active-status"></div>
            </div>
        </div>
        <div class="header-menus">
            <div class="time-menu">
                <div>18:08:08</div>
                <div>2022.08.14</div>
            </div>
            <div class="line"></div>
            <div class="weather-menu">
                <img src="./images/weather.png" alt="" srcset="">
                <div>
                    <div>PM 2.5</div>
                    <div>27 ℃</div>
                </div>
            </div>
            <div class="collapase-menu">
                <div class="menu-contain">
                    <img src="./images/more.png" alt="" srcset="">
                </div>
            </div>
        </div>
    </div>
</div>
`;
Vue.component('header-bar',{
    template:headerBar,
    props:{
        activeIndex:{
            type:String,
            default:"1"
        }
    },
    data(){
        return{
            navTabs:[
                {
                    zh_text:'设备管理',
                    en_text:'She Bei Guan Li',
                    active:false,
                    pageUrl:'index-eq'
                },
                {
                    zh_text:'工单管理',
                    en_text:'Gong Dan Guan Li',
                    active:false,
                    pageUrl:'index'
                },
                {
                    zh_text:'监控管理',
                    en_text:'Shi Ping Jian Kong',
                    active:false,
                    pageUrl:'index-jk'
                },
                {
                    zh_text:'能耗管理',
                    en_text:'Neng Hao Guan Li',
                    active:false,
                    pageUrl:'index-nh'
                },
                {
                    zh_text:'智能控制',
                    en_text:'Zhi Neng Kong Zhi',
                    active:false,
                    pageUrl:'index-zk'
                },
            ],
        }
    },
    created(){
        this.navTabs[Number(this.activeIndex)].active=true
    },
    mounted(){
        
    },
    methods:{
        // changeTabs(index){
        //     this.navTabs.forEach((e,i)=>{
        //         index==i?e.active=true:e.active=false
        //     })
        // },
        pageTo(item){
            $(location).attr('href', item.pageUrl+'.html');
        },
    }
})