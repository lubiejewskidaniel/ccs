const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Endpoint to handle form submission
app.post("/send-email", (req, res) => {
	const { name, email, number, subject, message } = req.body;

	// Create a transporter object using SMTP transport
	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: "codeconsultingstudio@gmail.com",
			pass: "fydp zgpb qdrt clvd",
		},
	});

	// Email options
	const mailOptions = {
		from: "codeconsultingstudio@gmail.com",
		replyTo: email,
		to: "codeconsultingstudio@gmail.com",
		subject: subject,
		text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${number}\n\nMessage:\n${message}`,
	};

	// Send email
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(error);
			res.status(500).json({ error: "Failed to send email" });
		} else {
			console.log("Email sent: " + info.response);
			res.status(200).json({ message: "Email sent successfully" });
		}
	});
});

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
