const myLoader = () =>{
    return new Promise ((resolve, reject) =>{
        const random = Math.random();
        if(random < 0.5){
            resolve(random)
        }else{
            reject(random)
        }
    })
}
myLoader()
.then(data => console.log("Resolved Data", data))
.catch(err => console.log("Reject Data", err))