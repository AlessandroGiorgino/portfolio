const setEnv = () => {
  // Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.ts';
  // Load node modules
  require('dotenv').config({
    path: '.env',
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
//il nome delle APIKEY deve corrispondere a quello del .env
    API_KEY_QUALCOSA: '${process.env['API_KEY_QUALCOSA']}',
  production: true,
  firebase:{
    apiKey: ${process.env['apiKey']}
    authDomain: ${process.env['authDomain']}
    projectId: ${process.env['projectId']}
    appId: ${process.env['appId']}
    storageBucket: ${process.env['storageBucket']}
    messagingSenderId: ${process.env['messagingSenderId']}
    measurementId: ${process.env['projectId']}
  }
};
`;

  require('fs').writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      );
    }
  });
};

setEnv();
