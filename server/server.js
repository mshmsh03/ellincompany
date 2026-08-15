const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// The site's static files (index.html, about.html, assets/, etc.) live in
// the repo root, one level up from this file.
const SITE_ROOT = path.join(__dirname, '..');

app.use(express.static(SITE_ROOT));

app.listen(PORT, () => {
  console.log(`Ellin Company site listening on port ${PORT}`);
});
