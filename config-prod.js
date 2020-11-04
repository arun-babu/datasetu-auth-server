const fs    = require("fs");
const os    = require("os");

const is_openbsd	    = os.type() === "OpenBSD";

const config = {}

config.TOKEN_LEN		= 16;
config.TOKEN_LEN_HEX		= 2 * config.TOKEN_LEN;
config.NUM_CPUS			= os.cpus().length;
config.SERVER_NAME		= "auth.datasetu.org"
config.DOCUMENTATION_LINK	= "https://datasetu.github.io/auth/";
config.MAX_TOKEN_TIME		= 31536000; // in seconds (1 year)
config.MIN_TOKEN_HASH_LEN	= 64;
config.MAX_TOKEN_HASH_LEN	= 64;
config.MAX_SAFE_STRING_LEN	= 512;
config.MIN_CERT_CLASS_REQUIRED	= Object.freeze ({
				    /* resource server API */
					"/auth/v1/token/introspect"		: 1,
					"/auth/v1/certificate-info"		: 1,
					    
				    /* data consumer's APIs */
					"/auth/v1/token"			: 2,
					    
				    /* for credit topup */
					"/marketplace/topup-success"		: 2,
					    
				    /* static files for marketplace */
					"/marketplace/topup.html"		: 2,
					"/marketplace/marketplace.js"		: 2,
					"/marketplace/marketplace.css"		: 2,
					    
				    /* marketplace APIs */
					"/marketplace/v1/credit/info"		: 2,
					"/marketplace/v1/credit/topup"		: 2,
					"/marketplace/v1/confirm-payment"	: 2,
					"/marketplace/v1/audit/credits"		: 2,
					"/marketplace/v1/credit/transfer"	: 3,
					    
				    /* data provider's APIs */
					"/auth/v1/audit/tokens"			: 3,
					    
					"/auth/v1/token/revoke"			: 3,
					"/auth/v1/token/revoke-all"		: 3,
					    
					"/auth/v1/acl"				: 3,
					"/auth/v1/acl/set"			: 3,
					"/auth/v1/acl/revert"			: 3,
					"/auth/v1/acl/append"			: 3,
					    
					"/auth/v1/group/add"			: 3,
					"/auth/v1/group/delete"			: 3,
					"/auth/v1/group/list"			: 3,
				    });

config.WHITELISTED_DOMAINS	= ["datasetu.github.io"];
config.WHITELISTED_ENDSWITH	= [""];
config.LAUNCH_ADMIN_PANEL	= true;
config.TELEGRAM			= "https://api.telegram.org";
config.TELEGRAM_APIKEY		= "";
config.TELEGRAM_CHAT_ID		= "";
config.TELEGRAM_URL		= config.TELEGRAM 
				    + "/bot" 
				    + config.TELEGRAM_APIKEY 
				    + "/sendMessage?chat_id="	
				    + config.TELEGRAM_CHAT_ID 
				    + "&text=";

config.DB_SERVER		= "127.0.0.1";
config.DB_USER			= "auth";
config.DB_PASSWORD		=  process.env.POSTGRES_PASSWORD;
config.SYNC_CONN_STR		= "postgresql://" + config.DB_USER 
				    + ":" 
				    + config.DB_PASSWORD
				    + "@" 
				    + config.DB_SERVER 
				    + ":5432/postgres";

config.RZPAY_KEY_ID		= "";
config.RZPAY_KEY_SECRET		= "";
config.RZPAY_URL		= "https://"
				    + config.RZPAY_KEY_ID
				    + ":"
				    + config.RZPAY_KEY_SECRET
				    + "@api.razorpay.com/v1/invoices/";
config.SERVER_CERTIFICATE	= fs.readFileSync(__dirname + "/certificate.pem.p12");
config.CA_CERT_PATH		= "ca.datasetu.org.crt";
config.SYSTEM_TRUSTED_CERTS	= is_openbsd
				    ? "/etc/ssl/cert.pem" 
				    : "/etc/ssl/certs/ca-certificates.crt";
config.TRUSTED_CAS		=   [
					fs.readFileSync(config.CA_CERT_PATH),
					fs.readFileSync(config.SYSTEM_TRUSTED_CERTS),
			    		fs.readFileSync("CCAIndia2015.cer"),
			    		fs.readFileSync("CCAIndia2014.cer")
				    ];

config.HTTPS_OPTIONS		= Object.freeze ({
					key		    : fs.readFileSync("https-key.pem"),
					cert		    : fs.readFileSync("https-certificate.pem"),
					ca		    : trusted_CAs,
					requestCert	    : true,
					rejectUnauthorized  : true,
				    });
config.STATIC_PAGES		= Object.freeze ({
				    /* GET end points */
					
					"/marketplace/topup.html"	: fs.readFileSync (
									    "static/topup.html",	    "ascii"
								    ),
					
					"/marketplace/marketplace.js"   : fs.readFileSync (
									    "static/marketplace.js",	    "ascii"
								    ),
					
					"/marketplace/marketplace.css"  : fs.readFileSync (
									    "static/marketplace.css",	    "ascii"
								    ),
					
				    /* templates */
					
					"topup-success-1.html"		: fs.readFileSync (
									    "static/topup-success-1.html",  "ascii"
								    ),
					"topup-success-2.html"		: fs.readFileSync (
									    "static/topup-success-2.html",  "ascii"
								    ),
					"topup-failure-1.html"		: fs.readFileSync (
									    "static/topup-failure-1.html",  "ascii"
								    ),
					"topup-failure-2.html"		: fs.readFileSync (
									    "static/topup-failure-2.html",  "ascii"
								    ),
				    });

config.MIME_TYPE		= Object.freeze	({
					"js"	: "text/javascript",
					"css"	: "text/css",
					"html"	: "text/html"
				    });

config.TOPUP_SUCCESS_1		= STATIC_PAGES["topup-success-1.html"];
config.TOPUP_SUCCESS_2		= STATIC_PAGES["topup-success-2.html"];
config.TOPUP_FAILURE_1 		= STATIC_PAGES["topup-failure-1.html"];
config.TOPUP_FAILURE_2 		= STATIC_PAGES["topup-failure-2.html"];

module.exports = config;
