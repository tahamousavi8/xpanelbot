const TelegramBot = require('node-telegram-bot-api');
require("dotenv").config()

const {telegram_token} = process.env;

const bot = new TelegramBot(telegram_token, {polling: true});

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1]; 

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
    if(msg.text==="amir")
        bot.sendMessage(chatId,'salam amir')
});