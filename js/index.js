const button = document.querySelector('.start_button');

button.addEventListener('click', () => {
  window.location.href = "game.html";
});

const bestScore = document.querySelector('.best_score');

bestScore.innerHTML = `Лучший счет: ${window.localStorage.getItem('bestScore') || 0}`;
