module.exports	=   {
			SERVER_NAME		: "auth.local",
			ALLOWED_SERVER_NAMES    : ["localhost", "localhost:8443", "auth.local", "127.0.0.1", "127.0.0.1:8443"],
			DOCUMENTATION_LINK	: "https://datasetu.github.io/auth/",
			WHITELISTED_DOMAINS	: ["datasetu.github.io"],
			WHITELISTED_ENDSWITH    : [""],
			LAUNCH_ADMIN_PANEL	: true,
			TELEGRAM		: "https://api.telegram.org",
			TELEGRAM_APIKEY		: "",
			TELEGRAM_CHAT_ID	: "",
			DB_SERVER		: "postgres",
			DB_USER			: "postgres",
			DB_PASSWORD		:  process.env.POSTGRES_PASSWORD,
			RZPAY_KEY_ID		: "",
			RZPAY_KEY_SECRET	: ""
		    }
