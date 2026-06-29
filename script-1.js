const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const envelope = document.getElementById('envelope');
const envelopeWrap = document.getElementById('envelopeWrap');
const letterWrap = document.getElementById('letterWrap');

openBtn.addEventListener('click', () => {
  envelope.classList.add('opening');

  setTimeout(() => {
    envelopeWrap.classList.add('hidden');
    letterWrap.classList.remove('hidden');
  }, 500);
});

closeBtn.addEventListener('click', () => {
  letterWrap.classList.add('hidden');
  envelope.classList.remove('opening');
  envelopeWrap.classList.remove('hidden');
});
