module.exports	= Object.freeze ({

	SERVER_NAME		: "auth.local",
	ALLOWED_SERVER_NAMES    : ["localhost", "localhost:8443", "auth.local", "127.0.0.1", "127.0.0.1:8443"],
	DROP_PRIVILEGES		: false,

	DOCUMENTATION_LINK	: "https://datasetu.github.io/auth/",

	WHITELISTED_DOMAINS	: ["datasetu.github.io"],
	WHITELISTED_ENDSWITH    : [".datasetu.org"],

	LAUNCH_ADMIN_PANEL	: true,

	TELEGRAM		: "https://api.telegram.org",
	TELEGRAM_APIKEY		: "your-telegram-apikey",
	TELEGRAM_CHAT_ID	: "your-telegram-chat-id",

	BOT_TELEGRAM_APIKEY	: "your-bot's-telegram-apikey",

	DB_SERVER		: "postgres",
	DB_USER			: "postgres",
	DB_PASSWORD		:  process.env.POSTGRES_PASSWORD,

	RZPAY_KEY_ID		: "",
	RZPAY_KEY_SECRET	: ""
});
