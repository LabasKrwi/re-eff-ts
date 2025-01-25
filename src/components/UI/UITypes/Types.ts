import { IPost } from "../../../types/Post";

export interface MyButtonProps {
    children: string;
    disabled?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export interface MyInputProps {
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement >) => void
}

export interface PostFormProps {
    create: (newPost: IPost) => void;
    posts: IPost[]
}

export interface MySelectProps {
    defaultValue: string;
    options: {value: string; name: string; key: string}[];
    value: string;
    onChange?: (event: any) => void
}