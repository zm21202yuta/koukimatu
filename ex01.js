//ボタンの設定//
const btn2 = document.getElementById('btn2');
const btn2Text = document.getElementById('btn2-text');

btn2.addEventListener('click', () => {
  btn2Text.classList.toggle('hidden');
});
