let hexColors = ["0", "2", "1", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];

let button = document.querySelector("button");

let paragraphContent = document.querySelector("p");

button.addEventListener("click", () => {

    let randomColor = [];

    for (let i = 0; i < 5; i++) {
        var x = Math.floor(Math.random() * hexColors.length);
        randomColor.push(hexColors[x]);
    }

    
    console.log(randomColor.push(hexColors[x]));

    let finalColor = `#${randomColor.join('')}`;
    
    paragraphContent.innerHTML = `The HEX Color Code : ${finalColor}`;
    
    document.body.style.backgroundColor = finalColor ;
});

