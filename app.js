const http = require('http');

const server = http.createServer((req, res) => {

res.writeHead(200, {'Content-Type': 'text/html'});

res.end(`

<!DOCTYPE html>
<html>

<head>

<title>AWS CI/CD Pipeline</title>

<style>

*{
margin:0;
padding:0;
box-sizing:border-box;
}

body{
font-family:Arial, sans-serif;
background:linear-gradient(135deg,#0f172a,#2563eb);
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
padding:20px;
}

.container{
width:900px;
background:white;
border-radius:20px;
padding:40px;
box-shadow:0 15px 40px rgba(0,0,0,0.3);
text-align:center;
}

h1{
color:#2563eb;
margin-bottom:10px;
font-size:40px;
}

.subtitle{
font-size:18px;
color:#555;
margin-bottom:25px;
}

.status{
background:#22c55e;
color:white;
padding:15px;
border-radius:10px;
font-size:18px;
font-weight:bold;
margin-bottom:30px;
}

.grid{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:20px;
margin-top:20px;
}

.card{
background:#f8fafc;
padding:25px;
border-radius:15px;
box-shadow:0 3px 10px rgba(0,0,0,0.1);
}

.card h3{
color:#2563eb;
margin-bottom:10px;
}

.footer{
margin-top:30px;
padding-top:20px;
border-top:1px solid #ddd;
}

.footer p{
margin:8px 0;
}

.services{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    gap:15px;
    margin-top:15px;
}

.services span{
    background:#2563eb;
    color:white;
    padding:10px 18px;
    border-radius:25px;
    font-size:14px;
    font-weight:bold;
}
    
</style>

</head>

<body>

<div class="container">

<h1>CI/CD Pipeline Deployment</h1>

<p class="subtitle">
Continuous Integration & Continuous Deployment on AWS
</p>

<div class="status">
Deployment Successful
</div>

<div class="grid">

<div class="card">
<h3>Source Stage</h3>
<p>GitHub Repository Connected</p>
</div>

<div class="card">
<h3>Build Stage</h3>
<p>AWS CodeBuild Executed Successfully</p>
</div>

<div class="card">
<h3>Deploy Stage</h3>
<p>Application Deployed to EC2</p>
</div>

<div class="card">
<h3>Monitoring</h3>
<p>Pipeline Execution Completed</p>
</div>

</div>

<div class="footer">

<h3>AWS Services Used</h3>

<div class="services">
    <span>AWS CodePipeline</span>
    <span>CodeBuild</span>
    <span>Amazon EC2</span>
    <span>GitHub</span>
</div>

<br>

<p><strong>Project:</strong> CI/CD Pipeline to Deploy Node.js Application</p>

<p><strong>Developed By:</strong> Vishakha Mantalwad</p>

</div>

<br>

<p>
Project 7 - CI/CD Pipeline to Deploy Node.js Application
</p>

<p>
Developed By: Vishakha Mantalwad
</p>

</div>

</div>

</body>

</html>

`);

});

server.listen(3000, () => {
console.log("Server running on port 3000");
});