const fs	= require("fs");

module.exports	=   Object.freeze ({

	SHA128_SALT		: "",
	SHA256_SALT		: "My-Secret-Salt",

	SERVER_NAME		: "auth.datasetu.org",
	ALLOWED_SERVER_NAMES    : ["auth.datasetu.org"],

	DROP_PRIVILEGES		: true,

	DOCUMENTATION_MSG	: "Please visit <https://datasetu.github.io/auth/> for documentation",

	WHITELISTED_DOMAINS	: ["datasetu.github.io"],
	WHITELISTED_ENDSWITH    : [".datasetu.org"],

	LAUNCH_ADMIN_PANEL	: true,

	TELEGRAM		: "https://api.telegram.org",
	TELEGRAM_APIKEY		: "your-telegram-apikey",
	TELEGRAM_CHAT_ID	: "your-telegram-chat-id",

	BOT_TELEGRAM_APIKEY	: "your-bot's-telegram-apikey",

	DB_SERVER		: "127.0.0.1",
	DB_USER			: "auth",
	DB_PASSWORD		: fs.readFileSync("passwords/auth.db.password","ascii").trim(),

	RZPAY_KEY_ID		: "your-razorpay-key-id",
	RZPAY_KEY_SECRET	: "your-razorpay-key-secret"
});
