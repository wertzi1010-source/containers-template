export default {
  async fetch() {
    return new Response(`

<!DOCTYPE html>
<html>
<head>

<title>Digital Impact GPT</title>

<style>

body{
background:#000;
color:#fff;
font-family:Arial;
text-align:center;
margin:0;
padding:60px;
}

h1{
font-size:60px;
margin-bottom:20px;
}

p{
font-size:24px;
color:#ccc;
}

.grid{
margin-top:60px;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;
max-width:1000px;
margin-left:auto;
margin-right:auto;
}

.card{
background:#111;
padding:30px;
border-radius:10px;
border:1px solid #222;
}

</style>

</head>

<body>

<h1>Digital Impact GPT</h1>
<p>Enterprise AI Intelligence Platform</p>

<div class="grid">

<div class="card">
<h2>AI Orchestrator</h2>
<p>Multi-engine AI orchestration system.</p>
</div>

<div class="card">
<h2>Trading Intelligence</h2>
<p>Autonomous market analysis platform.</p>
</div>

<div class="card">
<h2>Enterprise Automation</h2>
<p>AI driven enterprise infrastructure.</p>
</div>

</div>

</body>
</html>

`,{
headers:{ "content-type":"text/html"}
});
}
};
