const express = require("express")
const app = new express()
app.use(express.static('files'))
app.listen(process.env.PORT || 3000).then(console.log(`Site is online, running on port ${process.env.PORT || 3000}`))