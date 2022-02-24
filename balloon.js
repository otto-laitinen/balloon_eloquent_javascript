const initApp = () => {
    let balloon = document.getElementById("balloon");
    let balloon_size = parseFloat(window.getComputedStyle(balloon, null).getPropertyValue('font-size')
    );
    let explosion_limit = 200;

    const resize_balloon = (event) => {
        
        // Inflate
        if (event.key == "ArrowUp") {
            balloon.style.fontSize = `${balloon_size * 1.1}px`
            balloon_size *= 1.1

            // Explode
            if (balloon_size > explosion_limit) {
                balloon.textContent = "💥";
                document.body.removeEventListener("keydown", resize_balloon);
            };
        };

        // Deflate
        if (event.key == "ArrowDown") {
            balloon.style.fontSize = `${balloon_size * 0.9}px`
            balloon_size *= 0.9
        };
    };

    // Listen for key strokes
    document.body.addEventListener("keydown", resize_balloon);
};

window.addEventListener('load', () => {initApp();});