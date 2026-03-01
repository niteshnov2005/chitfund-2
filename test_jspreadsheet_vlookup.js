const jspreadsheet = require('jspreadsheet');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><div id="spreadsheet"></div>`);
global.window = dom.window;
global.document = dom.window.document;

// Setup jspreadsheet
const data = [
    ['SOHANJI', 'AL CO'],
    ['1', 1000000],
    ['10', 500000],
    // The lookup array further down
    ['', ''],
    ['', ''],
    ['SOHANJI|AL CO', 150000],
    ['TEST|GEN', 200000]
];

// We want to test VLOOKUP(CONCATENATE(A1, "|", B1), A6:B7, 2, FALSE)
// And VLOOKUP(A1 & "|" & B1, A6:B7, 2, FALSE)

data[1][2] = '=VLOOKUP(CONCATENATE(A1, "|", B1),A6:B7,2,FALSE)';
data[2][2] = '=VLOOKUP(A1&"|"&B1,A6:B7,2,FALSE)';

const sheet = jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    parseFormulas: true
});

console.log("C2 Value:", sheet.getValue('C2'));
console.log("C3 Value:", sheet.getValue('C3'));
