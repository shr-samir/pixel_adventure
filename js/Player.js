// Player class
class Player {
  constructor() {
    this.playerSprite = new Image()
    // this.playerSprite.src 
    // = '../assets/pixel_adventure_1/main_characters/virtual_guy/idle-right.png'
    this.playerSpriteWidth = 32
    this.playerSpriteHeight = 32
    this.frameX = 0
    this.frameY = 0
    this.gameFrame = 0

    this.position = {
      x: 100,
      y: 100,
    }
    this.velocity = {
      x: 0,
      y: 5,
    }
    this.width = 64
    this.height = 64
    this.isGrounded = true
    // this.jumpCounter = 0
  }

  // draw a player
  draw() {
    //     const staggerFrames = 3
    // let positionInSprite = Math.floor(this.gameFrame / staggerFrames) % 10
    // this.frameX = this.playerSpriteWidth * positionInSprite

    ctx.drawImage(
      this.playerSprite,
      this.frameX,
      this.frameY * this.playerSpriteHeight,
      this.playerSpriteWidth,
      this.playerSpriteHeight,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    )
    // this.gameFrame++
  }

  // update a player properties over time
  update() {
    this.draw()
    if (!this.isGrounded) {
      this.frameX = 0
      this.playerSprite.src =
        '../assets/pixel_adventure_1/main_characters/virtual_guy/jump.png'
    } else {
      this.playerSprite.src =
        '../assets/pixel_adventure_1/main_characters/virtual_guy/idle-right.png'
      let positionInSprite = Math.floor(this.gameFrame / staggerFrames) % 10
      this.frameX = this.playerSpriteWidth * positionInSprite
      this.draw()
      this.gameFrame++
    }
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height + this.velocity.y <= canvas.height)
      this.velocity.y += gravity
    else {
      this.velocity.y = 0
      this.isGrounded = true
    }
  }

  // to move right
  moveRight() {
    this.playerSprite.src =
      '../assets/pixel_adventure_1/main_characters/virtual_guy/run-right.png'
    let positionInSprite = Math.floor(this.gameFrame / staggerFrames) % 10
    this.frameX = this.playerSpriteWidth * positionInSprite
    this.draw()
    this.velocity.x = 5
    this.gameFrame++
  }

  // to move left
  moveLeft() {
    this.playerSprite.src =
      '../assets/pixel_adventure_1/main_characters/virtual_guy/run-left.png'
    let positionInSprite = Math.floor(this.gameFrame / staggerFrames) % 10
    this.frameX = this.playerSpriteWidth * positionInSprite
    this.draw()
    this.gameFrame++
  }

  // to jump
  jump() {
    if (player.isGrounded) {
      player.velocity.y -= 20
      player.isGrounded = false

      player.update()
    }
  }

  slideLeft() {
    if (!this.isGrounded) {
      this.playerSprite.src =
        '../assets/pixel_adventure_1/main_characters/virtual_guy/slide-right.png'
      let positionInSprite = Math.floor(this.gameFrame / staggerFrames) % 5
      this.frameX = this.playerSpriteWidth * positionInSprite
    }
  }
}
