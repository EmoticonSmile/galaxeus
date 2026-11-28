<!--  make the white stars move -->

 const canvas = document.getElementById('star-bg');
 const ctx = canvas.getContext('2d');

 let stars = [];
 const starCount = 250;

 function resize() {
 	 canvas.width = canvas.clientWidth;
	 canvas.height = canvas.clientHeight;
	}

 function createStars() {
          stars = [];

          for (let i = 0; i < starCount; i++) {
                stars.push ({
                 x: Math.random() * canvas.width,
                 y: Math.random() * canvas.height,
                 r: Math.random() * 1.5 + 0.5,
                 speed: Math.random() * 4.5 + 0.5,
                 alpha: Math.random() * 0.8 + 0.2
                });
          }
 }

 function animate() {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
        
          stars.forEach (star => {
              // move star to the left
                 star.x -= star.speed;
            
              // restart the star on the right when it leaves the screen
                 if (star.x < -10) {
                      star.x = canvas.width + 10;
                      star.y = Math.random() * canvas.height;
                 }
            
                 ctx.beginPath();
                 ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
                 ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                 ctx.fill();
            });
        
           requestAnimationFrame(animate);
    }

 window.addEventListener('resize', resize);
    
 resize();
 createStars();
 animate();
 