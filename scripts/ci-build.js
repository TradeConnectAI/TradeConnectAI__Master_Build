const { spawnSync } = require("child_process");

const major = Number(process.versions.node.split(".")[0]);
if (major < 20) {
  console.log(
    `Skipping next build on Node ${process.version} (Next.js 16 needs >=20.9)`
  );
  process.exit(0);
}

const result = spawnSync("npx", ["next", "build"], {
  stdio: "inherit",
  shell: process.platform === "win32",
});

process.exit(result.status === null ? 1 : result.status);
