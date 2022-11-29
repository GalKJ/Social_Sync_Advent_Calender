// Function to create object in local storage if it doesn't exist and render it in the UI.
function populateStorage(element) {

    localStorage.setItem('date', '1669852800000')

    dateSelect.valueAsNumber = localStorage.getItem('date');
// Do i want to create a local object to hold the date or do i not need to?
}

// Function to get values from local storage and render them in the UI.
function retrieveDateValueFromLocalStorage() {

    let wonTally = localStorage.getItem('Won');
    let lostTally = localStorage.getItem('Lost');
    
    element.textContent = `Won:${wonTally} Lost:${lostTally}`;
}
