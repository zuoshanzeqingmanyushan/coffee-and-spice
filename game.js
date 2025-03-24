const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const targetColorDisplay = document.getElementById('targetColor');

let snake = [{ x: 10, y: 10 }];
let food = [];
let direction = { x: 0, y: 0 };
let targetColor = getRandomColor();
let snakeColor = [0, 0, 0]; // RGB color of the snake

targetColorDisplay.style.backgroundColor = `rgb(${targetColor[0]}, ${targetColor[1]}, ${targetColor[2]})`;

function getRandomColor() {
    return [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
}

function drawSnake() {
    ctx.fillStyle = `rgb(${snakeColor[0]}, ${snakeColor[1]}, ${snakeColor[2]})`;
    snake.forEach(segment => {
        ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20);
    });
}

function drawFood() {
    food.forEach(f => {
        ctx.fillStyle = `rgb(${f.color[0]}, ${f.color[1]}, ${f.color[2]})`;
        ctx.fillRect(f.x * 20, f.y * 20, 20, 20);
    });
}

function updateSnake() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
    snake.unshift(head);

    const eatenFood = food.findIndex(f => f.x === head.x && f.y === head.y);
    if (eatenFood !== -1) {
        const eatenColor = food[eatenFood].color;
        snakeColor = [
            (snakeColor[0] + eatenColor[0]) / 2,
            (snakeColor[1] + eatenColor[1]) / 2,
            (snakeColor[2] + eatenColor[2]) / 2
        ];
        food.splice(eatenFood, 1);
        spawnFood();
    } else {
        snake.pop();
    }
}

function spawnFood() {
    const x = Math.floor(Math.random() * 20);
    const y = Math.floor(Math.random() * 20);
    food.push({ x, y, color: getRandomColor() });
}

function checkCollision() {
    const head = snake[0];
    if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
        return true;
    }
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            return true;
        }
    }
    return false;
}

function gameLoop() {
    if (checkCollision()) {
        alert('Game Over!');
        document.location.reload();
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    updateSnake();
    drawSnake();
    drawFood();

    if (snakeColor.every((val, idx) => Math.abs(val - targetColor[idx]) < 10)) {
        alert('You Win!');
        document.location.reload();
    }

    setTimeout(gameLoop, 100);
}

document.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp': if (direction.y === 0) direction = { x: 0, y: -1 }; break;
        case 'ArrowDown': if (direction.y === 0) direction = { x: 0, y: 1 }; break;
        case 'ArrowLeft': if (direction.x === 0) direction = { x: -1, y: 0 }; break;
        case 'ArrowRight': if (direction.x === 0) direction = { x: 1, y: 0 }; break;
    }
});

spawnFood();
gameLoop();
