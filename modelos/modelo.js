const connection = require('../config');

class modelo {
    getequipos() {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM equipos', (error, result) => {
          if (error) reject(error);
            resolve(result);
        });
      });
    }
    getequipo(id) {
      return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM equipos WHERE id = ?', id, (error, result) => {
          if (error) reject(error);
            resolve(result);
        });
      });
    }
    addequipo(equipo) {
      return new Promise((resolve, reject) => {
        connection.query('INSERT INTO equipos SET ?', equipo, (error, result) => {
          if (error) reject(error);
            resolve(result);
        });
      });
    }
    updateequipo(equipo, id) {
      return new Promise((resolve, reject) => {
        connection.query('UPDATE equipos SET area = ?, cantidad = ? WHERE id = ?', [
          equipo.area,
          equipo.cantidad,
          id
        ], (error, result) => {
          if (error) reject(error);
            resolve(result);
        });
      });
    }
    deletequipo(id) {
      return new Promise((resolve, reject) => {
        connection.query('DELETE FROM equipos WHERE id = ?', id, (error, result) => {
          if (error) reject(error);
            resolve(result);
        });
      });
    }
  }
  
  module.exports = new modelo;