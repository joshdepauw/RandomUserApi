// grabs a random user from API
function fetchUser() {
    fetch('https://randomuser.me/api/')
    .then((res) => res.json())
    .then((data) => {
        console.log({data});
       displayUser(data.results[0])
    });
}

function displayUser(user) {
    const userDisplay = document.querySelector('#user');

    if (user.gender === 'female') {
        document.body.style.backgroundColor = 'purple'
    } else document.body.style.backgroundColor = 'blue'
    
    
    
    userDisplay.innerHTML = `
    <div class="flex justify-between">
    <div class="flex">
    <img
    class="w-48 h-48 rounded-full mr-8"
    src="${user.picture.large}"
    />
    <div class="space-y-3">
    <p class="text-xl">
    <span class="font-bold">Name: </span>${user.name.title} ${user.name.first} ${user.name.last}
    </p>
    <p class="text-xl">
    <span class="font-bold">Email: </span> ${user.email}
    </p>
    <p class="text-xl">
    <span class="font-bold">Phone: </span> ${user.cell}
    </p>
    <p class="text-xl">
    <span class="font-bold">Location: </span> ${user.location.city}, ${user.location.state}
    </p>
    <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
    </div>
    </div>
    </div>
    `;
    
    
    document.querySelector('#btn').addEventListener('click', fetchUser)
    
}
    
    fetchUser();