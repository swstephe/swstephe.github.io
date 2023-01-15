<script lang="ts">
  import type { Book } from '$lib/cms';
  import BookLink from './BookLink.svelte';

  export let book: Book;
</script>

<div title="source" class="item-header-info">
  <i class="bx bx-book text-xl" ></i>
  <span class="text-sm text-gray-500">
    <BookLink amazon={book.amazon} text={book.title} />
    {#if book.author}
      by
      <BookLink amazon={book.author.amazon} text={book.author.name} />
    {/if}
  </span>
</div>
