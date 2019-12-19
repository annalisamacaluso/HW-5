// current date and time
const m = moment();
console.log(m.format("dddd[,] MMM Mo"));
// display
$('#currentDay').attr(m.format("dddd[,] MMM Mo"));

