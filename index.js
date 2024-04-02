document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.main-container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const fruits = document.querySelectorAll('.fruit-container');
    let placedFruits = [];
    const reservedTopSpace = 70; // 为中心消息保留的空间

    function isOverlapping(elemRect, otherRects) {
        for (let i = 0; i < otherRects.length; i++) {
            if (!(elemRect.right <= otherRects[i].left ||
                  elemRect.left >= otherRects[i].right ||
                  elemRect.bottom <= otherRects[i].top ||
                  elemRect.top >= otherRects[i].bottom)) {
                return true;
            }
        }
        return false;
    }

     fruits.forEach(fruitContainer => {
        let maxAttempts = 500;
        let placed = false;
        const textSize = 50; // 假设文字占用的最大宽度

        while (!placed && maxAttempts-- > 0) {
            const screenSize = window.innerWidth;
            let size; // 声明变量size
            if (screenSize < 750) {
                size = Math.random() * (200 - 100) + 100; // 对于较小的屏幕，减小尺寸范围
            } else {
                size = Math.random() * (300 - 150) + 150; // 原尺寸范围保持不变
            }
            // 不再需要这一行：const size = Math.random() * (300 - 150) + 150;
            fruitContainer.style.width = `${size}px`;
            fruitContainer.style.height = `${size}px`;
        

            
            const x = Math.random() * (containerWidth - size);
            // 确保y的值至少为30，以保持顶部边距
            const y = Math.random() * (containerHeight - size - reservedTopSpace) + reservedTopSpace;

            const fruitRect = {
                left: x,
                top: y,
                right: x + size,
                bottom: y + size
            };

            if (!isOverlapping(fruitRect, placedFruits)) {
                // 定位fruitContainer
                fruitContainer.style.left = `${x}px`;
                fruitContainer.style.top = `${y}px`;
                const arrowAndName = document.createElement('div');
                arrowAndName.innerHTML = `&#x27A4; ${fruitContainer.querySelector('img').alt}`;
                arrowAndName.style.position = 'absolute';
                arrowAndName.style.left = '50%'; // 居中
            arrowAndName.style.bottom = `${size + 5}px`; // 放在水果的上方
            arrowAndName.style.transform = 'translateX(-50%)'; // 水平居中调整
                arrowAndName.style.color = '#000';
                fruitContainer.appendChild(arrowAndName);
                
                placedFruits.push(fruitRect);
                placed = true;
            }
        }


        if (!placed) {
            console.log('Could not place fruit without overlapping after 100 attempts:', fruitContainer);
        }
    });

});


function navigateToFruitPage(fruitName) {
    // 根据传递的水果名称重定向到相应的 HTML 页面
    switch(fruitName) {
        case 'page1':
            window.location.href = 'page1.html'; // 假设你有一个名为 apple.html 的页面
            break;
        case 'banana':
            window.location.href = 'banana.html'; // banana.html 页面
            break;
        case 'blueberry':
            window.location.href = 'blueberry.html'; // blueberry.html 页面
            break;
        case 'kiwi':
            window.location.href = 'kiwi.html'; // kiwi.html 页面
            break;
        case 'mango':
            window.location.href = 'mango.html'; // mango.html 页面
            break;
        case 'orange':
            window.location.href = 'orange.html'; // orange.html 页面
            break;
        case 'pineapple':
            window.location.href = 'pineapple.html'; // pineapple.html 页面
            break;
        case 'watermelon':
            window.location.href = 'watermelon.html'; // watermelon.html 页面
            break;
        default:
            console.error('Unknown fruit:', fruitName);
            // 可以选择重定向到一个默认页面或显示错误消息
    }
}
