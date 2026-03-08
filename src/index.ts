export default {
  async fetch() {
    return new Response(`
    <html>
    <head>
    <title>Digital Impact GPT</title>
    <style>
    body{
        background:black;
        color:white;
        font-family:Arial;
        text-align:center;
        padding:60px;
    }

    h1{
        font-size:60px;
    }

    p{
        font-size:24px;
        color:#ccc;
    }

    </style>
    </head>

    <body>

    <h1>Digital Impact GPT</h1>
    <p>Enterprise AI Intelligence Platform</p>

    </body>
    </html>
    `,{
        headers:{ "content-type":"text/html"}
    });
  }
};
