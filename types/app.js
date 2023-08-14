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
var colomnNumber = 2;
let _currentCardInParty = [];
var _cardToAttribute = [];
let _cardInDouble = [];
var _numberOfDouble = 0;
var _numberOfRandom = 0;
var _spriteCards = [];
let _cards = [];
var _cardMiddle = [];
var _cardMin = [];
var _cardRemaining = _totalCardNumber;
var _currentCardNumber;
var _lastIndex = -1;

var _letCardReveal = false;
var _isCardCorrespond = false;
var _firstCard = null;
var _currentCard = null;
var _firstCardNumber;
var timedEvent;
var _cantClick = false;
var _playerTurn = true;
var _startBot = false;
let allSprites;
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

for( var i = 0; i < _totalCardNumber/colomnNumber ;i++)
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

var _margin = 52;
var _spaceBetweenCards = 33;
var _cardLength = 200 - 52;
for(var i = 0; i < _totalCardNumber / colomnNumber; i++)
{

  var _minXCard = _margin + i * _cardLength + i * _spaceBetweenCards;
  var _maxXCard = _minXCard + _cardLength
  _cardMin.push(_minXCard);
  // DetermineMiddleCards(_minXCard, _maxXCard);
}

for(var i = 0; i < _spriteCards.length; i++)
{

    _spriteCards[i].on('pointerdown', function (pointer)
     {
if(_playerTurn == true)
{
  var touchX = pointer.x;
  var touchY = pointer.y;
  var levelindex = 0;


  levelindex = RoundTheCardNumber(touchX);


if(touchY >= 300)
{
levelindex += _totalCardNumber / colomnNumber;
}

if(levelindex >= _cardToAttribute.length)
levelindex = _cardToAttribute.length - 1;
if(_cantClick == false && levelindex != _lastIndex)
{
 _currentCard = this.setTexture(_cardToAttribute[levelindex], 0);

 _currentCardNumber = _cardToAttribute[levelindex];
 _lastIndex = levelindex;
 VerifyIfCardCorrespond(_currentCardNumber);
 }

}

           });
        }

 allSprites = this.children.list.filter(x => x instanceof Phaser.GameObjects.GameObject);
}
function update ()
{
  if(_letCardReveal)
  {
    timedEvent = this.time.addEvent({ delay: 1000, callback: RevealCards});
_letCardReveal = !_letCardReveal;
  }

  if(_playerTurn == false && _startBot == true)
  {
    timedEvent = this.time.addEvent({ delay: 1000, callback: BotPlay});
_startBot = false;
  }
}




function BotPlay()
{
  var _randomCardReveal = Phaser.Math.Between(0, _cardRemaining);
  var _randomCardPicked = Phaser.Math.Between(0, _cardRemaining);

for(var i = 0; i <= 2; i++)
{
  _spriteCards[_randomCardPicked]
}
_currentCard = _cardToAttribute[_randomCardReveal];
  _spriteCards[_randomCardPicked].GameObject.Components.Texture.get(_currentCard);

// var _currentCardNumber = _cardToAttribute[_randomCardReveal];
//
// if(_firstCard == null)
// {
//   _firstCard = _currentCard;
//   _firstCardNumber = _currentCardNumber;
//   _startBot = true;
//   return;
// }
//   VerifyIfCardCorrespond(_currentCardNumber);
 }



function RevealCards()
{
  if(_isCardCorrespond)
  {
    _firstCard.setTexture(null, 0);
    _currentCard.setTexture(null, 0);
  }
  else {
    _firstCard.setTexture('back', 0);
    _currentCard.setTexture('back', 0);
    // _playerTurn = !_playerTurn;
    // if(!_playerTurn)
    // _startBot = true;
  }
  _firstCard = null;

_cantClick = false;
}
function DetermineMiddleCards(min, max)
{
    return _cardMiddle.push((min + max) / 2);
}




function VerifyIfCardCorrespond(_currentCardNumber)
{

  if(_firstCard == null)
  {
    _firstCard = _currentCard;
    _firstCardNumber = _currentCardNumber;
    return;
  }

  else {

    if(_firstCardNumber == _currentCardNumber)
    {
;
    _isCardCorrespond = true;
    }

    else {

      _isCardCorrespond = false;

    }
    _letCardReveal = true;
    _cantClick = true;
  }

}




function RoundTheCardNumber(PointerXValue)
{
  for(var i = 0; i < _cardMin.length; i++)
  {
    if(_cardMin[i+1] != null)
    {
      if(_cardMin[i] < PointerXValue && _cardMin[i + 1] > PointerXValue)
      {
        return i;
      }
    }
    else {
      return i;
    }
  }
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
