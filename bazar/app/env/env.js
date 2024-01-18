const vercelUrl =
  process.env.VERCEL_URL != null
    ? `https://bazar-store-axel.vercel.app/`
    : null;
export const hostUrl = vercelUrl ?? "http://localhost:3000";
