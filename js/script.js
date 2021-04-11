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
//inicar as funções para iniciar o jogo
function iniciarJogo(){
    //inicar background do jogo
    criarBG();
    //inicar corpo da Snake
    criarSnake();
//Setar posição para x e y da  Snake
    let snakeX = snake[0].x; 
    let snakeY = snake[0].y;

//setar coordenadas que Snake vai andar 
    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY += box;
    if(direction == "down") snakeY -= box;

//funçãoque tira o ultimo elementodo nosso "array"
    snake.pop();
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
