class UI {
  updateUI(user) {
    document.querySelector("#avt-img").src = `${user.avatar_url}`;
    document.querySelector("#view").setAttribute("href", user.html_url);
    document.querySelector(
      "#public-repo"
    ).innerText = `Public Repo: ${user.public_repos}`;
    document.querySelector("#gists").innerText = `Public Gists: ${user.public_gists}`;
    document.querySelector("#followers").innerText = `Followers: ${user.followers}`;
    document.querySelector("#following").innerText = `Following: ${user.following}`;
    document.querySelector("#company").innerText = `Company: ${user.company}`;
    document.querySelector("#website").innerText = `Website: ${user.blog}`;
    document.querySelector("#location").innerText = `Location: ${user.location}`;
    document.querySelector("#member").innerText = `Member Since: ${new Date(
      user.created_at
    ).toDateString()}`;
  }

  notFound(user) {
    this.clearUI();
    this.showAlert(user);
  }
  showAlert(user) {
    this.clearAlert();
    const message = document.createElement("p");
    message.textContent = `${user} does not exist.`;
    message.classList.add("alert", "alert-danger");
    document.querySelector(".search-box").appendChild(message);
    setTimeout(this.clearAlert, 3000);
  }
  clearUI() {
    document.querySelector(".main").classList.add("hide");
  }
  createRepo(repos) {
    let li = "";
    repos.forEach((repo) => {
      li += `<li class="list-group-item repo-info">
              <a href="${repo.html_url}">${repo.name}</a>
              <div class="repo-details">
                <span class="rounded bg-primary"><i class="fas fa-light fa-star"></i> ${repo.stargazers_count}</span>
                <span class="rounded bg-success"><i class="fas fa-light fa-eye"></i> ${repo.watchers_count}</span>
                <span class="rounded bg-warning"><i class="fas fa-light fa-code-fork"></i> ${repo.forks_count}</span>
              </div>
            </li>`;
    });
    /* ui.createRepo(
          repo.name,
          repo.html_url,
          repo.stargazers_count,
          repo.watchers_count,
          repo.forks_count
          ); */
    document.querySelector(".repo-ul").innerHTML = li;
  }
  clearAlert() {
    document.querySelectorAll(".alert").forEach((alert) => {
      alert.remove();
    });
  }
}
