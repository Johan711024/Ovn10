
const formComponent = (node, updateFunc) => {
    
    node.innerHTML += 
     `
    <form id='idNodeForm'>

    <div class="form-floating mb-3">
    <input type="text" class="form-control" id="item">
    <label for="item">Skriv här och tryck enter</label>
    </div>
    
    </form>
    
    `

    const nodeForm = document.querySelector('#idNodeForm')

    nodeForm['item'].focus()

    nodeForm.addEventListener(('submit'),e => {
        e.preventDefault()
        //console.log(nodeForm['item'].value)
        updateFunc(nodeForm['item'].value)
    })

}

export {formComponent}