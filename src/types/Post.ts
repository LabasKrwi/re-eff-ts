
export interface IPost {
    id: number;
    title: string;
    body: string;
}

export interface IPostItemProps {
    post: IPost
    remove?: (post: IPost)=>void
}

export interface PostListProps {
    posts: IPost[];
    remove: (post:IPost)=> void
}

export interface IComment {
    email: string;
    name: string;
    body: string
}