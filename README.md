🚚 Food Truck Finder
<br />
Description
<br />
🍔 Food Truck Finder is a web application that allows users to find nearby food trucks. Built with React (frontend) and Node.js (backend).
Table of Contents
<br />
Installation
<br />
Server Dependencies
<br />
cd server
npm install
<br />
Client Dependencies
<br />
cd ../
npm install
<br />
Running the Application
<br />
🌐 Start the Server
<br />
npx ts-node server/server.ts
<br />
🌟 Start the Client
<br />
npm run dev
<br />
Testing
Frontend Testing
<br />
    Running Tests: npm test in the frontend directory.
    Framework: Vitest and React Testing Library.
<br />
Backend Testing
<br />
    Running Tests: npm test in the server directory.
    Framework: Jest with Supertest.
<br />
Current Limitations
<br />
    🔒 No User Authentication: The app currently lacks a user authentication system, limiting personalization and security.
    💾 Data Storage in JSON: Backend relies on JSON files for food truck data, which is not scalable for larger datasets.
    📍 Static User Location: The app uses hardcoded latitude and longitude as it doesn’t dynamically read the user’s current location.
    ⏰ Limited Operational Data: Open and close times for food trucks aren’t included due to their representation as PDFs in the dataset.

Roadmap to Production Readiness
<br />
    🛠️ Enhanced Error Management: For improved resilience.
    ⚡ Performance Optimization: For managing extensive data and high traffic.
    🛡️ Security Improvements: Including data sanitization and secure protocols.
    🔄 CI/CD Implementation: For efficient development and updates.
<br />
Future Expansion Ideas
<br />
    🔍 Advanced Filtering and Sorting: For better user navigation.
    📡 Real-Time Updates and Alerts: For enhanced user engagement.
    💬 Community Features: User reviews and ratings.
    📈 Scalable Architecture: For nationwide expansion.
    📃 Pagination: To display more food trucks.

 
 
