document.addEventListener('DOMContentLoaded', function() {
  // プライバシーポリシーへのリンクをクリックしたときのイベントリスナー
  const privacyLink = document.getElementById('privacy-link');
  if (privacyLink) {
      privacyLink.addEventListener('click', function(event) {
          event.preventDefault();
          window.location.href = 'pages/privacy-policy.html';
      });
  }

  // 利用規約へのリンクをクリックしたときのイベントリスナー
  const termsLink = document.getElementById('terms-link');
  if (termsLink) {
      termsLink.addEventListener('click', function(event) {
          event.preventDefault();
          window.location.href = 'pages/terms-of-service.html';
      });
  }

  // その他のインタラクティブな機能をここに追加
});


function initOrientation() {
  if (
    typeof DeviceOrientationEvent !== 'undefined' &&
    typeof DeviceOrientationEvent.requestPermission === 'function'
  ) {
    // iOS 13以降：ユーザーの許可が必要
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          window.location.href = 'cobalt.html';
          //window.addEventListener('deviceorientation', handleOrientation);
        } else {
          alert('センサーの使用が許可されませんでした。');
        }
      })
      .catch(err => {
        console.error('センサー許可リクエストエラー:', err);
      });
  } else {
    // Androidなどはそのまま使える
    window.location.href = 'cobalt.html';
    //window.addEventListener('deviceorientation', handleOrientation);
  }
}


// ボタンにイベント登録
document.getElementById('startOrientation').addEventListener('click', initOrientation);

// ページ読み込み後に初期化
//window.addEventListener('load', initOrientation);