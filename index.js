const express = require('express');

const server = express();


server.use(express.static(__dirname + '/public'))

.get("/", (req, res) => {
	return res.sendFile(__dirname + "/src/views/index.html")
})

.get("/study", (req, res) => {
	return res.sendFile(__dirname + "/src/views/study.html")
})

.get("/give-classes", (req, res) => {
	return res.sendFile(__dirname + "/src/views/give-classes.html")
})
.listen(5000)