const generateBMFont = require('msdf-bmfont');
const fs = require('fs');

let fontsDir = fs.readdirSync(`./fonts`);
let fontFiles = fontsDir.filter((e) => e.match(/.*\.(ttf?)/ig));

if (!!fontFiles && fontFiles.length > 0) {
    for (var fontFile of fontFiles) {
        const buildFunc = (fontFilename) => {
            generateBMFont(`./fonts/${fontFile}`, (error, textures, font) => {
                if (error) throw error;
                textures.forEach((sheet, index) => {
                    font.pages.push(`./output/${fontFilename}.png`);
                    fs.writeFile(`./output/${fontFilename}.png`, sheet, (err) => {
                        if (err) throw err;
                    });
                });
                fs.writeFile(`./output/${fontFilename}.json`, JSON.stringify(font), (err) => {
                    if (err) throw err;
                });
            });
        };
        
        buildFunc(fontFile.substring(0, fontFile.indexOf(".")))
    }
} else {
    console.info("No .ttf font files detected in the /fonts dir.")
}