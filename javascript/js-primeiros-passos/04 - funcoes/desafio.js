function sayMyName(name) {
    console.log('Your name is ' + name);
}

function ehMaiorDeIdade(age) {
    if (age >= 18) {
        console.log('maior de idade');
    } else {
        console.log('menor de idade');
    }
}

(function () {
    sayMyName('Mai');
    ehMaiorDeIdade(32);
})();