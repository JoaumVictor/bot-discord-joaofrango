const Discord = require("discord.js");
const client = new Discord.Client();
const TOKEN =
  "OTc0NDgwMzAxMzkwNzAwNTQ0.GRPoA1.OlFNf38pb47zR9r1JSG7Mx4Na7a5DC2R8PJ_yAjvfs";

client.login(TOKEN);

client.on("ready", () => {
  console.log(`Você está logado na conta: ${client.user.tag}!`);
  // console.log(client);
  // console.log(client.user.username);
});

client.on("message", (msg) => {
  if (msg.content.includes("salve") && !msg.author.bot) {
    msg.reply("opa salve");
  }
  if (msg.content === "jf-log") {
    console.log(msg);
  }
  if (msg.content === "jf-usuario") {
    msg.reply(`Você é o usuario ${msg.author.username}`);
  }
  if (msg.content === "frango") {
    msg.reply(`Falou comigo?`);
  }
  if (msg.content === "jf-servidor") {
    msg.reply(msg.channel.guild.name);
  }
  if (msg.content === "jf-canal") {
    msg.reply(msg.channel.name);
  }
  if (msg.content === "jf-membros") {
    msg.reply(`Tem ${msg.channel.guild.memberCount} membros no servidor!`);
  }
  if (msg.content === "jf-log") {
    console.log(msg);
  }
  if (msg.content === "jf-image") {
    msg.reply("é duro");
  }
});

// lembre-se de mudar o TOKEN
