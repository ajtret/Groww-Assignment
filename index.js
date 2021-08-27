export const addFav=(data) =>{
    return{
        type: "ADD_FAV",
        payload:{
            data:data
        }
    }
}

export const removeFav=(data) =>{
    return{
        type: "REMOVE_FAV",
        payload:{
            data:data
        }
    }
}
