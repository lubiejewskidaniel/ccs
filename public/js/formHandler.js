document
	.getElementById("contactForm")
	.addEventListener("submit", function (event) {
		event.preventDefault();

		const formData = new FormData(this);
		const data = {};
		formData.forEach((value, key) => (data[key] = value));

		fetch("/send-email", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				alert("Email sent successfully!");
				setTimeout(() => {
					window.location.reload();
				}, 5000);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	});
