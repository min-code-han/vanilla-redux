import { createStore } from "redux"



// -------------------COUNT---------------------------
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


// -------------------TO DO LIST---------------------------
const form = document.querySelector("form")
const input = document.querySelector("input")
const ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"

const addToDo = (text) => {
    return {
        type: ADD_TODO,
        text
    }
}

const deleteToDo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}

const toDoReducer = (state = [], action) => {
    switch (action.type){
        case ADD_TODO:
            const newToDoObjects = {text: action.text, id: Date.now()}
            return [newToDoObjects, ...state]
        case DELETE_TODO:
            return state.filter(toDo => toDo.id !== action.id)
        default:
            return state
    }
}

const toDoStore = createStore(toDoReducer)

const dispatchDeleteToDo = (e) => {
    const _deleteId = parseInt(e.target.parentNode.id)
    toDoStore.dispatch(deleteToDo(_deleteId))
}

const dispatchAddToDo = (text) => {
    toDoStore.dispatch(addToDo(text))
}


const paintToDos = () => {
    const toDos = toDoStore.getState()
    ul.innerHTML = ""
    toDos.forEach(toDo => {
        const li = document.createElement("li")
        const btn = document.createElement("button")
        btn.innerText = "delete"
        btn.addEventListener("click", dispatchDeleteToDo)
        li.id = toDo.id
        li.innerText = toDo.text

        li.appendChild(btn)
        ul.appendChild(li)
    })
}

toDoStore.subscribe(paintToDos)


const onSubmit = (e) => {
    e.preventDefault()
    const toDo = input.value
    input.value = ""

    dispatchAddToDo(toDo)
}

form.addEventListener('submit', onSubmit)


