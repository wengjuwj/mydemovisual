var listStatusOne=`
    <div class="right-box1-box">
        <div class="box1-box-item blue">
            <div class="top-text">135</div>
            <div class="bottom-color">设备故障</div>
        </div>
        <div class="box1-box-item orange">
            <div class="top-text">135</div>
            <div class="bottom-color">硬件更换</div>
        </div>
        <div class="box1-box-item green">
            <div class="top-text">135</div>
            <div class="bottom-color">线路损坏</div>
        </div>
        <div class="box1-box-item red">
            <div class="top-text">135</div>
            <div class="bottom-color">其他</div>
        </div>
    </div>
`;
Vue.component('list-status-one',{
    template:listStatusOne,
    data(){
        return {

        }
    }
})