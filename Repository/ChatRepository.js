const { Configuration, OpenAIApi } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const options = {
  model: process.env.MODEL,
  max_tokens: 2048,
  temperature: 0.5,
  stop: ".",
};

const getReply = async (input) => {
  const completion = await openai.createCompletion({
    ...options,
    prompt: input,
  });

  return completion.data;
};

module.exports = {
  getReply,
};
