addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  // Extract the path from the incoming request URL
  const url = new URL(request.url);
  var path = url.pathname;

  if (path == "/") {
     path = "/index.html"	
  }

  // Construct the URL for the remote file
  const remoteUrl = `https://raw.githubusercontent.com/Toasticle/test123/main${path}`;

  // Fetch the remote file and return it as the response
  const response = await fetch(remoteUrl);

  return response;
}
