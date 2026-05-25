const fs = require("fs");

const file = "app/page.tsx";
let text = fs.readFileSync(file, "utf8");

text = text.replace(
  /const heroImage = .*?;/,
  'const heroImage = "/homepage/trade-engineer-tools.svg";'
);

text = text.replace(
  /const cardImageOne = .*?;/,
  'const cardImageOne = "/homepage/trade-van-worker.svg";'
);

text = text.replace(
  /const cardImageTwo = .*?;/,
  'const cardImageTwo = "/homepage/trade-job-site.svg";'
);

fs.writeFileSync(file, text, "utf8");
console.log("Homepage visuals set to safe TradeConnectAI images.");
