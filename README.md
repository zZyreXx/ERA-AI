# Google Gemini AI Discord Bot

This Discord bot, crafted by Taifyu, harnesses Google's Generative AI to furnish responses based on the Gemini model. It engages with messages in a designated channel, employing the Gemini model to generate content.

## Installation

1. Clone or download this repository.
2. Install the requisite npm packages with `npm install`.
3. Create a `.env` file in the root directory and furnish the necessary environment variables as indicated below:

```plaintext
API_KEY=your_google_api_key [Obtain API Here](https://aistudio.google.com/app/apikey)
BOT_TOKEN=your_discord_bot_token
CHANNEL_ID=your_discord_channel_id
```

## Usage

1. Execute the bot via `node your_script_name.js`.
2. Ensure the bot has been incorporated into your Discord server.
3. Input messages within the specified channel, and observe the bot's responses generated by the Gemini model.

## Requirements

- Node.js
- npm
- Discord.js
- Google Generative AI package

## Configuration

- `API_KEY`: Your Google API key requisite for accessing the Generative AI.
- `BOT_TOKEN`: Your Discord bot token.
- `CHANNEL_ID`: The ID of the Discord channel designated for the bot's operation.

## Credits

- Bot devised by Taifyu.
- This bot leverages the Google Generative AI library.
- Developed with Discord.js.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
