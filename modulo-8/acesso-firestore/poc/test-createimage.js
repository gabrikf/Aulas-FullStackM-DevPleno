const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://acesso-bd-972ff.firebaseio.com'
})

const db = admin.firestore()

const productId = '7ME6Lyyod9T7rIYYyQRt'
const imageRef = db.collection('product').doc(productId).collection('Images').doc()

imageRef.set({
  description: 'My Description',
  url: 'My Image Url'
})
.then(res => {
  console.log(res)
})

