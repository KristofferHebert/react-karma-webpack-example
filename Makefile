build:
	rm -rf dist
	./node_modules/.bin/webpack -p --config webpack.production.config.js
