var listStatusSix=`
<div class="list-status-six">
        <div class="list-status-six-top">
            <div class="six-top-item">全部</div>
            <div class="six-top-item number">322</div>
        </div>
        <div class="list-status-six-bottom">
            <div class="list-status-six-item blue">
                <div class="top"></div>
                <div class="middle">正常</div>
                <div class="bottom">1920</div>
            </div>
            <div class="list-status-six-item yellow">
                <div class="top"></div>
                <div class="middle">停运</div>
                <div class="bottom">1920</div>
            </div>
            <div class="list-status-six-item red">
                <div class="top"></div>
                <div class="middle">故障</div>
                <div class="bottom">1920</div>
            </div>
        </div>
    </div>
`;
Vue.component('list-status-six',{
    template:listStatusSix,
    data(){
        return {
           
        }
    }
})