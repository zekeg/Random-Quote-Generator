/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/




/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/




/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//let's have access to the quote-box node through a variable
var quoteBox = document.getElementById("quote-box")

var quotes = [
  {
    quote:"What's in your hands I think and hope is intelligence: the ability to see the machine as more than when you were ﬁrst led up to it that you can make it more.",
    source:"Alan J. Perlis",
    tags: ["intelligence", "inspiration", "machine"]
  },
  {
    quote:"A system of logical instructions that an automaton can carry out and which causes the automaton to perform some organized task is called a code.",
    source: "John von Neumann",
    citation: "The Computer and the Brain",
    tags: ["code", "programming", "book", "computing"]
  },
  {
    quote: "It is possible to invent a single machine which can be used to compute any computable sequence.",
    source: "Alan Turing",
    year: "1936",
    tags: ["information", "computing", "prediction", "machine", "code"]
  },
  {
    quote:"I believe that at the end of the century the use of words and general educated opinion will have altered so much that one will be able to speak of machines thinking without expecting to be contradicted.",
    source: "Alan Turing",
    tags: ["language", "prediction", "machine", "intelligence"]
  },
  {
    quote:"It is a very sad thing that nowadays there is so little useless information.",
    source: "Oscar Wilde",
    tags: ["prediction" ,"information"]
  },
  {
    quote:"But if thought corrupts language, language can also corrupt thought.",
    source: "George Orwell",
    citation: "1984",
    tags: ["language", "prediction", "intelligence"]
  }
];
//This functions selects a random object from the quotes array
function getRandomQuote(){
  return quotes[Math.floor( Math.random()*quotes.length ) ]
}

function printQuote(){
  //We establish a blank htmlString and create a random quote inside quoteObject
  var htmlString = '';
  var quoteObject = getRandomQuote();

  //Creates a random value between 0/255
  randomRGB = function(){
    var val = Math.floor(Math.random()* 256);
    return val
  }

  document.body.style.backgroundColor =  "rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")"

  //create the quote p tag inside the htmlString variable
  htmlString += '<p class="quote">' + quoteObject.quote + '</p>';

  if(quoteObject.source){
      //first place the quote source in a new p tag
      htmlString+='<p class="source">' + quoteObject.source
      //check for a citation, then check for a year, if they exist, add them
      if(quoteObject.citation){
        htmlString+='<span class="citation">' + quoteObject.citation + '</span>'
      }
      if(quoteObject.year){
        htmlString+='<span class="year">' + quoteObject.year + '</span>'
      }

      if(quoteObject.tags){
        var linkStr = '<ul>'
        for(var x = 0; x<quoteObject.tags.length; x++){
          linkStr+='<li class="tag">' + quoteObject.tags[x] + '</li>'
        }
        htmlString+=linkStr + "</ul>"
      }
      //close the paragraph tag
      htmlString+="</p>"
  }
  //place the assembled string into the quote-box node
  quoteBox.innerHTML = htmlString
}

//switch the quote every 25 seconds
setInterval(printQuote, 25000)
