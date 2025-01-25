import { FC } from 'react'
import { PostListProps } from '../types/Post'
import PostItem from './PostItem'




const PostList: FC<PostListProps> = ({posts, remove}) => {
    
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Список постов</h1>
      {posts.map(post => 
      <PostItem remove={()=>remove(post)} id={post.id} title={post.title} body={post.body}/>
      )}
    </div>
  )
}

export default PostList