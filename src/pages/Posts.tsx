import React, {FC, useEffect} from 'react';
import { useUnit } from 'effector-react';
import MyButton from '../components/UI/button/MyButton'; 
import MyModal from '../components/UI/MyModal/MyModal'; 
import PostForm from '../components/PostForm'; 
import PostFilter from '../components/PostFilter'; 
import PostList from '../components/PostList'; 
import { IPost } from '../types/Post';
import { usePosts } from '../hooks/usePosts';
import useFetching from '../hooks/useFetching';
import Loader from '../components/UI/Loader/Loader';
import { $currentPage, $pagesCount, $posts } from '../generalstore/store';
import {addPost, removePost } from '../generalstore/events'
import { fetchPostsEffect } from '../generalstore/effects';
import { $limit } from '../generalstore/store';
import Pages from '../components/UI/Pagination/Pages';
export const Posts: FC = () => {
  const posts = useUnit($posts); 
  const [filter, setFilter] = React.useState({ sort: '', query: '' });
  const [modal, setModal] = React.useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort as 'title' & 'body', filter.query as keyof IPost)
  const page = useUnit($currentPage);
  const pagesCount = useUnit($pagesCount);
  const limit = useUnit($limit);
  const pagesArray = [];


  const [fetchPosts, isPostLoading, isPostError] = useFetching(async() => {
    await fetchPostsEffect({limit, page});
  })

  useEffect(() => {
       
      fetchPosts();
      
  }, []); 

  for (let i=0; i < pagesCount; i++) {
    pagesArray.push(i + 1);
  }

  
  return (
    <div className="App">
      <MyButton style={{ marginTop: '10px' }} children={'Создать пост'} onClick={() => setModal(true)} />
      <MyModal setVisible={setModal} visible={modal} children={
        <PostForm posts={posts} create={addPost} />
      } />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {isPostError && 
        <h1> Произошла ошибка ${isPostError}</h1>
      }
      {isPostLoading
        ? <div style={{display: 'flex', justifyContent: 'center'}}>
          <Loader />
        </div>
        : <PostList  remove={removePost} posts={sortedAndSearchedPosts} />
      }
       <Pages />
    </div>
  );
};

export default Posts;