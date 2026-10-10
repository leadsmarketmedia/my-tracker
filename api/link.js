export default function handler(req, res) {
  // 1. Get campaign code and worker token from incoming URL parameters
  const { w } = req.query;

  // 2. Your master account tracking link
  const masterOffer = 'https://www.td3j0sk.com/2LZW4TBP/M5C44N7/';
  const workerToken = w || 'default_worker';

  // 3. Attach worker sub-id for attribution tracking
  const finalRedirectUrl = `${masterOffer}?subid=${encodeURIComponent(workerToken)}`;

  // 4. Return transition HTML that strips hostile referrer headers
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="referrer" content="no-referrer">
      <title>Redirecting...</title>
      <script>
        setTimeout(function() {
          window.location.href = "${finalRedirectUrl}";
        }, 200);
      </script>
    </head>
    <body style="background:#f4f4f4; text-align:center; padding-top:20%; font-family:sans-serif;">
      <p>Loading secure endpoint...</p>
    </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
