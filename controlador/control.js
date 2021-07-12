const modelo = require('../modelos/modelo');

class Control {
    async getequipos(req,res) {
        const equipos = await modelo.getequipos()
        res.json(equipos);
    }
    async getequipo(req, res) {
        const { id } = req.params;
        const equipo = await modelo.getequipo(id);
        res.json(equipo[0]);
      }
      async addequipo(req, res) {
        const { area, cantidad, } = req.body;
        const equipo = {
          area,
          cantidad
        };
        await modelo.addequipo(equipo);
        res.json({ msg: 'Nuevo Equipo' })
      }
      async updateequipo(req, res) {
        const { id } = req.params;
        const { area, cantidad} = req.body;
        const equipo = {
          area,
          cantidad 
        };
        await modelo.updateequipo(equipo, id);
        res.json({ msg: 'Se ha modificado el equipo' })
      }
      async deletequipo(req, res) {
        const { id } = req.params;
        await modelo.deletequipo(id);
        res.json({ msg: 'Se ha eliminado el equipo' })
      }
}

module.exports = new Control;