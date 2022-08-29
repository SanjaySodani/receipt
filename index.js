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
  console.log(data);
  window.webprint.printText(data);
}, 1000);
