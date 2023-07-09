//using promises sample
//a var Reach 
let Reach= new Promise((resolve,reject) => {
    const FriendReach = true
    // also try false in true and see
    if (FriendReach == true)
        resolve()
    else 
        reject()
})

//promise is an object

Reach.then(()=> console.log("Reached"))
.catch(()=>console.log('Not Reached'))
