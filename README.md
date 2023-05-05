# UGP-SpreadsheetFormulaSmells
 UGP done in the 6th semester under professor Sruti S Ragavan - Aimed at detecting and notifying users of code smells in their spreadsheet formulas. A descriptive project report can be found here as **'./Report.pdf'**. The presentation slides for this project can be found here as **'./Presentation.pdf'**. Screenshots for the sidebar notifications that this project renders can be found in **'./sidebarExamples'**. The spreadsheet dataset used to test our script is a public excel sheets dataset - "VEUSES" which is a smaller version to the EUSES spreadsheet corpus (Fisher and Rothermel 2005). it is stored in the **'./VEUSES'** folder. 

# how to use:
 The Google apps script codework is stored in the folder **'appsScript'**. 
 The node server code is stored in a different repository: 
 https://github.com/27divyansh/nodejs
 
 The server is hosted from this repository directly on 'railway' platform. requests to this server are sent on : 
 https://nodejs-production-0fa2.up.railway.app/api/data

 Other files on this repository are as follows:

## ./appsScript/code.gs : 
 The **getResonseJSON()** function reads the current cell, takes the formula content and sends a request to our node server which further processes the formula. it returns the JSON which the server sends as a response.

 The **Refactor_old(), Refactor_new(), Refactor_map()** functions process the servers response and present a sidebar (if needed) in the spreadsheet api acording to the old design, the new design (with LET function in identations) and another new design (with LET function represented as variable mappings) respectively.

 The **setLET()** function sets the current cell content to a LET function replacement.

## ./appsScript/*.html :
 These are the html files used to render the sidebar for different design options. The two new designs are not properly functional - these were made as low fidelity prototypes at a fast pace.




