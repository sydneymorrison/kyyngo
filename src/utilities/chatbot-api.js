// import axios from 'axios';

// const BASE_URL = 'http://localhost:3000/api/chatbot';

// export const sendMessageToChatbot = async (message) => {
//   try {
//     const response = await axios.post(BASE_URL, { message });
//     return response.data.reply;
//   } catch (error) {
//     console.error('Error:', error);
//     throw new Error('Failed to send message to chatbot');
//   }
// };




//VERSION 2

// import axios from 'axios';

// const askChatbot = async (messages) => {
//   try {
//     const response = await axios.post('/api/chatbot', { messages });
//     const answer = response.data.answer;
//     return answer;
//   } catch (error) {
//     console.error('Chatbot API error:', error);
//     throw new Error('Something went wrong');
//   }
// };

// export default askChatbot;