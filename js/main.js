const apiUrl = 'http://vprometheus.cs.uleth.ca:9090/api/v1/targets';
const outputElement = document.getElementById('output');
const outputElement1 = document.getElementById('output1');
const outputElement2 = document.getElementById('output2');

let test, testMachineName, testMachineHealth;

// Make a GET request
/*
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(json => {
        console.log(json);
        //outputElement.textContent = JSON.stringify(json, null, 2);
        test = json.data.activeTargets[0];
        testMachineName = test.discoveredLabels.__address__;
        testMachineHealth = test.health;
        outputElement.textContent = JSON.stringify(test, null, 2);
        outputElement1.textContent = JSON.stringify(testMachineName, null, 2);
        outputElement2.textContent = JSON.stringify(testMachineHealth, null, 2);
    })
    .catch(error => {
        console.error('Error:', error);
    });
*/
    // Defining async function
async function getapi(url) {
   
    // Storing response
    const response = await fetch(url);
   
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    // Refresh the page after a delay of 5 minutes
    setTimeout(function () {
        location.reload();
    }, 50000);

    show(data);
}
// Calling that async function
getapi(apiUrl);
 
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>MachineName</th>
          <th>Health</th>
         </tr>`;
   
    // Loop to access all rows 
    for (let r of data.data.activeTargets) {
        tab += `<tr> 
    <td>${r.discoveredLabels.__address__} </td>
    <td>${r.health}</td>
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}