const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://acesso-bd-972ff.firebaseio.com'
})

const db = admin.firestore()

const cat1 = 'M3Tj8lbdLXjaP11DiH1H'
const catRef = db.collection('categories').doc(cat1)

const doc = db.collection('product').doc('7ME6Lyyod9T7rIYYyQRt')
doc.update({
  category: 'Nome product',
  price: 2000,
  categories: admin.firestore.FieldValue.arrayUnion(catRef),
  categoies2: admin.firestore.FieldValue.arrayUnion(cat1)
})
.then( snap => {
  console.log(snap)
})