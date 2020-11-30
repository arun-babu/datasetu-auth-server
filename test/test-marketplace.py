import os

from init import consumer
from init import provider
from init import alt_provider
from init import untrusted
from init import resource_server

from init import expect_failure

from init import restricted_consumer

import hashlib

RS = "iisc.datasetu.org"

policy = "all can access anything for 10 days @ 20 INR"
provider.set_policy(policy)
assert r['success']			is True

body = { "id" : "rbccps.org/9cf2c2382cf661fc20a4776345a3be7a143a109c/rs1/r1"};

expect_failure(True)
r = consumer.get_token(body)
expect_failure(False)

assert r['success']	is False
assert r['status_code']	== 402 # payment required

amount = 20
r = consumer.topup(amount)

r = consumer.get_token(body)
assert r['success']			is True
assert r['response']['expires-in']	== 60*60*24*10

access_token = r['response']
token = access_token['token']
r = consumer.confirm_payment(token)
assert r['success']	is True

expect_failure(True)
r = consumer.confirm_payment(token)
expect_failure(False)

assert r['success']	is False

body = { "id" : "rbccps.org/9cf2c2382cf661fc20a4776345a3be7a143a109c/rs1/r1"};

expect_failure(True)
r = untrusted.get_token(body)
expect_failure(False)

assert r['success']	is False
assert r['status_code']	== 403

# delegated certificate cannot call any Marketplace API

expect_failure(True)
r = delegate.topup(100)
expect_failure(False)

assert r["success"] is False
assert r['status_code'] == 403

# untrusted certificates cannot call any Marketplace API

expect_failure(True)
r = untrusted.topup(100)
expect_failure(False)

assert r["success"] is False
assert r['status_code'] == 403
