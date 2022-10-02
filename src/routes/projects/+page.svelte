<script lang="ts">
  import { getContext } from 'svelte';
  import dayjs from 'dayjs';
  import Book from '../../lib/components/Book.svelte';

  const cms = getContext('cms');
</script>

<div class="p-7 block-section">
  <h2 class="block-title">Projects</h2>
  <div class="mb-5 item-section">
    <div class="w-full space-y-5">
      {#each cms.projects as project}
        <div class="item-header">
          <div class="space-y-1 5">
            <a href={`https://github.com/swstephe/${project.name}`} target="_blank">
              <div class="font-medium">
                {project.name} &mdash; {project.title}
              </div>
            </a>
            <div title="date started" class="item-header-info">
              <i class="bx bx-calendar text-xl"></i>
              &nbsp;
              <time datetime={project.date} class="text-sm text-gray-500">
                {dayjs(project.date).format('MMMM D, YYYY')}
              </time>
            </div>
            {#if project.book}
              <Book book={project.book} />
            {/if}
            <p class="prose prose-slate dark:prose-invert">{project.summary}</p>
            <div class="border-b border-gray-200"></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
