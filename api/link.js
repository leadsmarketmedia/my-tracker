export default function handler(req, res) {
  // 1. Get tracking parameter (fbclickid or w)
  const { fbclickid, w } = req.query;
  const workerToken = fbclickid || w || '1';

  // 2. Your destination offer link
  const masterOffer = 'http://www.td3j0sk.com/2LZW4TBP/M5C44N7/';
  const finalRedirectUrl = `${masterOffer}?subid=${encodeURIComponent(workerToken)}`;

  // 3. HTML transition that strips referrer and redirects
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="referrer" content="no-referrer">
      <meta http-equiv="refresh" content="0;url=${finalRedirectUrl}">
      <title>Redirecting...</title>
      <script>
        window.location.replace("${finalRedirectUrl}");
      </script>
    </head>
    <body style="background:#f4f4f4; text-align:center; padding-top:20%; font-family:sans-serif;">
      <p>Redirecting to offer...</p>
    </body>
    </html>
  `;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}
