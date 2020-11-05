

// YOUR CODE HERE!
// from data.js assign array of objects to  variable
var ufoData = data;

// Select the button
var button = d3.select("#filter-btn");
var tbody = d3.select("tbody");

// populate the data
console.log(data)
// pull the data to the front of the site
data.forEach((element2) => {
    var row = tbody.append("tr");
    Object.entries(element2).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


inputIds = ["#datetime","#city","#state","#country","#shape"];
inputKeys = ["datetime","city","state","country","shape"];

// xreate the function to return true or false if input have a value
function checkInput(id) {
    var inputElement = d3.select(id);


    var inputValue = inputElement.property("value");
    console.log("inputValue",inputValue);

    if (inputValue == "" || inputValue == null) {
        console.log(`id ${id} is  blank`);
        return false;
    }
    else{
        console.log(`id ${id} is not blank`)
        return id;
    }
}

// filter dataset with input
function filterData(id,key,dataset) {
    var inputElement = d3.select(id);
    
    var inputValue = inputElement.property("value");


    var filteredData = dataset.filter(sighting => sighting[key] === inputValue);
    console.log("filterData loop:",filteredData);

    return filteredData;
}

button.on("click", function(){

    var activeInputs = [];

    activeInputs = inputIds.map((id) => checkInput(id));
    console.log("activeInputs: ",activeInputs);

    // Create tableData
    var tableData = ufoData;

    activeInputs.forEach((input) => {
        if(input){
            keyVal = input.slice(1);
            console.log(`keyVal: ${keyVal}, input: ${input}`);
            
            tableData = filterData(input,keyVal,tableData);
        }

    });


    // Clear any rows and cells from prior
    tbody.html("");

    tableData.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });


});
