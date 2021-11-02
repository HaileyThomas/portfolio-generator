// allows us to use node.js fs
const fs = require('fs');
// allows us to use generatePage function from page-template
const generatePage = require('./src/page-template.js');

// profile data array
const profileDataArgs = process.argv.slice(2);

// extract user command-line arguments and store them into distinct variables
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
// above is the same as below
const [name, github] = profileDataArgs;


fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});

/* EXAMPLES/CONCEPTS
const printProfileData = profileDataArr => {
    // This...
    for (let i = 0; i < profileDataArr.length; i += 1) {
        console.log(profileDataArr[i]);
    }

    console.log('================');

    // Is the same as this...
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
*/