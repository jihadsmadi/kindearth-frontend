# KindEarth Frontend - E-Commerce Platform

A modern, responsive e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Authentication System

- **Secure Login/Registration**: JWT-based authentication with refresh tokens
- **Password Validation**: Comprehensive password strength requirements
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character
- **CSRF Protection**: Built-in CSRF token management
- **Loading States**: Smooth loading indicators during API calls
- **Error Handling**: Comprehensive error management with user-friendly messages
- **Auto Token Refresh**: Automatic token refresh on expiration

### User Experience

- **Password Strength Indicator**: Real-time password strength visualization
- **Form Validation**: Client-side validation with immediate feedback
- **Success Messages**: Clear feedback for successful operations
- **Responsive Design**: Mobile-first responsive design
- **Accessibility**: WCAG compliant components

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom component library with shadcn/ui
- **HTTP Client**: Axios with interceptors
- **State Management**: React hooks
- **Authentication**: JWT with refresh tokens
- **Security**: CSRF protection

## 📁 Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx          # Login page with loading states
│   │   └── register/
│   │       └── page.tsx          # Registration with password validation
│   ├── layout.tsx                # Root layout with CSRF provider
│   └── page.tsx                  # Home page
├── components/
│   ├── auth/                     # Authentication components
│   ├── home/                     # Home page components
│   ├── providers/
│   │   └── CSRFProvider.tsx      # CSRF token management
│   └── ui/
│       ├── alert.tsx             # Alert component for messages
│       ├── button.tsx            # Button component
│       ├── dialog.tsx            # Dialog component
│       ├── input.tsx             # Input component
│       ├── password-strength.tsx # Password strength indicator
│       └── spinner.tsx           # Loading spinner
├── lib/
│   └── utils.ts                  # Utility functions including password validation
├── services/
│   └── api/
│       ├── api.ts                # Axios configuration with interceptors
│       └── auth/
│           └── authService.ts    # Authentication API services
└── types/                        # TypeScript type definitions
```

## 🔐 Authentication Flow

### 1. CSRF Protection

- CSRF tokens are automatically fetched on app initialization
- Tokens are included in all API requests via interceptors
- Retry logic with exponential backoff for failed CSRF requests

### 2. Login Process

1. User enters credentials
2. Form validation (client-side)
3. API call with loading state
4. JWT tokens stored in HTTP-only cookies (backend)
5. Automatic redirect on success

### 3. Registration Process

1. User fills registration form
2. Real-time password strength validation
3. Form validation with comprehensive requirements
4. API call with loading state
5. Success message and redirect to login

### 4. Token Management

- Access tokens and refresh tokens stored in HTTP-only cookies
- Automatic token refresh on 401 responses
- Automatic logout and redirect on refresh failure

## 🎨 UI Components

### Password Strength Indicator

- Visual strength bar (weak/medium/strong)
- Real-time criteria checking
- Color-coded feedback (red/yellow/green)

### Loading States

- Spinner component with multiple sizes
- Disabled form inputs during loading
- Loading text in buttons

### Alert System

- Success, error, info, and warning types
- Dismissible alerts
- Consistent styling across the app

## 🔧 Configuration

### Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Backend Requirements

The frontend expects a backend with the following endpoints:

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `POST /api/auth/logout` - User logout
- `POST /api/auth/refreshToken` - Token refresh
- `GET /csrf-token` - CSRF token endpoint

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API URL
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Features in Detail

### Password Validation

The password validation system ensures strong passwords by requiring:

- **Length**: Minimum 8 characters
- **Complexity**: Mix of uppercase, lowercase, numbers, and symbols
- **Visual Feedback**: Real-time strength indicator
- **Clear Requirements**: Specific error messages for missing criteria

### Error Handling

- **Network Errors**: Graceful handling of connection issues
- **Validation Errors**: Field-specific error messages
- **API Errors**: User-friendly error messages from backend
- **CSRF Errors**: Automatic retry with exponential backoff

### Loading States

- **Form Submission**: Disabled inputs and loading spinners
- **API Calls**: Visual feedback during requests
- **Button States**: Loading text and disabled states
- **User Feedback**: Clear indication of ongoing operations

## 🔒 Security Features

### CSRF Protection

- Automatic CSRF token fetching
- Token inclusion in all requests
- Retry mechanism for failed requests
- Error handling for CSRF failures

### JWT Security

- HTTP-only cookies for token storage
- Automatic token refresh
- Secure token validation
- Proper logout handling

### Input Validation

- Client-side validation for immediate feedback
- Server-side validation (backend responsibility)
- XSS prevention through proper input handling
- SQL injection prevention through parameterized queries

## 🎯 Best Practices

### Code Organization

- Modular component structure
- Reusable UI components
- Type-safe API calls
- Consistent error handling

### User Experience

- Immediate form feedback
- Clear error messages
- Loading states for all async operations
- Responsive design for all devices

### Security

- CSRF protection on all state-changing operations
- Secure token storage
- Input sanitization
- Proper error handling without information leakage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.
