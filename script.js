/**
 * 恋爱网页核心逻辑 - 全能版
 */
// 1. 这里填入你的 20 句情话
const loveNotes = [
    "第一张：第一张合照 不太敢亲密",
    "第二张：这时候拍合照还很羞涩！",
    "第三张：第一次正式约会",
    "第四张：第一次来学校找我",
    "第五张：第一次一起跨年看电影",
    "第六张：在一起一年啦",
    "第七张：喜欢你认真看我的样子",
    "第八张：这张图里有两个人很帅",
    "第九张：你抽空来见我",
    "第十张：我们在一起500天啦",
    "第十一张：喜欢你拿相机拍我们两个",
    "第十二张：这张照片的光线真好",
    "第十三张：在这里留下了kiss视频",
    "第十四张：带着新做的美甲又出发旅游啦",
    "第十五张：两个公主",
    "第十六张：我们一起做了戒指",
    "第十七张：第一次拍大头贴",
    "第十八张：你偷偷跑来找我",
    "第十九张：我们1000天啦",
    "第二十张：第一次一起滑雪",
];

// 2. 这里的日期改成你们在一起的日子！
const START_DATE_STR = '2023-02-24 22:30:00'; 

const TOTAL_PHOTOS = 20; 
let currentSlide = 0;

window.onload = function() {
    initAlbum(); 
    setInterval(createHeart, 300); // 开启爱心雨
    setInterval(nextSlide, 5000);  // 开启自动切图
};
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
};

// 初始化相册
function initAlbum() {
    const photoList = document.getElementById('photo-list');
    
    // 监控点 1：检查能不能找到盒子
    if (!photoList) {
        console.error("【关键错误】：在 HTML 里找不到 id 为 photo-list 的 div！");
        return;
    }

    console.log("【提示】：找到盒子了，准备装载 " + TOTAL_PHOTOS + " 张照片...");

    for (let i = 1; i <= TOTAL_PHOTOS; i++) {
        const slideWrap = document.createElement('div');
        slideWrap.classList.add('slide');
        if (i === 1) slideWrap.classList.add('active');

        const img = document.createElement('img');
        img.src = `${i}.jpg`; 
        
        // 监控点 2：检查照片文件是否正常触发加载
        img.onerror = function() {
            console.warn("【警告】：照片 " + i + ".jpg 加载失败，请检查文件名和后缀！");
        };

        const noteDiv = document.createElement('div');
        noteDiv.classList.add('photo-note');
        noteDiv.innerText = loveNotes[i-1] || "每一个瞬间都值得被记录";

        slideWrap.appendChild(img);
        slideWrap.appendChild(noteDiv);
        photoList.appendChild(slideWrap);
    }
    
    // 监控点 3：确认循环是否跑完
    console.log("【完成】：照片标签全部生成完毕！");
}

// 切换照片逻辑
function showSlide(index) {
    const slides = document.getElementsByClassName('slide');
    if (slides.length === 0) return;
    if (index >= slides.length) currentSlide = 0;
    else if (index < 0) currentSlide = slides.length - 1;
    else currentSlide = index;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[currentSlide].classList.add('active');
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

// 倒计时逻辑
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

// 爱心雨逻辑
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-falling');
    heart.innerHTML = '❤️'; 
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    const duration = Math.random() * 3 + 2;
    heart.style.animationDuration = duration + 's';
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, duration * 1000);
}


