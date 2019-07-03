// Random Name Generator

clog("test");

// Add Event Listener - Click event on button
getid("name-btn").addEventListener('click', getName);

function getName() {
    // Get a random name and display it
    let firstName = randomName("Harsh", "Hazem", "Ricardo", "Prithvi");
    let lastName = randomName("Smith", "Xu", "Patel", "Wong");
    let fullName = firstName + " " + lastName;

    // Output Random Name
    getid('result').innerHTML = fullName;
}


function randomName(name1, name2, name3, name4) {
    // Return a random name from the given name arguments

    let randNum = Math.random(); // Random decimal b/t 0 and 1

    if (randNum < 0.25) {
        return name1;
    } else if (randNum < 0.5) {
        return name2;
    } else if (randNum < 0.75) {
        return name3;
    } else {
        return name4;
    }
}

