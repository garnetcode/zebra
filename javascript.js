function zebra() {
    var style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule('tr:nth-child(even) {background-color: grey;}');
  }

 function normal() {
 	var style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule('tr:nth-child(even) {background-color: white;}');
 }
