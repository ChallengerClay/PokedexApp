export const getApi = async (url:string) =>{
    const res = await fetch(url);
    const data = await res.json()
    const result = data.results.map((key:any) =>{
        return {
            name: key.name,
            url: key.url
        }
    })
    return result
}