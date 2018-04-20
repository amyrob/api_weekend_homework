const CharacterData = require('./models/character_data.js');
const CharacterView = require('./views/character_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const characterSelect = document.querySelector('#character-select');
  const characterContainer = document.querySelector('#character-view');
  const characterView = new CharacterView(characterSelect, characterContainer);

  const characterData = new CharacterData();

  characterSelect.addEventListener('change', (event) => {
    const characterDiv = document.querySelector('#character-view');
    const selectedIndex = event.target.value;
    const selectedCharacter = characterData.data[selectedIndex];
    characterView.renderDetail(selectedCharacter);
  });


  characterData.getData((data) => {
    characterView.renderSelect(data);
  });
});
