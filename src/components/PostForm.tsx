import React, { FC, useState } from 'react';
import { IPost } from '../types/Post';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import { PostFormProps } from './UI/UITypes/Types';
import { $posts } from '../generalstore/store';
import { useUnit } from 'effector-react';
import { addPost } from '../generalstore/events';


const PostForm: FC<PostFormProps> = () => {
  const [post, setPost] = useState<IPost>({ title: '', body: '', id: 0 });
  const posts = useUnit($posts); // Получение текущего состояния постов
  

  const addNewPost = (e: React.MouseEvent) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: posts.length + 1,
    };
    addPost(newPost); // Вызов события для добавления поста
    setPost({ title: '', body: '', id: 0 });
  };

  return (
    <form>
      <MyInput  
        placeholder='Название поста'
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
      />
      <MyInput
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        placeholder='Описание поста'
        value={post.body}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;