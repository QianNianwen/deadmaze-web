const host="http://101.132.146.173:10001"

function selectNav(n) {
    $("#menu-"+n).addClass("layui-this");

    // let host = window.location.host;
    // if(host === "101.132.146.173"){
    //     layer.alert('服务器即将到期（2021-02-25）网站迁移至<br>临时链接<a target="_blank" href="http://101.133.237.19">http://101.133.237.19</a><br><a target="_blank" href="http://deadmaze.qiannianwen.top">永久链接http://deadmaze.qiannianwen.top（备案中，暂时无法访问）</a>');
    // }else if(host === "101.133.237.19") {
    //     layer.alert('临时链接备案通过后将关闭<br><a target="_blank" href="http://deadmaze.qiannianwen.top">永久链接http://deadmaze.qiannianwen.top（备案中，暂时无法访问）</a>')
    // }
}

function setTpl(data, tpl, tplview, done) {
    layui.laytpl(tpl.innerHTML).render(data, function (html) {
        tplview.html(html);
        if (done !== undefined) {
            done();
        }
    });
}

function getUrlParam(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}

function patchZero(num){
    if(num.toString().length<2){
        return "0"+num;
    }
    return num.toString();
}

function queryArray(array,element,comparator){
    for (let i = 0; i < array.length; i++) {
        if(comparator(array[i],element)){
            return i;
        }
    }
    return -1;
}