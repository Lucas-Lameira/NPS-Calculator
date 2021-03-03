import request from 'supertest';
import {app} from '../app'

import createConnection from '../database';

describe("users",() => {

  //create migrations
  beforeAll(async() => {
    const connection = await createConnection()
    await connection.runMigrations();
  })

  
  it("should be able to create a user", async() => {   
    //request from supertest
    const response = await request(app).post('/users')
    .send({
      nome: "user name example",
      email: "example@email.com"
    });

    expect(response.status).toBe(201)
  });

  it("should not be able to create a user if email exists", async() => {   
    //request from supertest
    const response = await request(app).post('/users')
    .send({
      nome: "user name example",
      email: "example@email.com"
    });

    expect(response.status).toBe(400)
  });
})