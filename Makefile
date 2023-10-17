install:
	npm ci

gendiif:
	bin/gendiif.js -h

publish:
	npm publish --dry-run