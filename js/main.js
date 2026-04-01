// 简单交互效果
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 图片加载渐入效果
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease-in';
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
    });

    // 博客页面：打字动画效果（标题）
    if (document.querySelector('.blog-title')) {
        const title = document.querySelector('.blog-title');
        const text = title.textContent;
        title.textContent = '';
        let i = 0;

        setTimeout(() => {
            const typing = setInterval(() => {
                if (i < text.length) {
                    title.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(typing);
                }
            }, 50);
        }, 500);
    }
});
