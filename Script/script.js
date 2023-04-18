//testing








//TOOLTIP-------------------------------------------------
const tooltipButton = document.querySelector('.tooltip button');
const chatgptText = document.querySelectorAll('.chatgpt-text');
const myText = document.querySelectorAll('.my-text');

tooltipButton.addEventListener('click', () => {
    chatgptText.forEach(el => el.classList.toggle('hidden'));
    myText.forEach(el => el.classList.toggle('hidden'));
});


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
//POLL SECTION----------------------------------------------------



//QUIZ-----------------------------------------------

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


//TEXT TYPING EFFECT-----------------------------------------------
var typed = new Typed(".auto-type", {
    strings: [`Fan Club`, `Is The Best`, `Is A God`, `Slays`, `Is The Music Industry <i class="fas fa-crown"></i>`, `Is ✨Amazing✨`],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true
})

//DARK MODE SWITCH----------------------------------------------------
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// WHICH _ ARE YOU SECTION-----------------------------------------------

// Get the button element and the result element
const songGenerateBtn = document.getElementById('song-btn');
const songResultDiv = document.getElementById('song-result');
const albumGenerateBtn = document.getElementById('album-btn');
const albumResultDiv = document.getElementById('album-result');

// Define an array of options | Songs
const songOptions = [
'Tim McGraw', 'Picture To Burn', 'Teardrops On My Guitar', 'A Place In This World', 'Cold As You', 'The Outside', 'Tied Together With A Smile', 'Stay Beautiful', "Should've Said No", "Mary's Song (Oh My My My)", 'Our Song', "I'm Only Me When I'm With You", 'Invisible', 'A Perfectly Good Heart', 'Teardrops On My Guitar (Pop Version)',
'Fearless', 'Fifteen', 'Love Story', 'Hey Stephen', 'White Horse', 'You Belong With Me', 'Breathe', 'Tell Me Why', "You're Not Sorry", 'The Way I Loved You', 'Forever & Always', 'The Best Day', 'Change', 'Jump Then Fall', 'Untouchable', 'Forever & Always (Piano Version)', 'Come In With The Rain', 'Superstar', 'The Other Side Of The Door', 'Today Was A Fairytale', 'You All Over Me', 'Mr. Perfectly Fine', 'We Were Happy', "That's When", "Don't You", 'Bye Bye Baby',
'Mine', 'Sparks Fly', 'Back To December', 'Speak Now', 'Dear John', 'Mean', 'The Story Of Us', 'Never Grow Up', 'Enchanted', 'Better Than Revenge', 'Innocent', 'Haunted', 'Last Kiss', 'Long Live', 'Ours', 'If This Was A Movie', 'Superman', 'Back To December (Acoustic Version)', 'Haunted (Acoustic Version)',
'State Of Grace', 'Red', 'Treacherous', 'I Knew You Were Trouble', 'All Too Well', '22', 'I Almost Do', 'We Are Never Ever Getting Back Together', 'Stay Stay Stay', 'The Last Time', 'Holy Ground', 'Sad Beautiful Tragic', 'The Lucky One', 'Everything Has Changed', 'Starlight', 'Begin Again', 'The Moment I Knew', 'Come Back...Be Here', 'Girl At Home', 'State Of Grace (Acoustic Version)', 'Ronan', 'Better Man', 'Nothing New', 'Babe', 'Message In A Bottle', 'I Bet You Think About Me', 'Forever Winter', 'Run', 'The Very First Night', 'All Too Well (10 Minute Version)', 'Safe & Sound', 'Eyes Open',
'Welcome To New York', 'Blank Space', 'Style', 'Out Of The Woods', 'All You Had To Do Was Stay', 'Shake It Off', 'I Wish You Would', 'Bad Blood', 'Wildest Dreams', 'How You Get The Girl', 'This Love', 'I Know Places', 'Clean', 'Wonderland', 'You Are In Love', 'New Romantics',
'...Ready For It?', 'End Game', 'I Did Something Bad', "Don't Blame Me", 'Delicate', 'Look What You Made Me Do', 'So It Goes...', 'Gorgeous', 'Getaway Car', 'King Of My Heart', 'Dancing With Our Hands Tied', 'Dress', "This Is Why We Can't Have Nice Things", 'Call It What You Want', "New Year's Day",
'I Forgot That You Existed', 'Cruel Summer', 'Lover', 'The Man', 'The Archer', 'I Think He Knows', 'Miss Americana & The Heartbreak Prince', 'Paper Rings', 'Cornelia Street', 'Death By A Thousand Cuts', 'London Boy', "Soon You'll Get Better", 'False God', 'You Need To Calm Down', 'Afterglow', 'ME!', "It's Nice To Have A Friend", 'Afterglow', 'All Of The Girls You Loved Before',
'the 1', 'cardigan', 'the last great american dynasty', 'exile', 'my tears ricochet', 'mirrorball', 'seven', 'this is me trying', 'illicit affairs', 'invisible string', 'mad woman', 'epiphany', 'betty', 'peace', 'hoax', 'the lakes',
'willow', 'champagne problems', 'gold rush', "'tis the damn season", 'tolerate it', 'no body, no crime', 'happiness', 'dorothea', 'coney island', 'ivy', 'cowboy like me', 'long story short', 'marjorie', 'closure', 'evermore', 'right where you left me', "it's time to go",
'Lavender Haze', 'Maroon', 'Anti-Hero', 'Snow On The Beach', "You're On Your Own, Kid", 'Midnight Rain', 'Question...?', 'Vigilante Shit', 'Bejeweled', 'Labyrinth', 'Karma', 'Sweet Nothing', 'Mastermind', 'The Great War', 'Bigger Than The Whole Sky', 'Paris', 'High Infidelity', 'Glitch', "Would've, Could've, Should've", 'Dear Reader', 'Hits Different'
];
// Define an array of options | Albums
const albumOptions = [
'Taylor Swift (Debut).<br><a href="Web Pages/Album Web Pages/ts1.html"><img src="Images/Album Covers/ts1.png" alt="Taylor Swift Album Cover"></a>',
'Fearless.<br><a href="Web Pages/Album Web Pages/ts2.html"><img src="Images/Album Covers/ts2.png" alt="Fearless Album Cover"></a>',
'Speak Now.<br><a href="Web Pages/Album Web Pages/ts3.html"><img src="Images/Album Covers/ts3.png" alt="Speak Now Album Cover"></a>',
'Red.<br><a href="Web Pages/Album Web Pages/ts4.html"><img src="Images/Album Covers/ts4.png" alt="Red Album Cover"></a>',
'1989.<br><a href="Web Pages/Album Web Pages/ts5.html"><img src="Images/Album Covers/ts5.png" alt="1989 Album Cover"></a>',
'reputation.<br><a href="Web Pages/Album Web Pages/ts6.html"><img src="Images/Album Covers/ts6.png" alt="reputation Album Cover"></a>',
'Lover.<br><a href="Web Pages/Album Web Pages/ts7.html"><img src="Images/Album Covers/ts7.png" alt="Lover Album Cover"></a>',
'folklore.<br><a href="Web Pages/Album Web Pages/ts8.html"><img src="Images/Album Covers/ts8.png" alt="folklore Album Cover"></a>',
'evermore.<br><a href="Web Pages/Album Web Pages/ts9.html"><img src="Images/Album Covers/ts9.png" alt="evermore Album Cover"></a>',
'Midnights.<br><a href="Web Pages/Album Web Pages/ts10.html"><img src="Images/Album Covers/ts10.png" alt="Midnights Album Cover"></a>',
];

