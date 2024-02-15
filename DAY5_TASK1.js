document.addEventListener('DOMContentLoaded', function () {
    const resultDiv = document.getElementById('result');
    const choices = document.querySelectorAll('.choice');
  
    choices.forEach(choice => {
      choice.addEventListener('click', playGame);
    });
  
    function playGame(e) {
      const playerChoice = e.target.id;
      const computerChoice = getComputerChoice();
      const winner = getWinner(playerChoice, computerChoice);
  
      showResult(winner, computerChoice);
    }
  
    function getComputerChoice() {
      const choices = ['rock', 'paper', 'scissors'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    function getWinner(player, computer) {
      if (player === computer) {
        return 'It\'s a tie!';
      } else if ((player === 'rock' && computer === 'scissors') ||
                 (player === 'paper' && computer === 'rock') ||
                 (player === 'scissors' && computer === 'paper')) {
        return 'You win!';
      } else {
        return 'Computer wins!';
      }
    }
  
    function showResult(result, computerChoice) {
      resultDiv.textContent = `${result} Computer chose ${computerChoice}.`;
    }
  });