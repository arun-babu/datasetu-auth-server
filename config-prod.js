const fs	= require("fs");

module.exports	=   {
			SERVER_NAME		: "auth.datasetu.org",
			ALLOWED_SERVER_NAMES    : ["localhost", "localhost:8443", "auth.local", "127.0.0.1", "127.0.0.1:8443"],
			DOCUMENTATION_LINK	: "https://datasetu.github.io/auth/",
			WHITELISTED_DOMAINS	: ["datasetu.github.io"],
			WHITELISTED_ENDSWITH    : [""],
			LAUNCH_ADMIN_PANEL	: true,
			TELEGRAM		: "https://api.telegram.org",
			TELEGRAM_APIKEY		: "",
			TELEGRAM_CHAT_ID	: "",
			DB_SERVER		: "127.0.0.1",
			DB_USER			: "auth",
			DB_PASSWORD		: fs.readFileSync("passwords/auth.db.password","ascii").trim(),
			RZPAY_KEY_ID		: "your-razorpay-key-id",
			RZPAY_KEY_SECRET	: "your-razorpay-key-secret"
		    }
