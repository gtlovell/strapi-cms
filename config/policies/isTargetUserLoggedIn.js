const { convertRestQueryParams } = require("strapi-utils");

module.exports = async (ctx, next) => {
  if (ctx.state.user) {
    // Convert params.
    const targetUser = ctx.request.query.user;
    const loggedInUser = ctx.state.user.id;

    console.log("config/policies/isTargetUserLoggedIn targetUser", targetUser);
    console.log(
      "config/policies/isTargetUserLoggedIn loggedInUser",
      loggedInUser
    );
    // Target user === ctx.state.user.id
    if (targetUser === loggedInUser) {
      return await next();
    } else {
      ctx.unauthorized(`Target user is different from logged in user!`);
    }
  }

  ctx.unauthorized(`You're not logged in!`);
};
