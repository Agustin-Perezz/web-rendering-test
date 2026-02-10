<script lang="ts">
  import { Button } from '$components/ui/button';
</script>

<div class="flex min-h-screen flex-col items-center justify-center gap-4">
  <h1 class="text-2xl font-bold">Static Page</h1>
  <p class="text-muted-foreground">
    This page is statically rendered at build time.
  </p>
  <div class="flex gap-3">
    <Button href="/csr">Go to CSR Page</Button>
    <Button href="/ssr" variant="outline">Go to SSR Page</Button>
  </div>
</div>