// Add a click event listener to the button | Songs
songGenerateBtn.addEventListener('click', function() {
    // Generate a random index for the options array
    const randomIndex = Math.floor(Math.random() * songOptions.length);
    // Get the randomly generated option
    const randomOption = songOptions[randomIndex];
    // Update the content of the result element
    songResultDiv.innerHTML = `You are ${randomOption}.`;
});

// Add a click event listener to the button | Albums
albumGenerateBtn.addEventListener('click', function() {
    // Generate a random index for the options array
        const randomIndex = Math.floor(Math.random() * albumOptions.length);
    // Get the randomly generated option
        const randomOption = albumOptions[randomIndex];
    // Update the content of the result element
        albumResultDiv.innerHTML = `You are ${randomOption}`;
});

// NUMBER CONVERTER SECTION-------------------------------------------------------

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

// LYRIC GENERATOR SECTION-------------------------------------------------------

const lyrics = {
    "Taylor Swift": [
        // Tim McGraw
        `He said the way my blue eyes shined<br>
        Put those Georgia stars to shame that night<br>
        I said, "That's a lie"`,
        `Just a boy in a Chevy truck<br>
        That had a tendency of gettin' stuck<br>
        On backroads at night`,
        `And I was right there beside him<br>
        All summer long<br>
        And then the time we woke up<br>
        To find that summer gone`,
        `But when you think Tim McGraw<br>
        I hope you think my favorite song<br>
        The one we danced to all night long<br>
        The moon like a spotlight on the lake`,
        `When you think happiness<br>
        I hope you think that little black dress<br>
        Think of my head on your chest<br>
        And my old faded blue jeans`,
        `When you think Tim McGraw<br>
        I hope you think of me`,
        `September saw a month of tears<br>
        And thankin' God that you weren't here<br>
        To see me like that`,
        `But in a box beneath my bed<br>
        Is a letter that you never read<br>
        From three summers back`,
        `It's hard not to find it all a little bittersweet<br>
        And lookin' back on all of that, it's nice to believe`,
        `And I'm back for the first time since then<br>
        I'm standin' on your street`,
        `And there's a letter left on your doorstep<br>
        And the first thing that you'll read is:<br>
        "When you think Tim McGraw<br>
        I hope you think my favorite song<br>
        Someday you'll turn your radio on<br>
        I hope it takes you back to that place"`,
        `When you think Tim McGraw<br>
        I hope you think of me<br>
        Oh, think of me<br>
        Mmmm`,
        // Picture To Burn
        `State the obvious, I didn't get my perfect fantasy<br>
        I realize you love yourself more than you could ever love me`,
        `So go and tell your friends that I'm obsessive and crazy<br>
        That's fine, you won't mind if I say<br>
        By the way`,
        `I hate that stupid old pickup truck you never let me drive<br>
        You're a redneck heartbreak who's really bad at lying`,
        `So watch me strike a match on all my wasted time<br>
        As far as I'm concerned, you're just another picture to burn`,
        `There's no time for tears<br>
        I'm just sitting here planning my revenge`,
        `There's nothing stopping me<br>
        From going out with all of your best friends`,
        `And if you come around saying sorry to me<br>
        My daddy's gonna show you how sorry you'll be`,
        `And if you're missing me, you'd better keep it to yourself<br>
        'Cause coming back around here would be bad for your health`,
        `In case you haven't heard<br>
        I really, really hate that<br>
        Stupid old pickup truck you never let me drive`,
        `Burn, burn, burn, baby, burn<br>
        You're just another picture to burn<br>
        Baby, burn`,
        // Teardrops On My Guitar
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        ``,
        // A Place In This World

        // Cold As You

        // The Outside

        // Tied Together With A Smile

        // Stay Beautiful

        // Should've Said No

        // Mary's Song

        // Our Song

        // I'm Only Me When I'm With You

        // Invisible

        // A Perfectly Good Heart

    ],
    "Fearless": [
        // Fearless

        // Fifteen

        // Love Story

        // White Horse

        // You Belong With Me

        // Breathe

        // Tell Me Why

        // You're Not Sorry

        // The Way I Loved You

        // Forever & Always

        // The Best Day

        // Change

        // Jump Then Fall

        // Untouchable

        // Come In With The Rain

        // Superstar

        // The Other Side Of The Door

        // Today Was A Fairytale

        // You All Over Me

        // Mr. Perfectly Fine

        // We Were Happy

        // That's When

        // Don't You

        // Bye Bye Baby
    ],
    "Speak Now": [
        // Mine

        // Sparks Fly
        
        // Back To December

        // Speak Now

        // Dear John

        // Mean

        // The Story Of Us

        // Never Grow Up

        // Enchanted

        // Better Than Revenge

        // Innocent

        // Haunted

        // Last Kiss

        // Long Live
        
        // Ours

        // If This Was A Movie

        // Superman
    ],
    "Red": [
        // State Of Grace

        // Red

        // Treacherous

        // I Knew You Were Trouble

        // All Too Well

        // 22

        // I Almost Do

        // We Are Never Ever Getting Back Together

        // Stay Stay Stay

        // The Last Time

        // Holy Ground

        // Sad Beautiful Tragic

        // The Lucky One

        // Everything Has Changed

        // Starlight

        // Begin Again

        // The Moment I Knew

        // Come Back...Be Here

        // Girl At Home

        // Ronan

        // Better Man

        // Nothing New

        // Babe

        // Message On A Bottle

        // I Bet You Think About Me

        // Forever Winter

        // Run

        // The Very First Night

        // All Too Well (10 Minute Version)

        // Safe & Sound

        // Eyes Open
    ],
    "1989": [
        // Welcome To New York

        // Blank Space

        // Style

        // Out Of The Woods

        // All You Had To Do Was Stay

        // Shake It Off

        // I Wish You Would

        // Bad Blood

        // Wildest Dreams

        // How You Get The Girl

        // This Love

        // I Know Places

        // Clean

        // Wonderland

        // You Are In Love

        // New Romantics
    ],
    "reputation": [
        // ...Ready For It?

        // End Game

        // I Did Something Bad

        // Don't Blame Me

        // Delicate

        // Look What You Made Me Do

        // So It Goes...

        // Gorgeous

        // Getaway Car

        // King Of My Heart

        // Dancing With Our Hands Tied

        // Dress

        // This Is Why We Can't Have Nice Things

        // Call It What You Want

        // New Year's Day
    ],
    "Lover": [
        // I Forgot That You Existed

        // Cruel Summer

        // Lover

        // The Man

        // The Archer

        // I Think He Knows

        // Miss Americana & The Heartbreak Prince

        // Paper Rings

        // Cornelia Street

        // Death By A Thousand Cuts

        // London Boy

        // Soon You'll Get Better

        // False God

        // You Need To Calm Down

        // Afterglow

        // ME!

        // It's Nice To Have A Friend

        // Daylight

        // All Of The Girls You Loved Before
    ],
    "folklore": [
        // the 1

        // cardigan

        // the last great american dynasty

        // exile

        // my tears ricochet

        // mirrorball

        // seven

        // august

        // this is me trying

        // illicit affairs

        // invisible string

        // mad woman

        // epiphany

        // betty

        // peace

        // hoax

        // the lakes
    ],
    "evermore": [
        // willow

        // champagne problems

        // gold rush

        // 'tis the damn season

        // tolerate it

        // no body, no crime

        // happiness

        // dorothea

        // coney island

        // ivy

        // cowboy like me

        // long story short

        // marjorie

        //closure

        // evermore

        // right where you left me

        // it's time to go
    ],
    "Midnights": [
        // Lavender Haze

        // Maroon

        // Anti-Hero

        // Snow On The Beach

        // You're On Your Own, Kid

        // Midnight Rain

        // Question...?

        // Vigilante Shit

        // Bejeweled

        // Labyrinth

        // Karma

        // Sweet Nothing

        // Mastermind

        // The Great War

        // Bigger Than The Whole Sky

        // Paris

        // High Infidelity

        // Glitch

        // Would've, Could've, Should've

        // Dear Reader

        // Hits Different
    ]
};

