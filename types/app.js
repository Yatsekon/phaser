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

var game = new Phaser.Game(config);

function preload ()
{
  this.load.image('sky', 'assets/background.png');
  // this.load.spritesheet('dude',
  //   'assets/dude.png',
  //  { frameWidth: 32, frameHeight: 48 })
}
var cartes
function create ()
{
  this.add.image(400, 300, 'background');
//   cartes.create(600, 400, 'ground');
// cartes.create(50, 250, 'ground');
// cartes.create(750, 220, 'ground');
}

function update ()
{
  OnClick();
}
function OnClick()
{

}
