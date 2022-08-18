var listStatusSeven=`
<div class="list-status-seven">
    <div class="list-status-seven-top">
        <div class="seven-wrap">
            <div class="seven-item status">状态</div>
            <template v-if="nenghao">
                <div class="seven-item operation">时间</div>
                <div class="seven-item position">事件报警信息</div>
            </template>
            <template v-else>
                <div class="seven-item operation">操作</div>
                <div class="seven-item position">位置</div>
            </template>
            
        </div>
    </div>
    <div class="list-status-seven-bottom">
        <div class="seven-bottom-item" v-for="(warn,warnIndex) in testData" :key="warnIndex">
            <div class="seven-wrap">
                <div class="seven-item status">
                    <div class="status-bot" :class="[warn.type==0?'orange':'']"></div>
                </div>
                <div class="seven-item operation">
                    <div class="operation-box">
                        <template v-if="nenghao">
                            <div>{{warn.date}}</div>
                        </template>
                        <template v-else>
                            <input type="checkbox" v-if="warn.type==0">
                            <img class="warning-img" v-if="warn.type==1" src="./images/warning.png" alt="" srcset="">
                        </template>
                    </div>
                </div>
                <div class="seven-item position">
                    <div class="position-box">
                        {{warn.text}}    
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
Vue.component('list-status-seven',{
    template:listStatusSeven,
    props:{
        nenghao:false
    },
    data(){
        return {
           testData:[
                {
                    status:0,
                    text:"综合楼五楼院长办公室",
                    type:0,
                    date:"2021/08/09"
                },
                {
                    status:0,
                    text:"医技楼四楼五号病房",
                    type:1,
                    date:"2021/08/09"
                },
                {
                    status:0,
                    text:"门诊楼二楼抽血厅",
                    type:1,
                    date:"2021/08/09"
                },
                {
                    status:1,
                    text:"住院楼四楼五号病房",
                    type:0,
                    date:"2021/08/09"
                },
                {
                    status:1,
                    text:"住院楼四楼五号病房",
                    type:0,
                    date:"2021/08/09"
                },
                {
                    status:0,
                    text:"医技楼四楼五号病房",
                    type:1,
                    date:"2021/08/09"
                },
           ]
        }
    }
})