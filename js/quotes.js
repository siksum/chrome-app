const quotes = [
    {
        quote: "The only limit to our realization of tomorrow is our doubts of today.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein",
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "Happiness depends upon ourselves.",
        author: "Aristotle",
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela",
    },
    {
        quote: "Act as if what you do makes a difference. It does.",
        author: "William James",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;