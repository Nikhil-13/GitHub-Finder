class GitHub {
	constructor() {
		this.repos_count = 4
		this.repos_sort = `created:asc`
	}
	async getUser(user) {
		document.querySelector('.main').classList.remove('hide')
		console.count()
		const profileResponse = await fetch(`http://api.github.com/users/${user}`)
		const profile = await profileResponse.json()
		return { profile }
	}
	async getRepo(user) {
		const repoResponse = await fetch(
			`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`
		)
		const repo = await repoResponse.json()
		return repo
	}
}
