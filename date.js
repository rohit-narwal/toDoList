// making an external module to export date
// exporting specific functions to use into other files
module.exports.getDate = getDate;
function getDate() {
    let today = new Date();
    let format = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    };
    return today.toLocaleDateString("en", format);
}
module.exports.getDay = getDay;

function getDay() {
    let today = new Date();
    let format = {
        weekday: 'long',
    };
    return today.toLocaleDateString("en", format);
}

console.log(module.exports)