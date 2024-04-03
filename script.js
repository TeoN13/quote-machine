import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0";
import { debounce } from "https://cdn.skypack.dev/lodash@4.17.21";

const quotes = [
{
  quote:
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  author: "Jimmy Dean" },

{
  quote: "Believe you can and you're halfway there.",
  author: "Theodore Roosevelt" },

{
  quote:
  "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
  author: "Steve Jobs" },

{
  quote: "The way to get started is to quit talking and begin doing.",
  author: "Walt Disney" },

{
  quote:
  "The only limit to our realization of tomorrow will be our doubts of today.",
  author: "Franklin D. Roosevelt" },

{
  quote:
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  author: "Winston Churchill" },

{
  quote:
  "The most difficult thing is the decision to act, the rest is merely tenacity.",
  author: "Amelia Earhart" },

{
  quote: "It does not matter how slowly you go as long as you do not stop.",
  author: "Confucius" },

{
  quote: "Don't be afraid to give up the good to go for the great.",
  author: "John D. Rockefeller" },

{
  quote:
  "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
  author: "Joel Brown" },

{
  quote:
  "The biggest adventure you can take is to live the life of your dreams.",
  author: "Oprah Winfrey" },

{
  quote:
  "The only thing that separates successful people from the ones who aren't is the willingness to work very, very hard.",
  author: "Helen Gurley Brown" },

{
  quote:
  "The two most important days in your life are the day you are born and the day you find out why.",
  author: "Mark Twain" }];



class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotesExamples: quotes, // Array of objects
      currentQuote: {} // Object with quote and author properties
    };
    this.getRandomQuote = this.getRandomQuote.bind(this);
    this.displayQuote = this.displayQuote.bind(this);
  }
  // Display a quote when page first loads
  componentDidMount() {
    this.displayQuote();
  }
  // Pick a random quote from state.quotesExamples
  getRandomQuote() {
    let newQuote = this.state.quotesExamples[Math.floor(Math.random() * quotes.length)];
    // Make sure it's a new quote
    while (newQuote === this.state.currentQuote) {
      newQuote = this.state.quotesExamples[Math.floor(Math.random() * quotes.length)];
    }
    return newQuote;
  }
  // Generate random background color
  getRandomColor() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16);
    // Fixed error when match return null by adding a fallback color
    const color = hex.match(/[0-9a-f]{1,6}/i) !== 'null' ? `#${hex.match(/[0-9a-f]{1,6}/i)[0]}` : '#00ACC1';
    return color;
  }
  // Set picked quote to state.currentQuote
  displayQuote() {
    const randomColor = this.getRandomColor();
    // Change the quote icon color
    const quoteIcons = document.querySelectorAll(".quote-icon");
    quoteIcons.forEach(icon => icon.style.fill = randomColor);
    // Change Twitter icon color
    const twitterIcons = document.querySelectorAll(".twitter-icon");
    twitterIcons.forEach(icon => icon.style.color = randomColor);
    // Change page background color
    document.querySelector(".bck-color").style.backgroundColor = randomColor;
    // Select the buttons and set their border and color
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
      button.style.border = "1px solid";
      button.style.color = randomColor;
    });
    // Change quote border color to random color
    document.querySelector("#text").style.borderColor = randomColor;
    // Change quote to display
    const quote = this.getRandomQuote();
    this.setState({
      currentQuote: quote });


  }

  render() {
    const quote = encodeURIComponent(this.state.currentQuote.quote).replace(
    / /g,
    "%20");

    const author = encodeURIComponent(this.state.currentQuote.author).replace(
    / /g,
    "");

    const tweetLink = `https://twitter.com/intent/tweet?text=${quote}&hashtags=${author}`;
    return /*#__PURE__*/(
      React.createElement("div", { id: "quote-box", class: "container-fluid bck-color" }, /*#__PURE__*/
      React.createElement("p", { id: "text" }, /*#__PURE__*/
      React.createElement("svg", {
        viewBox: "0 0 512 512",
        width: "100",
        title: "quote-left",
        class: "quote-icon quote-left" }, /*#__PURE__*/

      React.createElement("path", { d: "M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" })), /*#__PURE__*/

      React.createElement("span", { id: "quote-text" }, this.state.currentQuote.quote), /*#__PURE__*/
      React.createElement("svg", {
        viewBox: "0 0 512 512",
        width: "100",
        title: "quote-right",
        class: "quote-icon quote-right" }, /*#__PURE__*/

      React.createElement("path", { d: "M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z" }))), /*#__PURE__*/


      React.createElement("p", { id: "author" }, "~", this.state.currentQuote.author), /*#__PURE__*/
      React.createElement("div", { id: "button-div" }, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: tweetLink, target: "_blank" }, /*#__PURE__*/
      React.createElement("button", { id: "twitter", class: "btn btn-dark" }, /*#__PURE__*/
      React.createElement("i", { class: "fa-brands fa-twitter twitter-icon" }))), /*#__PURE__*/


      React.createElement("button", {
        id: "new-quote",
        class: "btn btn-dark",
        onClick: this.displayQuote }, "New quote"))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Quote, null), document.getElementById("outer-quote-box"));


/*
window.addEventListener("resize", () => {
  // Fix font size if it overflows
  // Changing the quote text font size
  const element = document.querySelector("#quote-text");
  if(element.offsetHeight > element.scrollHeight || element.offsetWidth > element.scrollWidth){
  console.log(getComputedStyle(element).fontSize);
  let fontSize = parseInt(getComputedStyle(element).fontSize, 10);
    if (fontSize > 10) {  
      element.style.fontSize = `${fontSize - 2}px`;
    }
  }
})
*/

// Fix font size if it overflows
// Changing the quote text font size
// Element to check overflow
const element = document.querySelector("#text");
// Actual element that needs font size changed
const textElement = document.querySelector("#quote-text");
// element.scrollHeight represent the dimensions of the element's content, including any overflow that is not visible
// element.offsetHeight represent the dimensions of the element's content and padding

function reduceFontSize() {
  //console.log(getComputedStyle(element).fontSize);
  //console.log('Condition is', (element.offsetHeight < element.scrollHeight),'as its actual height is ',element.offsetHeight, 'and its height including overflow is ',element.scrollHeight)
  // Only overflows vertically
  while (element.offsetHeight < element.scrollHeight) {
    let fontSize = parseInt(getComputedStyle(textElement).fontSize, 10);
    if (fontSize > 12) {
      textElement.style.fontSize = `${fontSize - 2}px`;
    } else {
      break;
    }
  }
}

const debouncedReduceFontSize = debounce(reduceFontSize, 250); // delay of 250ms between calls
reduceFontSize(); // Call it when page 1st loads
window.addEventListener("resize", debouncedReduceFontSize); // When window is resized

const newQuoteButton = document.querySelector('#new-quote');
newQuoteButton.addEventListener('click', debouncedReduceFontSize); // And when new quote is generated