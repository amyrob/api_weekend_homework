const Request = require('../helpers/request.js');

const CharacterData = function() {
  this.url ='http://hp-api.herokuapp.com/api/characters';
  this.data = null;

}

CharacterData.prototype.getData = function (onComplete) {
  const request = new Request(this.url,);
  request.get((data) => {
    this.data = data;
    onComplete(data);
    console.log(data);
  })
};

module.exports = CharacterData;
