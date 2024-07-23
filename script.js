var  count = 0 ;
var total = 0 ;



function increment(){
    var counter = document.getElementById('counter');
    count = count + 1 ;
    counter.innerHTML =count ;
    console.log("button clicked");
}
function decrement(){
    var counter = document.getElementById('counter');
    if( count  !== 0){
    count = count - 1 ;
    counter.innerHTML =`${count}` ;
    console.log("button clicked");
    }
    else{
        console.log("count is 0");
    }
}
function saved(){
        let entries = document.getElementById('entries');
        let distotal = document.getElementById('distotal');
        total = total + count ;
        distotal.innerHTML = `Total : ${total}` ;    
        entries.innerHTML += count + " -" +" " ;
        count = 0
        counter.textContent = "0" ;
}
function resets(){
    total = 0 ;
    count = 0 ;
    distotal.textContent = `Total : ${total}` ;
    counter.innerHTML =count ;
    entries.innerHTML = ` Previous entries : ${count}`;
}