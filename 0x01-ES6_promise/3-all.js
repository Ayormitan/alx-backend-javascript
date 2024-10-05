import { uploadPhoto, createUser } from "./utils.js";

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(result => {

      const [uploadresponse, userresponse] = result;
      console.log(uploadresponse.body);
      console.log(userresponse.firstName);
      console.log(userresponse.lastName);
    })
    .catch (error => {
      console.error('An error occured');
    });
  }
  export default handleProfileSignup;
