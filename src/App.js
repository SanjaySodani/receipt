import "./App.css";

function App() {
  const handleButtonClick = () => {
    const data = [
      {
        cmd: "printcenter",
        parameters: ["**** ORDER MODIFIED ****"],
        fontsize: { width: 2, height: 2 }
      },
      {
        cmd: "printcenter",
        parameters: ["Please review this order"],
        fontsize: { width: 2, height: 2 }
      },
      { cmd: "printcenter", parameters: ["", "", "KOT"] },
      { cmd: "printNothing", parameters: [] },
      {
        cmd: "printcenter",
        parameters: ["31"],
        fontsize: { width: 2, height: 2 }
      },
      { cmd: "printcenter", parameters: ["Breakfast - T&T"] },
      { cmd: "printleft", parameters: ["Date: 2022-08-29 13:48:27"] },
      { cmd: "printNothing", parameters: [] },
      { cmd: "printitemdetails", parameters: ["Product", "Qty", "Total"] },
      { cmd: "printdivider", parameters: [] },
      {
        cmd: "printitemdetails",
        parameters: ["111 Apfelkuchen", "1", "£2.00"]
      },
      {
        cmd: "printitemdetails",
        parameters: ["Pasta & Vegetable Salad", "1", "£1.25"]
      },
      { cmd: "printitemdetails", parameters: ["Slaw", "1", "£3.50"] },
      { cmd: "printleftright", parameters: ["TotalQty: 3", "Amt: £6.75"] },
      {
        cmd: "printcenter",
        parameters: [" ", "***Cancelled Item(s)***"],
        fontsize: { width: 2, height: 2 }
      },
      { cmd: "printitemdetails", parameters: ["Product", "Qty", "Total"] },
      { cmd: "printdivider", parameters: [] },
      {
        cmd: "printleftright",
        parameters: ["Green Seasonal Salad", "1", "£1.25"]
      },
      { cmd: "printleftright", parameters: ["1 Caesar Salad", "1", "£0.00"] },
      { cmd: "printdivider", parameters: [] },
      { cmd: "printleftright", parameters: ["TotalQty:2", "Amt:£1.25"] },
      { cmd: "printleft", parameters: ["Payment mode:Online: £6.75"] },
      {
        cmd: "printleft",
        parameters: ["Ref number: TE1-0000031-760Z22829134848260"]
      },
      { cmd: "printcenter", parameters: ["****"] },
      { cmd: "printleft", parameters: ["Printed at :2022-08-29 13:49:43"] },
      { cmd: "printleft", parameters: ["Manually Printed"] },
      { cmd: "cutpage", parameters: [] }
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
