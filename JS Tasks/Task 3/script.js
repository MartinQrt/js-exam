/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';

const createTableSkeleton = () => {
  const login = document.createElement("th");
  login.innerText = "login";

  const avatar_url = document.createElement("th");
  avatar_url.innerText = "avatar_url";

  const tr = document.createElement("tr");
  tr.append(login, avatar_url);

  const thead = document.createElement("thead");
  thead.append(tr);

  const table = document.createElement("table");
  table.append(thead, document.createElement("tbody"));
  document.body.append(table);
};

function populateTable(users) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  users.forEach((user) => {
    const login = document.createElement("td");
    login.innerText = user.login;

    const avatar_url = document.createElement("avatar_url");
    avatar_url.innerText = user.avatar_url;

    const tr = document.createElement("tr");
    tr.append(login, avatar_url);
    tbody.append(tr);
  });
}

createTableSkeleton();

async function fetchData() {
  try {
    let response = await fetch("https://api.github.com/users");
    if (response.ok) {
      state.users = await response.json();
      populateTable(state.users);
    }
}
}
//   } catch (error) {
//     console.error(error);



fetchData();
