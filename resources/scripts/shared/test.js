// import { EMPTY, fromEvent } from "rxjs";
// import {
//   map,
//   debounceTime,
//   distinctUntilChanged,
//   switchMap,
//   mergeMap,
//   tap,
//   catchError,
//   filter,
// } from "rxjs/operators";
// import { ajax } from "rxjs/ajax";

export default class Test {
  constructor() {
    this.init();
  }

  init() {
    const url = "https://api.github.com/orgs/angular/repos";

    //   const url = "https://api.github.com/search/users?q=";

    //   const search = document.getElementById("search");
    //   const result = document.getElementById("result");

    //   const stream$ = fromEvent(search, "input").pipe(
    //     map((e) => e.target.value),
    //     debounceTime(1000),
    //     distinctUntilChanged(),
    //     tap(() => (result.innerHTML = "")),
    //     filter((v) => v.trim()),
    //     switchMap((v) => ajax.getJSON(url + v).pipe(catchError((err) => EMPTY))),
    //     map((response) => response.items),
    //     mergeMap((items) => items)
    //   );

    //   stream$.subscribe((user) => {
    //     const html = `
    //   <div class="card">
    //     <div class="card-image">
    //       <img src="${user.avatar_url}" />
    //       <span class="card-title">${user.login}</span>
    //     </div>
    //     <div class="card-action">
    //       <a href="${user.html_url}" target="_blank">Открыть github</a>
    //     </div>
    //   </div>
    // `;
    //     result.insertAdjacentHTML("beforeend", html);
    //   });

    // const response = await fetch(url);
    // const repositories = await response.json();
    // console.log(repositories);
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   });

    // function createRepoList(list, parent) {
    //   parent.innerHTML = "";
    //   list.forEach((repo, i) => {
    //     parent.innerHTML += `
    //     <div class="test__item"><span>${i + 1}</span> ${repo.name}</div>
    //   `;
    //   });
    // }
    // createRepoList(repositories, wrapper);
    // console.log("OK");
  }
}

// const url = "https://github.com/angular​";

fetch("https://github.com/orgs/angular/repos")
  .then((response) => response.json())
  .then((json) => console.log(json));

// Пример отправки POST запроса:
// async function postData(url = "", data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "GET", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: "follow", // manual, *follow, error
//     referrerPolicy: "no-referrer", // no-referrer, *client
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return await response.json(); // parses JSON response into native JavaScript objects
// }

// postData("https://github.com/orgs/angular/repos", { answer: 42 }).then(
//   (data) => {
//     console.log(data); // JSON data parsed by `response.json()` call
//   }
// );

// const url = "https://github.com/angular";
// const repositories = [];

// function getRepos(url) {
// fetch(url)
// .then((response) => response.json())
// .then((rep) => console.log(rep));
// for (let i = 0; i < movieDB.movies.length; i++) {
//       let a = movieDB.movies[i].toLowerCase();
//       movieDB.movies.splice(i, 1, a);
//     }
// console.log(rep);
// }
// getRepos(url);

// const wrapper = document.querySelector(".test__wrapper");

// wrapper.insertAdjacentHTML(
//   "afterbegin",
//   `<div class="test__item">${repositories}</div>`
// );
// console.log(repositories[20].contributors_url);
// repositories.forEach((item) => {
//   console.log(item.contributors_url);
// });
