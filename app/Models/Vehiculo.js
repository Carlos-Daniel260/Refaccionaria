'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Vehiculo extends Model {
    cliente(){
        return this.belongsTo('App/Models/Cliente')
    }

    mecanicos(){
        return this.belongsToMany('App/Models/Mecanico').pivotTable('mecanicos_vehiculos')
    }
}

module.exports = Vehiculo
