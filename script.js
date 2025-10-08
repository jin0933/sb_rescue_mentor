function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    icon.textContent = 'light_mode';
    label.textContent = '라이트 모드';
    localStorage.setItem('theme', 'dark');
  } else {
    icon.textContent = 'dark_mode';
    label.textContent = '다크 모드';
    localStorage.setItem('theme', 'light');
  }
}

// 페이지 로드시 저장된 테마 적용
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;
  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');

  if (savedTheme === 'dark') {
    body.classList.add('dark');
    icon.textContent = 'light_mode';
    label.textContent = '라이트 모드';
  } else {
    body.classList.remove('dark');
    icon.textContent = 'dark_mode';
    label.textContent = '다크 모드';
  }
};

const noticeModal = document.getElementById('notice-modal');
const noticeBtn = document.querySelector('.menu-button[onclick*="notice.html"]');

// 버튼 클릭 → 모달 열기
noticeBtn.addEventListener('click', function(e) {
    e.preventDefault(); // 기존 링크 이동 막기
    noticeModal.style.display = 'flex';
});

// 모달 배경 클릭 → 모달 닫기
noticeModal.addEventListener('click', function() {
    noticeModal.style.display = 'none';
});

