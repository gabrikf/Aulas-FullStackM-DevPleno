const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://acesso-bd-972ff.firebaseio.com'
})

const db = admin.firestore()

const cat1 = 'K0amDlukKMDlzXWehyPU'
const catRef = db.collection('categories').doc(cat1)


const product = db.collection('product').where('categories', 'array-contains', catRef).get()
product.then(snapshot => {
  console.log('is empty', snapshot.empty)
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data())
    db.collection('product').doc(doc.id).collection('Images').get()
    .then(imgSnapshot => {
      imgSnapshot.forEach(img => {
        console.log('img id ==>', img.id, '=>', img.data())
      })
      })
  })
})