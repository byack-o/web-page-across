const layerDepths = [0.5, 1.0, 1.5]

function handleOrientation(event) {
  //const alpha = event.alpha; // 端末の回転（方位）
  const beta = event.beta;   // 前後の傾き
  const gamma = event.gamma; // 左右の傾き

  const images = document.querySelectorAll('.image-stack img')

  images.forEach((img, i) => {
    const depth = layerDepths[i] || 1.0;
    const moveX = gamma * depth;
    const moveY = beta * depth;

    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });

  //const output = document.getElementById('output');
  //output.textContent = `alpha: ${alpha?.toFixed(2)}, beta: ${beta?.toFixed(2)}, gamma: ${gamma?.toFixed(2)}`;
}

window.addEventListener('deviceorientation', handleOrientation);