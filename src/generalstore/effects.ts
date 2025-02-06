import { createEffect } from "effector";
import axios, {AxiosResponse} from "axios";
import { IComment, IPost } from "../types/Post";


const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchPostsEffect = createEffect(async ({limit, page}: {limit: number, page: number}) => {
    const response: AxiosResponse<IPost[]> = await axios.get<IPost[]>(`${BASE_URL}/posts`,{
        params: {
            _limit: limit,
            _page: page
        }
    })
    return response; // Возвращаем данные
});


export const fetchPostByIdEffect = createEffect(async ({id}: {id: number}) => {
    const response: AxiosResponse<IPost> = await axios.get<IPost>(`${BASE_URL}/posts/${id}`)
    return response; // Возвращаем данные
});



export const fetchCommentsByPostIdEffect = createEffect(async ({id}: {id: number}) => {
    const response: AxiosResponse<IComment[]> = await axios.get<IComment[]>(`${BASE_URL}/posts/${id}/comments`)
    return response; // Возвращаем данные
});




