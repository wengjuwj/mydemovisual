var listStatusTwo=`
    <div class="right-box1-box ">
        <div class="box1-box-item jk all">
            <div class="top-text">全部</div>
            <div class="bottom-color">219</div>
        </div>
        <div class="box1-box-item jk nomal">
            <div class="top-text">正常</div>
            <div class="bottom-color">218</div>
        </div>
        <div class="box1-box-item jk offline">
            <div class="top-text">离线</div>
            <div class="bottom-color">65</div>
        </div>
    </div>
`;
Vue.component('list-status-two',{
    template:listStatusTwo,
    data(){
        return {

        }
    }
})