/*
window.onload=function(){
    //document.write("Hello JavaScrpit");
};
*/

$(document).ready(function(){
    $("input").click(function(){
        let numberOfListItem = $("#choices li").length;
        let randomChildNumber =  Math.floor(Math.random()*numberOfListItem);
        //alert("Hi");//
        $("#random-result").text($("#choices li").eq(randomChildNumber).text());
        $("#random-pic").attr("src",pictures[randomChildNumber]);        
    });
});