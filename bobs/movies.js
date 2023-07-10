var btns =  document.querySelectorAll('#movies-list ul');
Array.from(btns).forEach(btns=>{
 btns.addEventListener('click',e=>{
 if(e.target.className=='delete'){
    const li = e.target.parentElement;
      btns.removeChild(li);
 }
 })
 const addForm = document.forms['add-movie'];
 addForm.addEventListener('submit',e=>{
   e.preventDefault();
   const value = addForm.querySelector('input[type="text"]').value
   console.log(value);
   const li = document.createElement('li');
   const book = document.createElement('span');
   const butt = document.createElement('button');
   butt.textContent='delete';
   book.textContent=value;
   butt.classList.add('delete');
   book.classList.add('span');
 
   li.appendChild(book);
   li.appendChild(butt);
   btns.appendChild(li);
 })
  const check = document.querySelector('#check1');
  check.addEventListener('change',e=>{
   if (check.checked){
      btns.style.display='none';
   
   }
   else{
      btns.style.display='block';
   }
  })
const search = document.forms['search-movie'].querySelector('input');
search.addEventListener('keyup',e=>{
   const term = e.target.value.toLowerCase();
   const book = btns.getElementsByTagName('li');
   Array.from(book).forEach(book=>{
      const title = book.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(term)!=-1){
         book.style.display="block";
      }
         else{
            book.style.display='none';
         }
      

   })
})
})