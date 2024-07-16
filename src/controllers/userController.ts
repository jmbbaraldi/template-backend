import UserModel from '../models/userModel';
import { Request, Response } from 'express';

const get = async(req: Request, res: Response) => {
    try {
        const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

        if(!id) {
            const response = await UserModel.findAll({
                attributes : ['id', 'nome', 'email'],
                order : [['id', 'asc']],
            });
            return res.status(200).send({
                message: 'All users found',
                data: response,
            })
        }

        const response = await UserModel.findOne({where: { id } });

        if(!response) {
            return res.status(400).send({
                message: `UserId: ${id} not found`,
                data: [],
            })
        }
        
        return res.status(200).send({
            message: 'UserId: Success',
            data: response,
        })

    } catch (error) {

        const errorMessage = (error as Error).message;

        return res.status(500).send({
            message: 'An error occurred',
            error: errorMessage,
        })
    }
}

export default {
    get,

}
