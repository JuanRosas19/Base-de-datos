const { Router } = require('express');
const router = Router();

const Controles = require('../controlador/control');


router.get('/', Controles.getequipos);

router.get('/:id', Controles.getequipo);

router.post('/', Controles.addequipo);

router.put('/:id', Controles.updateequipo);

router.delete('/:id', Controles.deletequipo);


module.exports = router;