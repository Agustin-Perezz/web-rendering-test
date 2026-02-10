<script lang="ts">
  import { Button } from '$components/ui/button';

  let { data } = $props();

  const renderedAt = new Date(data.renderedAt);
</script>

<div
  class="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center px-6"
>
  <Button variant="ghost" size="sm" href="/">&larr; Back</Button>

  <div class="mt-6">
    <h1 class="text-3xl font-bold">SSR Page</h1>
    <p class="text-muted-foreground mt-1">
      This page is rendered on the server before being sent to the browser.
    </p>
  </div>

  <div
    class="bg-muted/50 text-md space-y-2 rounded-lg p-5 pt-2 leading-relaxed"
  >
    <p>
      <strong>How it works:</strong> When you request this page, the server runs
      the load function, generates the full HTML with the data already embedded,
      and sends it to the browser. The page is visible immediately — no JavaScript
      needed for the initial render.
    </p>
    <p class="text-muted-foreground">
      The data below was fetched and rendered on the server at request time.
      View the page source to see the content is already in the HTML.
    </p>
  </div>

  <div class="mt-6 grid grid-cols-2 gap-4 self-stretch">
    <div>
      <p class="text-sm font-medium">Pros</p>
      <ul class="text-muted-foreground mt-2 list-disc space-y-1 pl-4 text-sm">
        <li>Fast initial render — full HTML arrives ready</li>
        <li>Great SEO — crawlers see complete content</li>
        <li>Works without JavaScript enabled</li>
        <li>Dynamic data fresh on every request</li>
      </ul>
    </div>
    <div>
      <p class="text-sm font-medium">Cons</p>
      <ul class="text-muted-foreground mt-2 list-disc space-y-1 pl-4 text-sm">
        <li>Requires a running server</li>
        <li>Slower TTFB — server must render first</li>
        <li>Higher server load under traffic</li>
        <li>Full page reload for new data</li>
      </ul>
    </div>
  </div>

  <div class="mt-8 grid grid-cols-2 gap-4 self-stretch">
    <div class="bg-muted/50 rounded-lg p-5">
      <p
        class="text-muted-foreground text-xs font-medium tracking-wide uppercase"
      >
        Rendered at (server)
      </p>
      <p class="mt-2 font-mono text-2xl tabular-nums">
        {renderedAt.toLocaleTimeString()}
      </p>
      <p class="text-muted-foreground mt-1 text-xs">
        This timestamp was set on the server
      </p>
    </div>

    <div class="bg-muted/50 rounded-lg p-5">
      <p
        class="text-muted-foreground text-xs font-medium tracking-wide uppercase"
      >
        User agent
      </p>
      <p class="mt-2 text-xs leading-relaxed break-all">
        {data.userAgent}
      </p>
      <p class="text-muted-foreground mt-1 text-xs">
        Read from the request headers on the server
      </p>
    </div>
  </div>
</div>
