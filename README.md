# Social-Media-Dashboard

## Team Members [Team 6]:
- Abdelrahman Mohamed
- Ola Samir
- Mostafa Ehab

---


## API Documentation

### Authentication

#### **Login**
**Endpoint:** `POST /auth/login`
- **Description:** Authenticate a user and return an access token.
- **Request Body:**
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```
- **Response:**
```json
{
  "userId": "1",
  "accessToken": "your_access_token",
  "refreshToken": "your_refresh_token"
}
```

#### **Register**
**Endpoint:** `POST /auth/register`
- **Description:** Register a new user.
- **Request Body:**
```json
{
  "username": "John Doe",
  "email": "user@example.com",
  "password": "yourpassword"
}
```
- **Response:**
```json
{
  "message": "User registered successfully"
}
```

#### **Refresh Token**
**Endpoint:** `POST /auth/refresh-token`
- **Description:** Refresh the access token using the refresh token.
- **Request Body:**
```json
{
  "userId": "1",
  "refreshToken": "your_refresh_token"
}
```
- **Response:**
```json
{
  "accessToken": "new_access_token",
  "refreshToken": "new_refresh_token"
}
```

### Analytics

#### **Get Analytics by Platform**
**Endpoint:** `GET /analytics/p/:platformId`
- **Description:** Retrieve analytics data for a specific platform.
- **Response:**
```json
{
  "platform": "facebook",
  "summary": {
    "likes": 3400,
    "shares": 1200,
    "comments": 850
  },
  "chart_data": [
    {
      "date": "2025-03-01",
      "likes": 100,
      "shares": 40,
      "comments": 20
    },
    {
      "date": "2025-03-02",
      "likes": 150,
      "shares": 50,
      "comments": 30
    },
    {
      "date": "2025-03-03",
      "likes": 120,
      "shares": 35,
      "comments": 25
    }
  ]
}
```

#### **Get Analytics Stats**
**Endpoint:** `GET /analytics/stats/:platformId`
- **Description:** Get summary statistics for a specific platform.
- **Response:**
```json
{
  "platform": "youtube",
  "total_likes": 12500,
  "total_shares": 3800,
  "total_comments": 2900
}
```

### Platforms

#### **Get All Platforms**
**Endpoint:** `GET /platforms/all`
- **Description:** Retrieve a list of all available platforms.
- **Response:**
```json
[
  {
    "id": "1",
    "name": "Facebook",
    "description": "Social media platform",
    "icon": "facebook.png"
  },
  {
    "id": "2",
    "name": "YouTube",
    "description": "Video sharing platform",
    "icon": "youtube.png"
  }
]
```

#### **Get User's Platforms**
**Endpoint:** `GET /platforms/me`
- **Description:** Retrieve platforms registered by the authenticated user.
- **Response:**
```json
[
  {
    "id": "1",
    "name": "Facebook",
    "description": "User's registered platform",
    "icon": "facebook.png"
  }
]
```

#### **Add a Platform**
**Endpoint:** `POST /platforms/add`
- **Description:** Register a new platform.
- **Request Body:**
```json
{
  "platformId": "3"
}
```
- **Response:**
```json
{
  "message": "Platform added successfully",
  "platform": {
    "id": "3",
    "name": "Twitter",
    "description": "Microblogging platform",
    "icon": "twitter.png"
  }
}
```

#### **Delete a Platform**
**Endpoint:** `DELETE /platforms/delete/:platformId`
- **Description:** Remove a registered platform.
- **Response:**
```json
{
  "message": "Platform deleted successfully"
}
```
---
