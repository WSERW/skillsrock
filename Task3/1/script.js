// 1. Fetch API — Случайные пользователи

const userList = document.querySelector('.user_list')
const usersBtn = document.querySelector('#getUsers')

const fetchRandomUsers = () => {
    userList.innerHTML = "Загрузка...";

    fetch('https://randomuser.me/api/?results=10')
        .then(response => {
            if (!response.ok) {
                throw new Error("Не удалось загрузить пользователей");
            }
            return response.json();
        })
        .then(data => {
            const users = data.results;
            const usersHTML = users.map(user => {
                return `
          <li class="user">
            <img class="user_img" src="${user.picture.thumbnail}" alt="${user.name.first}">
            <h2 class="user_name">${user.name.first} ${user.name.last}</h2>
            <p class="user_email">${user.email}</p>
          </li>
        `;
            }).join('');

            userList.innerHTML = usersHTML;
        })
        .catch(error => {
            userList.innerHTML = "Не удалось загрузить пользователей";
            console.error(error);
        });
}

usersBtn.addEventListener('click', fetchRandomUsers)

