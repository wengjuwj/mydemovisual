 // echarts字号自适应
 function fontSize(res) {
    var docEl = document.documentElement,
        clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (!clientWidth) return;
    var fontSize = 100 * (clientWidth / 1920);
    return res * fontSize;
}