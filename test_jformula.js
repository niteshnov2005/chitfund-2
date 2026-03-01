const jformula = require('jformula');
const formulae = [
    '=VLOOKUP(A3&"|"&B3,O3:P16,2,FALSE)',
    '=VLOOKUP(CONCATENATE(A3,"|",B3),O3:P16,2,FALSE)'
];

formulae.forEach(f => {
    try {
        console.log("Parsing: " + f);
        console.log(jformula.default(f, {
            A3: "TEST",
            B3: "GEN",
            O3: "TEST|GEN",
            P3: 150
        }));
    } catch (e) {
        console.log("Error: " + e.message);
    }
});
