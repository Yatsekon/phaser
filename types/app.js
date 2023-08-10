var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var _game = new Phaser.Game(config);
var _totalCardNumber = 8;
var _halfCardsNumber = _totalCardNumber / 2;
let _currentCardInParty = [];
var _cardToAttribute = [];
let _cardInDouble = [];
var _numberOfDouble = 0;
var _numberOfRandom = 0;
var _spriteCards = [];
let _cards = [];

function preload ()
{

  this.load.image('background', 'assets/background.png');
  this.load.image('card2', 'assets/card2.png');
  this.load.image('card3', 'assets/card3.png');
  this.load.image('card4', 'assets/card4.png');
  this.load.image('card5', 'assets/card5.png');
  this.load.image('card6', 'assets/card6.png');
  this.load.image('card7', 'assets/card7.png');
  this.load.image('card8', 'assets/card8.png');
  this.load.image('card9', 'assets/card9.png');
  this.load.image('card10', 'assets/card10.png');
  this.load.image('cardvallet', 'assets/cardvallet.png');
  this.load.image('carddame', 'assets/carddame.png');
  this.load.image('cardroi', 'assets/cardroi.png');
  this.load.image('cardas', 'assets/cardAS.png');
  this.load.image('back', 'assets/cardback.png');

}
function create ()
{
  this.add.image(400, 300, 'background');
  _cards.push('card2');
  _cards.push('card3');
  _cards.push('card4');
  _cards.push('card5');
  _cards.push('card6');
  _cards.push('card7');
  _cards.push('card8');
  _cards.push('card9');
  _cards.push('card10');
  _cards.push('cardvallet');
  _cards.push('carddame');
  _cards.push('cardroi');
  _cards.push('cardas');

var _x = -0.35;
var _y = -0.2;

for( var i = 0; i < _totalCardNumber/2 ;i++)
{
  var _randomSprite = Phaser.Utils.Array.GetRandom(_cards);
  _currentCardInParty.push(_randomSprite);
  Phaser.Utils.Array.Remove(_cards, _randomSprite);
}

for( var i = 0; i < _totalCardNumber; i++)
{
  _spriteCards[i] = this.add.sprite(0, 0, 'back').setOrigin(_x, _y).setInteractive();

  _x -= 1.2;
  _halfCardsNumber--;

if(_halfCardsNumber <= 0)
{
_y = -1.35;
_x = -0.35;
_halfCardsNumber = _totalCardNumber / 2;
}
DetermineCards();
}
for(var i = 0; i < _spriteCards.length; i++)
{
  totaux = _spriteCards[i].on('pointerdown', function (pointer)
  {
    var touchX = pointer.x;
   var touchY = pointer.y;

   var levelindex = 0;
 for(var t = 0; t <= touchX; t += touchX / _halfCardsNumber)
{
  levelindex++;
  console.log(levelindex);
}
if(touchY == -1.35)
levelindex += _halfCardsNumber;

     this.setTexture(_cardToAttribute[levelindex], 0);
  });
}

console.log(_cardToAttribute);

}
function update ()
{
  ReturnTheCorrectCard();
}

function DetermineCards()
{
  if(_cardInDouble.length > 0)
  {
  var _randomNumber = Phaser.Math.Between(0, 2);

  if(_randomNumber == 0 || _numberOfRandom >= 4)
  {
  var _randomDoublon = Phaser.Utils.Array.GetRandom(_cardInDouble);
  _cardToAttribute.push(_randomDoublon);
  Phaser.Utils.Array.Remove(_cardInDouble, _randomDoublon);
  _numberOfDouble++;
  }

  else if (_randomNumber != 0 || _numberOfDouble >= 4)
  {
    var _randomCurrentSprite = Phaser.Utils.Array.GetRandom(_currentCardInParty);
    Phaser.Utils.Array.Remove(_currentCardInParty, _randomCurrentSprite);
    _cardToAttribute.push(_randomCurrentSprite);
    _cardInDouble.push(_randomCurrentSprite);
    _numberOfRandom++;
  }

  }

  else
  {
  var _randomCurrentSprite = Phaser.Utils.Array.GetRandom(_currentCardInParty);
  Phaser.Utils.Array.Remove(_currentCardInParty, _randomCurrentSprite);
  _cardToAttribute.push(_randomCurrentSprite);
  _cardInDouble.push(_randomCurrentSprite);
    _numberOfRandom++;
  }

}

function ReturnTheCorrectCard()
{

//this.input.on('pointerdown', () => console.log('click'));
VerifyIfCardCorrespond();
}
function VerifyIfCardCorrespond()
{

}
