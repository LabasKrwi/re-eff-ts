import './styles/App.css';
import PostList from './components/PostList';
import { useRef, useState } from 'react';
import { IPost } from './types/Post';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

export const App = () => {
  const [posts] = useState<IPost[]>([
    {id: 1, title: 'Javascript', body: 'Description', key: 1},
    {id: 2, title: 'Javascript 2', body: 'Description', key: 2},
    {id: 3, title: 'Javascript 3', body: 'Description', key: 3}
  ])

  const bodyInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState<string>('')

  const addNewPost = (event: React.MouseEvent) => {
    event.preventDefault();
    console.log(bodyInputRef.current);
    
  }

  return (
    <div className="App">
    <form>
      <MyInput  
        placeholder='Название поста'
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <MyInput
        ref={bodyInputRef} 
        placeholder='Описание поста'
      />
      <MyButton children='Создать пост' onClick={(event)=>addNewPost(event)}/>
    </form>

      <PostList posts={posts}/>
    </div>
  );
};

export default App;
