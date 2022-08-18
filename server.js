const http = require('http');
const express = require('express');
const app = express();
const content = `<head>
<title>Nothing Yet</title>
<font size="4" style="font-family:arial;">
<link rel="icon" href="https://cdn.glitch.com/33b28b82-dde3-49af-b0cc-9b1076049af1%2FTails%20Bot.png">
        <p>
        <label>Discord Bot Lists =></label>
        <a href="https://discordapp.com/oauth2/authorize?client_id=550328577116340224&scope=bot&permissions=8">To Invite Me Click Here!</a>
        </p>
<a href="https://discordbots.org/bot/550328577116340224" >
  <img src="https://discordbots.org/api/widget/550328577116340224.svg" alt="Tails" />
<style>
body {
  background: url("https://cdn.discordapp.com/attachments/545093079133192212/560026648372707350/solid-yellow-fabric-Robert-Kaufman-USA-Citrus-179483-1.JPG");
}
</style>
</a>`;

//const index = require('./webpack-demo/dist/index.html');

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

app.get('/', (request, response) => {
return response.send(content)
});