import { formComponent } from "./components/formComponent.js"
import { htmlList } from "./components/htmlList.js"
import { fetchApi } from "./api/fetch.js"


function app(node) 
{
    const localState={
        shoppingCart: [ ],
    }

    const updateState = async (item) => {
    
        localState.shoppingCart= [...localState.shoppingCart, {item, purchased : false}]
        
        console.log('updateState', localState)

          }
    
    const updateList = (item) => {


        // updateState(item).then(result =>console.log('synkroniserat localstate',localState)) 
        // htmlList(node, localState, removeItem, itemPurchased)
    
        console.log('fetch api')

        const data = fetchApi('https://www.swapi.tech/api/people')
        
        console.log('result3', data)
    
    }

    const removeItem = (itemIndex) => {
        localState.shoppingCart = [...localState.shoppingCart].filter((elem,index) => index!=itemIndex)
        htmlList(node, localState, removeItem, itemPurchased)
    }

    const itemPurchased = (itemIndex) => {
        localState.shoppingCart = [...localState.shoppingCart].map((elem,index) => {
            if (itemIndex==index){
                elem.purchased = !elem.purchased
            }
            return elem
        })
        console.log(localState)
        htmlList(node, localState, removeItem, itemPurchased)
    }

    formComponent(node, updateList)
}




export {app}