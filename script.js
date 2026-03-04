function sendLove() {
    alert("💕 爱心已发送！对方收到了你的思念~");
}// script.js
function updateTimer() {
    const startDate = new Date('2023-02-24 22:30:00'); // 👈 改成你们在一起的确切时间
    const now = new Date();
    
    const diff = now - startDate; // 毫秒差

    // 计算天、时、分、秒
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // 把数字填进网页里
    document.getElementById('d').innerText = days;
    document.getElementById('h').innerText = hours;
    document.getElementById('m').innerText = minutes;
    document.getElementById('s').innerText = seconds;
}

// 每隔 1 秒执行一次 updateTimer
setInterval(updateTimer, 1000);

// 页面一加载就先执行一次，避免 1 秒的空白
updateTimer();

function sendLove() {
    alert("💕 信号已发射！记得看手机哦~");
}