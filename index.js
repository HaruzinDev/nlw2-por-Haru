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

const express = require('express');

const server = express()

const {
	pageLanding,
    pageClasses,
    pageStudy,
	pageSucessfull,
	saveClasses
} = require('./src/database/pages.js')

const nunjucks = require('nunjucks')

nunjucks.configure('src/views', {
	express: server,
	noCache: true
})


server
.use(express.urlencoded({extended: true}))
.use(express.static(__dirname + '/public'))

.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageClasses)

.post("/save-Class", saveClasses)

.get("/sucessfull", pageSucessfull)

.listen(5000)