// import functions and grab DOM elements

// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
const submit = document.getElementById('submit');
const before = document.getElementById('before');
const after = document.getElementById('after');
const results = document.getElementById('results');
const again = document.getElementById('again');
const answers = [
    'Yes, definitely',
    'It is certainly not great',
    'It is going to be fantastic',
    'Without a doubt a thing',
    'You may rely on it, heavily',
    'As I see it, yes',
    'Most Likely Maybe',
    'Outlook Inconclusive',
    'Signs point to a $%#!show',
    'Reply hazy, try something new',
    'Ask again never',
    'Better not noooo',
    'Cannot predict, too many variables',
    'Concentrate and do better',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
    'Bad idea Bud',
    'This is a Hot Mess',
];

submit.addEventListener('click', () => {
    before.classList.toggle('hide');
    after.classList.toggle('hide');
    const randNum = Math.floor(Math.random() * answers.length);
    const fortune = answers[randNum];
    results.textContent = fortune;
});

again.addEventListener('click', () => {
    before.classList.toggle('hide');
    after.classList.toggle('hide');
});
