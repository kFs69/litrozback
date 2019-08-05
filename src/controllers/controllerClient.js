const Client = require('../models/Client');

module.exports = {
    async addClient(req, res){
        const { email } = req.body;

        try{
            if(await Client.findOne({ email }))
                return res.status(400).send({error: 'User already exists' });

            const client = await Client.create(req.body);
            
            return res.send({ client });
        }catch{
            return res.status(400).send({ error: 'Registration failed' });
        }
    },
    async updateClient(req, res){
        const data = await Client.findById(req.params.id);

        const clientUpdated = await Client.findOneAndUpdate(req.params.id, req.body, { useFindAndModify: false });

        res.send(data);
    },
    async deleteClient(req, res){
        const data = await Client.find();

        try{
            const clientDeleted = await Client.findByIdAndRemove(req.params.id);
            res.send(data);
        }catch{
            res.status(400).send({ error: "User not found" });
        }    
    },
    async searchClient(req, res){
        try{
            const client = await Client.find();

            res.send(client);
        }catch{
            res.status(400).send({ error: 'client not found' });
        }        
    },
    async searchOneClient(req, res){
        try{
            let client = await Client.findById(req.params.id);
            let phone = {}
            if(client.phoneNumber.length > 1){
                client.phone = {tel1: client.phoneNumber[0], tel2: client.phoneNumber[1]}
                client.phoneNumber = phone;
                console.log(client.phoneNumber)
            }else if(client.phoneNumber.length == 1){
                client.phone = {tel1: client.phoneNumber[0]}
                client.phoneNumber = phone;
                console.log(client.phoneNumber)
            }

            console.log(client)
            res.send(client);
        }catch{
            res.status(400).send({ error: 'client not found' });
        }
    }
}