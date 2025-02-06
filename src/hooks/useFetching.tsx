import { useState } from "react";

const useFetching = (callback: ({limit , page}: {limit: number, page: number})=> Promise<any>) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('')

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback({limit: 10, page: 1})
        }
        catch (e ){
            if (e instanceof Error) {
                setError(`Произошла ошибка:, ${e.message}`)
            } else {
                setError('Произошла неизвестная ошибка')
            }
        }
        finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error] as const
}

export default useFetching


export const useFetchById= (callback: ({id}: {id: number})=> Promise<any>) => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('')

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback({id: 1})
        }
        catch (e ){
            if (e instanceof Error) {
                setError(`Произошла ошибка:, ${e.message}`)
            } else {
                setError('Произошла неизвестная ошибка')
            }
        }
        finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error] as const
}

