
// const express = require('express');
// const router = express.Router();
// const OpenAI = require('openai-api');

// const openaiApiKey = process.env.OPENAI_API_KEY;
// const openai = new OpenAI({ apiKey: openaiApiKey });

// const chatbotController = require('../../controllers/api/chatbot');

// router.post('/', (req, res) => chatbotController.sendMessageToChatbot(openai, req, res));

// module.exports = router;




//Version 2

// const express = require('express');
// const router = express.Router();
// const askChatbot = require('../../controllers/api/chatbot');

// router.post('/', async (req, res) => {
//   try {
//     const { messages } = req.body;
//     const answer = await askChatbot(messages);
//     res.json({ answer });
//   } catch (error) {
//     console.error('Chatbot API error:', error);
//     res.status(500).send('Something went wrong');
//   }
// });

// module.exports = router;