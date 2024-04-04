const copyText = document.querySelector('.bank-number span');
copyText.addEventListener('click', async function() {
  try {
    await navigator.clipboard.writeText(copyText.innerText);
    console.log('텍스트가 클립보드에 복사되었습니다.');
  } catch (err) {
    console.error('복사 실패:', err);
  }
});