import book1 from '../img/The-Shining.jpg';
import book2 from '../img/harry-potter-y-el-misterio-del-principe-harry-potter-6.jpg';
import book3 from '../img/javascript-for-dummies.jpg';


  const productos = [
    {id:1, title:'The Shining', categoria:'Terror', price:500, pictureUrl:{book1}, detail:'The Shining centers on the life of Jack Torrance, a struggling writer and recovering alcoholic who accepts a position as the off-season caretaker of the historic Overlook Hotel in the Colorado Rockies.' },
    {id:2, title:'Harry Potter y el misterio del principe', categoria:'Aventura', price:300, pictureUrl:{book2}, detail:'Desarrollada en el sexto año de Harry Potter en el Colegio Hogwarts, la obra explora el pasado del mago oscuro lord Voldemort, así como los preparativos del protagonista junto con su mentor Albus Dumbledore para la batalla final detallada en el siguiente libro, el último de la serie.' },
    {id:3, title:'Javascript for Dummies', categoria:'Didactico', price:200, pictureUrl:{book3}, detail:'avaScript For Dummies, 3rd Edition, gives you all you need to know to get started with JavaScript, plus some really cool JavaScript tricks, all explained from the point of view of the first-time JavaScript programmer.' }
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