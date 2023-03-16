addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  // Extract the path from the incoming request URL
  const url = new URL(request.url);
  let path = url.pathname;

  // If the path is a directory, append index.html
  if (path.endsWith('/')) {
    path += 'index.html';
  }

  // Get the file extension from the path
  const extension = path.split('.').pop();
  
  // Set the content type based on the file extension
  const contentType = getContentType(extension);

  // Construct the URL for the remote file
  const remoteUrl = `https://raw.githubusercontent.com/Toasticle/test123/main${path}`;

  // Fetch the remote file and return it as the response
  const response = await fetch(remoteUrl);

  // Set the content type header
  const headers = new Headers(response.headers);
  headers.set('content-type', contentType);

  return new Response(response.body, {
    headers,
    status: response.status,
    statusText: response.statusText,
  });
}

function getContentType(extension: string): string {
  switch (extension) {
    case 'html':
      return 'text/html';
    case 'css':
      return 'text/css';
    case 'js':
      return 'application/javascript';
    case 'json':
      return 'application/json';
    case 'png':
      return 'image/png';
    case 'jpeg':
    case 'jpg':
      return 'image/jpeg';
    case 'svg':
      return 'image/svg+xml';
    default:
      return 'text/plain';
  }
}
