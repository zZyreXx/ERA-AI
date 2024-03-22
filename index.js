const express = require("express");
const discord = require("discord.js");
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Discord bot setup
const MODEL = "gemini-pro";
const API_KEY = process.env.API_KEY || "";
const BOT_TOKEN = process.env.BOT_TOKEN || "";
const CHANNEL_ID = process.env.CHANNEL_ID || "";

const ai = new GoogleGenerativeAI(API_KEY);
const model = ai.getGenerativeModel({ model: MODEL });

const client = new discord.Client({
  intents: Object.keys(discord.GatewayIntentBits),
});

client.on("ready", () => {
  console.log("Bot is ready!");
});

client.login(BOT_TOKEN);

// Web server routes
app.get("/", (req, res) => {
  res.send("Hello, this is your web interface!");
});

app.post("/send-message", async (req, res) => {
  try {
    const messageContent = req.body.message; // Assuming you're sending a message in the request body
    const channel = await client.channels.fetch(CHANNEL_ID);
    const response = await model.generateContent(messageContent);
    await channel.send(response.text());
    res.status(200).send("Message sent successfully");
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).send("Internal server error");
  }
});

// Start the web server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
