import { useState } from "react";

import quotesData from "./datas/quotes.json";

import "./styles/Global.sass";

function App() {
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesData.length);
    setQuote(quotesData[randomIndex]);
  };
  return (
    <div className="quote">
      <p className="quote-title">Random Quote</p>
      {quote.quote && (
        <div className="quote-quote">
          <p className="quote-quote-text">{quote.quote}</p>
          <p className="quote-quote-author">- {quote.author}</p>
        </div>
      )}
      <button className="quote-button" onClick={generateQuote}>
        Generate
      </button>
    </div>
  );
}

export default App;
