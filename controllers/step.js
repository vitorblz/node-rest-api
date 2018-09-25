var logger = require('../services/logger.js');

module.exports = function(app){

    app.get('/steps/step/:id', function(req, res){

        logger.info('Get step id='+req.params.id);

        var connection = app.persistence.connectionFactory();
        var stepDao  = new app.persistence.StepDao(connection);
        stepDao.getByID(req.params.id, function(error, result){
            if(error)
            {
                console.log(error);
                res.status(500).send(error);
            }
            else
            {
                res.status(200).json(result);
            }
        }); 
    });

    app.get('/steps', function(req, res){

        var connection = app.persistence.connectionFactory();
        var stepDao  = new app.persistence.StepDao(connection);
        stepDao.getAll(function(error, result){
            if(error)
            {
                console.log(error);
                res.status(500).send(error);
            }
            else
            {
                res.status(200).json(result);
            }
        }); 
    });

    app.put('/steps/step/:id', function(req, res){
        
        var step = req.body;
        step.id = req.params.id;

        var connection = app.persistence.connectionFactory();
        var stepDao  = new app.persistence.StepDao(connection);
        stepDao.update(step, function(error){
            if(error)
            {
                console.log(error);
                res.status(500).send(error);
            }
            else
            {
                console.log('Step updated');
                res.location(`/step/${step.id}`);
                res.status(204).send();
            }
        }); 
    });

    app.post('/steps/create',function(req, res){

        //validate lib express-validator
        req.assert('name','Name can not be empty').notEmpty();

        var errors = req.validationErrors();

        if(errors){
            console.log('Validation errors found');
            res.status(400).send(errors);
            return;
        }
        
        var step  = req.body;
        
        var connection = app.persistence.connectionFactory();
        var stepDao  = new app.persistence.StepDao(connection);
        stepDao.save(step,function(error,result){
            if(error)
            {
                console.log(error);
                res.status(500).send(error);
            }
            else
            {
                console.log('Step created');
                res.location(`/step/${result.insertId}`);

                const response  = {
                    data: step,
                    links: [
                        {
                            href:`http://localhost:3001/step/${result.insertId}`,
                            rel: 'Access',
                            method: 'GET'
                        }
                    ]
                }

                res.status(201).json(response);
            }
        });
    });

    app.delete('/steps/step/:id', function(req, res){
        
        var step = {};
        step.id = req.params.id;

        var connection = app.persistence.connectionFactory();
        var stepDao  = new app.persistence.StepDao(connection);
        stepDao.delete(step, function(error){
            if(error)
            {
                console.log(error);
                res.status(500).send(error);
            }
            else
            {
                console.log('Step deleted');
                res.status(204).send();
            }
        }); 
    });
}
  