document.addEventListener("DOMContentLoaded", function () {
    const keyDisplay = document.getElementById("keyDisplay");
    const keySound = document.getElementById("keySound");

    // Event listener for keydown event
    document.addEventListener("keydown", function (event) {
        const key = event.key;
        const keyCode = event.keyCode;
        const keyValue = event.keyCode || event.which;

        // Display the pressed key and its keyCode
        keyDisplay.innerHTML = `
            Keypressed: ${key} <br>
            KeyCode: ${keyCode} <br>
            KeyValue: ${keyValue}
          `;

        // Play the sound
        keySound.currentTime = 0; // rewind to start
        keySound.play();
    });
});