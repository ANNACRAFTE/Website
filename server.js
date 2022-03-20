const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");



app.use(express.static(__dirname + '/pages'));


app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname + "/pages/index.html")
    )
})


app.get("/invite", (req, res) => {
    res.redirect(
        "https://discord.com/oauth2/authorize?client_id=697487580522086431&permissions=1374620609647&scope=bot+applications.commands"
    )
})


app.use((_, res, __) => {
    res.status(404);
    res.redirect("/")
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
