// ══════════════════════════════════════════════════════════════
// LOCAL CONFIG — DO NOT COMMIT
// ══════════════════════════════════════════════════════════════
// This file is git-ignored. Keep every "key that shouldn't be in
// the tracked HTML" here. topo-admin.html reads window.TOPO_CONFIG
// and falls back to safe defaults if this file is missing.
//
// IMPORTANT — the reality of client-side keys:
//   Anything set here is still SENT TO THE BROWSER when the admin
//   page loads. It is only hidden from your GitHub repo, not from
//   people who open the admin URL. For truly sensitive keys
//   (Supabase service_role, Stripe secret, paid PSI key you're
//   billed on), proxy them through the notify Cloudflare Worker
//   instead of putting them here.
//
// Deployment: upload this file next to topo-admin.html on your
// host. It must be reachable at the same directory as the HTML.
// ══════════════════════════════════════════════════════════════

window.TOPO_CONFIG = {
  // Supabase — the anon key is designed to be public (RLS gates access),
  // but keeping it here means the tracked HTML doesn't hard-code the project id.
  SUPABASE_URL: 'https://lkhdwgltwzaxslspxgcx.supabase.co',
  SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxraGR3Z2x0d3pheHNsc3B4Z2N4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwMDk1OTYsImV4cCI6MjA5MTU4NTU5Nn0.nDy7pWgYkr-NFNh5wpIFmfu4tXsLPoPqrdtvzY3__4Q',

  // Google PageSpeed Insights key. Empty string = keyless mode (rate-limited).
  // Get a free key: https://developers.google.com/speed/docs/insights/v5/get-started
  PSI_API_KEY: 'AIzaSyCw87kPYxGrGtBeavK_GnsqgT2kNfKaDQc',
};
