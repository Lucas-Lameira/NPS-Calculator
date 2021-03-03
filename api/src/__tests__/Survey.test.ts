import request from 'supertest';
import {app} from '../app'

import createConnection from '../database';

describe("Surveys",() => {

  //create migrations
  beforeAll(async() => {
    const connection = await createConnection()
    await connection.runMigrations();
  });  

  it("Should be able to create a new survey", async() => {   
    //request from supertest
    const response = await request(app).post('/surveys').send({
      title: "title example",
      description: "descrription example"
    });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
  });

  it("Should be able to create a second new survey", async() => {   
    //request from supertest
    await request(app).post('/surveys').send({
      title: "title2 example2",
      description: "descrription2 example2"
    });

    const response = await request(app).get('/surveys')
    
    expect(response.body.length).toBe(2);
  });  
});