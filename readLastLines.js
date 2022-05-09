const readLastLines = require('read-last-lines');

const readLastLinesFunction = async () => {
    try {
        const fileAndLines = await readLastLines.read('HanselAndGretel.txt', 15);
        console.log(fileAndLines);
    }
    catch(err) {
        console.log("Someting wrongg! " + err);
    }
}
readLastLinesFunction();
