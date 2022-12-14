
const htmlList = (node, {shoppingCart}, removeItemFunc, itemPurchasedFunc) => {

    let html = '<ul  class="list-group" id="idHtmlList" >'
    
    for (let i = 0; i<shoppingCart.length; i++){
        html +='<li class="list-group-item">'
        html +=`<span class="remove" id="btn${i}" data-id="${i}" style="color: red; cursor: grab">Ta bort</span>&nbsp;&nbsp;&nbsp;`
        html +=`<h3 class="textlnk" id="lnk${i}" data-id="${i}" STYLE="text-decoration:${shoppingCart[i].purchased ? 'line-through' : 'none'}; cursor: ${shoppingCart[i].purchased ? 'grab' : 'copy'}" >${shoppingCart[i].item}</h3>`
        html +='</li>'
    }
    html +='</ul>'

    const prevHtmlList = document.querySelector('#idHtmlList')
    prevHtmlList && prevHtmlList.remove() 
  
    node.insertAdjacentHTML('beforeend', html)


    document.querySelectorAll(".remove").forEach(btn =>
        btn.addEventListener("click", (e) => removeItemFunc(e.target.getAttribute("data-id")))
      )

      document.querySelectorAll(".textlnk").forEach(lnk =>
        lnk.addEventListener("click", (e) => itemPurchasedFunc(e.target.getAttribute("data-id")))
      )
    
}

export {htmlList}