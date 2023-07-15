document.querySelector('button').addEventListener('click',e=>{
    e.preventDefault;
    const value = document.querySelector('input').value;
    var drew = "";
    if(value==3){
         drew = `o<br>oo`;

    }
    else if (value==5){
        drew = `o<br>oo<br>ooo`;
        
    }
    else if (value==7){
        drew =  `o<br>oo<br>ooo<br>oooo`;
    }
    else if (value==9){
        drew = `o<br>oo<br>ooo<br>oooo<br>ooooo`;
    }
    else{
        alert('sorry you need to choose to enter between 3 , 5 , 7 and 9 ');
    }

    document.querySelector('p').innerHTML= drew;
})