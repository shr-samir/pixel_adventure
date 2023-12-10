const mapImage = new Image()
mapImage.src = '../assets/map1.png'

mapImage.onload = () => {
  ctx.drawImage(mapImage, 0, 0)
}

const player = new Player()

function animate() {
  requestAnimationFrame(animate)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(mapImage, 0, 0)

  // Draw the wall
  // ctx.fillStyle = 'green'
  // ctx.fillRect(wall.position.x, wall.position.y, wall.width, wall.height)

  boundaries.forEach((boundary) => {
    boundary.draw()

    if (
      boundaryCollision({
        rect1: player,
        rect2: boundary,
      })
    ) {
      console.log('collision')
      player.position.y = boundary.position.y - player.height
    }
  })

  player.update()

  // for left right movement
  if (keys.right.pressed) {
    player.moveRight()
  } else if (keys.left.pressed) {
    player.moveLeft()
    player.velocity.x = -5
  } else {
    player.velocity.x = 0
  }
  // if (onCollision(player, wall)) {
  //   onSlide()
  //   console.log('collison')
  // }
}

animate()

// while pressing key
window.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowRight':
    case 'KeyD':
      keys.right.pressed = true
      break
    case 'ArrowLeft':
    case 'KeyA':
      keys.left.pressed = true
      break
    case 'ArrowUp':
    case 'KeyW':
      keys.jump.pressed = true
      if (keys.jump.pressed) {
        player.jump()
      }
      break
  }
})

// while releasing key
window.addEventListener('keyup', (e) => {
  // console.log(keyCode);

  switch (e.code) {
    case 'ArrowRight':
    case 'KeyD':
      keys.right.pressed = false
      break
    case 'ArrowLeft':
    case 'KeyA':
      keys.left.pressed = false
      break
    case 'ArrowUp':
    case 'KeyW':
      player.velocity.y += gravity
      keys.jump.pressed = false
      break
  }
})
