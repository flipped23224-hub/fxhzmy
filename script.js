/**
 * 恋爱网页核心逻辑 - 全能版
 */

// 1. 当页面全部加载完毕后，再执行里面的逻辑（确保能抓到按钮和播放器）
window.onload = function() {
    console.log("网页已就绪！");

    // 获取隐形的音乐播放器
    const audio = document.getElementById('myAudio');

    // --- 功能 A: 绑定点击按钮发送思念 ---
    window.sendLove = function() {
        console.log("按钮被点击了");
        
        // 播放音乐
        if (audio) {
            audio.play().then(() => {
                console.log("音乐奏响成功！");
            }).catch(err => {
                console.warn("音乐播放受阻，可能是还没加载完:", err);
            });
        }

        // 弹出甜蜜提示
        alert("💕 思念已送达，听听这首属于我们的歌~");
    };

    // --- 功能 B: 开启爱心雨特效 ---
    // 每隔 300 毫秒生成一个爱心
    setInterval(createHeart, 300);
};

// --- 功能 C: 恋爱计时器逻辑 ---
function updateTimer() {
    const startDate = new Date('2023-02-24 22:30:00'); // 👈 重要：记得改成你们的纪念日！
    const now = new Date();
    const diff = now - startDate; // 毫秒差

    if (diff < 0) {
        document.getElementById('timer').innerText = "期待我们的开始";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // 更新到网页上的对应 ID 元素
    document.getElementById('d').innerText = days;
    document.getElementById('h').innerText = hours;
    document.getElementById('m').innerText = minutes;
    document.getElementById('s').innerText = seconds;
}

// 每秒更新一次计时器
setInterval(updateTimer, 1000);
updateTimer(); // 立即执行一次，防止首秒空白

// --- 功能 D: 制造飘落爱心的函数 ---
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-falling');
    heart.innerHTML = '❤️'; 
    
    // 随机位置 (0-100vw 代表屏幕宽度)
    heart.style.left = Math.random() * 100 + 'vw';
    
    // 随机大小 (10px - 30px)
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    // 随机掉落速度 (2s 到 5s)
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + 's';
    
    document.body.appendChild(heart);

    // 动画结束后自动删除，释放内存
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}
