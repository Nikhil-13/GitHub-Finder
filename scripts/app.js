const searchUser = document.querySelector('#user-name')
const git = new GitHub()
const ui = new UI()
let timerId

searchUser.addEventListener('keyup', (event) => {
	clearTimeout(timerId)
	timerId = setTimeout(() => {
		const user = event.target.value
		if (user !== '') {
			git
				.getUser(user)
				.then((data) => {
					if (data.profile.message === 'Not Found') {
						ui.notFound(user)
					} else {
						ui.updateUI(data.profile)
					}
				})
				.catch((err) => console.log(err))
			git
				.getRepo(user)
				.then((data) => {
					ui.createRepo(data)
				})
				.catch((err) => console.log(err))
		} else {
			ui.clearUI()
		}
	}, 1000)
})
