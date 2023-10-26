# CraftMyPortfolio

CraftMyPortfolio is a user-friendly platform that aims to create a customized portfolio website quickly and effortlessly. It offers pre-designed themes and layouts for easy personalization, allowing the user to showcase their projects effectively. Recruiters can evaluate their skills and experience accurately through the comprehensive project details, images, and links stored in CraftMyPortfolio. Additionally, the user can access and download the website's underlying code for future development. CraftMyPortfolio streamlines the portfolio creation process, providing convenience and flexibility to users who want to skip the bulk of the work and add their own customization.

## Getting Started

To get started with CraftMyPortfolio, follow these steps:

1. Clone the project repository:

   ```bash
   git clone https://github.com/BIT-Studio-OP/CraftMyPortfolio.git
   cd CraftMyPortfolio
   ```

2. Install the project dependencies using npm:

   ```bash
   npm install
   ```

3. Create an `.env` file in the root directory of the project with the following Firebase configuration:

   ```env
   VITE_FIREBASE_API_KEY=<Your API Key>
   VITE_FIREBASE_AUTH_DOMAIN=<Your Auth Domain>
   VITE_FIREBASE_PROJECT_ID=<Your Project ID>
   VITE_FIREBASE_STORAGE_BUCKET=<Your Storage Bucket>
   VITE_FIREBASE_MESSAGING_SENDER_ID=<Your Messaging Sender ID>
   VITE_FIREBASE_APP_ID=<Your App ID>
   VITE_FIREBASE_MEASUREMENT_ID=<Your Measurement ID>
   EMAILJS_SERVICE_ID=<Your EmailJS Service ID>
   EMAILJS_TEMPLATE_ID=<Your EmailJS Template ID>
   EMAILJS_USER_ID=<Your EmailJS User ID>
   ```

   Replace `<Your Value>` with your actual Firebase and EmailJS credentials.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Run Firebase local development server to get the dev database running:

   ```bash
   npm run firebase:serve
   ```

Now, you should have CraftMyPortfolio up and running locally. You can access it in your web browser at `http://localhost:5173`.

## Contributors

- Jake
- Dani
- Tyler
- Kieren
- Caleb

Feel free to contribute to this project by opening issues or pull requests. We welcome your suggestions and improvements!
