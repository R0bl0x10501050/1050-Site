document.addEventListener('DOMContentLoaded', function() {
	const redir_Login = document.getElementById('redir_Login')
	const redir_SignUp = document.getElementById('redir_SignUp')
	const redir_Shop = document.getElementById('redir_Shop')
	const redir_Home = document.getElementById('redir_Home')
	const button_Shop = document.getElementById('shopbutton')
	const shop_logout = document.getElementById('shop_logout')
	const shop_signup = document.getElementById('shop_signup')

	// redir_Login.addEventListener('click', function() {
	// 	window.location.assign('/auth/login')
	// })

	// redir_SignUp.addEventListener('click', function() {
	// 	window.location.assign('/auth/signup')
	// })

	redir_Home.addEventListener('click', function() {
		window.location.assign('https://www.r0bl0x10501050.tk/home')
	})

	redir_Shop.addEventListener('click', function() {
		window.location.assign('https://www.r0bl0x10501050.tk/shop')
	})

	button_Shop.addEventListener('click', function() {
		window.location.assign('https://www.r0bl0x10501050.tk/shop')
	})

	shop_logout.addEventListener('click', function() {
		window.location.assign('https://www.r0bl0x10501050.tk/')
	})

	shop_signup.addEventListener('click', function() {
		window.location.assign('https://www.r0bl0x10501050.tk/auth/signup')
	})

	document.onkeydown = function(e) {
		if (event.keyCode == 123) {
			e.preventDefault()
		}
		if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
			e.preventDefault()
		}
		if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
			e.preventDefault()
		}
		if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
			e.preventDefault()
		}
		if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
			e.preventDefault()
		}
		if (e.keyCode == 'F12'.charCodeAt(0)) {
			e.preventDefault()
		}
	}
})