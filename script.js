function checker(){
    let num = document.getElementById('num').value
    if(num>0){
        result.innerHTML=`<h1 class="text-green-500 text-lg">The number is positive</h1>`
        
    }
    else if(num<0){
        result.innerHTML=`<h1 class="text-red-500 text-lg">The number is negative</h1>`
        
    }
    else if(num == 0){
       result.innerHTML=`<h1 class="text-yellow-500 text-lg">The number is zero</h1>`
        
    }
    else{
       result.innerHTML=`<h1 class="text-blue-600 text-lg">Not a number!</h1>`
        
    }
}