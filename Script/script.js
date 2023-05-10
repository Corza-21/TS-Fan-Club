//testing----------------------------------------------------



//TOGGLE BUTTON-------------------------------------------------

function toggleMarkedText(buttonId, paragraphId) {
    const toggleButton = document.getElementById(buttonId);
    const removeLyricsParagraph = document.getElementById(paragraphId);
    let hidden = false;
    let originalText = '';

    toggleButton.addEventListener('click', () => {
    if (!hidden) {
        originalText = removeLyricsParagraph.innerHTML;
        const lines = originalText.split('\n');
        const filteredLines = lines.filter(line => !line.trim().startsWith('<mark')/* && !line.trim().startsWith('<br')*/);
        const modifiedText = filteredLines.join('\n');
        removeLyricsParagraph.innerHTML = modifiedText;
        toggleButton.innerText = `Show Labels`;
    } else {
        removeLyricsParagraph.innerHTML = originalText;
        toggleButton.innerText = `Hide Labels`;
    }
    hidden = !hidden;
    });
}

toggleMarkedText('mark-toggle-button', 'lyrics');

//COPY BUTTON-------------------------------------------------
function copyTextToClipboard(elementId) {
const copyLyricsParagraph = document.getElementById(elementId);
navigator.clipboard.writeText(copyLyricsParagraph.textContent)
    .then(() => console.log('Text copied to clipboard'))
    .catch((error) => console.error('Error copying text: ', error));
}

const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click', () => {
copyTextToClipboard('lyrics');
});

//TOOLTIP-------------------------------------------------
const tooltipButton = document.querySelector('.tooltip button');
const chatgptText = document.querySelectorAll('.chatgpt-text');
const myText = document.querySelectorAll('.my-text');

function toggleText() {
    chatgptText.forEach(el => el.classList.toggle('hidden'));
    myText.forEach(el => el.classList.toggle('hidden'));
}

//NAVIGATION OVERLAY---------------------------------
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
function toggleNav() {
    var nav = document.getElementById("myNav");
    if (nav.style.width === "100%") {
        closeNav();
    } else {
        openNav();
    }
}

//IMAGE-SLIDER---------------------------------------
/*
const swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
*/
//QUIZ-----------------------------------------------
/*
const questions = [
    {
        question: "How many albums has Taylor Swift re-released so far?",
        answers: [
            {text: "0", correct: false},
            {text: "1", correct: false},
            {text: "2", correct: true},
            {text: "4", correct: false},
        ]
    },
    {
        question: "How many eras does Taylor Swift have?",
        answers: [
            {text: "7", correct: false},
            {text: "10", correct: true},
            {text: "13", correct: false},
            {text: "12", correct: false},
        ]
    },
    {
        question: "What is Taylor Swift's favourite number?",
        answers: [
            {text: "7", correct: false},
            {text: "13", correct: true},
            {text: "1989", correct: false},
            {text: "777", correct: false},
        ]
    },
    {
        question: "What is Taylor Swift's middle name?",
        answers: [
            {text: "Adele", correct: false},
            {text: "Autumn", correct: false},
            {text: "Violet", correct: false},
            {text: "Alison", correct: true},
        ]
    },
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})


startQuiz();

*/

