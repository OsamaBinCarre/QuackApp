document.getElementById('Quack').addEventListener('click', function() {
    // Crear un nuevo elemento div con la clase 'sprite'
    var newSprite = document.createElement('div');
    const numeroAleatorio = Math.floor(Math.random() * 4);

    console.log(numeroAleatorio);
    switch (numeroAleatorio){
        case 0:
            newSprite.classList.add('sprite');
            break;
        case 1:
            newSprite.classList.add('sprite2');
            break
        case 2:
            newSprite.classList.add('sprite');
            newSprite.classList.add('flip')
        case 3:
            newSprite.classList.add('sprite2');
            newSprite.classList.add('flip');
    }
        

    

    // Añadir el nuevo sprite al contenedor
    document.getElementById('spriteContainer').appendChild(newSprite);
});

