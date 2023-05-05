function getResponseJSON(){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cell = ss.getCurrentCell();

  var url = "https://nodejs-production-0fa2.up.railway.app/api/data"; 
  
  var payload = {
    "message": cell.getFormula()
  };

  Logger.log("current cell index is: (" + cell.getRow() + "," + cell.getColumn() + ") and the Formula content is: " + cell.getFormula());

  var options = {
    "method": "POST",
    "contentType": "application/json",
    "payload": JSON.stringify(payload) ,
    muteHttpExceptions : false
  };

  var response = UrlFetchApp.fetch(url, options);
  return responseJSON = JSON.parse(response);
}

function Refactor_old() {
  responseJSON = getResponseJSON();
  var myhtml = "<!DOCTYPE html><html> <body>";
  myhtml+=responseJSON["ColoredFormula"];
  myhtml+=" </body></html>";
  var html = HtmlService.createHtmlOutput(myhtml).setTitle('My custom sidebar');

  // SpreadsheetApp.getUi().showModalDialog(html, "Alert Title");

  var linkUrl = "javascript:potato()";
  var linkText = "Click here to run potato function";
  var note = "This is a comment with a link: <a href='" + linkUrl + "'>" + linkText + "</a>";

  var html2 = HtmlService.createHtmlOutputFromFile('try').setTitle('My custom sidebar');

  SpreadsheetApp.getUi().showSidebar(html2);

}

function Refactor_new() {
  responseJSON = getResponseJSON();
  var myhtml = "<!DOCTYPE html><html> <body>";
  myhtml+=responseJSON["ColoredFormula"];
  myhtml+=" </body></html>";
  var html = HtmlService.createHtmlOutput(myhtml).setTitle('My custom sidebar');

  // SpreadsheetApp.getUi().showModalDialog(html, "Alert Title");

  var linkUrl = "javascript:potato()";
  var linkText = "Click here to run potato function";
  var note = "This is a comment with a link: <a href='" + linkUrl + "'>" + linkText + "</a>";

  var html2 = HtmlService.createHtmlOutputFromFile('new').setTitle('My custom sidebar');

  SpreadsheetApp.getUi().showSidebar(html2);

}

function Refactor_map() {
  responseJSON = getResponseJSON();
  var myhtml = "<!DOCTYPE html><html> <body>";
  myhtml+=responseJSON["ColoredFormula"];
  myhtml+=" </body></html>";
  var html = HtmlService.createHtmlOutput(myhtml).setTitle('My custom sidebar');

  // SpreadsheetApp.getUi().showModalDialog(html, "Alert Title");

  var linkUrl = "javascript:potato()";
  var linkText = "Click here to run potato function";
  var note = "This is a comment with a link: <a href='" + linkUrl + "'>" + linkText + "</a>";

  var html2 = HtmlService.createHtmlOutputFromFile('newmapping').setTitle('My custom sidebar');

  SpreadsheetApp.getUi().showSidebar(html2);

}

function setLET(){
  var ss = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var cell = ss.getCurrentCell();
  responseJSON = getResponseJSON();
  cell.setFormula(responseJSON["LET"]);
}