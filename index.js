const { helloworld } = require ('./core/helloworld');

function main() {
    const greeting = helloworld();
    console.log( greeting );
}

main();