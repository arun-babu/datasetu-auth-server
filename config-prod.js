const fs	= require("fs");

module.exports	=   Object.freeze ({

	SERVER_NAME		: "auth.datasetu.org",
	ALLOWED_SERVER_NAMES    : ["auth.datasetu.org"],

	DOCUMENTATION_LINK	: "https://datasetu.github.io/auth/",

	WHITELISTED_DOMAINS	: ["datasetu.github.io"],
	WHITELISTED_ENDSWITH    : [".datasetu.org"],

	LAUNCH_ADMIN_PANEL	: true,

	TELEGRAM		: "https://api.telegram.org",
	TELEGRAM_APIKEY		: "your-telegram-apikey",
	TELEGRAM_CHAT_ID	: "your-telegram-chat-id",

	DB_SERVER		: "127.0.0.1",
	DB_USER			: "auth",
	DB_PASSWORD		: fs.readFileSync("passwords/auth.db.password","ascii").trim(),

	RZPAY_KEY_ID		: "your-razorpay-key-id",
	RZPAY_KEY_SECRET	: "your-razorpay-key-secret"
});
