

  const productos = [
    {id:1, stock: 5, title:'The Shining', categoria:'Terror', price:'$500', pictureUrl:'https://upload.wikimedia.org/wikipedia/en/4/4c/Shiningnovel.jpg', detail:'The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.' },
    {id:2, stock: 2, title:'HARRY POTTER and the HALF-BLOOD PRINCE', categoria:'Aventura', price:'$300', pictureUrl:'https://m.media-amazon.com/images/I/51P19GScNwL.jpg', detail:'Desarrollada en el sexto año de Harry Potter en el Colegio Hogwarts, la obra explora el pasado del mago oscuro lord Voldemort, así como los preparativos del protagonista junto con su mentor Albus Dumbledore para la batalla final detallada en el siguiente libro, el último de la serie.' },
    {id:3, stock: 6, title:'Javascript for Dummies', categoria:'Didactico', price:'$200', pictureUrl:'https://media.wiley.com/product_data/coverImage300/71/11190560/1119056071.jpg', detail:'JavaScript For Dummies, 3rd Edition, gives you all you need to know to get started with JavaScript, plus some really cool JavaScript tricks, all explained from the point of view of the first-time JavaScript programmer.' },
    {id:4, stock: 8, title:'It', categoria:'Terror', price:'$250', pictureUrl:'https://m.media-amazon.com/images/I/41nngxCNKxL.jpg', detail:'It is a 1986 horror novel by American author Stephen King. It was his 22nd book and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey. "It" primarily appears in the form of Pennywise the Dancing Clown to attract its preferred prey of young children.' }
  ]
  
  export const fetchBooks = new Promise((resolve, reject)=>{
    let condition = true
    if (condition) {
      setTimeout( () => {
        resolve(productos)
      }, 2000)
    } else {
      reject('400 Not Found')
    }
  })