$(document).ready(function(){
    $("#my-slider").camRollSlider();
    setFontSize();
    window.onload = function(){
        setFontSize();
        $("#my-slider").camRollSlider();
    }
    window.onresize = function(){
        setFontSize();
        $("#my-slider").camRollSlider();
    }
    function setFontSize(){
        var width =
            document.documentElement.clientWidth;//获取页面可见宽度   
        if(width>270){
            var w = width/27 
            var html = document.getElementsByTagName('html')[0];
            html.style.fontSize = w+'px';
        }else{
            //alert("此屏幕大小不支持")
        }
    }
    
})