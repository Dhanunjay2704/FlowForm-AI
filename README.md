# FlowForm AI - AI-Powered Form Builder

A modern MERN stack application that allows users to generate forms using AI, customize them, and share public links to collect responses. Inspired by Typeform and Google Forms.

**Live Demo:** https://flow-form-ai-client.vercel.app

## ✨ Features

- 🤖 **AI-Powered Form Generation** - Generate complete forms from natural language prompts using GROQ API
- 🎨 **Interactive Form Builder** - Edit questions, add custom styling, and preview in real-time
- 📤 **Public Form Sharing** - Generate shareable links with persistent URLs (works like Google Forms)
- 📊 **Response Dashboard** - Track submissions and view analytics
- 🌓 **Dark Mode Support** - Full dark theme support with custom themes
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🔐 **User Authentication** - Secure signup and login with JWT
- 💾 **Auto-Save** - Automatically save form responses as drafts
- ✅ **Multi-Step Forms** - One-question-per-step experience for better UX

## 🛠️ Tech Stack

**Frontend:**
- React + Vite
- React Router for navigation
- Context API for state management
- CSS with CSS variables for theming

**Backend:**
- Node.js + Express
- MongoDB for data persistence
- JWT for authentication
- GROQ API for AI form generation

**Deployment:**
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas (Database)

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── contexts/      # React contexts (Auth, Theme, FormFlow)
│   │   ├── lib/           # API utilities
│   │   └── styles.css     # Global styles
│   └── vite.config.js
├── server/                 # Express backend
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Request handlers
│   │   ├── models/        # MongoDB schemas
│   │   ├── services/      # Business logic (AI integration)
│   │   ├── middleware/    # Auth middleware
│   │   └── config/        # Database config
│   └── .env
└── README.md
```

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 16+
- MongoDB (local or Atlas)
- GROQ API key (optional, for AI features)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dhanunjay2704/FlowForm-AI.git
cd FlowForm-AI
```

2. Install dependencies for both client and server:
```bash
npm install
cd client && npm install && cd ..
cd server && npm install && cd ..
```

3. Create `server/.env`:
```env
HOST=0.0.0.0
PORT=5000
CLIENT_URL=http://localhost:5173
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/flowform
JWT_SECRET=your-secret-key-here
GROQ_API_KEY=your-groq-api-key
```

4. Create `client/.env` (optional):
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_CLIENT_BASE_URL=http://localhost:5173
```

5. Run development servers:
```bash
# Terminal 1 - Backend
cd server && npm run dev

# Terminal 2 - Frontend
cd client && npm run dev
```

Frontend: `http://localhost:5173`
Backend: `http://localhost:5000`

## 🌐 Deployment (Vercel + Render)

### Backend (Render)

1. Push to GitHub
2. Create new Web Service on [render.com](https://render.com)
3. Connect your repository
4. Set:
   - **Root Directory:** `server`
   - **Build Command:** `npm install`
   - **Start Command:** `node src/index.js`
5. Add environment variables:
   ```
   MONGODB_URI=your-mongodb-uri
   JWT_SECRET=your-secret
   CLIENT_URL=https://your-vercel-domain.vercel.app
   HOST=0.0.0.0
   ```

### Frontend (Vercel)

1. Create new project on [vercel.com](https://vercel.com)
2. Connect your GitHub repo
3. Set:
   - **Framework:** Vite
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
4. Add environment variables:
   ```
   VITE_API_BASE_URL=https://your-render-domain.onrender.com/api
   VITE_CLIENT_BASE_URL=https://your-vercel-domain.vercel.app
   ```

## 📖 Usage

### Creating a Form
1. Sign up or log in
2. Go to workspace
3. Enter a prompt (e.g., "Create a job application form")
4. AI generates form schema
5. Edit questions as needed
6. Set custom theme/colors
7. Publish the form

### Sharing Forms
- Published forms get a shareable link: `https://your-domain.com/forms/form-slug`
- Share the link with anyone - no login required
- Responses are automatically collected and visible in dashboard

### Viewing Responses
- Go to dashboard for published form
- View response count, completion rate
- See latest submissions

## 🔧 Configuration

### Environment Variables

**Server (.env):**
- `PORT` - Server port (default: 5000)
- `HOST` - Server host (default: 0.0.0.0 for deployment)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `GROQ_API_KEY` - API key for GROQ (optional)
- `CLIENT_URL` - Frontend URL for CORS

**Client (.env):**
- `VITE_API_BASE_URL` - Backend API URL
- `VITE_CLIENT_BASE_URL` - Frontend base URL (for shareable links)

### AI Generation

If `GROQ_API_KEY` is configured, forms are generated using AI. Otherwise, a fallback rule-based generator creates a default schema.

## 📱 Browser Compatibility

- Chrome/Edge 111+
- Safari 16.2+
- Firefox (latest)
- Mobile browsers (iOS Safari 16.2+, Chrome Android)

## 🎨 Theming

The app supports dynamic theming:
- Light/Dark modes
- Accent color customization
- CSS variables for easy customization

## 📝 API Endpoints

### Authentication
- `POST /api/auth/signup` - Create account
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user

### Forms (Protected)
- `GET /api/forms` - List user's forms
- `POST /api/forms/generate` - Generate form from prompt
- `PUT /api/forms/:id` - Update form
- `GET /api/forms/:id/dashboard` - Get form responses

### Public
- `GET /api/public/forms/:slug` - Get published form
- `POST /api/public/forms/:slug/responses` - Submit response

## 🐛 Troubleshooting

### CORS Errors
- Ensure `CLIENT_URL` on server matches frontend URL
- Check `VITE_API_BASE_URL` on client

### 404 on Public Form Links
- Make sure `vercel.json` is in client directory
- Check form slug exists in database

### MongoDB Connection Failed
- Verify `MONGODB_URI` is correct
- Check MongoDB Atlas network access settings
- Ensure IP whitelist includes your deployment platform

## 📄 License

MIT

## 👤 Author

Dhanunjay

---



