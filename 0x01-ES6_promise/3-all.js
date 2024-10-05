import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(result => {

      const [uploadresponse, userresponse] = result;
      console.log(`${uploadresponse.body} ${userresponse.firstName} ${userresponse.lastName}`);
    })
    .catch (error => {
      console.error('An error occured');
    });
  }
  export default handleProfileSignup;
