import mongoose from "mongoose";
import Joi from "joi";

// Schema: https://mongoosejs.com/docs/api/schema.html#Schema()
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 200,
  },
  description: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 3000,
  },
  category: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  image: {
    type: String,
    required: true,
  }
});

// Model: https://mongoosejs.com/docs/api/model.html#Model()
export const Article = mongoose.models.Article || mongoose.model("Article", articleSchema);

// Validation: JOI
export function validateArticle(article) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(200).required(),
    description: Joi.string().min(10).max(3000).required(),
    category: Joi.string().min(3).max(50).required(),
    image: Joi.string().required(),
  })
  return schema.validate(article)
}