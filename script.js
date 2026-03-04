function sendLove() {
    // 1. 获取那个隐形的播放器
    const audio = document.getElementById('myAudio');
    // 2. 播放音乐
    audio.play().catch(error => {
        console.log("播放失败，可能是文件路径不对:", error);
    });
    // 3. 原有的弹出提示（也可以改成更浪漫的话）
    alert("💕 思念已送达，这首歌送给你~");
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
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-falling');
    heart.innerHTML = '❤️'; // 你也可以换成 💕 或 🌸
    
    // 随机位置
    heart.style.left = Math.random() * 100 + 'vw';
    
    // 随机大小
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    // 随机掉落速度 (2s 到 5s 之间)
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + 's';
    
    document.body.appendChild(heart);

    // 动画结束后，把这个爱心从网页里删掉，不然网页会卡
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// 每 300 毫秒生成一个爱心
setInterval(createHeart, 300);

