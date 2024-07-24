const quotes = [{
    quote : "위대한 일을 하는 유일한 방법은 당신이 하는 일을 사랑하는 것이다.",
    author: "- 스티브 잡스",
},
{
    quote : "인생은 당신이 다른 계획을 세우느라 바쁠 때 일어나는 것이다.",
    author: "- 존 레논",
},
{
    quote : "성공은 행복의 열쇠가 아니다. 행복이 성공의 열쇠이다.",
    author: "- 알버트 슈바이처",
},
{
    quote : "결국 우리는 적의 말을 기억하지 않을 것이고, 친구의 침묵을 기억할 것이다.",
    author: "- 마틴 루터 킹 주니어",
},
{
    quote : "미래를 예측하는 가장 좋은 방법은 그것을 창조하는 것이다.",
    author: "- 피터 드러커 ",
},
{
    quote : "당신이 시도하지 않는 기회는 100% 놓치는 것이다.",
    author: "- 웨인 그레츠키",
},
{
    quote : "멈추지 않는 한 얼마나 천천히 가는지는 중요하지 않다.",
    author: "- 공자",
},
{
    quote : "당신의 시간은 제한되어 있으니, 남의 인생을 살며 낭비하지 마라.",
    author: "- 스티브 잡스",
},
{
    quote : "우리 뒤와 앞에 있는 것들은 우리 안에 있는 것에 비하면 사소한 문제이다.",
    author: "- 랄프 왈도 에머슨",
},
{
    quote : "계속해서 당신을 다른 존재로 만들려는 세상에서 자신을 잃지 않는 것이 가장 큰 성취다.",
    author: "- 래리 스미스",
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;