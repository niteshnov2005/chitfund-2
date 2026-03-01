const f = require('@jspreadsheet/formula');

const context = {
    A3: '"SOHANJI"',
    B3: '"AL CO"',
    O3: '"SOHANJI|AL CO"',
    O4: '"OTHER|FOO"',
    P4: 1000
};

// Need a mock data array for range testing O3:P16
// jspreadsheet handles ranges internally, we'll test without ranges first to see if CONCATENATE works
const formula1 = 'CONCATENATE(A3, "|", B3)';
const formula2 = 'A3 & "|" & B3';

console.log("Formula 1:", formula1);
try {
    console.log("Result 1:", f(formula1, context));
} catch (e) {
    console.log("Error 1:", e.message);
}

console.log("\nFormula 2:", formula2);
try {
    console.log("Result 2:", f(formula2, context));
} catch (e) {
    console.log("Error 2:", e.message);
}
