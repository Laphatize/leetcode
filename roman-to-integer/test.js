s = "MCMXCIV"
let something = {};

    something["I"] = 1;
    something["V"] = 5;
    something["X"] = 10;
    something["L"] = 50;
    something["C"] = 100;
    something["D"] = 500;
    something["M"] = 1000;

    let parsed = [];
    let totalSum = 0;

    // input is s
    s.split("").forEach(letter => {
        if (something[letter] > 0) {
        
        parsed.push(something[letter]);
        
        totalSum += something[letter]
        }
    })


console.log(totalSum);
