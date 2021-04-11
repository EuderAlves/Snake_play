//variavel que puxa para o html
let canvas = document.getElementById("snake");
//variavel que define 2d
let context = canvas.getContext("2d");
//variavl que define tamanho em pixel da Snake
let box = 32;
//variave que define o corpo da Snake
let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box
}
//variavel para definir sentido que vai iniciar o movimento
let direction = "right";
//variavel da comida aleatória 
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

//função para criar background do jogo
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 *box);
}
//função para criar corpo da Snake
function criarSnake(){
    for(i=0; i <snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }    
}
//Criar função de comida da Snake
function drawFood(){
    context.fillStyle="red"
    context.fillRect(food.x, food.y, box, box)
}

//criação do evento de click e chama a update
    document.addEventListener('keydown', update);

 //crianção da função update
function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 40 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 38 && direction != "up") direction = "down";
} 
//inicar as funções para iniciar o jogo
function iniciarJogo(){
//função para atravessar limete do background e aparecer do outro lado
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "up") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "down") snake[0].y = 16 * box;
    //inicar background do jogo
    criarBG();
    //inicar corpo da Snake
    criarSnake();
    //iniciar comida da Snake
    drawFood();
//Setar posição para x e y da  Snake
    let snakeX = snake[0].x; 
    let snakeY = snake[0].y;

//Setar coordenadas que Snake vai andar 
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;

//Função comer a comida 
if(snakeX != food.x || snakeY != food.y){
    snake.pop();
} else{
     food.x = Math.floor(Math.random() * 15 + 1) * box;
     food.y = Math.floor(Math.random() * 15 + 1) * box;
}

// variavel que acrecenta um elemto a frente
     let newHead = {
         x: snakeX,
         y: snakeY
     }
//função unshift acrescenta o elemento a frente
     snake.unshift(newHead)
}
//criar intervalo de reinicialização (usando a função "iniciarjogo" e o tempo )
    let jogo = setInterval(iniciarJogo, 100);
