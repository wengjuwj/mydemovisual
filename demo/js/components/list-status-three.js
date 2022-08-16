var listStatusThree=`
    <div class="left-box1-box">
        <div class="left-box1-item" 
        :class="['level_'+(levelIndex+1)]"
        v-for="(levelItem,levelIndex) in jkLevel" :key="levelIndex">
            <div class="left-box1-top">
                <div class="left-top-text">{{levelItem.level}}</div>
                <div class="left-top-bottom">{{levelItem.levelText}}</div>
            </div>
            <div class="left-box1-bottom">{{levelItem.number}}</div>
        </div>
        
    </div>
`;
Vue.component('list-status-three',{
    template:listStatusThree,
    data(){
        return {
            // 监控点
            jkLevel:[
                {
                    level:'I',
                    levelText:'一类',
                    number:30,
                },
                {
                    level:'II',
                    levelText:'二类',
                    number:60,
                },
                {
                    level:'III',
                    levelText:'三类',
                    number:100,
                },
                {
                    level:'IV',
                    levelText:'四类',
                    number:150,
                },
                {
                    level:'总',
                    levelText:'全部',
                    number:340,
                },
            ],
        }
    }
})