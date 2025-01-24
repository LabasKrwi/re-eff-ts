
export interface IPost {
    key: number;
    id: number;
    title: string;
    body: string;
}

export interface PostTitle {
    postTitle: string
}

export interface PostListProps {
    posts: IPost[];
}