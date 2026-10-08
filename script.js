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

  if(username === "") {
    alert("Please enter a Github username");
    return;
  }

  console.log("Button clicked!");
  console.log(username);

 const apiUrl = `https://api.github.com/users/${username}`;

 try{
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("User not found");
  }

  const user = await response.json();

 }
 catch (error){
  console.log(error);

  userName.textContent = "User not found";
  userBio.textContent = "Please check the username and try again."
 }

  console.log(apiUrl);

  const response = await fetch(apiUrl);
  console.log(response);

  const user = await response.json();
  console.log(user);

  userName.textContent = user.name;
  userImage.src = user.avatar_url;
  userBio.textContent = user.bio;
  userUsername.textContent = "@" + user.login;
  userLocation.textContent = "📍" + user.location;

  followers.textContent = user.followers;
  following.textContent = user.following;
  respositories.textContent = user.public_repos;
  profileLink.href = user.html_url;

}
searchBtn.addEventListener("click", searchUser);
