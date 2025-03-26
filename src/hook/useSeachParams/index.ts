import { useSearchParams } from "react-router-dom"



const useSearchHandlerParams = () => {
    const [params, setParams] = useSearchParams()
    const getParam = (path: string) => params.get(path)
    const setParam = (params: object) => {
        setParams({
            ...params
        })
    }
    return { getParam, setParam }
}

export default useSearchHandlerParams