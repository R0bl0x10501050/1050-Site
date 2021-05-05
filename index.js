const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static("public"));
app.use(cors());
// Config Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/****************************/
////////// Rest API //////////
/****************************/

/****************************/
/////////// PAGES ////////////
/****************************/

// HOME
app.get('/', async function(req, res) {
	res.redirect('/home')
})

app.get('/home', async function(req, res) {
	if (req.query.name) {
		const name = req.query.name
		res.render("index", { name: name })
	} else {
		res.render("index", { name: null })
	}
})

// ABOUT
app.get('/about', async function(req, res) {
	res.redirect('../home')
})

// SHOP
app.get('/shop', async function(req, res) {
	if (req.query.name) {
		const name = req.query.name
		res.render("shop", { name: name })
	} else {
		res.render("shop", { name: null })
	}
})

// LOGIN
app.get('/login', async function(req, res) {
	res.redirect('../auth/login')
})

app.get('/signin', async function(req, res) {
	res.redirect('../auth/login')
})

app.get('/signup', async function(req, res) {
	res.redirect('../auth/signup')
})

app.get('/auth/login', async function(req, res) {
	if (req.query.name) {
		const name = req.query.name
		res.render("error", { name: name, code: 406, msg: "Not Acceptable. You are already logged in." })
	} else {
		res.render("login", { name: null })
	}
})

app.get('/auth/signup', async function(req, res) {
	if (req.query.name) {
		const name = req.query.name
		res.render("error", { name: name, code: 406, msg: "Not Acceptable. You are already logged in." })
	} else {
		res.render("signup", { name: null })
	}
})

/****************************/
/////////// ERRORS ///////////
/****************************/

app.get('/error/403', async function(req, res) {
	if (req.query.name) {
		const name = req.query.name
		res.render("error", { name: name, code: 403, msg: "Forbidden. You probably tried to access something you weren't allowed to." })
	} else {
		res.render("error", { name: null, code: 403, msg: "Forbidden. You probably tried to access something you weren't allowed to." })
	}
})

app.get('/error/404', async function(req, res) {
	if (req.query.name) {
		const name = req.query.name
		res.render("error", { name: name, code: 404, msg: "Page Not Found. You tried to access an invalid page." })
	} else {
		res.render("error", { name: null, code: 404, msg: "Page Not Found. You tried to access an invalid page." })
	}
})

/****************************/
/////////// MISC ///////////
/****************************/

app.get('/ping', (req, res) => {
	let timezone = req.query.timezone

	if (!timezone) {
		timezone = "PST"
	}

	let date = new Date

	var second = date.getSeconds()
	var minute = date.getMinutes()
	var hour = date.getHours() > 12 ? date.getHours() - 12 : (date.getHours() < 10 ? "0" + date.getHours() : date.getHours())
	var dateOfMnth = date.getDate()
	var month = date.getMonth()
	var year = date.getFullYear()

	if (second in [0,1,2,3,4,5,6,7,8,9]) {
		second = "0" + String(second)
	}

	if (minute in [0,1,2,3,4,5,6,7,8,9]) {
		minute = "0" + String(minute)
	}
	
	if (timezone == "PST") {
		hour = Number(hour) + 4
	} else if (timezone == "EST") {
		hour = Number(hour) + 7
	} else if (timezone == "UTC") {
		hour = Number(hour)
	} else {
		timezone = "UTC"
		hour = Number(hour)
	}

	hour = hour > 12 ? hour - 12 : (hour < 10 ? "0" + hour : hour)

	month += 1

	meridiam = hour > 12 ? "PM" : "AM"

	console.log(`Server Pinged At ${hour}:${minute}:${second} ${meridiam} (${timezone.toUpperCase()}) on ${month}/${dateOfMnth}/${year}!`)
})

app.get('*', (req, res) => {
	res.redirect('/error/404')
})

app.listen(Number(process.env.PORT))