//DARK MODE SWITCH----------------------------------------------------
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// NUMBER CONVERTER SECTION-------------------------------------------------------
/*
function convertNumber() {
    var number = document.getElementById("numberInput").value;
    var numberResultDiv = document.getElementById("numberResult");
    var meaning = "";
    switch (number) {
        case "1":
        meaning = "Taylor Swift (Debut)";
        break;
        case "2":
        meaning = "Fearless";
        break;
        case "3":
        meaning = "Speak Now";
        break;
        case "4":
        meaning = "Red";
        break;
        case "5":
        meaning = "1989";
        break;
        case "6":
        meaning = "reputation";
        break;
        case "7":
        meaning = "Lover";
        break;
        case "8":
        meaning = "folklore";
        break;
        case "9":
        meaning = "evermore";
        break;
        case "10":
        meaning = "Midnights";
        break;
        case "11":
        meaning = "Tim McGraw";
        break;
        case "12":
        meaning = "Picture To Burn";
        break;
        case "13":
        meaning = "Teardrops On My Guitar";
        break;
        case "14":
        meaning = "A Place In This World";
        break;
        case "15":
        meaning = "Cold As You";
        break;
        case "16":
        meaning = "The Outside";
        break;
        case "17":
        meaning = "Tied Together With A Smile";
        break;
        case "18":
        meaning = "Stay Beautiful";
        break;
        case "19":
        meaning = "Should've Said No";
        break;
        case "20":
        meaning = "Fearless";
        break;
        case "21":
        meaning = "Fearless (Song)";
        break;
        case "22":
        meaning = "Fifteen";
        break;
        case "23":
        meaning = "Love Story";
        break;
        case "24":
        meaning = "Hey Stephen";
        break;
        case "25":
        meaning = "White Horse";
        break;
        case "26":
        meaning = "You Belong With Me";
        break;
        case "27":
        meaning = "Breathe";
        break;
        case "28":
        meaning = "Tell Me Why";
        break;
        case "29":
        meaning = "You're Not Sorry";
        break;
        case "30":
        meaning = "Speak Now";
        break;
        case "31":
        meaning = "Mine";
        break;
        case "32":
        meaning = "Sparks Fly";
        break;
        case "33":
        meaning = "Back To December";
        break;
        case "34":
        meaning = "Speak Now";
        break;
        case "35":
        meaning = "Dear John";
        break;
        case "36":
        meaning = "Mean";
        break;
        case "37":
        meaning = "Never Grow Up";
        break;
        case "38":
        meaning = "The Story Of Us";
        break;
        case "39":
        meaning = "Enchanted";
        break;
        case "40":
        meaning = "Red";
        break;
        case "41":
        meaning = "State Of Grace";
        break;
        case "42":
        meaning = "Red";
        break;
        case "43":
        meaning = "Treacherous";
        break;
        case "44":
        meaning = "I Knew You Were Trouble";
        break;
        case "45":
        meaning = "All Too Well";
        break;
        case "46":
        meaning = "22";
        break;
        case "47":
        meaning = "I Almost Do";
        break;
        case "48":
        meaning = "We Are Never Ever Getting Back Together";
        break;
        case "49":
        meaning = "Stay Stay Stay";
        break;
        case "50":
        meaning = "1989";
        break;
        case "51":
        meaning = "Welcome To New York";
        break;
        case "52":
        meaning = "Blank Space";
        break;
        case "53":
        meaning = "Style";
        break;
        case "54":
        meaning = "Out Of The Woods";
        break;
        case "55":
        meaning = "All You Had To Do Was Stay";
        break;
        case "56":
        meaning = "Shake It Off";
        break;
        case "57":
        meaning = "I Wish You Would";
        break;
        case "58":
        meaning = "Bad Blood";
        break;
        case "59":
        meaning = "Wildest Dreams";
        break;
        case "60":
        meaning = "reputation";
        break;
        case "61":
        meaning = "...Ready For It?";
        break;
        case "62":
        meaning = "End Game";
        break;
        case "63":
        meaning = "I Did Something Bad";
        break;
        case "64":
        meaning = "Don't Blame Me";
        break;
        case "65":
        meaning = "Delicate";
        break;
        case "66":
        meaning = "Look What You Made Me Do";
        break;
        case "67":
        meaning = "So It Goes...";
        break;
        case "68":
        meaning = "Gorgeous";
        break;
        case "69":
        meaning = "Getaway Car";
        break;
        case "70":
        meaning = "Lover";
        break;
        case "71":
        meaning = "I Forgot That You Existed";
        break;
        case "72":
        meaning = "Cruel Summer";
        break;
        case "73":
        meaning = "Lover";
        break;
        case "74":
        meaning = "The Man";
        break;
        case "75":
        meaning = "The Archer";
        break;
        case "76":
        meaning = "I Think He Knows";
        break;
        case "77":
        meaning = "Miss Americana & The Heartbreak Prince";
        break;
        case "78":
        meaning = "Paper Rings";
        break;
        case "79":
        meaning = "Cornelia Street";
        break;
        case "80":
        meaning = "folklore";
        break;
        case "81":
        meaning = "the 1";
        break;
        case "82":
        meaning = "cardigan";
        break;
        case "83":
        meaning = "the last great american dynasty";
        break;
        case "84":
        meaning = "exile";
        break;
        case "85":
        meaning = "my tears ricochet";
        break;
        case "86":
        meaning = "mirrorball";
        break;
        case "87":
        meaning = "seven";
        break;
        case "88":
        meaning = "august";
        break;
        case "89":
        meaning = "this is me trying";
        break;
        case "90":
        meaning = "evermore";
        break;
        case "91":
        meaning = "willow";
        break;
        case "92":
        meaning = "champagne problems";
        break;
        case "93":
        meaning = "gold rush";
        break;
        case "94":
        meaning = "'tis the damn season";
        break;
        case "95":
        meaning = "tolerate it";
        break;
        case "96":
        meaning = "no body, no crime";
        break;
        case "97":
        meaning = "happiness";
        break;
        case "98":
        meaning = "dorothea";
        break;
        case "99":
        meaning = "coney island";
        break;
        case "100":
        meaning = "Midnights";
        break;
        default:
        meaning = "Unknown";
        break;
    }
    numberResultDiv.innerHTML = "You are " + meaning + ".";
}
*/
// QUOTE GENERATOR SECTION-------------------------------------------------------

