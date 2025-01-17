function triggerMatrixEffect() {
    document.getElementById("container").style.display = "none";
    document.getElementById("im1").style.display = "none";
    document.getElementById("im2").style.display = "none";
    document.getElementById("im3").style.display = "none";
    const canvas = document.getElementById('matrixCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    let animationId; 
    const textOverlay = document.getElementById("textOverlay");
    textOverlay.style.display = "block";
    textOverlay.style.opacity = "1"; 
    const drawMatrixEffect = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0f0';
        ctx.font = `${fontSize}px monospace`;

        drops.forEach((y, x) => {
            const text = String.fromCharCode(0x30A0 + Math.random() * 96);
            ctx.fillText(text, x * fontSize, y * fontSize);

            if (y * fontSize > canvas.height && Math.random() > 0.975) {
                drops[x] = 0;
            }
            drops[x]++;
        });

     
        animationId = requestAnimationFrame(drawMatrixEffect);
    };

    drawMatrixEffect();


    setTimeout(() => {
        cancelAnimationFrame(animationId); // Stop the animation loop
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
        document.getElementById("container").style.display = "block";
        document.getElementById("im1").style.display = "block";
        document.getElementById("im2").style.display = "block";
        document.getElementById("im3").style.display = "block";
        textOverlay.style.display = "none";
        textOverlay.style.opacity = "0"; 
        showNotification("Sweating much?!", 5000, "success");
    }, 5000);
}