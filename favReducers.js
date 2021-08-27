const initialData ={
    list:[]
}

const favReducers=(state=initialData,action)=>{
    switch(action.type){
        case "ADD_FAV":
            const {data}=action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        data : data
                    }
                ]
            }

        case "REMOVE_FAV":
            console.log(state.list[0].data)
            console.log("akshat")
            console.log(action.payload.data)
            const newList = state.list.filter((elem) => elem.data.ifsc !== action.payload.data.ifsc)
            return{
                ...state,
                list:newList
                }
            default:return state;
    }
}

export default favReducers;