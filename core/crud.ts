import fs from "fs"
import { v4 as uuid } from "uuid"

const DB_FILE_PATH = "db.json"

type UUID = string

interface Todo {
    id: UUID
    date: string
    content: string
    done: boolean
}

function create(content: string) {
    const todo: Todo = {
        id: uuid(),
        date: new Date().toISOString(),
        content,
        done: false
    }

    const todos = [...read(), todo]
    fs.writeFileSync(DB_FILE_PATH, JSON.stringify({ todos }, null, 2))
    
    return todo
}

function read(): Todo[] {
    const dbString = fs.readFileSync(DB_FILE_PATH, "utf-8")
    const db = JSON.parse(dbString || "{}")

    if (!db.todos) { // fail fast validation
        return []
    }
    return db.todos
}

function update(id: UUID, partialTodo: Partial<Todo>) {
    let updatedTodo: Todo | undefined
    const todos = read()
    
    todos.forEach(currentTodo => {
        if(currentTodo.id === id) {
            updatedTodo = Object.assign(currentTodo, partialTodo)
        }
    })

    fs.writeFileSync(DB_FILE_PATH, JSON.stringify({ todos }, null, 2))
    
    if (!updatedTodo) {
        throw new Error("Por favor, informe um ID válido")
    }    
    return updatedTodo
}

// Exemplo de update mais restrito
function updateContentById(id: UUID, content: string): Todo {
    return update(id, { content })
}

function deleteById(id: UUID) {
    const todos = read()

    const filteredTodos = todos.filter(todo => todo.id !== id)

    fs.writeFileSync(DB_FILE_PATH, JSON.stringify({ 
        todos: filteredTodos 
    }, null, 2))
}

function CLEAR_DB() {
    fs.writeFileSync(DB_FILE_PATH, "{}")
}

// Simulando o uso da API
CLEAR_DB()

const primeiraTodo = create("Primeiro conteúdo")
const segundaTodo = create("Segundo conteúdo")
const terceiraTodo = create("Terceiro conteúdo")

updateContentById(segundaTodo.id, "Segundo conteúdo atualizado")
update(terceiraTodo.id, {
    content: "Terceiro conteúdo atualizado",
    done: true
})
deleteById(primeiraTodo.id)

console.log(read())