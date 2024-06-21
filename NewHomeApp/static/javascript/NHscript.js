const slideContents = document.querySelectorAll('.slide-content');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;

function showDot(n) {
  dots.forEach((dot, index) => {
    dot.classList.remove('active');
    if (index === n) {
      dot.classList.add('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideContents.length;
  showDot(currentIndex);
}

function getCurrentIndex() {
  return currentIndex;
}

/*フェード演出*/
const fadeElements = document.querySelectorAll('.fade');

function isVisible(elem) {
    const rect = elem.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function toggleFade() {
    fadeElements.forEach((elem, index) => {
        if (isVisible(elem) && !elem.classList.contains('visible')) {
            elem.style.transitionDelay = `${index * 300}ms`; // 遅延時間を設定
            elem.classList.add('visible');
        }
    });
}

document.addEventListener('scroll', toggleFade);
window.addEventListener('resize', toggleFade);

// 初期設定
showDot(currentIndex);
slideInterval = setInterval(nextSlide, 15000); // 最初は15秒後に切り替え

// 15秒後に間隔を5秒に変更
setTimeout(() => {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000); // 5秒間隔で切り替え
}, 15000);