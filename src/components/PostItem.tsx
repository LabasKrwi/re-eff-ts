import { FC } from 'react'
import {IPost} from '../types/Post'

export interface PostProps {
    posts: IPost[]
}

const PostItem: FC<IPost> = (post) => {
    
  return (
    <div className="post">
        <div className="post__content">
            <strong>{post.id}.{post.title}</strong>
            <div>
                {post.body}
            </div>
    </div>
    <div className="post__btns">
        <button>Удалить пост</button>
        </div>
    </div>
  )
}

export default PostItem