const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

// Return which PDFs actually exist so the frontend can show/hide the viewer
app.get('/api/pdfs', (req, res) => {
  const dir = path.join(__dirname, 'public', 'pdfs');
  try {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));
    res.json(files);
  } catch { res.json([]); }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`\n✅  Design AI Lectures — http://localhost:${PORT}\n`);
});
