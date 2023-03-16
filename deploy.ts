addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  const response = await fetch(`https://${request.headers.get("host")}/index.html`);
  return response;
}
