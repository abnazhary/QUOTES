var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    Auther: "― Oscar Wilde",
  },
  {
    quote: "“So many books, so little time.”",
    Auther: "― Frank Zappa",
  },
  {
    quote:
      "“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”",
    Auther: "― Albert Einstein",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    Auther: "― Marcus Tullius Cicero",
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    Auther: "― Mae West",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    Auther: "― Mahatma Gandhi",
  },
  {
    quote: "“If you tell the truth, you dont have to remember anything.”",
    Auther: "― Mark Twain",
  },
  {
    quote: "“A friend is someone who knows all about you and still loves you.”",
    Auther: "― Elbert Hubbard",
  },
  {
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    Auther: "― Oscar Wilde",
  },
  {
    quote: "“Always forgive your enemies; nothing annoys them so much.”",
    Auther: "― Oscar Wilde",
  },
];

function getQoutes() {
  var num = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[num].quote;
  document.getElementById("auther").innerHTML = quotes[num].Auther;
}
