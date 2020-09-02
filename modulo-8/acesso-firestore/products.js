const db = require('./firestore')
const admin = require('firebase-admin')

const findAll = async() => {
  const productsDB = await db.collection('product').get()
  if(productsDB.empty){
    return []
  }
  const products = []
  productsDB.forEach(doc => {
    
    products.push({
      ...doc.data(),
      id: doc.id
    })
})
const products2 = []
for await (product of products){
  const imgs = []
  const imgsDB = await db
    .collection('product')
    .doc(product.id)
    .collection('images')
    .get()
    
      imgsDB.forEach(img => {
        imgs.push({
          ...img.data(),
          id:img.id
        })
      })
      products2.push({
        ...product,
        imgs
      })
}
return products2
}
const findAllPaginated = async({ pageSize = 10, startAfter='' }) => {
  const productsDB = await db
                            .collection('product')
                            .orderBy('product')
                            .limit(pageSize+1)
                            .startAfter(startAfter)
                            .get()
  if(productsDB.empty){
    return {
      data: [],
      total: 0
    }
  }
  const products = []
  let total = 0
  productsDB.forEach(doc => {
    if (total < pageSize){ 
    products.push({
      ...doc.data(),
      id: doc.id
    })
  }
  total++
})
const products2 = []
for await (product of products){
  const imgs = []
  const imgsDB = await db
    .collection('product')
    .doc(product.id)
    .collection('images')
    .get()
    
      imgsDB.forEach(img => {
        imgs.push({
          ...img.data(),
          id:img.id
        })
      })
      products2.push({
        ...product,
        imgs
      })
}
return {
  data: products2,
  total: products.length,
  hasNext: total > pageSize,
  startAfter: total > pageSize ? products[products.length-1].category : ''
}
  products.then(snapshot => {
    console.log('is empty', snapshot.empty)
    let total = 0
    snapshot.forEach(doc => {
      if (total < pageSize) {
      console.log(doc.id, '=>', doc.data())
      }
      total++
    })
    if(total > pageSize){
      console.log('has next')
    }else{
      console.log('does not have next')
    }
  })
}
const addImage = async(id, data) => {
  const imageRef = db
    .collection('product')
    .doc(id)
    .collection('images')
    .doc() 
  await imageRef.set(data)
}
const remove = async(id) => {
  const imgs = await db
    .collection('product')
    .doc(id)
    .collection('Images')
    .get()
  const exclusoes = [] 
  imgs.forEach(img => {
    exclusoes.push(db.collection('product').doc(id).collection('Images').doc(img.id).delete())
  })
  await Promise.all(exclusoes)
const doc = db.collection('product').doc(id)
await doc.delete()
}



const create = async({ categories, ...data }) => {
  const doc = db.collection('product').doc()
  const categoriesRef = categories.map(cat => db.collection('categories').doc(cat))
  await doc.set({
    ...data,
    categories: categoriesRef,
    categories2: categories
  })
}

const update = async(id, { categories, ...data }) => {
  const categoriesRef = categories.map(cat => db.collection('categories').doc(cat))
  const doc = db.collection('product').doc(id)
  await doc.update({
    ...data,
    categories: admin.firestore.FieldValue.arrayUnion(...categoriesRef),
    categories2: admin.firestore.FieldValue.arrayUnion(...categories)
  })
}
module.exports = {
  findAll,
  findAllPaginated,
  remove,
  create,
  addImage,
  update
}