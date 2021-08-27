import { EMPTY, fromEvent } from "rxjs";
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  mergeMap,
  tap,
  catchError,
  filter,
} from "rxjs/operators";
import { ajax } from "rxjs/ajax";

export default class Test {
  constructor() {
    this.init();
  }

  init() {
    const url = "https://api.github.com/orgs/angular/repos?per_page=100&page=";
    const testUrl =
      "https://api.github.com/orgs/angular/repos?per_page=5&page=1";
    const wrapper = document.querySelector(".test__wrapper");
    const btnAllRepos = document.querySelector(".test__btn-all-repos");
    const btnAllContrib = document.querySelector(".test__btn-all-contrib");
    const listRepos = document.querySelector(".test__list-repos");
    const listContrib = document.querySelector(".test__list-contrib");

    btnAllRepos.addEventListener("click", (event) => {
      event.preventDefault();
      // getAllRepos(url);
      getAllRepos(testUrl);
    });

    btnAllContrib.addEventListener("click", (event) => {
      event.preventDefault();
      // getAllContrib(url);
      getAllContrib(testUrl);
    });

    listRepos.addEventListener("click", (event) => {
      event.preventDefault();
      let target = event.target;
      if (target && target.classList.contains("test__link_renos")) {
        const links = document.querySelectorAll(".test__link_renos");
        links.forEach((item, i) => {
          if (target == item) {
            let url = localStorage.getItem(item.innerHTML);
            getAllUsersForOneRepos(url);
          }
        });
      }
    });

    function getAllUsersForOneRepos(url) {
      listRepos.innerHTML = "";
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          json.forEach((item) => {
            listRepos.insertAdjacentHTML(
              "beforeend",
              `
              <li class="test__item">
                <span class="test__name">${item.login}</span>
                <img class="test__img" src="${item.avatar_url}" alt="">
              </li>
              `
            );
          });
        });
    }

    function getAllRepos(url) {
      listRepos.innerHTML = "";
      // for (let i = 1; i < 3; i++) {
      // fetch(url + i);
      fetch(url)
        .then((response) => response.json())
        .then((json) => {
          json.forEach((item) => {
            localStorage.setItem(item.name, item.contributors_url);

            listRepos.insertAdjacentHTML(
              "beforeend",
              `<li class="test__item">
                  <span class="test__link test__link_renos">${item.name}</span>
                </li>`
            );
          });
        });
      // }
    }

    function getAllContrib(testUrl) {
      const listLogin = [];
      fetch(testUrl)
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          json.forEach((item) => {
            fetch(item.contributors_url)
              .then((response) => response.json())
              .then((json) => {
                json.forEach((item) => {
                  if (!listLogin.includes(item.login)) {
                    listLogin.push(item.login);
                    listContrib.insertAdjacentHTML(
                      "beforeend",
                      `
                    <li class="test__item">
                      <span class="test__name">${item.login}</span>
                      <img class="test__img" src="${item.avatar_url}" alt="">
                    </li>
                    `
                    );
                  }
                });
              });
          });
        });
    }

    // function getAllContrib(url) {
    //   listContrib.innerHTML = "";
    //   const listLogin = [];
    //   for (let i = 1; i < 3; i++) {
    //     fetch(url + i)
    //       .then((response) => response.json())
    //       .then((json) => {
    //         json.forEach((item) => {
    //           fetch(item.contributors_url)
    //             .then((response) => response.json())
    //             .then((json) => {
    //               json.forEach((item) => {
    //                 if (!listLogin.includes(item.login)) {
    //                   listLogin.push(item.login);
    //                   listContrib.insertAdjacentHTML(
    //                     "beforeend",
    //                     `
    //                   <li class="test__item">
    //                     <span class="test__name">${item.login}</span>
    //                     <img class="test__img" src="${item.avatar_url}" alt="">
    //                   </li>
    //                   `
    //                   );
    //                 }
    //               });
    //             });
    //         });
    //       });
    //   }
    // }

    //////////////////////////////////////////////////////////////////

    // const stream$ = fromEvent(search, "click").pipe(
    //   switchMap((v) => ajax.getJSON(url + 1))
    // );
    //     map((e) => e.target.value),
    //     debounceTime(1000),
    //     distinctUntilChanged(),
    //     tap(() => (result.innerHTML = "")),
    //     filter((v) => v.trim()),
    //     switchMap((v) => ajax.getJSON(url + v).pipe(catchError((err) => EMPTY))),
    //     map((response) => response.items),
    //     mergeMap((items) => items)
    // ();

    //   const url = "https://api.github.com/search/users?q=";

    // const search = document.getElementById(".test__wrapper");
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
