# Frontend-Backend API Connection Setup

## Overview
This document outlines how the frontend and backend are connected via API calls.

## Frontend Architecture

### Services Structure
- **API Client** (`src/services/api.js`): Axios instance with interceptors
- **Service Modules**:
  - `auth.js` - Authentication API calls
  - `cms.js` - CMS/Articles API calls
  - `schedule.js` - Schedule/Events API calls
  - `donation.js` - Donation API calls

### Composables
- **useApi** (`src/composables/useApi.js`): Reusable API state management (data, loading, error)

## Configuration

### Environment Variables (`.env.local`)
```
VITE_API_BASE_URL=http://localhost:8000          # API Gateway (default)
VITE_AUTH_SERVICE_URL=http://localhost:5001      # Direct Auth Service
VITE_CMS_SERVICE_URL=http://localhost:5002       # Direct CMS Service
VITE_SCHEDULE_SERVICE_URL=http://localhost:5003  # Direct Schedule Service
VITE_SMB_SERVICE_URL=http://localhost:5004       # Direct SMB Service
VITE_DONATION_SERVICE_URL=http://localhost:5005  # Direct Donation Service
```

## API Endpoints

### Authentication Service (Port 5001)
```
POST   /api/auth/login              - Login user
POST   /api/auth/register           - Register new user
POST   /api/auth/refresh            - Refresh access token
POST   /api/auth/verify             - Verify token
GET    /api/auth/me                 - Get current user
GET    /api/auth/users              - Get all users (admin only)
```

### CMS Service (Port 5002)
```
GET    /api/cms/articles            - Get all articles
POST   /api/cms/articles            - Create article
GET    /api/cms/articles/{id}       - Get article by ID
PUT    /api/cms/articles/{id}       - Update article
DELETE /api/cms/articles/{id}       - Delete article
GET    /api/cms/gallery/photos      - Get gallery photos
POST   /api/cms/gallery/photos      - Upload photo
DELETE /api/cms/gallery/photos/{id} - Delete photo
```

### Schedule Service (Port 5003)
```
GET    /api/schedule/activities     - Get activities
GET    /api/schedule/events         - Get events
GET    /api/schedule/calendar       - Get calendar data
GET    /api/schedule/today          - Get today's schedule
POST   /api/schedule/activities     - Create activity
PUT    /api/schedule/activities/{id} - Update activity
DELETE /api/schedule/activities/{id} - Delete activity
```

### Donation Service (Port 5005)
```
GET    /api/donation/programs           - Get donation programs
GET    /api/donation/programs/{id}      - Get program details
POST   /api/donation/donations          - Create donation
GET    /api/donation/my-donations       - Get user donations
```

## Backend CORS Configuration

### Enabled Origins (from `.env.example`)
- `http://localhost:5173` - Frontend dev server (Vite)
- `http://localhost:3000` - Alternative frontend port
- `http://localhost:8000` - API Gateway
- `http://localhost` - Default localhost

### CORS Headers
- **Allow Methods**: GET, POST, PUT, DELETE, OPTIONS, PATCH
- **Allow Headers**: Content-Type, Authorization, X-Requested-With
- **Credentials**: Enabled
- **Max Age**: 3600 seconds

## Usage Example

### Using Service Methods
```javascript
import { authService, cmsService } from '@/services';

// Login
try {
  const result = await authService.login('user@example.com', 'password');
  console.log('Logged in:', result);
} catch (error) {
  console.error('Login failed:', error);
}

// Get articles
const articles = await cmsService.getArticles(1, 10);
```

### Using useApi Composable
```vue
<script setup>
import { useApi } from '@/composables/useApi';

const { data, loading, error, fetchData } = useApi();

onMounted(async () => {
  await fetchData('/api/cms/articles');
});
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">{{ error }}</div>
  <div v-else>{{ data }}</div>
</template>
```

## Token Management

### Local Storage
- **access_token** - JWT token for API requests
- **refresh_token** - Token for refreshing access token

### Token Interceptor
- Automatically adds `Authorization: Bearer {token}` header to requests
- Handles 401 responses by attempting token refresh
- Redirects to login if refresh fails

## Docker Compose Setup

### Starting Services
```bash
cd vdsp_backend
docker-compose up -d
```

### Service URLs
- **API Gateway**: http://localhost:8000
- **Auth Service**: http://localhost:5001
- **CMS Service**: http://localhost:5002
- **Schedule Service**: http://localhost:5003
- **SMB Service**: http://localhost:5004
- **Donation Service**: http://localhost:5005
- **Redis Commander**: http://localhost:8081

## Troubleshooting

### CORS Errors
- Ensure backend services are running
- Check CORS_ORIGINS in `.env` file
- Verify frontend baseURL matches backend service URL
- Check browser console for specific error messages

### Token Expiration
- Expired tokens will trigger automatic refresh
- If refresh fails, user is redirected to login
- Clear localStorage if tokens are corrupted

### API Timeout
- Increase timeout in `src/services/api.js` if needed
- Check network connectivity
- Verify backend services are responding

## Development Workflow

1. **Start Backend**: `docker-compose up -d`
2. **Start Frontend**: `npm run dev`
3. **Create/Update Services**: Add methods to `src/services/*.js`
4. **Use in Components**: Import and call service methods
5. **Test API Calls**: Use browser DevTools Network tab
