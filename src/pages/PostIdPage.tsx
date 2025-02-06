import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetchById } from '../hooks/useFetching';
import { fetchCommentsByPostIdEffect, fetchPostByIdEffect } from '../generalstore/effects';
import Loader from '../components/UI/Loader/Loader';
import { $comments, $post } from '../generalstore/store';
import { useUnit } from 'effector-react';
import { setCommentsDataEv, setPostDataEv } from '../generalstore/events';
import { IComment, IPost } from '../types/Post';
import { v4 as uuidv4 } from 'uuid';
const PostIdPage: FC = () => {
    const { id } = useParams(); 
    const postId = Number(id);
    const post = useUnit($post);
    const comments = useUnit($comments);
    let response: IPost = {id:0, title:'', body:''};
    let comResponse: IComment[];




    const [fetchPostById, isLoading] = useFetchById( async () => { 
        response = (await fetchPostByIdEffect({id: postId})).data; 
        return {response};
    });

    const [fetchComPostById, isComLoading] = useFetchById( async () => { 
        comResponse = (await fetchCommentsByPostIdEffect({id: postId})).data;
        response = (await fetchPostByIdEffect({id: postId})).data; 
        return {comResponse, response};
    });


    useEffect(() => {
        fetchPostById();
        fetchComPostById();
        setPostDataEv(response);
        setCommentsDataEv(comResponse);
    }, [postId])

    
    
    
  return (
    <div>
        <h1>Вы открыли страницу поста c ID = {id}</h1>
        {isLoading 
            ?
            <Loader />
            :
            <div>{id}. {post.title}</div>
        }
        <h1>
            Комментарии
        </h1>
        {isComLoading 
            ?
        <Loader />
            :
            <div style={{marginTop:'30px'}}>
                {comments.map((comment) => (
                    <div key={uuidv4()}>
                        <h5>{comment.email}</h5>
                        <div>{comment.body}</div>
                    </div>
                ))}
            </div>
        }
    </div>
  )
}

export default PostIdPage 