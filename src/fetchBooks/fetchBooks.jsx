const productos = [
    {id:1, title:'The Shining', categoria:'Terror', price:500, pictureUrl:'/static/media/The-Shining.19bd0058ca9a8c4ca05f.jpg' },
    {id:2, title:'Harry Potter y el misterio del principe', categoria:'Aventura', price:300, pictureUrl:'/static/media/harry-potter-y-el-misterio-del-principe-harry-potter-6.35bd43d6fe6e0bee6e13.jpg' },
    {id:3, title:'Javascript for Dummies', categoria:'Didactico', price:200, pictureUrl:'/static/media/javascript-for-dummies.635696fb1efd836e587e.jpg' }
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