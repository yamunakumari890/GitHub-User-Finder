const usernameInput = document.getElementById("usernameInput");
const searchBtn = document.getElementById("searchBtn");
const userImage = document.getElementById("userImage");
const userName = document.getElementById("userName");
const userUsername = document.getElementById("userUsername");
const userBio = document.getElementById("userBio");
const userLocation = document.getElementById("userLocation");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const respositories = document.getElementById("repositories");
const profileLink = document.getElementById("profileLink");

async function searchUser() {
  const username = usernameInput.value.trim();

  console.log("Button clicked!");
  console.log(username);

 const apiUrl = `https://api.github.com/users/${username}`;
  console.log(apiUrl);

  const response = await fetch(apiUrl);
  console.log(response);

  const user = await response.json();
  console.log(user);

  userName.textContent = user.name;

}

searchBtn.addEventListener("click", searchUser);