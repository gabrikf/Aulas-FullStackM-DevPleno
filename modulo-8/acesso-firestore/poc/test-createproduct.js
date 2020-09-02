const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://acesso-bd-972ff.firebaseio.com'
})

const db = admin.firestore()

const cat1 = 'K0amDlukKMDlzXWehyPU'
const catRef = db.collection('categories').doc(cat1)

const doc = db.collection('product').doc()
doc.set({
  category: 'Nome product',
  price: 2000,
  categories: [catRef],
  categoies2: [cat1]
})
.then( snap => {
  console.log(snap)
})