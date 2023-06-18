$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>日期</th><th>主題&地點</th></tr>");
    let topicCount= topic.length;

    let millisecsPerDay = 24*60*60*1000;

    for(var x=0;x<topicCount;x++){
        $("#courseTable").append(
            "<tr>"+
            `<td>${x+1}</td>`+
            `<td>${topic2[x]}</td>`+
            `<td>${topic[x]}</td>`+
            "</tr>");
    }

});