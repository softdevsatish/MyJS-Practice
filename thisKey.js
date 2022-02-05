const books = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    price: 9,
    showPrice:function(){
        return `Price of book is ${this.price}$.`
    }
     
    // Also define as below
    /* 
    showPrice(){
        return `Price of book is ${this.price}$.`
    } */
}
console.log(books.showPrice())

