const CORS_HEADERS = {
  headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'OPTIONS, POST',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
}

const server = Bun.serve({
  port: process.env.API_PORT || 8081,
  fetch(request) {
    console.log(`Received request: ${request.method} ${request.url}`)
    return new Response(
      JSON.stringify({
        githubUrls: [
          'https://github.com/dnum-mi',
          'https://github.com/IA-Generative',
        ]
      }), 
      CORS_HEADERS
    )
  },
})

console.log(`Listening on ${server.url}`)
