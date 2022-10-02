<script lang="ts">
  import { Book } from "../../cms";

  function bookMarkup(book: Book) {
    let result = '';
    const icon = '<i class="bx bxl-amazon"></i>&nbsp;';
    const link = (text: string, icon: string, link: string) =>
      link ? `<a href="${link}" target="_blank">${icon}&nbsp;${text}</a>` : text;
    result += link(book.title, icon, book.amazon);
    if (book.author) {
      result += ' by ';
      result += link(book.author.name, icon, book.author.amazon);
    }
    return result;
  }

  export let book: Book;
</script>

<div title="source" class="item-header-info">
  <i class="bx bx-book text-xl"></i>
  &nbsp;
  <span class="text-sm text-gray-500">{@html bookMarkup(book)}</span>
</div>
