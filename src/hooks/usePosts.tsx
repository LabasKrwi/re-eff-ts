import React, { useCallback } from "react";
import { IPost } from "../types/Post";




export const useSortedPosts = (posts: IPost[], sort: keyof IPost) => {
    type SortableKeys = Extract<keyof IPost, string>;

  const isSortableKey = useCallback((key: any): key is SortableKeys => {
        return key === 'title' || key === 'body';
      }, [])
  
  const sortedPosts = React.useMemo(() => {
    if (sort && isSortableKey(sort)) {
            return [...posts].sort((a, b) => {
              const aValue = a[sort as keyof IPost];
              const bValue = b[sort as keyof IPost];
      
              if (typeof aValue === 'string' && typeof bValue === 'string') {
                return aValue.localeCompare(bValue);
              }
              return 0; 
                }); 
              }
                  return posts;
            }, [sort, posts, isSortableKey]);

            return sortedPosts
}


export const usePosts = (posts: IPost[], sort: keyof IPost & 'title' | 'id', query: keyof IPost) => {
    const sortedPosts = useSortedPosts(posts, sort)
    const sortedAndSearchedPosts = React.useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
      }, [query, sortedPosts]);

      return sortedAndSearchedPosts;
}