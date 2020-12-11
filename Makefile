install:
	npm install
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint .

calc:
	bin/brain-calc.js
even:	
	bin/brain-even.js
gcd:
	bin/brain-gcd.js
prime:
	bin/brain-prime.js
progression:
	bin/brain-progression.js