The msdf-bmfont dependency does not compile when using node v11 and older. This is because the canvas version specified in the msdf-bmfont project is too old (i.e. v1.* instead of v2.*).

There is a pull request that resolves this issue: https://github.com/Jam3/msdf-bmfont/pull/19

but this request has not been merged into master yet. 

To handle this, I've applied the changes and added the modified dependency to the fixed_deps folder.

opentype.js was also manually bumped to the latest 1.3.4 version since the old version was causing a build error: Unsupported GSUB table version.

This project in its current state is being run on a windows 11 machine using Node v16.13.1

Just run: npm run start and all .ttf fonts inside the /fonts folder will be converted to .png and .json files located in the /output folder.