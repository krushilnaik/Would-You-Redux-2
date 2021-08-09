const fs = require('fs');
const https = require('https');
const { default: next } = require('next');

const PORT = process.env.PORT || 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = app.getRequestHandler();

app.prepare().then(() => {
	const { SSL_KEY_FILE = '', SSL_CRT_FILE = '' } = process.env;

	const key = fs.readFileSync(SSL_KEY_FILE);
	const cert = fs.readFileSync(SSL_CRT_FILE);
	const options = { key, cert };

	https
		.createServer(options, (req, res) => {
			handler(req, res);
		})
		.listen(PORT, (/** @type {any} */ err) => {
			if (err) throw err;
			console.log(`Successfully started NextJS dev server at https://localhost:${PORT}`);
		});
});
