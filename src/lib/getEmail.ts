// const axios = require('axios');
// // const dotenv = require('dotenv');
// // dotenv.config();
// let auth0Token = process.env.NODE_AUTH0_TOKEN;
// let auth0Url = process.env.AUTH0_ISSUER_BASE_URL;
// export default function getEmail(userId: string) {
//     if (!userId || !auth0Token || !auth0Url) {
//         console.log('Missing required environment variables or userId');
//         return null;
//     }
// let config = {
//   method: 'get',
//   url: `${auth0Url}/api/v2/users`,
// headers: { 
//     'Accept': 'application/json',
//     'Authorization': 'Bearer ' + process.env.NODE_AUTH0_TOKEN
//   }
// };

// axios(config)
// .then((response:any) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error:Error) => {
//   console.log(error);
// });

// }


import { Session } from "@auth0/nextjs-auth0";

export default function getEmail(session:Session|null|undefined): string | null {
  return (session)?.user?.email;
}