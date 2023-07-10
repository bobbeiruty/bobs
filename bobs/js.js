var btns = document.querySelectorAll('#movies-list ul');
Array.from(btns).forEach(function(btns){
 btns.addEventListener('click',e=>{
 if (e.target.className=='delete'){
    const li = e.target.parentElement;
      btns.removeChild(li);
 }


 })

 const addForm=document.forms['add-movie'];
 addForm.addEventListener('submit',e=>{
    e.preventDefault();
  
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
 
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const button= document.createElement('button');
    button.textContent='delete';
    bookName.textContent= value;
    button.classList.add('delete')
    bookName.classList.add('span')
    li.appendChild(bookName);
    li.appendChild(button);
    btns.appendChild(li);

 
 
 })


});
