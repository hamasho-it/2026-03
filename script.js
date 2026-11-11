// Trashbusters 共通JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // すべて既読にするボタン
  const readAllBtn = document.getElementById('btn-read-all');
  if (readAllBtn) {
    readAllBtn.addEventListener('click', () => {
      const unreadDots = document.querySelectorAll('.mail-unread-dot');
      unreadDots.forEach(dot => dot.style.display = 'none');
      alert('すべてのメールを既読にしました。');
    });
  }

  // すべて削除するボタン
  const deleteAllBtn = document.getElementById('btn-delete-all');
  if (deleteAllBtn) {
    deleteAllBtn.addEventListener('click', () => {
      const mailList = document.querySelector('.mail-list');
      if (mailList) {
        mailList.innerHTML = '<p style="padding: 20px; color: #666;">メールはありません</p>';
      }
      alert('すべてのメールを削除しました。');
    });
  }

  // 検索消去ボタン (文字消去ボタン)
  const clearSearchBtn = document.getElementById('btn-clear-search');
  const searchInput = document.getElementById('search-input');
  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
    });
  }

  // 設定オン/オフボタン切り替え
  const toggleButtons = document.querySelectorAll('.toggle-btn button');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const parent = this.parentElement;
      parent.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // 交換するボタン
  const exchangeBtn = document.getElementById('btn-exchange');
  const exchangeModal = document.getElementById('exchange-modal');
  const modalCloseBtn = document.getElementById('btn-modal-close');

  if (exchangeBtn && exchangeModal) {
    exchangeBtn.addEventListener('click', () => {
      exchangeModal.style.display = 'flex';
    });
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      window.location.href = './index.html';
    });
  }

  // ゲーム簡易クリックアクション
  const gameActionBtn = document.getElementById('btn-game-action');
  const gameScore = document.getElementById('game-score');
  if (gameActionBtn && gameScore) {
    let score = 0;
    gameActionBtn.addEventListener('click', () => {
      score += 10;
      gameScore.textContent = score + ' Pt獲得！';
    });
  }
});
