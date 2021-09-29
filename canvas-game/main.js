// import classes

import { Player , Projectile, Enemy, Particule } from "./classes.js";

// Set the canvas Api 

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

// export the context to thee classes file

export const ctx = context;

// set the size of the canvas frame

canvas.width = innerWidth;
canvas.height = innerHeight;

// set the x and y to place the player in the center
const x = canvas.width / 2;
const y = canvas.height / 2;

// Create the main player

const player = new Player(x, y, 15, "rgb(250,250,210)");


// draw the main player

//  player.draw()


// set an array that contain the projectiles looping through the animate function   

//const projectile = new Projectile(x , y, 4, "DarkRed", {x: 1, y: 1});

const projectiles = []
const enemies = []
const particules = []

//
function spawnEnemies()
{
    setInterval(()=>
    {
        const radius = Math.random() * (40 - 10) + 10
        let x = 0;
        let y = 0;

        if (Math.random() < 0.5)
        {
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius
            y = Math.random() * canvas.height
        }  
        else
        {
            x = Math.random() * canvas.width
            y = Math.random() < 0.5 ? 0 -radius : canvas.height + radius
        }
       
        const color = `hsl(${Math.random() * 360}, 50%, 50%)`

        const angle = Math.atan2
    (   canvas.height / 2 - y,
        canvas.width / 2 - x,
    )

    const velocity = {x: Math.cos(angle), y: Math.sin(angle)}


    enemies.push( new Enemy(x, y, radius, color, velocity))
     
    }, 1000)
}

// Projectile animation function

let animationID = 0;

function animate()
{
    animationID = requestAnimationFrame(animate)
    context.fillStyle = 'rgba(0,0,0, 0.1)'
    context.fillRect(0, 0, canvas.width, canvas.height)
    player.draw()

    // particule rendering


    // projectiles rendering
    projectiles.forEach((projectile, index)=>
    {
        projectile.update();
        // clean projectiles off the screen
        if (projectile.x + projectile.radius < 0 ||
            projectile.x - projectile.radius > canvas.width ||
            projectile.y + projectile.radius < 0 ||
            projectile.y - projectile.radius > canvas.height
            )
        {
            setTimeout(()=>
            {
                   projectiles.splice(index, 1)
            }, 0)
        }
    })

    enemies.forEach((enemy, index)=>
    {
        enemy.update()
        const dist =  Math.hypot(player.x - enemy.x, player.y - enemy.y)
        // end game
        if (dist - enemy.radius - player.radius < 1)
        {
            cancelAnimationFrame(animationID)
            console.log("game over")
        }

        projectiles.forEach((projectile, projectileIndex)=>
        {
            const dist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y)
            if (dist - enemy.radius - projectile.radius < 1)
            {
                for (let i = 0 ; i < 8 ; i++)
                {
                    particules.push(new Particule(projectile.x, projectile.y, enemy.color, 
                        {x: Math.random() - 0.5, y: Math.random() - 0.5 }))
                }
                if (enemy.radius - 10 > 5)
                {
                   gsap.to(enemy, { radius: enemy.radius - 10})
                    setTimeout(()=>
                    {
                        enemies.splice(index, 1)
                        projectiles.splice(projectileIndex, 1)
                    }, 0)
                }
                else
                {
                    setTimeout(()=>
                    {
                        enemies.splice(index, 1)
                        projectiles.splice(projectileIndex, 1)
                    }, 0)
                }
            }
        })
    })
}

// Click event handling

document.addEventListener('click', (event)=>
{
    const angle = Math.atan2( event.clientY - canvas.height / 2, event.clientX - canvas.width / 2)
    const velocity = {x: Math.cos(angle) * 5.5, y: Math.sin(angle) * 5.5}

    projectiles.push( new Projectile(x, y, 5, "rgb(250,250,210)", velocity))

})


animate();
spawnEnemies();