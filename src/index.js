document.addEventListener("DOMContentLoaded", () => {
 let form = document.querySelector("#create-task-form")
  form.addEventListener("submit",(e=> {
    e.preventDefault()
    buildTodo(e.target.querySelector("#new-task-description").value);
form.reset()
  }));
});
 function buildTodo(todo){
   let p = document.createElement('p');
   let btn = document.createElement("button");
   btn.addEventListener("click",handleDelete);
   btn.textContent = 'x'
   p.textContent =`${todo} `;
    p.appendChild(btn);
    console.log(p);
  document.querySelector('#tasks').appendChild(p);
 }

 function handleDelete(e){
  e.target.parentNode.remove();
 }