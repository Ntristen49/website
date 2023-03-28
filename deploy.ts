addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);

  // Serve index.html for "/" or "/index.html"
  if (url.pathname === "/" || url.pathname === "/index.html") {
    const response = await fetch("https://raw.githubusercontent.com/Vindicted/test/main/index.html");
    const headers = new Headers({ "content-type": "text/html" });
    return new Response(await response.text(), { headers });
  }

  // Serve app.f55877a1.css for "/css/app.f55877a1.css"
  if (url.pathname === "/css/app.f55877a1.css") {
    const response = await fetch("https://raw.githubusercontent.com/Vindicted/test/main/app.f55877a1.css");
    const headers = new Headers({ "content-type": "text/css" });
    return new Response(await response.text(), { headers });
  }

  // Serve 838.35daa32b.css for "/css/838.35daa32b.css"
  if (url.pathname === "/css/838.35daa32b.css") {
    const response = await fetch("https://raw.githubusercontent.com/Vindicted/test/main/838.35daa32b.css");
    const headers = new Headers({ "content-type": "text/css" });
    return new Response(await response.text(), { headers });
  }

  // Serve logo.0d11fe46.png for "/img/logo.0d11fe46.png"
  if (url.pathname === "/img/logo.0d11fe46.png") {
    const response = await fetch("https://raw.githubusercontent.com/Vindicted/test/main/logo.0d11fe46.png");
    const headers = new Headers({ "content-type": "image/png" });
    return new Response(await response.arrayBuffer(), { headers });
  }

  // Serve favicon.ico for "/favicon.ico"
  if (url.pathname === "/favicon.ico") {
    const response = await fetch("https://raw.githubusercontent.com/Vindicted/test/main/favicon.ico");
    const headers = new Headers({ "content-type": "image/x-icon" });
    return new Response(await response.arrayBuffer(), { headers });
  }

  // Return 404 Not Found for all other requests
  return new Response("Not Found", { status: 404 });
}
