addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  const htmlUrl = "https://raw.githubusercontent.com/Toasticle/test123/main/index.html";
  const response = await fetch(htmlUrl);
  const htmlContent = await response.text();

  // Set the content type of the response to "text/html"
  const headers = new Headers();
  headers.set("content-type", "text/html");

  // Create a new response with the contents of the HTML file
  const htmlResponse = new Response(htmlContent, { headers });

  return htmlResponse;
}
