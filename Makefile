install:
	npm install

start:
	start-server -s ./frontend/dist

build:
	rm -rf frontend/dist
	npm run build --prefix frontend