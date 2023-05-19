# Armors

## Get All Armors

Retrieve information about armors.

- Method: GET
- Endpoint: **https://api.openalbion.com/api/v1/armors**

Example Request:
```http
GET https://api.openalbion.com/api/v1/armors
```

Example Response:
```json
{
    "data": [
        {
            "id": 1,
            "name": "Novice's Scholar Robe",
            "tier": "2.0",
            "item_power": 300,
            "icon": "https://render.albiononline.com/v1/item/Novice's Scholar Robe@0.png?quality=0&size=217&locale=en"
        },
        {
            "id": 2,
            "name": "Journeyman's Scholar Robe",
            "tier": "3.0",
            "item_power": 500,
            "icon": "https://render.albiononline.com/v1/item/Journeyman's Scholar Robe@0.png?quality=0&size=217&locale=en"
        },
        {...}
    ]
}
```

## Get Armors By Category

Retrieve information about armors by category.

- Method: GET
- Endpoint: **https://api.openalbion.com/api/v1/armors**
- Query Parameters:
  - `category_id`: Filter the armors by category. Example: `23`

Example Request:
```http
GET https://api.openalbion.com/api/v1/armors?category_id=23
```

Example Response:
```json
{
    "data": [
         {
            "id": 1,
            "name": "Novice's Scholar Robe",
            "tier": "2.0",
            "item_power": 300,
            "icon": "https://render.albiononline.com/v1/item/Novice's Scholar Robe@0.png?quality=0&size=217&locale=en"
        },
        {
            "id": 2,
            "name": "Journeyman's Scholar Robe",
            "tier": "3.0",
            "item_power": 500,
            "icon": "https://render.albiononline.com/v1/item/Journeyman's Scholar Robe@0.png?quality=0&size=217&locale=en"
        },
        {...}
    ]
}
```

## Get Armors By Subcategory

Retrieve information about armors by subcategory.

- Method: GET
- Endpoint: **https://api.openalbion.com/api/v1/armors**
- Query Parameters:
  - `subcategory_id`: Filter the armors by subcategory. Example: `24`

Example Request:
```http
GET https://api.openalbion.com/api/v1/armors?subcategory_id=24
```

Example Response:
```json
{
    "data": [
        {
            "id": 1,
            "name": "Novice's Scholar Robe",
            "tier": "2.0",
            "item_power": 300,
            "icon": "https://render.albiononline.com/v1/item/Novice's Scholar Robe@0.png?quality=0&size=217&locale=en"
        },
        {
            "id": 2,
            "name": "Journeyman's Scholar Robe",
            "tier": "3.0",
            "item_power": 500,
            "icon": "https://render.albiononline.com/v1/item/Journeyman's Scholar Robe@0.png?quality=0&size=217&locale=en"
        },
        {...}
    ]
}
```

## Get Armors By Tier

Retrieve information about armors by tier.

- Method: GET
- Endpoint: **https://api.openalbion.com/api/v1/armors**
- Query Parameters:
  - `tier`: Filter the armors by tier. Example: `4`

Example Request:
```http
GET https://api.openalbion.com/api/v1/armors?tier=4
```

Example Response:
```json
{
    "data": [
        {
            "id": 3,
            "name": "Adept's Cleric Robe",
            "tier": "4.0",
            "item_power": 700,
            "icon": "https://render.albiononline.com/v1/item/Adept's Cleric Robe@0.png?quality=0&size=217&locale=en"
        },
        {
            "id": 4,
            "name": "Adept's Cultist Robe",
            "tier": "4.0",
            "item_power": 775,
            "icon": "https://render.albiononline.com/v1/item/Adept's Cultist Robe@0.png?quality=0&size=217&locale=en"
        },
        {...}
    ]
}
```