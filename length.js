let writeForm = document.querySelector('form');
let writeField = document.querySelector('textarea');
let submitBtn = document.querySelector('.send-button');

writeField.oninput = function () {
  if (writeField.value.length < 10 || writeField.value.length > 100) {
    writeField.classList.add('warning');
    submitBtn.disabled = true;
  } 
  else {
    writeField.classList.remove('warning');
    submitBtn.disabled = false;
  }
};