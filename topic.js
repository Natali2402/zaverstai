let select = document.querySelector('select');
let articles = document.querySelectorAll('.topics');

select.onchange = function () {
    for (let article of articles) {
      if (article.dataset.category !== select.value && select.value !=='topic') {
        article.classList.add('hidden');
      } else {
        article.classList.remove('hidden');
      }
    }
}

if (select.value == 'topic') {
    article.classList.remove('hidden');
    for (let article of articles) {
      article.classList.remove('hidden');
    }
  } else {
    article.classList.add('hidden');
  }