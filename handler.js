"use strict";

module.exports.hello = async (event) => {
  let responseMessage;

  // Check if the user has a role
  if (event.headers && event.headers.role) {
    const userRole = event.headers.role;

    // Customize the response based on the user's role
    switch (userRole) {
      case "admin":
        responseMessage = "Hello Admin..";
        break;
      case "user":
        responseMessage = "Hello User!";
        break;
      default:
        responseMessage = "Hello Guest!";
    }
  } else {
    responseMessage = "Hello Guest...";
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: responseMessage,
    }),
  };
};
