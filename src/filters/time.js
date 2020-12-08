export default function(time){
    let date = new Date(time);
    // 年
    let year = date.getFullYear();
    // 月
    let mouth = (date.getMonth() + 1).toString().padStart(2,0);
    // 日
    let day = date.getDate().toString().padStart(2,0);
    // 小时
    let hours = date.getHours().toString().padStart(2,0);
    // 分钟
    let minute = date.getMinutes().toString().padStart(2,0);
    // 秒
    let second = date.getSeconds().toString().padStart(2,0);
    return `${year}-${mouth}-${day} ${hours}:${minute}:${second}`
}