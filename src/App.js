import React, { useState } from "react";
import AddedToDo from "./React-components/AddedToDo";

const App = () => {
  // let storeAddedToDo = [];
  // this onw is to updata the text inside the input tag
  const [currentToDoText, updateToDoText] = useState("");

  function getToDo(e) {
    updateToDoText(e.target.value);
  }

  // to get all data from the local storage in array
  function allStorage() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    return values;
  }
  // to print added to do using usState
  let getlength = allStorage().length;
  let count = -1;
  const [currentAddedToDoText, UpdataAddedToDoText] = useState(
    function printAddedToDo() {
      if (getlength === 0) {
        return;
      } else {
        getlength--;
        count++;
        return (
          <>
            <AddedToDo value={allStorage()[count]} to_remove={updateToDo} />
            {printAddedToDo()}
          </>
        );
      }
    }
  );
  function addToDo() {
    localStorage.setItem(`To_Do ${currentToDoText}`, currentToDoText);
    let getlength = allStorage().length;
    let count = -1;
    UpdataAddedToDoText(function printAddedToDo() {
      if (getlength === 0) {
        return;
      } else {
        getlength--;
        count++;
        return (
          <>
            <AddedToDo value={allStorage()[count]} to_remove={updateToDo} />
            {printAddedToDo()}
          </>
        );
      }
    });
    updateToDoText("");
  }
  // to remove to do list
  function updateToDo() {
    let getlength = allStorage().length;
    let count = -1;
    UpdataAddedToDoText(function printAddedToDo() {
      if (getlength === 0) {
        return;
      } else {
        getlength--;
        count++;
        return (
          <>
            <AddedToDo value={allStorage()[count]} to_remove={updateToDo} />
            {printAddedToDo()}
          </>
        );
      }
    });
  }
  return (
    <>
      <div id="container">
        <div id="to_do_List_container">
          <nav id="to_do_nav">
            <h1 id="nav_to_do_text">ToDo List</h1>
          </nav>
          <form>
            <input
              id="input_to_add_to_do"
              type="text"
              placeholder="Add a Items"
              autoComplete="off"
              onChange={getToDo}
              value={currentToDoText}
            ></input>
            <div id="button_plus" onClick={addToDo}>
              <div id="plus_horizontal"></div>
              <div id="plus_vertical"></div>
            </div>
          </form>
          <div id="added_content_container">{currentAddedToDoText}</div>
        </div>
      </div>
    </>
  );
};

export default App;
