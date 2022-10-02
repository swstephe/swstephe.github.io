export type MetaData = {
  layout: string | false;
  title: string;
  date: string;
  summary: string;
  image?: string;
};

export type BlogPost = {
  meta: MetaData;
  path: string;
};

export const compareDates = (a: Date, b: Date): number => b.getTime() - a.getTime();
export const compareDateStrings = (a: string, b: string): number => compareDates(new Date(a), new Date(b));

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  return await Promise.all(
    Object.entries(import.meta.glob('/src/cms/posts/*.md')).map(async ([path, resolver]) => {
      const { metadata } = <{ [key: string]: never }>await resolver();
      return <BlogPost>{
        meta: metadata,
        path: path.replace(/^\/src\/cms\/posts\/(.+).md$/, '/blog/$1')
      };
    })
  );
};

export const formatYears = (date1: string, date2: string): string => {
  if (date2) {
    if (date1 === date2) {
      return date1.toString();
    } else {
      return `${date1}-${date2}`;
    }
  } else {
    return `${date1}-Present`;
  }
}

