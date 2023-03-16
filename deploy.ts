addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  const response = await fetch(`https://raw.githubusercontent.com/Toasticle/test123/main/index.html`);
  return response;
}
