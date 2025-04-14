class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.leftleg = this.add.sprite(this.bodyX-55, this.bodyY+150, "monsterParts", "leg_whiteC.png").setFlipX(true); //left leg
        my.sprite.rightleg = this.add.sprite(this.bodyX+55, this.bodyY+150, "monsterParts", "leg_yellowC.png"); //right leg
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueF.png"); //body
        my.sprite.leftarm = this.add.sprite(this.bodyX-85, this.bodyY+50, "monsterParts", "arm_greenB.png").setFlipX(true); //left arm
        my.sprite.rightarm = this.add.sprite(this.bodyX+85, this.bodyY+50, "monsterParts", "arm_redB.png"); //right arm
        my.sprite.higheye = this.add.sprite(this.bodyX, this.bodyY-60, "monsterParts", "eye_psycho_light.png"); //high eye
        my.sprite.loweye = this.add.sprite(this.bodyX, this.bodyY+10, "monsterParts", "eye_psycho_light.png"); //low eye
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY+65, "monsterParts", "mouthC.png"); //mouth
        my.sprite.earleft = this.add.sprite(this.bodyX-65, this.bodyY-75, "monsterParts", "detail_blue_ear.png").setFlipX(true); //ear left
        my.sprite.earright = this.add.sprite(this.bodyX+65, this.bodyY-75, "monsterParts", "detail_blue_ear.png"); //ear right
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        this.input.keyboard.on("keydown-S", () => {
            my.sprite.mouth.setTexture("monsterParts","mouthC.png");
        })
        this.input.keyboard.on("keydown-F", () => {
            my.sprite.mouth.setTexture("monsterParts","mouthF.png");
        })

        this.movement = this.input.keyboard.addKeys({
            left: Phaser.Input.Keyboard.KeyCodes.A,
            right: Phaser.Input.Keyboard.KeyCodes.D
        });
        if (this.movement.left.isDown) {
            for (let part in this.my.sprite) {
                this.my.sprite[part].x -= 1;
            }
        } if (this.movement.right.isDown) {
            for (let part in this.my.sprite) {
                this.my.sprite[part].x += 1;
            }
        }
    }

}