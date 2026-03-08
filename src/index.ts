export default {
  async fetch() {
    return new Response("Digital Impact GPT is running", {
      headers: { "content-type": "text/plain" }
    });
  }
};
