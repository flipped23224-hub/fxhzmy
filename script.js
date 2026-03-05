/**
 * 恋爱网页核心逻辑 - 全能版
 */
// 1. 这里填入你的 20 句情话
const loveNotes = [
    "第一张合照 不太敢亲密",
    "这时候拍合照还很羞涩！",
    "第一次正式约会",
    "第一次来学校找我",
    "第一次一起跨年看电影",
    "在一起一年啦",
    "喜欢你认真看我的样子",
    "这张图里有两个人很帅",
    "你抽空来见我",
    "我们在一起500天啦",
    "喜欢你拿相机拍我们两个",
    "这张照片的光线真好",
    "在这里留下了kiss视频",
    "带着新做的美甲又出发旅游啦",
    "两个公主",
    "我们一起做了戒指",
    "第一次拍大头贴",
    "你偷偷跑来找我",
    "我们1000天啦",
    "第一次一起滑雪"
];

// 2. 这里的日期改成你们在一起的日子！
const START_DATE_STR = '2023-02-24 22:30:00'; 

const TOTAL_PHOTOS = 20; 
let currentSlide = 0;
// 使用 DOMContentLoaded 确保 HTML 加载完后再运行
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 恋爱网页启动中...");
    
    // 初始化计时器
    startTimer();
    
    // 初始化相册
    initAlbum();
    
    // 启动特效
    setInterval(createHeart, 300);
    setInterval(nextSlide, 5000);
});

function initAlbum() {
    const photoList = document.getElementById('photo-list');
    if (!photoList) {
        console.error("❌ 找不到 photo-list 盒子，请检查 HTML！");
        return;
    }

    photoList.innerHTML = ''; // 清空可能存在的旧内容

    for (let i = 1; i <= TOTAL_PHOTOS; i++) {
        const slideWrap = document.createElement('div');
        slideWrap.className = (i === 1) ? 'slide active' : 'slide';

        const img = document.createElement('img');
        // 👇 如果你的照片后缀是大写，请把下面的 .jpg 改成 .JPG
        img.src = i + '.jpg'; 
        
        // 监控照片加载
        img.onerror = () => console.warn(`⚠️ 无法加载照片: ${i}.jpg`);

        const noteDiv = document.createElement('div');
        noteDiv.className = 'photo-note';
        noteDiv.innerText = loveNotes[i-1] || "每一个瞬间都值得铭记 ❤️";

        slideWrap.appendChild(img);
        slideWrap.appendChild(noteDiv);
        photoList.appendChild(slideWrap);
    }
    console.log("✅ 相册初始化完成，共装载 " + TOTAL_PHOTOS + " 张照片");
}

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;
    
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() { showSlide(currentSlide + 1); }
function prevSlide() { showSlide(currentSlide - 1); }

function sendLove() {
    const audio = document.getElementById('myAudio');
    
    // 技巧 1：先尝试“加载”一下，唤醒浏览器
    audio.load(); 

    // 技巧 2：在弹出提示前立即尝试播放
    const playPromise = audio.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("手机端播放成功！");
            alert("💕 思念已送达，听听这首歌~");
        }).catch(error => {
            console.log("播放被拦截:", error);
            // 如果还是不行，引导用户点一下网页任何地方
            alert("由于浏览器限制，请点一下屏幕后再点按钮哦！");
        });
    }
}

function startTimer() {
    setInterval(() => {
        const diff = new Date() - new Date(START_DATE_STR);
        if (isNaN(diff)) return;
        document.getElementById('d').innerText = Math.floor(diff / 86400000);
        document.getElementById('h').innerText = Math.floor((diff / 3600000) % 24);
        document.getElementById('m').innerText = Math.floor((diff / 60000) % 60);
        document.getElementById('s').innerText = Math.floor((diff / 1000) % 60);
    }, 1000);
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart-falling';
    heart.innerHTML = '❤️'; 
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    const dur = Math.random() * 3 + 2;
    heart.style.animationDuration = dur + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), dur * 1000);
}




