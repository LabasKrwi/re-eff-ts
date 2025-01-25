import { FC } from 'react'
import {IPost} from '../types/Post'
import MyButton from './UI/button/MyButton'



const PostItem: FC<IPost> = ({id, title, body, remove}) => {
    const newPost = {id, title, body}
  return (
    <div className="post">
        <div className="post__content">
            <strong>{id}.{title}</strong>
            <div>
                {body}
            </div>
    </div>
    <div className="post__btns">
      {/* <button onClick={remove ? () => remove(newPost) : () => {}}>Удалить пост</button> */}
      {/* <MyButton  onClick={remove ? () => remove(newPost) : () => {}}>Удалить пост</MyButton> */}
      <MyButton  onClick={remove ? () => remove(newPost) : () => {}}>Удалить пост</MyButton>
        </div>
    </div>
  )
}

export default PostItem