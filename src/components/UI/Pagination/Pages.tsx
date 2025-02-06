import { useUnit } from "effector-react"
import { $currentPage, $pagesCount } from "../../../generalstore/store"
import { FC, useMemo } from "react";
import { changePageInQuery } from "../../../generalstore/events";
import { fetchPostsEffect } from "../../../generalstore/effects";
const Pages: FC = () => {
    const pagesCount = useUnit($pagesCount);
    const currentPage = useUnit($currentPage);
    const handleClick = (page: number) => {
        changePageInQuery(page); // Изменяем страницу
        fetchPostsEffect({ limit: 10, page }); // вызываем эффект для получения постов с новой страницей
    };
    const pagesArray = useMemo(() => {
        const pages = [];
        for (let i = 0; i < pagesCount; i++) {
            pages.push(i + 1);
        }
        return pages;
    }, [pagesCount])
  return (
    <div className="page__wrapper">
        {pagesArray.map(pageButton => 
            <span 
                className={currentPage === pageButton ? 'page page__current' : 'page'} 
                onClick={() => handleClick(pageButton)}  
                key={pageButton}>{pageButton}</span>
        )}
    </div>
  );
}

export default Pages

