import connectMongo from '@/lib/mongodb/connectMongo';
import { Article, validateArticle } from '@/models/article';

async function articleAPI(req, res) {
  try {
    await connectMongo();

    if (req.method === "GET"){
      console.log("FETCHING ARTICLES");
      const articles = await Article.find({}).sort("title");
      console.log("FETCHED ARTICLES");
      res.send(articles)

    } else if (req.method === "POST"){
      // VALIDATION:
      let { error } = validateArticle(req.body)
      if (error) return res.status(400).send(error.details[0].message)

      // POST TO DB:
      console.log("CREATING ARTICLE");
      let article = new Article({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image
      });
      article = await article.save();
      console.log("CREATED ARTICLE");

      // RETURN RESPONSE
      res.send(article);

    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`);
    }

  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}

export default articleAPI;