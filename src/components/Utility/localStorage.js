

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

export {getCartData,saveCartData}