const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const winner = document.querySelector('.result');

const result = ['scissors', 'rock', 'paper'];

const show = (user, computer, result) => {
  computerChoice.innerText = computer;
  userChoice.innerText = user;
  winner.innerText = result;
};

const game = (user, computer) => {
  let message;
  if (user === computer) {
    message = 'again';
  } else {
    switch (user + computer) {
      case 'scissorspaper':
      case 'paperrock':
      case 'rockscissors':
        message = 'winner winner chicken dinner!';
        break;
      case 'paperscissors':
      case 'rockpaper':
      case 'scissorsrock':
        message = 'so sad unlucky';
        break;
    }
  }

  show(user, computer, message);
};

const play = (event) => {
  const user = event.target.innerText;
  const randomIndex = Math.floor(Math.random() * 3);
  const computer = result[randomIndex];
  game(user, computer);
};

buttons.forEach((button) => {
  button.addEventListener('click', play);
});
