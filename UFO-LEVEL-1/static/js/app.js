

// YOUR CODE HERE!
// from data.js assign array of objects to variable
var ufoData = data;

// Select the button

var tbody = d3.select("tbody");
// populate the data
console.log(data)
// pull the data to the front of the site
data.forEach((element) => {
    var row = tbody.append("tr");
    Object.entries(element).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var dateButton = d3.select("#filter-btn");

dateButton.on("click", function(){

    //Select the datetime input 
    var inputDateElement = d3.select("#datetime");

    //Get the value of the datetime input
    var inputDateValue = inputDateElement.property("value");

    console.log("inputDateValue:",inputDateValue);
 

    var filterDateData = ufoData.filter(sighting => sighting.datetime === inputDateValue);

    console.log(filterDateData);

    // Clear any rows and cells from prior 
    tbody.html("");

    filterDateData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });


});