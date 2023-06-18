var topic = [
    "【新竹寵物用品暨服務展 新竹縣體育館",
    "【展昭台北寵物用品展】經典場 台北南港一館",
    "【台北寵物用品博覽會】台北世貿一館",
    "【展昭世界貓咪博覽會】台北南港一館",
    "【台北國際寵物用品博覽會（冬季展）】台北南港二館",
    "【展昭高雄寵物用品展】高雄展覽館"
];

var topic2 = [
    "6/22～6/25",
    "7/7～7/10",
    "9/1～9/4",
    "10/12～10/15",
    "11/24～11/27",
    "12/8～12/11"
];

var startDate= new Date();
function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21);

