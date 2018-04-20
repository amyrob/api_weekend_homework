const CharacterView = function (characterSelect, characterContainer) {
  this.characterSelect = characterSelect;
  this.characterContainer = characterContainer;
}

CharacterView.prototype.renderSelect = function (characterData) {
  characterData.forEach((character, index) => {
    const characterOption = document.createElement('option');
    characterOption.textContent = character.name;
    characterOption.value = index;
    this.characterSelect.appendChild(characterOption);
    
  });

};

CharacterView.prototype.renderDetail = function (character) {
  const characterName = document.createElement('p');
  characterName.textContent = character.name;
  this.characterContainer.appendChild(characterName);

  const characterImage = document.createElement('img');
  characterImage.src = character.image;
  this.characterContainer.appendChild(characterImage);
};


module.exports = CharacterView;
