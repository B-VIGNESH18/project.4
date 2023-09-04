document.addEventListener("DOMContentLoaded", function () {
  const userListContainer = document.getElementById("user-list-container");

  // Replace with the actual API URL that provides user data
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  // Fetch user data from the API
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Take the first 10 user data entries (assuming there are at least 10)
      const firstTenUsers = data.slice(0, 10);

      // Create user data cards and append them to the container
      firstTenUsers.forEach((user) => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");

        // Create card content with user information
        const userName = document.createElement("p");
        userName.classList.add("bold");
        userName.textContent = ` Name :${user.name}`;

        const userEmail = document.createElement("p");
        userEmail.textContent = `Email: ${user.email}`;

        const userStreet = document.createElement("p");
        userStreet.textContent = `Street: ${user.street}`;

        const userCity = document.createElement("p");
        userCity.textContent = `City: ${user.city}`;

        // Append card content to the user card
        userCard.appendChild(userName);
        userCard.appendChild(userEmail);
        userCard.appendChild(userStreet);
        userCard.appendChild(userCity);

        // Append the user card to the user list container
        userListContainer.appendChild(userCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
});

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const rootDiv = document.getElementById("root");
  console.log(data);
};
window.onload = fetchData;
