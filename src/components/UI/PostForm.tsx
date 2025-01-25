import React, {FC, useState} from 'react'
import { IPost } from '../../types/Post'
import MyInput from './input/MyInput'
import MyButton from './button/MyButton'
import { PostFormProps } from './UITypes/Types'

const PostForm: FC<PostFormProps> = ({create, posts}) => {
    // const [posts, setPosts] = useState<IPost[]>([
    //     {id: 1, title: 'Javascript', body: 'Description'},
    //     {id: 2, title: 'Javascript 2', body: 'Description'},
    //     {id: 3, title: 'Javascript 3', body: 'Description'}
    //   ])
    
      const [post, setPost] = useState<IPost>({title: '', body: '', id: 0})
    
      const addNewPost = (e: React.MouseEvent) => {
        e.preventDefault();
        const newPost = {
            ...post, id: posts.length+1
        }
        create(newPost)
    //    setPosts([...posts, post]);
       setPost({title: '', body: '', id: 0});
      }




  return (
    <form>
      <MyInput  
        placeholder='Название поста'
        onChange={(e) => setPost({...post, title: e.target.value})}
        value={post.title}
      />
      <MyInput
        onChange={(e) => setPost({...post, body: e.target.value, id: posts.length+1})}
        placeholder='Описание поста'
        value={post.body}
      />
      <MyButton  children='Создать пост' onClick={(e)=>addNewPost(e)}/>
    </form>
  )
}

export default PostForm