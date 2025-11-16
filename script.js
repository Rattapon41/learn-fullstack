const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

function updateButton() {
  if (body.classList.contains('dark-theme')) {
    toggleBtn.textContent = "โหมดสว่าง";
  } else {
    toggleBtn.textContent = "โหมดมืด";
  }
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-theme');

  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }

  updateButton();
});

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-theme');
}

updateButton();
