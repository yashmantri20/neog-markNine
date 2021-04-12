import React from "react";
import "./styles.css";

export default function App() {
  const [category, setCategory] = React.useState("Programming");
  const books = {
    Programming: [
      {
        name: "Eloquent JavaScript"
      },
      {
        name: "JavaScript - The Definitive Guide"
      },
      {
        name: "Learn Python the Hard Way"
      }
    ],

    Fictional: [
      {
        name: "Harry Potter and the Sorcerer's Stone"
      },
      {
        name: "Adventures of Sherlock Holmes"
      }
    ],
    Motivational: [
      {
        name: "The Power of Positive Thinking"
      },
      {
        name: "Think and Grow Rich"
      }
    ]
  };
  return (
    <div className="App">
      <h1>Favourite Books 👇</h1>
      <div className="btn-container">
        {Object.keys(books).map((c) => (
          <button key={c} onClick={() => setCategory(c)}>
            {c}
          </button>
        ))}
      </div>
      <hr />
      <div className="list">
        {books[category].map((book) => (
          <div className="item" key={book.name}>
            <h2>{book.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
