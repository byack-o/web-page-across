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