"use strict";
/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { parseMultipartData, sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    const { id } = ctx.state.user;
    const { title, content } = ctx.request.body;

    const article = {
      title,
      content,
      user: id
    };

    let entity;
    if (ctx.is("multipart")) {
      console.log("No multipart here!");
      entity = null;
    } else {
      entity = await strapi.services.article.create(article);
    }
    return sanitizeEntity(entity, { model: strapi.models.article });
  }
};
