$(function(){

    $("ul.menu > li").mouseenter(function(){
        $(this).find(".submenu li").stop().slideDown(400);
    });
    $("ul.menu > li ").mouseleave(function(){
        $(this).find(".submenu li").stop().slideUp(400);
    });

    
    $('.slide:gt(0)').hide()
    setInterval(function(){
    $('.slide:first').fadeOut(800).next().fadeIn(800)
    $('.slide:first').appendTo('.slides')
},3000)

    $("#open").click(function(){
        $(".modal").show().fadeIn(400);
    })
    $("button").click(function(){
        $(".modal").hide().fadeOut(400);
    })



});