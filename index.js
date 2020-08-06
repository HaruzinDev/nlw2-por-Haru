	// {
	// 	name: "HaruzinDev",
	// 	avatar: "https://cdn.discordapp.com/avatars/638157424099852288/02e663a25ab8ba75a1071e6a2d665986.png?size=2048",
	// 	whatsapp: "6193689741",
	// 	bio: "uSo FoTiNhA dE AnImE fDskkkkkkk",
	// 	subject: "Português",
	// 	cost: "20",
	// 	weekday: [0],
	// 	time_from: [720],
	// 	time_to: [1220]

	// }


const proffys = []

const subjects = [
	"Artes",
	"Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química"
]

const weekdays = [
	"Domingo",
	"Segunda-feira",
	"Terça-feira",
	"Quarta-feira",
	"Quinta-feira",
	"Sexta-feira",
	"Sábado"
]

function getSubject(subjectnumber) {
	const position = +subjectnumber -1
	return subjects[position]
}

function pageLanding(req, res) {

	return res.render("index.html")

}

function pageStudy(req, res) {

	const filter = req.query

	return res.render("study.html", { proffys, filter, subjects, weekdays })

}

function pageClasses(req, res) {

	const dados = req.query

	const isEmpty = Object.keys(dados).length == 0

	if(!isEmpty) {
	dados.subject = getSubject(dados.subject)
	proffys.push(dados)

	return res.redirect("/sucessfull")
}

	return res.render("give-classes.html", { proffys, subjects, weekdays })

}

function pageSucessfull(req, res) {
	return res.render("page-sucessfull.html")
}

const express = require('express');

const server = express()

const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
	express: server,
	noCache: true
})


server
.use(express.static(__dirname + '/public'))

.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageClasses)

.get("/sucessfull", pageSucessfull)

.listen(5000)