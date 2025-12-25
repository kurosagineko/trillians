import express from 'express';
import nodemailer from 'nodemailer';
import { rateLimit } from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
	// store: ... , // Redis, Memcached, etc. See below.
});

const whitelist = process.env.ALLOWED_ORIGINS?.split(',').map(o => o.trim()) || [
	'http://localhost:5173',
	'http://127.0.0.1:5173',
	'http://localhost:4000',
	'http://127.0.0.1:4000',
	'http://localhost:3001',
	'http://127.0.0.1:3001',
];
app.use((req, res, next) => {
	const origin = req.headers.origin;
	if (!origin || whitelist.includes(origin)) {
		res.header('Access-Control-Allow-Origin', origin || '*');
	}
	res.header(
		'Content-Security-Policy',
		"default-src 'self'; " +
			"script-src 'self' https://cdn.jsdelivr.net; " +
			"style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com; " +
			"font-src 'self' https://fonts.gstatic.com; " +
			"img-src 'self' https: data: blob:; " +
			"connect-src 'self';"
	);
	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS,HEAD');
	res.header('Access-Control-Expose-Headers', 'Set-Cookie');
	if (req.method === 'OPTIONS') {
		return res.sendStatus(204);
	}
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);
app.set('etag', false);

app.use((error, req, res, next) => {
	console.error('error:', error);
	const status = error.status || 500;
	const message = error.message || 'Internal server error';

	res.status(status).json({ error: { message } });
	next();
});

process.env.NODE_ENV = 'production' && app.use(express.static(path.join(__dirname, './dist')));

const transporter = nodemailer.createTransport({
	host: 'smtp.gmail.com',
	port: 587,
	secure: false, // use STARTTLS
	auth: {
		user: process.env.GMAIL_USER,
		pass: process.env.GMAIL_APP_PASS,
	},
});

transporter
	.verify()
	.then(() => console.log('SMTP ready'))
	.catch(err => {
		console.error('SMTP verify failed', err);
	});

app.post('/api/contact', async (req, res) => {
	const { name, email, subject, message } = req.body;
	try {
		const mail = {
			from: `"Trillians Contact Form" <${process.env.GMAIL_USER}>`,
			to: process.env.TO_EMAIL,
			subject: `${subject} — ${name}`,
			text: `From: ${name} <${email}>\n\n${message}`,
			html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message.replace(/\n/g, '<br>')}</p>`,
		};

		await transporter.sendMail(mail);
		res.json({ ok: true });
	} catch (e) {
		console.error('Send failed', err);
		res.status(500).json({ error: 'Failed to send message' });
	}
});

(async () => {
	try {
		const server = app.listen(PORT, () => {
			console.log(`Server is listening at ${process.env.HOST_URL}:${PORT}`);
		});

		server.on('error', err => {
			console.error('HTTP server error:', err);
			process.exit(1);
		});
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
})();
