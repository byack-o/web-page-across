const layerDepths = [100, 200, 400]

function handleOrientation(event) {
  //const alpha = event.alpha; // 端末の回転（方位）
  //const beta = event.beta;   // 前後の傾き
  const gamma = event.gamma; // 左右の傾き

  const images = document.querySelectorAll('.image-stack img')

  images.forEach((img, i) => {
    const depth = layerDepths[i] || 1.0;
    const moveX = -Math.tan(gamma * (Math.PI / 180)) * depth;
    //const moveY = Math.tan(beta * (Math.PI / 180)) * depth;

    //img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    img.style.transform = `translate(${moveX}px, 0px)`;
  });

  
}

window.addEventListener('deviceorientation', handleOrientation);