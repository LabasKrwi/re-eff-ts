import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/UI/PostForm';
import { useState } from 'react';
import { IPost } from './types/Post';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';


export const App = () => {

  const [posts, setPosts] = useState<IPost[]>([
        {id: 1, title: 'zdadwaw', body: 'awddadwdw'},
        {id: 2, title: 'wda 2', body: 'jjjDescriptaion'},
        {id: 3, title: 'ddaaww 3', body: 'xxxDescription'}
      ])
      const [selectedSort, setSelectedSort] = useState<any[]>();
      const [searchQuery, setSearchQuery] = useState('')


      const sortedPosts = [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
      



      const createPost = (newPost: IPost) => {
        setPosts([...posts, newPost])
      }
    
      const removePost = (post: IPost) => {
        setPosts(posts.filter(p => p.id !== post.id))
      }

      const sortPosts = (sort: string) => {
        console.log(sort);
        
        setSelectedSort(sort);
      }
      
  
  return (
    <div className="App">
      <PostForm posts={posts}create={createPost}/>
        <hr style={{margin:'15px 0'}}/>
      <div>
        <MyInput 
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder='Поиск'
        />
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          options={[
            {value:'title', name: 'По названию', key: 'title'},
            {value: 'body', name: 'По описанию', key: 'body'}
        ]} defaultValue='Сортировка по'/>
      </div>
      {posts.length
        ?
          <PostList remove={removePost} posts={sortedPosts}/>
        :
        <h1 style={{textAlign: 'center'}}>Посты отсутсвуют</h1>
      }
      
    </div>
  );
};

export default App;
