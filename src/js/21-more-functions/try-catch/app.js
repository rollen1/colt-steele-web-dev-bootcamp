// try and catch

// its useful for testing purposes

try {
    hello.toUpperCase(); 
} catch {
    console.log("Error!")
}

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log('Please pass a string!')
    }
}