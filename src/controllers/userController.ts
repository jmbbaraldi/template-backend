import UserModel from '../models/userModel';
import { Request, Response } from 'express';

const get = async(req: Request, res: Response): Promise<Response> => {
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
};

const post = async(req: Request, res: Response): Promise<Response> => {
    try {
        const {
            nome,
            email,
            senha,
        } = req.body

        const verifyEmail = await UserModel.findOne({where: {email}});

        if(verifyEmail) {
            return res.status(400).send({
                message: 'Email already registered',
                data: [],
            });
        }

        await UserModel.create({
            nome,
            email,
            senha,
        });

        return res.status(201).send({
            message: 'User created!',
            data: [],
        });

    } catch (error) {

        const errorMessage = (error as Error).message;

        return res.status(500).send({
            message: 'An error occurred',
            error: errorMessage,
        });
        
    }
};

const update = async(req: Request, res: Response): Promise<Response> => {
    const id = req.params.id ? req.params.id.toString().replace(/\D/g, '') : null;

    if (!id) {
        return res.status(400).send({
            message: 'No id provided!',
            data: [],
        })
    }

    const response = await UserModel.findOne({where: { id } })

    if (!response) {
        return res.status(400).send({
            message: 'This id does not exists!',
            data: [],
        })
    }

    if(req.body.senha) {
        req.body.senha = null;
    }
    (Object.keys(req.body) as string[]).forEach((field) => {
        (response as any)[field] = req.body[field];
    });

    await response.save();
    return res.status(200).send({
        message: `id: ${id} successfully updated!`,
        data: response,
    });
};

export default {
    get,
    post,
    update,
}
