export const prerender = false;

export function load({ request }) {
  const userAgent = request.headers.get('user-agent') ?? 'Unknown';

  return {
    renderedAt: new Date().toISOString(),
    userAgent
  };
}
