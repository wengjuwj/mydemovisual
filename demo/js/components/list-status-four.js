var listStatusFour=`
    <div class="list-status-four">
        <div class="list-status-four-item blue">
            <div class="top"></div>
            <div class="middle">1920</div>
            <div class="bottom">正常</div>
        </div>
        <div class="list-status-four-item yellow">
            <div class="top"></div>
            <div class="middle">1920</div>
            <div class="bottom">检修</div>
        </div>
        <div class="list-status-four-item red">
            <div class="top"></div>
            <div class="middle">1920</div>
            <div class="bottom">故障</div>
        </div>
    </div>
`;
Vue.component('list-status-four',{
    template:listStatusFour,
    data(){
        return {
           
        }
    }
})