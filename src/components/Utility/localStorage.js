

const getCartData=()=>{
    const storedDonation=localStorage.getItem('cart');
    if(storedDonation){
        return JSON.parse(storedDonation)
    }
    return []
}

const saveCartData=id=>{
    const storedDonation=getCartData()
    const exists=storedDonation.find(donateId=> donateId === id)
    if(!exists){
        storedDonation.push(id)
        localStorage.setItem('cart', JSON.stringify(storedDonation))
        
    }
}
// const deleteCartData=id=>{
//     const storedDonation=getCartData()
//     const exists=storedDonation.find(donateId=> donateId === id)
//     if(exists){
//     //    const data= storedDonation.push(id)
//         localStorage.removeItem('cart',JSON.stringify(id))
        
//     }
// }

export {getCartData,saveCartData,}