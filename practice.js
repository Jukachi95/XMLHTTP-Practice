




document.querySelector('.button').addEventListener('click', getText);


function getText(){
    
    const xhr = new XMLHttpRequest()


    xhr.open("GET", "practice.txt", true);


    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
        }
    }
    

 

    xhr.send()


}