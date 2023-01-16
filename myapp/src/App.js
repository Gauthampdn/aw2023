import React, { useState } from "react";

import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar";
import nationAPI from "./api/nationAPI";

function App() {
  const [state, setState] = useState({
    results: []
  });


  const onSearch = async (text) => {
    const results = await nationAPI.get("/", {
      params: { name: text},
    });


    setState(prevState => {
      return { ...prevState, results: results }
    })
  };

  return (
    <div>
      <div>
        <h2>
          Type in your name and I'll tell you the top 5 nationalities you might be!
        </h2>
        <SearchBar onSearch={onSearch} />
        <CardList results={state.results} />
      </div>
    </div>
  );
}

export default App;