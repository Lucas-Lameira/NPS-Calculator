import {Connection, createConnection, getConnectionOptions} from 'typeorm';

export default async (): Promise<Connection> => {
  
  //pegar as info do ormconfig.json 
  const ormDefaultOptions = await getConnectionOptions();

  return createConnection(
    //copia todas as info do objeto sobreescrevendo as que passar
    Object.assign(ormDefaultOptions, {
      database: process.env.NODE_ENV === 'test' 
      ? "./src/database/database.test.sqlite" 
      : ormDefaultOptions.database
    })
  );
}