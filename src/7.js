export default function addHistory() {
  const $inputHistory = document.querySelector('.input-history');
  const $btnHistory = document.getElementById('add-history');
  const $ulHistories = document.querySelector('.histories');

  $inputHistory.addEventListener('input', () => {
    if ($inputHistory.value === '') {
      $btnHistory.setAttribute('hidden', true);
    } else {
      $btnHistory.removeAttribute('hidden');
    }
  });

  $btnHistory.addEventListener('click', e => {
    const $li = document.createElement('li');
    $li.innerText = $inputHistory.value;
    $ulHistories.append($li);

    $inputHistory.value = '';
    e.target.setAttribute('hidden', true);

    if ($ulHistories.childElementCount > 5) {
      $ulHistories.removeChild($ulHistories.firstElementChild);
    }
  });
}
