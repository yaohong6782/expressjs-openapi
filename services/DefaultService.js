/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Register a new user
*
* userRegistration UserRegistration  (optional)
* no response value expected for this operation
* */
const registerPOST = ({ userRegistration }) => new Promise(
  async (resolve, reject) => {
    console.log('triggered register post service')
    try {
      resolve(Service.successResponse({
        userRegistration,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  registerPOST,
};
