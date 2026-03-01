const f = require('@jspreadsheet/formula');

const context = {
    O3: 'SOHANJI|AL CO',
    P3: 1500000,
    O4: 'OTHER|FOO',
    P4: 1000
};

const formula = 'VLOOKUP("SOHANJI|AL CO", O3:P4, 2, FALSE)';

console.log("Formula:", formula);
try {
    console.log("Result:", f(formula, context));
} catch (e) {
    console.log("Error:", e.message);
}
