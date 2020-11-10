#!/bin/sh

jshint --show-non-errors main.js
eslint main.js

jshint --show-non-errors crl.js
eslint crl.js

jshint --show-non-errors bot.js
eslint bot.js


jshint --show-non-errors config-prod.js
eslint config-prod.js

jshint --show-non-errors config-dev.js
eslint config-dev.js
