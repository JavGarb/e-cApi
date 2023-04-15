const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  try {
    res.status(200).send("Prueba de ruta user")
  } catch (error) {
    res.status(400).send(error.message);
  }
})

module.exports = router;