# Kyyngo: AI-Powered Goal Planning and Accountability Web Application

Kyyngo is an innovative web application that combines the power of AI, goal planning, and a supportive community to help users achieve their objectives within a specific timeframe. With Kyyngo, users can leverage AI algorithms to generate personalized plans and strategies to reach their goals, while their friends track their progress, provide encouragement, and engage with their goals.

## Functionality

1. Full-Stack Single-Page Application
   - Kyyngo is a full-stack single-page application built using the MERN stack (MongoDB, Express, React, Node). It is hosted on Heroku, ensuring seamless deployment and accessibility.

2. User Authentication and Authorization
   - Kyyngo incorporates token-based authentication, allowing users to sign up, log in, and log out securely. User sessions and authentication are managed using JWT (JSON Web Tokens). Access to data functionality is restricted to appropriately authenticated users, ensuring privacy and security.

3. Well-Styled Interactive Front-End
   - The application has a visually appealing and user-friendly front-end design that communicates with the Express backend through AJAX. The user interface is intuitive, responsive, and optimized for a seamless user experience.

4. Goal Planning with AI
   - Kyyngo employs AI algorithms to assist users in developing effective approaches and plans to achieve their goals. Users input their desired objectives and timeframe, and the AI generates personalized plans tailored to their needs. These plans may include specific milestones, tasks, and recommendations to ensure efficient progress towards the goal.

5. Goal Sharing and Community Engagement
   - Users can post their goals to their profile, which populates their feed. Friends within the Kyyngo community can follow their progress, provide encouragement, and engage with their goals through comments, likes, and reactions. This fosters a supportive and motivating environment for goal pursuit.

6. Third-Party API Integration
   - Kyyngo integrates with relevant third-party APIs to enhance its feature set and provide additional functionality. For example, it may incorporate APIs related to health and fitness tracking, educational resources, productivity tools, or other domains that align with users' goals.

7. Real-Time Communications
   - The web application includes real-time communication features, allowing users to interact with each other instantaneously. This can include live chat, notifications, and updates on goal progress within the community.

8. Admin Features
   - Kyyngo includes admin features to manage the application effectively. Admins can perform tasks such as user management, content moderation, and system configuration to ensure smooth operations.

## Project Planning

A project consists of more than just code. To effectively plan and manage the project, the following resources were used:

### Planning Materials Used

- Figma: Used to create wireframes and design the user interface.
- Notion: Used for project documentation, task tracking, and collaboration.
- Miro: Used for creating the Entity-Relationship Diagram (ERD) and visualizing project workflows.

### Trello Board

Use a Trello board to organize and track the project's progress. The board should have the following lists:

- Icebox: Holds user stories that have yet to be moved to the Current/MVP list. All user stories, including both MVP and wish list stories, should be initially placed in the Icebox.
- Current/MVP: Holds user stories that must be completed to meet the minimum project requirements (MVP). Once the MVP has been met, additional user stories may be moved from the Icebox to this list.
- Completed: Holds completed user stories.
- Wireframes: Sketches of each screen's user interface for the major functionality of the application.
- Entity-Relationship-Diagram (ERD): A diagram of the app's models (one per data entity) and the relationships between them.

### User Stories

- As a <role>, I want <feature> so that <reason>.

## Technologies Used
 -  MongoDB/Mongoose
  - Express
  - React
  - Node.js
  - OpenAI API
  - CSS
  - HTML
  - Figma, Lucid, Notion and Trello for planning/visualization
  - Heroku for Development



## Technical Requirements

The application should meet the following technical requirements and deliverables:

- A working full-stack, single-page application hosted on Heroku.
- Incorporate the technologies of the MERN stack:

- Have a well-styled interactive front-end that communicates with the Express backend via AJAX.
- Implement token-based authentication, including the ability for users to sign up, log in, and log out securely.
- Implement authorization by restricting Create, Update, and Delete (CUD) data functionality to appropriately authenticated users. Also, ensure that navigation responds to the login status of the user.
- Have a comprehensive feature set. For example, if the app does not include full-CRUD data operations, ensure the addition of one or more of the following:
  - Consume a third-party API.
  - Utilize multi-user, real-time communications.
  - Include admin features.

By meeting these technical requirements, Kyyngo empowers users to plan and achieve their goals effectively while fostering a supportive community. Leveraging AI algorithms, the web application provides personalized strategies and milestones, helping users stay on track and make progress. The integration of social features enables friends to engage and provide encouragement, further enhancing motivation and accountability. With its comprehensive feature set and user-friendly interface, Kyyngo offers a unique and impactful web application experience for goal-oriented individuals.

## Future Enhancements

- Gamification: Introduce badges, achievements, and leaderboards for engaging goal pursuit.
- Advanced AI Algorithms: Enhance AI algorithms for more accurate and personalized goal plans.
- Wearable Devices Integration: Connect with fitness trackers for automated progress tracking.
- Enhanced Social Features: Expand group goals, challenges, and collaborative planning.
- Insights and Analytics: Provide detailed progress insights and visualizations.
- Customizable Notifications: Allow personalized goal-related notifications and reminders.
- Goal Categories and Recommendations: Categorize goals and offer personalized recommendations.
- Multi-Language Support: Support multiple languages for wider accessibility.
- Integration with Productivity Tools: Integrate with task managers and calendars.
- Enhanced Admin Features: Add advanced user management and analytics tools.

These future enhancements aim to enrich Kyyngo with engaging features, personalization, insights, and enhanced administrative capabilities.


## Screenshots


- Sydney Morrison, Will include relevant screenshots

# Getting Started

To access Kyyngo please visit: Here

## Contributors

This project was made possible by the contributions of the following individuals:

- Sydney Morrison, Full-stack Developer, Designer, Product Management


---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
