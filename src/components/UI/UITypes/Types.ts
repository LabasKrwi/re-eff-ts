import { IPost } from "../../../types/Post";

export interface PostFormProps {
    create: () => void;
    posts: IPost[]
}
interface Option {
    value: string;
    name: string;
  }
export interface MySelectProps {
    value: string;
    onChange: (selectedSort: string) => void;
    options: Option[];
    defaultValue?: string;
}

export interface PostFilterProps {
    filter: {query: string; sort: string};
    setFilter: () => void
}