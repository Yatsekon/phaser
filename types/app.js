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
  this.load.image('background', 'assets/background.png');
  this.load.image('carte2', 'assets/carte2.png');
  // this.load.image('background', 'assets/background.png');
  // this.load.image('background', 'assets/background.png');
  // this.load.image('background', 'assets/background.png');
  // this.load.image('background', 'assets/background.png');
  // this.load.image('background', 'assets/background.png');
}
function create ()
{

  this.add.image(400, 300, 'background');
  this.add.image(0, 0, 'carte2').setOrigin(100, 0)

  // this.add.image(400, 300, 'background');
  // this.add.image(400, 300, 'background');
  // this.add.image(400, 300, 'background');
  // this.add.image(400, 300, 'background');
}

function update ()
{
  OnClick();
}
function OnClick()
{

}
