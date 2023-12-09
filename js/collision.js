// const wall = {
//      position: {
//           x: 150,
//           y: canvas.height - 300,
//      },
//      width: 100,
//      height: 200,
//     }

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
