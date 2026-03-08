export default {
  async fetch(request: Request): Promise<Response> {
    return new Response(`
      <html>
      <body style="background:black;color:white;text-align:center">
        <h1>Digital Impact GPT</h1>
        <p>Enterprise AI Intelligence Platform</p>
      </body>
      </html>
    `, {
      headers: { "content-type": "text/html" }
    });
  }
};
