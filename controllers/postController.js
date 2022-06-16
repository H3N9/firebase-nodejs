const { firestore, db } = require('../db');
const Post = require('../models/post');

const createPost = async (req, res, next) => {
  try {
    const data = req.body;
    await firestore.addDoc(firestore.collection(db, 'post'), data);
    res.send('success');
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  createPost,
};
