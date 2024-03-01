let counter = 0; 
const clockId = setInterval(() =>{
    counter++;
    // counter += 1;
    // counter = counter + 1;
    if(counter > 60){
        clearInterval(clockId)
    }
    
    console.log(clockId,counter)
},1000)
