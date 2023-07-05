

// exports.sendMessageToChatbot = async (openai, req, res) => {
//     try {
//       const { message } = req.body;
  
//       const response = await openai.chat.create({
//         messages: [{ role: 'system', content: 'You are a user' }, { role: 'user', content: message }],
//       });
  
//       const reply = response.choices[0].message.content;
  
//       res.json({ reply });
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ error: 'An error occurred' });
//     }
//   };


