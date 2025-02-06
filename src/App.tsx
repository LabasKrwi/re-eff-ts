// import './styles/App.css';
// import PostList from './components/PostList';
// import PostForm from './components/PostForm';
// import { useCallback, useMemo, useState } from 'react';
// import { IPost } from './types/Post';
// import PostFilter, {IFilter} from './components/PostFilter';
// import MyModal from './components/UI/MyModal/MyModal';
// import MyButton from './components/UI/button/MyButton';
// export const App = () => {

//   const [posts, setPosts] = useState<IPost[]>([
//         {id: 1, title: 'zdadwaw', body: 'awddadwdw'},
//         {id: 2, title: 'wda 2', body: 'jjjDescriptaion'},
//         {id: 3, title: 'ddaaww 3', body: 'xxxDescription'}
//       ])

//       const [filter, setFilter] = useState<IFilter>({sort: '', query: ''})
//       const [modal, setModal] = useState(false)


//       type SortableKeys = Extract<keyof IPost, string>;
 

//       const isSortableKey = useCallback((key: any): key is SortableKeys => {
//         return key === 'title' || key === 'body';
//       }, [])

    

//   const sortedPosts = useMemo<IPost[]>(() => {
//     if (filter.sort && isSortableKey(filter.sort)) {
//       return [...posts].sort((a, b) => {
//         const aValue = a[filter.sort as keyof IPost];
//         const bValue = b[filter.sort as keyof IPost];

//         if (typeof aValue === 'string' && typeof bValue === 'string') {
//           return aValue.localeCompare(bValue);
//         }
//         return 0; 
//           }); 
//         }
//             return posts;
//       }, [filter.sort, posts, isSortableKey]);
    
//       const sortedAndSearchedPosts = useMemo(() => {
//         return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
//       }, [filter.query, sortedPosts]);
    
//       const createPost = (newPost: IPost) => {
//         setPosts([...posts, newPost]);
//         setModal(false);
//       };
    
//       const removePost = (post: IPost) => {
//         setPosts(posts.filter(p => p.id !== post.id));
//       };
    
  
//   return (
//     <div className="App">
//       <MyButton style={{marginTop: '10px'}}children={'Создать пост'} onClick={() => setModal(true)}/>
//       <MyModal setVisible={setModal} visible={modal} children={
//         <PostForm posts={posts} create={createPost}/>
//       }/>
//         <hr style={{margin:'15px 0'}}/>
//       <PostFilter filter={filter} setFilter={setFilter}/>
//       <PostList  remove={removePost} posts={sortedAndSearchedPosts}/>
//     </div>
//   );
// };

// export default App;


import { BrowserRouter } from 'react-router-dom';
import './styles/App.css'
import { FC } from 'react';
import Navbar from './components/Navbar/Navbar';
import AppRouter from './AppRouter';

export const App: FC = () => {

  return (
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
  )
}

export default App;
