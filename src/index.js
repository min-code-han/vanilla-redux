import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

number.innerText = 0

const ADD = "ADD"
const MINUS = "MINUS"

// reducer
const countModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count + 1
        case MINUS:
            return count - 1
        default:
            return count
    }
}


// store
const countStore = createStore(countModifier)

add.addEventListener('click', () => countStore.dispatch({type: ADD}))
minus.addEventListener('click', () => countStore.dispatch({type: MINUS}))

const onChange = () => {
    const _count = countStore.getState()
    number.innerText = _count
}

countStore.subscribe(onChange)
