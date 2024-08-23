# Slack Messenger App

A simple web app built with Next.js 13 that allows users to send messages directly to a Slack channel.

## Features

- Send messages to a specified Slack channel.
- Simple user interface with a text input and a send button.
- Backend API route to handle message sending via Slack's API.

## Tech Stack

- **Frontend:** Next.js 13, React
- **Backend:** Node.js, Next.js API routes
- **HTTP Client:** Axios
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A Slack workspace and a Slack app with appropriate permissions (`chat:write` scope).
- A Slack OAuth token for authenticating API requests.

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shrutirthr29/Slack_messenger.git
   cd Slack_messenger
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add your Slack OAuth token:

   ```
   SLACK_TOKEN=your-slack-oauth-token
   ```

   - Replace `your-slack-oauth-token` with your actual Slack OAuth token.

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## Usage

- Type a message in the input field.
- Click the "Send Message" button.
- The message will be sent to the specified Slack channel.

## Deployment

This project can be easily deployed to Vercel.

1. **Deploy to Vercel:**

   - Log in to your [Vercel](https://vercel.com/) account.
   - Link the project to your GitHub repository.
   - Set the environment variables in the Vercel dashboard (`SLACK_TOKEN`).
   - Deploy!

## References

- [Next.js Documentation](https://nextjs.org/docs)
- [Slack API Documentation](https://api.slack.com/)
