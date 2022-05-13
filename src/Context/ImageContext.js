import { baseUrl } from "../Utils/baseUrl";
import createDataContext from "../Utils/createDataContext";

const imageReducer = (state , actions) => {
    switch (actions.type){
        case 'set_loading':
            return {...state, loading:actions}
        case "set_image":
            return { ...state, image: actions.payload };
        default:
            return state;
    }
}

const fetchImage = (dispatch) => {
    return async (id) => {
        try {
            dispatch({
                payload: true
            })
            const response = await fetch(`${baseUrl}/${id}`)
            const image = await response.json()
            if(response.status === 200){
                dispatch({
                    type : "set_image",
                    payload : image
                })
                dispatch({
                    payload: false
                })
            }
        } catch (err) {
            console.log(err)
            dispatch({
                payload: true
            })
        }
    }
}


export const { Provider, Context } = createDataContext(
    imageReducer,
  {
    fetchImage
  },
  {
    loading: false,
    image: []
  }
);