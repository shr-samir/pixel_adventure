// for boundary collision of map
// console.log(boundaryCollisionMap.length)
let boundaryArray = []
for (let i = 0; i < boundaryCollisionMap.length; i += 85) {
  // console.log(  boundaryCollisionMap.slice(i, i + 85))
  boundaryArray.push(boundaryCollisionMap.slice(i, i + 85))
}
// console.log(boundaryArray)

class MapBoundary {
  static width = 16
  static height = 16

  constructor({ position }) {
    this.position = position
    this.width = 16
    this.height = 16
  }

  draw() {
    ctx.fillStyle = 'red'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

// bottom boundary definition
const boundariesBottom = []

boundaryArray.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 260) {
      boundariesBottom.push(
        new MapBoundary({
          position: {
            x: j * MapBoundary.width,
            y: i * MapBoundary.height,
          },
        })
      )
    }
  })
})

function boundaryCollisionBottom({ rect1, rect2 }) {
  // console.log(rect1.position.x);
  // console.log(rect2.position.x);
  return (
    rect1.position.x <= rect2.position.x + rect2.width &&
    rect1.position.x + rect1.width >= rect2.position.x &&
    rect1.position.y <= rect2.position.y + rect2.height &&
    rect1.position.y + rect1.height >= rect2.position.y
  )
}

// top boundary definition
const boundariesTop = []

boundaryArray.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 261) {
      boundariesTop.push(
        new MapBoundary({
          position: {
            x: j * MapBoundary.width,
            y: i * MapBoundary.height,
          },
        })
      )
    }
  })
})

function boundaryCollisionTop({ rect1, rect2 }) {
  // console.log(rect1.position.x);
  // console.log(rect2.position.x);
  return (
    // rect1.position.y == rect2.position.y + MapBoundary.height &&
    rect1.position.y <= rect2.position.y + MapBoundary.height &&
    // rect1.position.y + rect1.height >= rect2.position.y &&
    rect1.position.x + rect1.width > rect2.position.x &&
    rect1.position.x < rect2.position.x + rect2.width &&
    rect1.position.y - rect1.velocity.y >= rect2.position.y + MapBoundary.height
  )
}

// left boundary definition
const boundariesLeft = []

boundaryArray.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 262) {
      boundariesLeft.push(
        new MapBoundary({
          position: {
            x: j * MapBoundary.width,
            y: i * MapBoundary.height,
          },
        })
      )
    }
  })
})

function boundaryCollisionLeft({ rect1, rect2 }) {
  return (
    rect1.position.x > rect2.position.x &&
    rect1.position.x < rect2.position.x + MapBoundary.width &&
    rect1.position.y + rect1.height > rect2.position.y &&
    rect1.position.y < rect2.position.y + MapBoundary.height

    // rect1.position.x + rect1.width === rect2.position.x
  )
}

// right boundary definition
const boundariesRight = []

boundaryArray.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 263) {
      boundariesRight.push(
        new MapBoundary({
          position: {
            x: j * MapBoundary.width,
            y: i * MapBoundary.height,
          },
        })
      )
    }
  })
})

function boundaryCollisionRight({ rect1, rect2 }) {
  return (
    rect1.position.x < rect2.position.x + MapBoundary.width &&
    rect1.position.x + rect1.width > rect2.position.x &&
    rect1.position.y + rect1.height > rect2.position.y &&
    rect1.position.y < rect2.position.y + MapBoundary.height

    // rect1.position.x + rect1.width === rect2.position.x
  )
}

//////////////
function onCollision(player, obj) {
  return (
    player.position.x < obj.position.x + obj.width &&
    player.position.x + player.width > obj.position.x &&
    player.position.y < obj.position.y + obj.height &&
    player.position.y + player.height > obj.position.y
  )
}

function onSlide() {
  player.isGrounded = false
  player.velocity.y = 1
  if (player.position.x < 0) {
    player.position.x = 0
    player.slideLeft()
  }
  player.velocity.x = 0

  if (keys.left.pressed) {
    player.moveLeft()
    player.velocity.x -= 10
  } else if (keys.jump.pressed) {
    player.jump()
    player.velocity.y -= 10
  }
}
