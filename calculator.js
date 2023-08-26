
let string = "";
let button= document.querySelectorAll('.button');
Array.from(button).forEach((button)=>{
    button.addEventListener('click',(s)=>{
        if(s.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value=string
        }
        else if(s.target.innerHTML == "c"){
            string=""
            document.querySelector('input').value=""
        }
        else if(s.target.innerHTML == "m+"){
            string=""
            document.querySelector('input').value=""
        }
        else{
        console.log(s.target)
        string= string+s.target.innerHTML;
        document.querySelector('input').value=string
        }
        
    })
})

