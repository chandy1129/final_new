$(function(){
    $("[type='checkbox']").on("change",updateProgress);
});
function updateProgress(){
    let hasChecked=0;
    var text;
    for(let x=0;x<$("[type='checkbox']").length;x++){
        if ($("[type='checkbox']")[x].checked){
            hasChecked+=1;
        }
        if(hasChecked==9){
            $("#talkBox").text("你真是稱職的好主人!");
        }
    }
    // $("meter").attr("min",0);
    $("meter").attr("max", $("[type='checkbox']").length);
    $("meter").attr("value", hasChecked);
}