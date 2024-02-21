document.querySelector('#add').addEventListener('click',add);

const unorderedList = document.querySelector('ul');

function add(){
    
    let toDoList = document.querySelector('#toDoInput').value;
    let toDoListItem = document.createElement('li');
    let deleteButton = document.createElement('button');
    let completeButton = document.createElement('button');
    deleteButton.addEventListener('click', delButton)
    completeButton.addEventListener('click', compButton)

    function delButton(){
    toDoListItem.remove()
    }

    function compButton(){

        toDoListItem.innerHTML=toDoListItem.innerHTML.strike()
    }

    deleteButton.innerHTML = 'X'
    completeButton.innerHTML = '✓'
    toDoListItem.innerHTML = toDoList;
    toDoListItem.appendChild(deleteButton);
    toDoListItem.appendChild(completeButton);
    unorderedList.appendChild(toDoListItem);
   

}
