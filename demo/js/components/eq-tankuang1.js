var tankuang1=`
    <div class="tankuang-box">
        <div class="tankuang-wrap">
            <div class="tankuang-header">
                <div class="tankuang-title">CT机详细信息</div>
                <div class="tankuang-icon" @click.stop="modelhide">
                    <img src="./images/btn.png" alt="" srcset="">
                </div>
            </div>
            <div class="tankuang-decoration"></div>
            <div class="tankuang-content">
                <div class="tankuang-left">
                    <img src="./images/shebei.png" alt="" srcset="">
                </div>
                <div class="tankuang-right">
                    <div class="tabs-top">
                        <div class="tabs-items" :class="[item.active?'active':'']" v-for="(item,index) in tabsTopList" :key="index" @click.stop="changeTabs(index)">{{item.text}}</div>
                    </div>
                    <div class="tabs-content">
                        <img v-if="activeIndex==0" src="./images/basic.png" alt="" srcset="">
                        <img v-if="activeIndex==1" src="./images/electric.png" alt="" srcset="">
                        <img v-if="activeIndex==2" src="./images/ziliao.png" alt="" srcset="">
                        <img v-if="activeIndex==3" src="./images/repair.png" alt="" srcset="">
                    </div>
                </div>
            </div>
        </div>
    </div>
`;
Vue.component('tan-kuang',{
    template:tankuang1,
    props:{
       
    },
    data(){
        return{
            activeIndex:0,
            tabsTopList:[
                {
                    text:'基本信息',
                    active:true
                },
                {
                    text:'用电量分析',
                    active:false
                },
                {
                    text:'设备资料',
                    active:false
                },
                {
                    text:'维修保养',
                    active:false
                },
            ]
        }
    },
    created(){
        
    },
    mounted(){
        
    },
    methods:{
        changeTabs(index){
            this.activeIndex=index;
                this.tabsTopList.forEach((e,i)=>{
                    index==i?e.active=true:e.active=false
                })
        },
        modelhide(){
            this.$emit('modalshow')
        }
    }
})