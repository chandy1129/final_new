let imageURL_Array = [
    "img/team-1.jpg",
    "img/team-2.jpg",
    "img/team-3.jpg",
    "img/team-4.jpg",
    "img/team-5.jpg"
];


$(function(){
    $("input").on("click",function(){
        // alert("Hi");
        // $("h1").text("Hello");
        var numberOfListItem = $("li").length;
        // 3
        // 0 ~ 1 => 0 ~ 3
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        console.log(randomChildNumber);
        $("h1").text($("li").eq(randomChildNumber).text());
        // change image -> change image element's src
        $("img").attr("src",imageURL_Array[randomChildNumber]);
    });
});