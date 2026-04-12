import { serve } from "bun";
import index from "./index.html";
import { CACHE_MAX_AGE, UA_SLICE_LENGTH } from "@/constants/http";

const server = serve({
  routes: {
    "/*": index,
    "/public/:path": async (req) => {
      const path = req.params.path;
      const filePath = path.startsWith("/") ? `./src/public${path}` : `./src/public/${path}`;
      const file = await Bun.file(filePath);

      return new Response(file, {
        headers: {
          "Content-Type": file.type,
          "Cache-Control": `public, max-age=${CACHE_MAX_AGE}`,
        },
      });
    },
    "/api/log": async (req) => {
      const ip =
        req.headers.get("x-forwarded-for") ??
        req.headers.get("x-real-ip") ??
        req.headers.get("cf-connecting-ip") ??
        "unknown";
      const ua = req.headers.get("user-agent") ?? "unknown";
      const now = new Date().toISOString();

      try {
        const data = await req.json();
        console.log(
          `[${now}] ${data?.path ?? "/"} | IP: ${ip} | Lang: ${data?.lang ?? "-"} | Screen: ${data?.screen ?? "-"} | UA: ${ua.slice(0, UA_SLICE_LENGTH)}`,
        );
      } catch {
        console.log(`[${now}] / | IP: ${ip} | UA: ${ua.slice(0, UA_SLICE_LENGTH)}`);
      }

      return new Response("ok", { status: 200 });
    },
  },

  development: process.env.NODE_ENV !== "production" && {
    hmr: true,
    console: true,
  },
});

console.log(`🚀 Server running at ${server.url}`);
