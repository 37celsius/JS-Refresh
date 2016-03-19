var p1Btn = document.querySelector('#p1');
var p2Btn = document.querySelector('#p2');
var resetButton = document.querySelector('#reset');

var p1Display = document.querySelector('#p1Display');
var p2Display = document.querySelector('#p2Display');
var numDisplay = document.querySelector('#numGame');
var numInput = document.querySelector('input');

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Btn.addEventListener('click', function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add('winner');
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});

p2Btn.addEventListener('click', function(){
	if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add('winner');
			gameOver = true;
		}
		p2Display.textContent = p2Score;
	}
});

resetButton.addEventListener('click', function(){
	reset();
});

numInput.addEventListener('change', function(){
	numDisplay.textContent = this.value;
	winningScore = parseInt(this.value);
	reset();
});

var reset = function(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.classList.remove('winner');
	p2Display.classList.remove('winner');
	gameOver = false;
};



