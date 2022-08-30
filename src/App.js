import "./App.css";
import { useState } from "react";

function App() {
  const [fontSize, setFontSize] = useState("1");
  const [command, setCommand] = useState("select");
  const [text, setText] = useState("");
  const [printText, setPrintText] = useState([]);

  const handleAddCommand = () => {
    if (command === "select") {
      window.alert("Please choose a command!");
    } else if (command === "printdivider" || command === "printnothing") {
      setPrintText(prevArray => [
        ...prevArray,
        {
          cmd: command,
          parameters: []
        }
      ]);
    } else {
      setPrintText(prevArray => [
        ...prevArray,
        {
          cmd: command,
          parameters: text.split("$"),
          fontsize: { width: fontSize, height: fontSize }
        }
      ]);
    }
  };

  const handlePrint = () => {
    if (printText.length !== 0) {
      const printArray = printText;
      printArray.push({
        cmd: "cutpage",
        parameters: []
      });
      let dataString = JSON.stringify(printArray);
      console.log(dataString);
      window.webprint.printText(dataString);
      setCommand("select");
      setPrintText([]);
      setText("");
    }
  };

  return (
    <div className="App">
      <h2>Test the Printer</h2>
      <ol>
        <li>Choose a command</li>
        <li>Change the font if required</li>
        <li>
          Type the printing text if required and click <strong>Add</strong>
        </li>
        <li>
          Click on <strong>Print</strong>
        </li>
      </ol>
      <ul>
        {printText.length !== 0 ? (
          printText.map((item, index) => {
            return <li key={index}>{item.cmd}</li>;
          })
        ) : (
          <small>Nothing added yet!</small>
        )}
      </ul>
      <label htmlFor="font">Choose font size: </label>
      <select
        id="font"
        name="font"
        onChange={e => {
          setFontSize(e.target.value);
        }}
        value={fontSize}
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <br /> <br />
      <label htmlFor="command">Choose a command: </label>
      <select
        id="command"
        name="command"
        onChange={e => {
          setCommand(e.target.value);
        }}
        value={command}
      >
        <option value="select">Select</option>
        <option value="printcenter">Print Center</option>
        <option value="printnothing">Print Nothing</option>
        <option value="printleft">Print Left</option>
        <option value="printitemdetails">Print Item Details</option>
        <option value="printdivider">Print Divider</option>
        <option value="printright">Print Right</option>
      </select>
      <br /> <br />
      <small>Use '$' to seprate the string</small> <br />
      <input
        type="text"
        placeholder="Type something"
        value={text}
        onChange={e => setText(e.target.value)}
        disabled={
          command === "select" ||
          command === "printdivider" ||
          command === "printnothing"
            ? true
            : false
        }
      />
      <button onClick={handleAddCommand}>+ Add</button>
      <br /> <br />
      <button className="buttonPrint" onClick={handlePrint}>
        Print
      </button>
    </div>
  );
}

export default App;
