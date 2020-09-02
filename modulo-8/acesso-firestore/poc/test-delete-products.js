const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://acesso-bd-972ff.firebaseio.com'
})

const db = admin.firestore()

const productId = '7ME6Lyyod9T7rIYYyQRt'

const productRef = db.collection('product').doc(productId)

db
  .collection('product')
  .doc(productId)
  .collection('Images')
  .get()
  .then(imgSnapshot => {
    const exclusoes = []
    imgSnapshot.forEach(img => {
      exclusoes.push(db.collection('product').doc(productId).collection('Images').doc(img.id).delete())
    })
    return Promise.all(exclusoes)
  })
  .then(() => {
    productRef.delete()
  })
  .then(() => {
    console.log('everythinh was deleted')
  })
