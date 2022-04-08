

  const productos = [
    {id:1, stock: 5, title:'The Shining', categoria:'Terror', price:500, pictureUrl:'https://upload.wikimedia.org/wikipedia/en/4/4c/Shiningnovel.jpg', detail:'The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.' },
    {id:2, stock: 2, title:'HARRY POTTER and the HALF-BLOOD PRINCE', categoria:'Aventura', price:300, pictureUrl:'https://m.media-amazon.com/images/I/51P19GScNwL.jpg', detail:'Desarrollada en el sexto año de Harry Potter en el Colegio Hogwarts, la obra explora el pasado del mago oscuro lord Voldemort, así como los preparativos del protagonista junto con su mentor Albus Dumbledore para la batalla final detallada en el siguiente libro, el último de la serie.' },
    {id:3, stock: 6, title:'Javascript for Dummies', categoria:'Didactico', price:200, pictureUrl:'https://media.wiley.com/product_data/coverImage300/71/11190560/1119056071.jpg', detail:'JavaScript For Dummies, 3rd Edition, gives you all you need to know to get started with JavaScript, plus some really cool JavaScript tricks, all explained from the point of view of the first-time JavaScript programmer.' },
    {id:4, stock: 8, title:'It', categoria:'Terror', price:250, pictureUrl:'https://m.media-amazon.com/images/I/41nngxCNKxL.jpg', detail:'It is a 1986 horror novel by American author Stephen King. It was his 22nd book and his 17th novel written under his own name. The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey. "It" primarily appears in the form of Pennywise the Dancing Clown to attract its preferred prey of young children.' },
    {id:5, stock: 15, title:'Adventures of Huckleberry', categoria:'Aventura', price:190, pictureUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYJGQzF7NN4x5tMc2eTxVXzhoY3xbduAZ_mWrqPqkpjPGv7Egu', detail:'Adventures of Huckleberry Finn or as it is known in more recent editions, The Adventures of Huckleberry Finn, is a novel by American author Mark Twain, which was first published in the United Kingdom in December 1884 and in the United States in February 1885.Commonly named among the Great American Novels, the work is among the first in major American literature to be written throughout in vernacular English, characterized by local color regionalism. It is told in the first person by Huckleberry "Huck" Finn, the narrator of two other Twain novels (Tom Sawyer Abroad and Tom Sawyer, Detective) and a friend of Tom Sawyer. It is a direct sequel to The Adventures of Tom Sawyer.The book is noted for "changing the course of childrens literature in the United States for the deeply felt portrayal of boyhood.[2] It is also known for its colorful description of people and places along the Mississippi River. Set in a Southern antebellum society that had ceased to exist over 20 years before the work was published, Adventures of Huckleberry Finn is an often scathing satire on entrenched attitudes, particularly racism.' },
    {id:6, stock: 7, title:'Learning React: A Hands-On Guide to Building Web Applications Using React and Redux', categoria:'Didactico', price:500, pictureUrl:'https://images-na.ssl-images-amazon.com/images/I/51AFwrzNmdL._SY445_SX342_QL70_ML2_.jpg', detail:'A hands-on guide to building web applications using React and ReduxAs far as new web frameworks and libraries go, React is quite the runaway success. It not only deals with the most common problems developers face when building complex apps, it throws in a few additional tricks that make building the visuals for such apps much, much easier.What React isnt, though, is beginner-friendly and approachable. Until now. In Learning React, author Kirupa Chinnathambi brings his fresh, clear, and very personable writing style to help web developers new to React understand its fundamentals and how to use it to build really performant (and awesome) apps.' },
    {id:7, stock: 10, title:'Lord of the Rings The Return of the King', categoria:'Aventura', price:230, pictureUrl:'https://images-na.ssl-images-amazon.com/images/I/91m8vgNyhBL.jpg', detail:'The Return of the King is the third and final volume of J. R. R. Tolkiens The Lord of the Rings, following The Fellowship of the Ring and The Two Towers. It was published in 1955. The story begins in the kingdom of Gondor, which is soon to be attacked by the Dark Lord Sauron.' }
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