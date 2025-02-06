import { FC } from 'react'
import { IPostItemProps} from '../types/Post'
import MyButton from './UI/button/MyButton'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const PostItem: FC<IPostItemProps> = (({post, remove}) => {
  const router = useNavigate();

  return (
    <div className="post">
        <div  className="post__content">
            <strong>{post.id}.{post.title}</strong>
            <div>
                {post.body}
            </div>
    </div>
    <div className="post__btns">
      <MyButton key={uuidv4()} onClick={() => router(`/posts/${post.id}`)}>Открыть</MyButton>
      <MyButton key={uuidv4()} onClick={remove ? () => remove(post) : () => {}}>Удалить пост</MyButton>
        </div>
    </div>
  )
});

export default PostItem