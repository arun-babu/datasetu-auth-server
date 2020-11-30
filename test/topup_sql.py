import json
import time
import psycopg2

from cryptography.hazmat.primitives import hmac, hashes
from cryptography.hazmat.backends import default_backend

def topup_function(request, credentials, email, serial, fingerprint):
#
	if 'serial' in request and 'fingerprint' in request:
		serial		= request['serial']
		fingerprint	= request['fingerprint']

	amount		= int(request['amount'])
	now		= time.time()
	invoice_id	= 'inv_' + str(int(now))

	with open("../passwords/auth.db.password", "r") as f:
		pg_password = f.read().strip()

	conn_string = "host='localhost' dbname='postgres' user='auth' password='" + pg_password + "'"

	try:
		conn = psycopg2.connect(conn_string)

	except psycopg2.DatabaseError as error:
		return {}

	cursor	= conn.cursor()
	query	= "INSERT INTO topup_transaction VALUES (%s,%s,%s,%s,to_timestamp(%s),%s,false,'{}'::jsonb);"
	params	= (email,serial,fingerprint,amount,now,invoice_id)

	try:
		cursor.execute(query, params)
		conn.commit()

	except psycopg2.DatabaseError as error:
		return {}

	# form invoice, invoice signature
	key_secret = bytes("your-razorpay-key-secret".encode("utf-8"))

	resp = {'razorpay_invoice_id': invoice_id,'razorpay_invoice_status': 'paid', \
		'razorpay_payment_id':'pay_DaCTRWQeB2X5bI', 'razorpay_invoice_receipt':'TS1988'}

	challenge_string = '|'.join((resp['razorpay_invoice_id'],\
		resp['razorpay_invoice_receipt'],\
		resp['razorpay_invoice_status'],\
		resp['razorpay_payment_id']))

	resp['razorpay_signature'] = hmac.new (
			key_secret,
			challenge_string,
			hashlib.sha256	
	).hexdigest()

	return resp
#