const albums = Object.keys(lyrics);

const albumLinks = {
    "Taylor Swift": "Web Pages/Album Web Pages/ts1.html",
    "Fearless": "Web Pages/Album Web Pages/ts2.html",
    "Speak Now": "Web Pages/Album Web Pages/ts3.html",
    "Red": "Web Pages/Album Web Pages/ts4.html",
    "1989": "Web Pages/Album Web Pages/ts5.html",
    "reputation": "Web Pages/Album Web Pages/ts6.html",
    "Lover": "Web Pages/Album Web Pages/ts7.html",
    "folklore": "Web Pages/Album Web Pages/ts8.html",
    "evermore": "Web Pages/Album Web Pages/ts9.html",
    "Midnights": "Web Pages/Album Web Pages/ts10.html"
};

function generateLyric() {
    // Get the currently selected album, or select a random album if none is selected
    const selectedButton = document.querySelector(".selected");
    const selectedAlbum = selectedButton ? selectedButton.dataset.album : albums[Math.floor(Math.random() * albums.length)];

    // Get a random lyric from the selected album
    const albumLyrics = lyrics[selectedAlbum];
    const randomLyric = albumLyrics[Math.floor(Math.random() * albumLyrics.length)];

    // Set the text and link of the album name element to the selected album
    const albumNameElement = document.querySelector(".album-name");
    albumNameElement.innerHTML = selectedAlbum;
    albumNameElement.href = albumLinks[selectedAlbum];
    albumNameElement.classList = "album-name " + selectedAlbum.toLowerCase();

    // Set the text of the lyric element to the selected lyric
    const lyricElement = document.getElementById("lyric");
    lyricElement.querySelector(".lyric-text").innerHTML = '<i class="fas fa-music"></i> ' + randomLyric + ' <i class="fas fa-music"></i>';
}



function selectAlbum(albumButton) {
    // Check if the button is already selected
    const isSelected = albumButton.classList.contains("selected");
    
    // Deselect all other buttons
    const albumButtons = document.querySelectorAll(".album-button");
    albumButtons.forEach(button => {
        if (button !== albumButton) {
        button.classList.remove("selected");
        }
    });
    // Toggle the selected class on the clicked button
    if (!isSelected) {
        albumButton.classList.add("selected");
    } else {
        albumButton.classList.remove("selected");
    }

    // Generate a random lyric from the selected album
    const album = albumButton.dataset.album;
}


    const albumButtons = document.querySelectorAll(".album-button");
    albumButtons.forEach(button => {
    button.addEventListener("click", function() {
        selectAlbum(button);
    });
});

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
        `Happiness and confidence are the prettiest things you can wear.`
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").innerHTML = '<i class="fas fa-quote-left"></i> ' + randomQuote + ' <i class="fas fa-quote-right"></i>';
}

