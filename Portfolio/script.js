let spinnerWrapper = document.querySelector(".spinner-wrapper");
const avatarContainer = document.querySelector(".bio-image");
console.log(avatarContainer);
window.addEventListener("load", () => {
  spinnerWrapper.style.display = "none";
});

const fetchProfile = () => {
  const myAvatarImg = document.createElement("img");
  myAvatarImg.classList.add("profilepicture");
  avatarContainer.append(myAvatarImg);
  let myGitHubProfile = fetch("https://api.github.com/users/JetimLee")
    .then((result) => result.json())
    .then((data) => {
      document.querySelector(".profilepicture").src = `${data.avatar_url}`;
    });
  return myGitHubProfile;
};

fetchProfile();
