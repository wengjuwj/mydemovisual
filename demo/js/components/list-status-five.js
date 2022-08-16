var listStatusFive=`
    <div class="list-status-five">
        <div class="list-status-five-item red">
            <div class="top">
                <div>
                    <div>当前</div>
                    <div>需维修</div>
                </div>
            </div>
            <div class="bottom">143</div>
        </div>
        <div class="list-status-five-item yellow">
            <div class="top">
                <div>
                    <div>近30天</div>
                    <div>需维修</div>
                </div>
            </div>
            <div class="bottom">143</div>
        </div>
        <div class="list-status-five-item blue">
            <div class="top">
                <div>
                    <div>无需</div>
                    <div>维修</div>
                </div>
            </div>
            <div class="bottom">143</div>
        </div>
    </div>
`;
Vue.component('list-status-five',{
    template:listStatusFive,
    data(){
        return {
           
        }
    }
})