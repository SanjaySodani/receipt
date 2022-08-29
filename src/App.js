import "./App.css";
import { useState } from "react";

function App() {
  const [fontSize, setFontSize] = useState("1");
  const [command, setCommand] = useState("select");
  const [text, setText] = useState({
    text: "",
    isDisabled: true
  });
  const [printText, setPrintText] = useState([]);

  const handleCommandChanged = com => {
    setCommand(com);
  };

  const handleTextChanged = inputText => {
    setText({ text: inputText });
  };

  const handleAddCommand = () => {
    if (
      command !== "select" &&
      command !== "printdivider" &&
      command !== "printNothing" &&
      command !== "select"
    ) {
      const printArray = printText;
      printArray.push({
        cmd: command,
        parameters: text.text.split("$"),
        fontsize: { width: fontSize, height: fontSize }
      });
      setPrintText(printArray);
    } else if (command === "select") {
      window.alert("Please choose a command!");
    } else {
      const printArray = printText;
      printArray.push({
        cmd: command,
        parameters: []
      });
      setPrintText(printArray);
    }
  };

  const handlePrint = () => {
    if (printText.length !== 0) {
      const printArray = printText;
      printArray.push({
        cmd: "cutpage",
        parameters: []
      });
      setPrintText(printArray);
      let dataString = JSON.stringify(printText);
      console.log(dataString);
      window.webprint.printText(dataString);
      setCommand("select");
      setPrintText([]);
      setText("");
    }
  };

  // const handleButtonClick = () => {
  //   const data = [
  //     {
  //       cmd: "printcenter",
  //       parameters: ["**** ORDER MODIFIED ****"],
  //       fontsize: { width: 2, height: 2 }
  //     }
  //   ];
  //   let dataString = JSON.stringify(data);
  //   console.log(dataString);
  //   window.webprint.printText(dataString);
  // };

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
        {printText.map((item, index) => {
          return <li key={index}>{item.cmd}</li>;
        })}
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
          handleCommandChanged(e.target.value);
        }}
        value={command}
      >
        <option value="select">Select</option>
        <option value="printcenter">Print Center</option>
        <option value="printNothing">Print Nothing</option>
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
        value={text.text}
        onChange={e => handleTextChanged(e.target.value)}
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
