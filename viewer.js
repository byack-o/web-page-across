function handleOrientation(event) {
  const alpha = event.alpha; // 端末の回転（方位）
  const beta = event.beta;   // 前後の傾き
  const gamma = event.gamma; // 左右の傾き

  const output = document.getElementById('output');
  output.textContent = `alpha: ${alpha?.toFixed(2)}, beta: ${beta?.toFixed(2)}, gamma: ${gamma?.toFixed(2)}`;
}

window.addEventListener('deviceorientation', handleOrientation);