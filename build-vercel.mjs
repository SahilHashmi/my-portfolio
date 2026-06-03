import { execSync } from "child_process";
import fs from "fs";

// Step 1: Run the normal build
execSync("npm run build", { stdio: "inherit" });

// Step 2: Create .vercel/output structure
const vercelOutput = ".vercel/output";
const functionsDir = `${vercelOutput}/functions/__server.func`;
const staticDir = `${vercelOutput}/static`;

fs.mkdirSync(functionsDir, { recursive: true });
fs.mkdirSync(staticDir, { recursive: true });

// Step 3: Copy server files to function
fs.cpSync("dist/server", functionsDir, { recursive: true });

// Step 4: Copy client static files
fs.cpSync("dist/client", staticDir, { recursive: true });

// Step 5: Write Vercel output config
const config = {
  version: 3,
  routes: [
    // Static assets first
    {
      src: "/assets/(.*)",
      dest: "/assets/$1",
    },
    {
      src: "/robots.txt",
      dest: "/robots.txt",
    },
    // All other routes go to SSR function
    {
      src: "/(.*)",
      dest: "/__server",
    },
  ],
};

fs.writeFileSync(`${vercelOutput}/config.json`, JSON.stringify(config, null, 2));

console.log("✅ Vercel output structure created successfully!");
