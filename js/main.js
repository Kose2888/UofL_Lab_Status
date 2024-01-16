const apiUrl = 'http://vprometheus.cs.uleth.ca:9090/api/v1/targets';
const outputElement = document.getElementById('output');
const outputElement1 = document.getElementById('output1');
const outputElement2 = document.getElementById('output2');

let test, testMachineName, testMachineHealth;

// Make a GET request
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