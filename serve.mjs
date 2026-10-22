import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("./dist", import.meta.url));
const port = Number(process.env.PORT || 8080);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function safePath(pathname) {
  const file = normalize(join(root, pathname));
  if (file !== root && !file.startsWith(root + "/")) return null;
  return file;
}

createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", "http://127.0.0.1");
    let pathname = decodeURIComponent(url.pathname);
    if (pathname.endsWith("/")) pathname += "index.html";
    const file = safePath(pathname);
    if (!file) {
      res.writeHead(403);
      res.end("forbidden");
      return;
    }
    const data = await readFile(file);
    res.writeHead(200, {
      "content-type": types[extname(file)] || "application/octet-stream",
      "cache-control": "no-cache",
    });
    res.end(data);
  } catch {
    // Missing files (especially .zip archives and assets) must not be served as HTML.
    if (extname(new URL(req.url || "/", "http://127.0.0.1").pathname)) {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }
    try {
      const data = await readFile(join(root, "index.html"));
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      res.end(data);
    } catch {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.end("dist/ not found. Run npm run build first.");
    }
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`Project: SENSORITY → http://0.0.0.0:${port}`);
});
