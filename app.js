const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "0.0.0.0";
const port = 3000;

const server = http.createServer((req, res) => {

    // Serve background image
    if (req.url === "/background.jpg") {

        const imagePath = path.join(__dirname, "background.jpg");

        fs.readFile(imagePath, (err, data) => {

            if (err) {
                res.statusCode = 404;
                res.end("Image not found");
                return;
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "image/jpeg");
            res.end(data);
        });

        return;
    }

    // Main website
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    res.end(`
<!DOCTYPE html>
<html>

<head>
    <title>Nirmal DevOps Project</title>

    <style>

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            height: 100vh;

            background-image:
                linear-gradient(
                    rgba(0, 0, 0, 0.55),
                    rgba(0, 0, 0, 0.55)
                ),
                url('/background.jpg');

            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;

            color: white;

            font-family: Arial, sans-serif;
        }

        .content {
            padding: 80px;
        }

        h1 {
            font-size: 50px;
            margin-bottom: 25px;
        }

        h2 {
            font-size: 30px;
            margin-bottom: 25px;
        }

        p {
            font-size: 20px;
            margin-bottom: 20px;
        }

        .version {
            font-weight: bold;
        }

        .button {
            display: inline-block;
            margin-top: 15px;
            padding: 14px 25px;

            background: #0066ff;
            color: white;

            text-decoration: none;
            border-radius: 6px;

            font-weight: bold;
        }

    </style>

</head>

<body>

    <div class="content">

        <h1>Welcome to My DevOps Project</h1>

        <h2>Node.js Application Deployment</h2>

        <p>
            This application is deployed using GitHub, Ubuntu and PM2.
        </p>

        <p class="version">
            Version: 2.0
        </p>

        <a class="button" href="#">
            Learn More
        </a>

    </div>

</body>

</html>
    `);

});

server.listen(port, hostname, () => {
    console.log(`Server running on port ${port}`);
});