
const yeniTaspiriqQutusu = document.getElementsByClassName('form-item')[0]
const yeniTodoElaveEtBtn = document.querySelector('.btn-vezife-elaveet')



const todoList = document.querySelector('.vezife-siyahisi')
yeniTodoElaveEtBtn.addEventListener('click', todonuElaveEt)


function todonuElaveEt(e) {
    e.preventDefault()


const todoDivi = document.createElement('div')
todoDivi.classList.add("vezife-item") 

const todoLi = document.createElement('li')
todoLi.classList.add('vezife-tanitim')

todoLi.innerText = yeniTaspiriqQutusu.value

todoDivi.appendChild(todoLi)

const editBtn = document.createElement('button')


editBtn.classList.add('vezife-btn')
editBtn.classList.add('vezife-btn-tamamlandi')

editBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>'
todoDivi.appendChild(editBtn)

const silBtn = document.createElement('button')
silBtn.className = "vezife-btn vezife-btn-sil"

silBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>'

todoDivi.appendChild(silBtn)
todoList.appendChild(todoDivi)









}