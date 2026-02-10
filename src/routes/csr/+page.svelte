<script lang="ts">
  import { onMount } from 'svelte';
  import { Button } from '$components/ui/button';

  let count = $state(0);
  let now = $state(new Date());

  onMount(() => {
    const interval = setInterval(() => {
      now = new Date();
    }, 1000);

    return () => clearInterval(interval);
  });
</script>

<div
  class="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center px-6"
>
  <Button variant="ghost" size="sm" href="/">&larr; Back</Button>

  <div class="mt-6">
    <h1 class="text-3xl font-bold">CSR Page</h1>
    <p class="text-muted-foreground mt-1">
      This page is rendered entirely on the client side.
    </p>
  </div>

  <div
    class="bg-muted/50 text-md space-y-2 rounded-lg p-5 pt-2 leading-relaxed"
  >
    <p>
      <strong>How it works:</strong> The server sends an empty HTML shell and the
      browser runs JavaScript to render the page. This means it can use reactive
      state, browser APIs, and update dynamically without any server involvement.
    </p>
    <p class="text-muted-foreground">
      The counter and clock below only exist in the browser — there is no
      server-side rendering happening for this page.
    </p>
  </div>

  <div class="mt-6 grid grid-cols-2 gap-4 self-stretch">
    <div>
      <p class="text-sm font-medium">Pros</p>
      <ul class="text-muted-foreground mt-2 list-disc space-y-1 pl-4 text-sm">
        <li>Full access to browser APIs</li>
        <li>Rich interactivity and real-time updates</li>
        <li>No server needed after initial load</li>
        <li>Smooth client-side navigation</li>
      </ul>
    </div>
    <div>
      <p class="text-sm font-medium">Cons</p>
      <ul class="text-muted-foreground mt-2 list-disc space-y-1 pl-4 text-sm">
        <li>Blank page until JS loads</li>
        <li>Poor SEO — crawlers see empty HTML</li>
        <li>Slower initial render on weak devices</li>
        <li>Larger JS bundle to download</li>
      </ul>
    </div>
  </div>

  <div class="mt-8 grid grid-cols-2 gap-4 self-stretch">
    <div class="bg-muted/50 rounded-lg p-5">
      <p
        class="text-muted-foreground text-xs font-medium tracking-wide uppercase"
      >
        Current time
      </p>
      <p class="mt-2 font-mono text-2xl tabular-nums">
        {now.toLocaleTimeString()}
      </p>
    </div>

    <div class="bg-muted/50 rounded-lg p-5">
      <p
        class="text-muted-foreground text-xs font-medium tracking-wide uppercase"
      >
        Counter
      </p>
      <div class="mt-2 flex items-center gap-3">
        <Button variant="outline" size="icon-sm" onclick={() => count--}
          >-</Button
        >
        <span class="w-10 text-center font-mono text-2xl tabular-nums"
          >{count}</span
        >
        <Button variant="outline" size="icon-sm" onclick={() => count++}
          >+</Button
        >
      </div>
    </div>
  </div>
</div>
