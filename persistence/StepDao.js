function StepDAO(connection){
    this._connection = connection;
}

StepDAO.prototype.save = function(data, callback){
    this._connection.query('INSERT INTO step SET ?',data, callback)
}

StepDAO.prototype.update = function(data, callback){
    this._connection.query('UPDATE step SET name=?, description=? WHERE id=?',
                                [data.name, data.description, data.id], callback)
}

StepDAO.prototype.delete = function(data, callback){
    this._connection.query('DELETE FROM step WHERE id=?',[data.id], callback)
}

StepDAO.prototype.getByID = function(data, callback){
    this._connection.query('SELECT * FROM step WHERE id=?',[data], callback)
}

StepDAO.prototype.getAll = function(callback){
    this._connection.query('SELECT * FROM step', callback)
}

module.exports = function(){
    return StepDAO;
}