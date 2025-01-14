let toggleTheme = document.getElementById("toggle-theme");
toggleTheme.onclick=()=>{
    if(document.body.classList.contains("theme") != true){
        document.body.classList.add("theme");
        toggleTheme.src="assets/icons/sun.webp";
    }else{
        document.body.classList.remove("theme");
        toggleTheme.src="assets/icons/moon.webp";
    }
}

let searchInput= document.getElementById("search-input");
let searchBtn= document.getElementById("search-btn");
let userDetails = document.getElementById("user-details");

searchBtn.onclick=()=>{
    getData();
}

function getData(){
    let username =searchInput.value;
    let message = document.getElementById("message");
    let data ="";
    if(searchInput.value == ""){
        message.innerHTML = "Enter a Valid Username";
        message.style.color = "rgb(196, 34, 34)";
    }else{
        fetch(`https://api.github.com/users/${username}`)
        .then(res=>res.json())
        .then((userData)=>{
            data = `
                <div class="user-data">
                    <div class="user-image name">
                        <img src="${userData.avatar_url}" alt="User Image">
                        <h1>${userData.name}</h1>
                    </div>
                    <div class="user-info">
                        <div class="location">
                        <span class="title">Location:</span>
                        <span class="description">${userData.location}</span>
                        </div>
                        <div class="bio">
                            <span class="title">Bio:</span>
                            <p class="description">${userData.bio}</p>
                        </div>
                        <div class="username">
                            <span class="title">Username:</span>
                            <p class="description">${userData.login}</p>
                        </div>
                        <a class="show-profile" href="${userData.html_url}" target="_blank" >Show Github Profile</a>
                    </div>
                </div>
                <div class="profile-details">
                        <span class="followers">Followers: ${userData.followers}</span>
                        <span class="following">Following: ${userData.following}</span>
                        <span class="repositories">Repositories: ${userData.public_repos}</span>
                </div>
            `
            userDetails.innerHTML = data;
        })
    }
}
