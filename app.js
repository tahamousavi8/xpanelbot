const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config()

const {telegram_token} = process.env;

const bot = new TelegramBot(telegram_token, {polling: true});

bot.onText(/\/start/, (msg) => {

  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "salam khosh amadid");
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
    if(msg.text==="amir")
        bot.sendMessage(chatId,'salam mamad')
});
