// index.js

function findMatching(drivers, searchString) {
    const lowerSearchString = searchString.toLowerCase();
    return drivers.filter(driver => 
        driver.toLowerCase() === lowerSearchString
    );
}

function fuzzyMatch(drivers, searchString) {
    const lowerSearchString = searchString.toLowerCase();
    return drivers.filter(driver => 
        driver.toLowerCase().startsWith(lowerSearchString)
    );
}

function matchName(drivers, searchString) {
    const lowerSearchString = searchString.toLowerCase();
    return drivers.filter(driver => 
        driver.name.toLowerCase() === lowerSearchString
    );
}

 
module.exports = {
    findMatching,
    fuzzyMatch,
    matchName
};