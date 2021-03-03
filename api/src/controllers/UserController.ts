import {Request, Response} from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

export class UserController {
  async create(request: Request, response: Response){
    const {name, email} = request.body;
    const usersRepo = getCustomRepository(UsersRepository);
    
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
    return response.status(201).json(user)
  }
}