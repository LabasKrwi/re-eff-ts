import React from 'react'
import MyInput from './UI/input/MyInput'
import MySelect from './UI/select/MySelect'


  export interface IFilter {
    query: string;
    sort: string ; // Используем undefined вместо null
  }
  
  interface IPostFilterProps {
    filter: IFilter;
    setFilter: (filter: IFilter) => void;
  }
  

  const PostFilter: React.FC<IPostFilterProps > = ({ filter, setFilter }) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFilter({ ...filter, query: event.target.value })}
                placeholder='Поиск'
            />
            <MySelect
                value={filter.sort || ''}
                onChange={(selectedSort: string) => setFilter({ ...filter, sort: selectedSort })}
                options={[
                    { value: 'title', name: 'По названию' },
                    { value: 'body', name: 'По описанию' }
                ]}
                defaultValue='Сортировка по'
            />
        </div>
    );
};

export default PostFilter

