let quote = function () {
  let min = 0;
  let max = quotes.length - 1;
  let rando = ~~(Math.random() * (max - min) + min);
  return quotes[rando];
};
let quotes = [
  "It's a family that's loaded with grudges and passion. We come from a long line of robbers and highwaymen in Italy, you know. Killers, even.",
  'To be a good actor you have to be something like a criminal, to be willing to break the rules to strive for something new.',
  "I think I jump around more when I'm alone.",
  "I bought a Yamaha-1 and I was doing 180 miles per hour home on the 405 and that's really, really crazy but I did it.",
  "I believe that being successful means having a balance of success stories across the many areas of your life. You can't truly be considered successful in your business life if your home life is in shambles.",
];

export async function handler(req: object) {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
    },
    body: `
    <!doctype html>
    <html lang=en>
    <head>
    <meta charset=utf-8>
    <title>Hi!</title>
    <link rel="stylesheet" href="https://static.begin.app/starter/default.css">
    <link href="data:image/x-icon;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" rel="icon" type="image/x-icon">
    </head>
    <body><h1 class="center-text">Praise Cage</h1>
    <p class="center-text"><q>${quote()}</q></p>
    <div class="center-text"><img src="https://www.placecage.com/g/300/300"></div>
    <p class="center-text">Your <a href="https://begin.com" class="link" target="_blank">Begin</a> app is ready to go!</p
    </body>
    </html>`,
  };
}
