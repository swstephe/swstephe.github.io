<script>
  import dayjs from 'dayjs';
  export let data;
  const { title, date, image, content } = data;
</script>

<article class="single-article-section prose prose-slate lg:prose-xl dark:prose-invert">
  {#if image}
    <div class="single-article-mg rounded-t-xl">
      <img src={image} alt="" />
    </div>
  {/if}
  <div class="space-y-7 mb-5 p-7 pb-0">
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">{title}</h2>
      <p><time class="text-sm text-gray-400">{dayjs(date).format('MMM D, YYYY')}</time></p>
    </div>
    <svelte:component this={content} />
  </div>
</article>
