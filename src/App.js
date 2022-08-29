import "./App.css";

function App() {
  const handleButtonClick = () => {
    const data = [
      {
        cmd: "printcenter",
        parameters: ["*** Order Modified ***"],
        fontsize: {
          width: 2,
          height: 2
        }
      },

      {
        cmd: "printcenter",
        parameters: ["Please review this order"],
        fontsize: {
          width: 2,
          height: 2
        }
      },
      {
        cmd: "printNothing",
        parameters: []
      },
      {
        cmd: "printcenter",
        parameters: ["*** Cancelled Item(s) ***"],
        fontsize: {
          width: 2,
          height: 2
        }
      },
      {
        cmd: "printNothing",
        parameters: []
      },
      {
        cmd: "cutpage",
        parameters: []
      }
    ];
    let dataString = JSON.stringify(data);
    console.log(dataString);
    window.webprint.printText(dataString);
  };
  return (
    <div className="App">
      <h2>Test_aa</h2>
      <button onClick={handleButtonClick}>Print</button>
    </div>
  );
}

export default App;
