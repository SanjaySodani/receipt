setTimeout(() => {
  let data = [
    {
      cmd: "printcenter",
      parameters: ["***Cancelled Item(s)***"],
      fontsize: {
        width: 2,
        height: 2
      }
    },
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
    }
  ];
  let dataString = JSON.stringify(data);
  console.log(dataString);
  window.webprint.printText(dataString);
}, 1000);
