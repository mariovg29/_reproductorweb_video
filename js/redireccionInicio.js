redireccionar();

var count =4;
function redireccionar(){
    setInterval(() => {
        count--;
        if(count == 0){
            window.location = '../index.html';
            console.log(count);
        }
        
    }, 1000);

}