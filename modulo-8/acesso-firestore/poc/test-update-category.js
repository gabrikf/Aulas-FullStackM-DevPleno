const admin = require('firebase-admin');

const serviceAccount = require('../firestore.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://acesso-bd-972ff.firebaseio.com'
})

const db = admin.firestore()

const doc = db.collection('categories').doc('UKNmblfO4KhLfJ8PcIu6')
doc.update({
  category: 'Maquina para café mix Valita'
})
.then( snap => {
  console.log(snap)
})