
const fetchApi = async (url) => {
    const getResult = async(url) => {
        
        try {
            let res = await fetch(url);
            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
    console.log('Result', await getResult(url))

    
    let result = await getResult(url)

    console.log('Result2', result)

    return result

}


export { fetchApi }

 



