# Treora Official Website

The official website and portfolio for **Treora**, designed to showcase our services and connect with potential clients.

🌍 **Live Website:** [https://treora-website-source.vercel.app/](https://treora-website-source.vercel.app/)

## Overview
This repository contains the frontend source code for the main Treora landing page. It features a modern, responsive design and a fully functional serverless contact form using EmailJS to streamline client communications directly from the browser.

## Tech Stack
- **Framework:** React 19 powered by Vite
- **Language:** TypeScript
- **Styling:** CSS Modules
- **Contact Form:** EmailJS
- **Hosting:** Vercel

## Local Development

To run this project on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/treora-org/treora-website-source.git
   cd treora-website-source
   ```

2. **Install dependencies:**
   We strictly use Yarn for package management.
   ```bash
   yarn install
   ```

3. **Configure Environment Variables:**
   For the contact form to work locally, you must configure your EmailJS API keys. Copy the required variables to a local `.env` file:
   ```bash
   # Create a new .env file in the root directory
   touch .env
   ```
   Provide the following variables inside `.env`:
   ```env
   VITE_EMAILJS_PUBLIC_KEY="YOUR_PUBLIC_KEY"
   VITE_EMAILJS_SERVICE_ID="YOUR_SERVICE_ID"
   VITE_EMAILJS_TEMPLATE_ID="YOUR_TEMPLATE_ID"
   ```

4. **Start the development server:**
   ```bash
   yarn dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

## Contact & Support

To start building a project with us, please fill out the contact form on our [official website](https://treora-website-source.vercel.app/#contact) or reach out to us at **[treora.admin@gmail.com](mailto:treora.admin@gmail.com)**.

---
*© Treora. All rights reserved.*
