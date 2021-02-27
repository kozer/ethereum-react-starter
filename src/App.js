import React from "react";
import Header from "./Header";
function App() {
  return (
    <div className="bg-coolGray-700 text-warmGray-50 h-full w-full flex flex-col">
      <Header></Header>
      <div className="container m-4">
        <h1 className="text-3xl">This is an ethereum app</h1>
      </div>
    </div>
  );
}

export default App;
