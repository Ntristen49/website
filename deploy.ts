addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  let path = url.pathname;

  if (path === '/') {
    path = '/index.html';
  }

  const response = await fetch(`https://raw.githubusercontent.com/Toasticle/test123/main${path}`);

  const headers = new Headers(response.headers);

  // Remove CORS
  headers.delete('Access-Control-Allow-Origin');
  headers.delete('Vary');

  // Set content type
  const contentType = getContentType(getExtension(path));
  headers.set('Content-Type', contentType);

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
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
    case 'ico':
      return 'image/x-icon';
    default:
      return 'text/plain';
  }
}

function getExtension(path: string): string {
  const index = path.lastIndexOf('.');
  return path.slice(index + 1);
}
