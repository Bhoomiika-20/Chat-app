// import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";
// import{ENV} from"./env.js";

// const aj = arcjet({
//   key: ENV.ARCJET_KEY, // Get your site key from https://app.arcjet.com
//   rules: [
//     // Shield protects your app from common attacks e.g. SQL injection
//     shield({ mode: "LIVE" }),
//     // Create a bot detection rule
//     detectBot({
//       mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
//       // Block all bots except the following
//       allow: [
//         "CATEGORY:SEARCH_ENGINE", // Google, Bing, etc
//         // Uncomment to allow these other common bot categories
//         // See the full list at https://arcjet.com/bot-list
//         //"CATEGORY:MONITOR", // Uptime monitoring services
//         //"CATEGORY:PREVIEW", // Link previews e.g. Slack, Discord
//       ],
//     }),
//     // Create a token bucket rate limit. Other algorithms are supported.
//       slidingWindow({
//       mode: "LIVE", // Blocks requests. Use "DRY_RUN" to log only
//       max: 100,
//       interval: 60,
//     }),
// ],
// });
// export default  aj;
import arcjet, { shield, detectBot, slidingWindow } from "@arcjet/node";
import { ENV } from "./env.js";

// 👇 Auto mode based on environment
const isProduction = ENV.NODE_ENV === "production";
const mode = isProduction ? "LIVE" : "DRY_RUN";

const aj = arcjet({
  key: ENV.ARCJET_KEY,
  rules: [
    // 🔐 Protect from common attacks
    shield({ mode }),

    // 🤖 Bot detection
    detectBot({
      mode,
      allow: [
        "CATEGORY:SEARCH_ENGINE",
        // optional (uncomment if needed)
        // "CATEGORY:MONITOR",
        // "CATEGORY:PREVIEW",
      ],
    }),

    // 🚦 Rate limiting
    slidingWindow({
      mode,
      max: 100,
      interval: 60, // 60 seconds
    }),
  ],
});

export default aj;