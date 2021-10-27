import addHistory from './7';

describe('homework-07', () => {
  describe('Check interface', () => {
    document.body.innerHTML = `<div class="mainBody">
  <h2>Histories</h2>
  <input class="input-history" type="text" value="" />
  <button id="add-history" type="button" hidden>Add</button>
  <ul class="histories">
    <li>history 1</li>
    <li>history 2</li>
    <li>history 3</li>
  </ul>
  </div>`;

    addHistory();

    const $input = document.querySelector('.input-history');
    const $btn = document.getElementById('add-history');
    const $ulHistories = document.querySelector('.histories');

    it('btn is hidden if input is empty', () => {
      $input.value = '';
      expect($btn.hasAttribute('hidden')).toBe(true);
    });

    it('btn is shown if text entered in input', () => {
      $input.value = 'show me button';
      $input.dispatchEvent(new Event('input'));
      expect($btn.hasAttribute('hidden')).toBe(false);
    });

    it('adds paragraph on click', () => {
      $input.value = '123';
      $btn.click();
      expect($ulHistories.childElementCount).toBe(4);
    });

    it('paragraph contains the correct text', () => {
      $input.value = 'correct text';
      $btn.click();
      expect($ulHistories.lastElementChild.innerText).toBe('correct text');
    });

    it('show no more than 5 paragraphs', () => {
      $input.value = 'text';
      for (let i = 0; i < 10; i += 1) {
        $btn.click();
      }
      expect($ulHistories.childElementCount).toBe(5);
    });
  });
});