function generateQuote() {
    const quotes = [
        `People haven't always been there for me but music always has.`,
        `To me, Fearless is not the absence of fear. It's not being completely unafraid. To me, Fearless is having fears. Fearless is having doubts. Lots of them. To me, Fearless is living in spite of those things that scare you to death.`,
        `This is a new year. A new beginning. And things will change.`,
        `I suffer from girl-next-door-itis where the guy is friends with you and that's it.`,
        `No matter what happens in life, be good to people. Being good to people is a wonderful legacy to leave behind.`,
        `When I was a little girl I used to read fairy tales. In fairy tales you meet Prince Charming and he's everything you ever wanted. In fairy tales the bad guy is very easy to spot. The bad guy is always wearing a black cape so you always know who he is. Then you grow up and you realize that Prince Charming is not as easy to find as you thought. You realize the bad guy is not wearing a black cape and he's not easy to spot; he's really funny, and he makes you laugh, and he has perfect hair.`,
        `Everybody has that point in their life where you hit a crossroads and you've had a bunch of bad days and there's different ways you can deal with it and the way I dealt with it was I just turned completely to music.`,
        `I'm intimidated by the fear of being average.`,
        `I never want to change so much that people can't recognize me.`,
        `Just be yourself, there is no one better.`,
        `Words can break someone into a million pieces, but they can also put them back together. I hope you use yours for good, because the only words you'll regret more than the ones left unsaid are the ones you use to intentionally hurt someone.`,
        `The lesson I've learned the most often in life is that you're always going to know more in the future than you know now.`,
        `If you're horrible to me, I'm going to write a song about it, and you won't like it. That's how I operate.`,
        `We should love, not fall in love, because everything that falls, gets broken.`,
        `Be that strong girl that everyone knew would make it through the worst, be that fearless girl, the one who would dare to do anything, be that independent girl who didn't need a man; be that girl who never backed down.`,
        `If they don't like you for being yourself, be yourself even more.`,
        `I've always been a hugger. If we all hugged more, the world would be a better place.`,
        `There are two different categories of love. The first category is called a fairytale. The second category of love is called just another lesson.`,
        `I haven't had that one great love, which is good. I don't want that to be in the past, I want it to be in the future.`,
        `To truly love is to have the courage to walk away and let the other person who wishes to be free go no matter how much it hurts.`,
        `At some point you have to forget about grudges because they only hurt.`,
        `In high school, I used to think it was like sooooo cool if a guy had an awesome car. Now none of that matters. These days I look for character and honesty and trust.`,
        `If you're the girl that needs a boyfriend, and once she loses that boyfriend needs to replace it with a different boyfriend, it's just this constant stream of boyfriends all the time. I don't feel like I ever want to be that girl. I want to be the girl that when she falls in love, it's a big deal and it's a rare thing.`,
        `You have people come into your life shockingly and surprisingly. You have losses that you never thought you'd experience. You have rejection and you have learn how to deal with that and how to get up the next day and go on with it.`,
        `Don't worry. You may think you'll never get over it. But you also thought it would last forever.`,
        `Sometimes the person you'd take a bullet for is the person behind the trigger.`,
        `Just being a human being, I've realised that before every big problem you create for yourself, before every huge mess you have to clean up, there was a crucial moment where you could've just said no.`,
        `Real love still happens sometimes. It's not just something we make up when you're nine. I have to believe that. You do too.`,
        `Why leave when you can stay, why stay if you have to go.`,
        `There are no rules when it comes to love. I just try to let love surprise me because you never know who you're going to fall in love with. You never know who's going to come into your life - and for me, when I picture the person I want to end up with, I don't think about what their career is, or what they look like. I picture the feeling I get when I'm with them.`,
        `In life and love, you learn that there comes a time to let go and move on.`,
        `Throughout all of the changes that have happened in my life, one of the priorities I've had is to never change the way I write songs and the reasons I write songs. I write songs to help me understand life a little more. I write songs to get past things that cause me pain. And I write songs because sometimes life makes more sense to me when it's being sung in a chorus, and when I can write it in a verse.`,
        `Never believe anyone who tells you that you don't deserve what you want.`,
        `Happiness and confidence are the prettiest things you can wear.`,
        `Karma is real.`,
        `The worst kind of person is someone who makes someone feel bad, dumb or stupid for… like being excited about something.`
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = '<i class="fas fa-quote-left"></i> ' + randomQuote + ' <i class="fas fa-quote-right"></i>' + '<br>- Taylor Swift';
}

