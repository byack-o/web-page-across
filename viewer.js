function handleOrientation(event) {
  //const alpha = event.alpha; // 端末の回転（方位）
  const beta = event.beta ?? 0;   // 前後の傾き（上下）
  const gamma = event.gamma ?? 0; // 左右の傾き（左右）

    // 初回に基準角を記録
  if (baseBeta === null || baseGamma === null) {
    baseBeta = beta;
    baseGamma = gamma;
  }

  // 相対角度を算出（現在 - 基準）
  const deltaBeta = beta - baseBeta;
  const deltaGamma = gamma - baseGamma;

  const images = document.querySelectorAll('.image-stack img')

  images.forEach((img, i) => {
    const depth = layerDepths[i] || 1.0;
    const moveX = -Math.tan(deltaGamma * (Math.PI / 180)) * depth;
    const moveY = Math.tan(deltaBeta * (Math.PI / 180)) * depth;

    img.style.transform = `translate(${moveX}px, ${moveY}px)`;
    //img.style.transform = `translate(${moveX}px, 0px)`;
  });

  
}

window.addEventListener('deviceorientation', handleOrientation);