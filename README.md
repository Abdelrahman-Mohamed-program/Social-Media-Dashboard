# Social-Media-Dashboard

## Team Members [Team 6]:
- Abdelrahman Mohamed
- Ola Samir
- Mostafa Ehab

---

## Dashboard Analytics API Documentation

### Base URL  
- Not yet deployed

---

### **1. Get Analytics Data**
#### **Endpoint:**  
`GET /analytics`

#### **Description:**  
Retrieves analytics data for the selected platform (Facebook, YouTube, TikTok, etc.), including metrics like likes, shares, comments, and chart data.

#### **Query Parameters:**  
| Parameter  | Type   | Required | Description |
|------------|--------|----------|-------------|
| `platform` | string | Yes | Platform name (`facebook`, `youtube`, `tiktok`, etc.) |
| `start_date` | string | No | Start date in `YYYY-MM-DD` format (default: 30 days ago) |
| `end_date` | string | No | End date in `YYYY-MM-DD` format (default: today) |

#### **Response:**
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

---

### **2. Get Available Platforms**
#### **Endpoint:**  
`GET /platforms`

#### **Description:**  
Retrieves a list of supported platforms.

#### **Response:**
```json
{
  "platforms": ["facebook", "youtube", "tiktok", "twitter"]
}
```

---

### **3. Get Date Range Stats**
#### **Endpoint:**  
`GET /analytics/stats`

#### **Query Parameters:**  
| Parameter  | Type   | Required | Description |
|------------|--------|----------|-------------|
| `platform` | string | Yes | Platform name (`facebook`, `youtube`, `tiktok`, etc.) |
| `start_date` | string | Yes | Start date in `YYYY-MM-DD` format |
| `end_date` | string | Yes | End date in `YYYY-MM-DD` format |

#### **Response:**
```json
{
  "platform": "youtube",
  "total_likes": 12500,
  "total_shares": 3800,
  "total_comments": 2900
}
```

---
