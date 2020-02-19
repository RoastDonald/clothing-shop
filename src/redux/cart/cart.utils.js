export const addItemToCart = (items, itemToAdd)=>{
    const existingItem = items.find(item=>item.id === itemToAdd.id);
    if(existingItem){
        return items.map(item=>{
            if(item.id === itemToAdd.id)
                return {...item,quantity:item.quantity + 1}
            else 
                return item
        })
    }

    return [...items,{...itemToAdd,quantity:1 }];
}

export const removeItemFromCart = (items,itemToRemove)=>{
    const existing = items.find(item=>item.id === itemToRemove.id);

    if(existing.quantity === 1){
        return items.filter(item =>item.id !== itemToRemove.id);
    }

    return items.map(item=>
        item.id === itemToRemove.id?{...itemToRemove,quantity:itemToRemove.quantity - 1}: item)
}