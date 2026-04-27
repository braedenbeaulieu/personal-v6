export function handlePing(): Response {
  return new Response("pong", { status: 200 });
}