
export interface IPost {
    id: number;
    title: string;
    body: string;
    remove?: (post: IPost)=>void
}

export interface PostListProps {
    posts: IPost[];
    remove: (post:IPost)=> void
    
}