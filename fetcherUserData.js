async function fetchRandomUserData() {
    let response = await fetch('https://randomuser.me/api/');
    if (response.ok) {
        let data = await response.json();
        return data.results[0];
    }
}

async function displayUserData() {
    let user = await fetchRandomUserData();
    if (user) {
        console.log("Name: " + user.name.first + " " + user.name.last);
        console.log("Email: " + user.email);
    }
}

displayUserData();
