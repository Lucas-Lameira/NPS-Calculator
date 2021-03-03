import {Request, Response} from 'express'

import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";

export class SurveysController {
  async create(request: Request, response: Response){
    const {title, description} = request.body;

    const surveyRepo = getCustomRepository(SurveysRepository);

    const survey = surveyRepo.create({
      title,
      description
    })

    await surveyRepo.save(survey);

    return response.status(201).json(survey);
  }

  async show(request: Request, response: Response){
    const surveyRepo = getCustomRepository(SurveysRepository)

    const all = await surveyRepo.find();//listar todos os reegistros da tabela

    return response.status(200).json(all);
  }
}