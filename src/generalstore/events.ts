import { IComment, IPost } from './../types/Post';
import { createEvent } from "effector";


export const addPost = createEvent<IPost>();
export const removePost = createEvent<IPost>();
export const changePage = createEvent<number>();
export const setPageCount = createEvent<number>();
export const setTotalCountEv = createEvent<number>();
export const changePageInQuery = createEvent<number>();
export const setPostDataEv = createEvent<IPost>();
export const setCommentsDataEv = createEvent<IComment[]>();
export const setAuth = createEvent<boolean>();
