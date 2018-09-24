#!/bin/bash
curl http://localhost:3001/steps/create -X POST -v -H "Content-type: application/json" -d '{ "name": "teste111", "description": "Descricao etapa" }' | json_pp

