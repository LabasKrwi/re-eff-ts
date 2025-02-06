import { createStore, sample } from 'effector';
import { IComment, IPost } from '../types/Post';
import { addPost, changePageInQuery, removePost, setAuth, setPageCount, setPostDataEv } from './events';
import { fetchCommentsByPostIdEffect, fetchPostByIdEffect, fetchPostsEffect } from './effects';
import { setTotalCountEv } from './events'; 
import { setCommentsDataEv } from './events';
export const $btnCount = createStore<[]>([]);
    
export const $totalCount = createStore<number>(0)
    $totalCount.on(setTotalCountEv, (_, totalCount) => totalCount)

export const $limit = createStore<number>(10)

export const $pagesCount = createStore<number>(0)
    .on(setPageCount, (_, payload) => payload) 
    
export const $post = createStore<IPost>({id: 0, title: '', body: ''})
    $post.on(fetchPostByIdEffect.doneData, (_, response) => response.data)
    $post.on(setPostDataEv, (_, post) => post)

    
    sample({
        clock: fetchPostByIdEffect.doneData,
        source: $post,
        fn: (post, response) => response.data,
        target: setPostDataEv
    })


export const $comments = createStore<IComment[]>([]);
    $comments.on(fetchCommentsByPostIdEffect.doneData, (_, response) => response.data)
    $comments.on(setCommentsDataEv, (_, comments) => comments)

    sample({
        clock: fetchCommentsByPostIdEffect.doneData,
        source: $comments,
        fn: (comments, response) => response.data,
        target: setCommentsDataEv
    })

export const $posts = createStore<IPost[]>([]);
    $posts.on(addPost, (state, newPost) => [...state, newPost]);
    $posts.on(removePost, (state, post) => state.filter(p => p.id !== post.id));
    $posts.on(fetchPostsEffect.doneData, (_, response) =>  response.data);



export const $currentPage = createStore<number>(1)
    .on(fetchPostsEffect.done, (page) => page)
    .on(changePageInQuery, (_, payload) => payload)


    sample({
                  clock: fetchPostsEffect.doneData,
                  source: $limit, 
                  fn: (limit, response) => {
                    const totalCount = response.headers['x-total-count'];
                      return Math.ceil(totalCount/limit)
                  },
                  target: setPageCount
              })
    


// export const $isAuth = createStore<boolean>(false)
//     .on(setAuth, (_, isAuthenticated) => isAuthenticated)
//     .watch((isAuthenticated) => {
//         localStorage.setItem('isAuth', JSON.stringify(isAuthenticated));
//       });           
 const initialAuthState = JSON.parse(localStorage.getItem('isAuth') || 'false');

export const $isAuth = createStore(initialAuthState)
    .on(setAuth, (_, isAuthenticated) => isAuthenticated);
    
$isAuth.watch((isAuthenticated) => {
        localStorage.setItem('isAuth', JSON.stringify(isAuthenticated));
        });

// export const $totalPosts = createStore<number>(0);