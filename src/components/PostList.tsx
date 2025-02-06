import { FC } from 'react'
import { PostListProps } from '../types/Post'
import PostItem from './PostItem'




const PostList: FC<PostListProps> = ({ posts, remove}) => {
        
    if (!posts.length) {
      return (
        <h1 style={{textAlign: 'center'}}>Посты отсутсвуют</h1>
      )
    }

  return (
    <div>
      <h1 
        style={{textAlign: 'center'}}
      >
        Список постов
      </h1>
      {posts.map((post, index) =>
      <PostItem key={index} remove={()=>remove(post)} post={post}/>
        )
      }
    </div>)}

export default PostList