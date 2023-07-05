const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const axios = require('axios');

//Open AI
// const OpenAI = require('openai-api');

//Method Override
var methodOverride = require('method-override');
// Always require and configure near the top
require('dotenv').config();


//Open AI
// Initialize OpenAI API instance
// const openai = new OpenAI({
//   apiKey: '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',
// });


// Connect to the database
require('./config/database');


const app = express();


app.use(logger('dev'));
app.use(express.json());


// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to check and verify a JWT and
// assign the user object from the JWT to req.user
app.use(require('./config/checkToken'));

const port = process.env.PORT || 3001;

//Cors middleware
const cors = require('cors');
app.use(cors());

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/goals', require('./routes/api/goals'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/milestones', require('./routes/api/milestones'));
app.use('/api/comments', require('./routes/api/comments'));
// app.use('/api/chatbot', require('./routes/api/chatbot'));

//Open AI
const OpenAI = require('openai-api');

//Route for OpenAI
const chatbot = new OpenAI({
  apiKey: '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',
});

const askChatbot = async (question) => {
    try {
      const response = await chatbot.createCompletion({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: question },
        ],
      });
  
      const answer = response.choices[0].message.content;
      return answer;
    } catch (error) {
      console.error('Chatbot API error:', error);
      throw new Error('Something went wrong');
    }
  };



// API route for chatbot
app.post('/api/chatbot', async (req, res) => {
  try {
    const { messages } = req.body;
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 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',
      },
    });

    const answer = response.data.choices[0].message.content;
    res.json({ answer });
  } catch (error) {
    console.error('Chatbot API error:', error);
    res.status(500).send('Something went wrong');
  }
});


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});
