import {Request, Response} from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

export class UserController {
  async create(request: Request, response: Response){
    const {name, email} = request.body;
    const usersRepo = getRepository(User);
    
    //verificar se o email ja existe - findOne é um select 'data' = 'data
    const userAlreadyExists = await usersRepo.findOne({email});
    if(userAlreadyExists){
      //400 - status code Bad Request
      return response.status(400).json({
        error: "Email já cadastrado"
      })
    }

    const user = usersRepo.create({
      name,
      email
    });

    //salva no banco de dados
    await usersRepo.save(user);

    //retorna uma resposta
    return response.send(user)
  }
}