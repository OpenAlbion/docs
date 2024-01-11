# Weapons

## Get All Weapons

Retrieve information about weapons.

- Method: GET
- Endpoint: **https://api.openalbion.com/api/v3/weapons**

Example Request:
```http
GET https://api.openalbion.com/api/v3/weapons
```

Example Response:
```json
{
    "data": [
        {
            "id": 1,
            "name": "Journeyman's Battleaxe",
            "tier": "3.0",
            "item_power": 500,
            "icon": "https://render.albiononline.com/v1/item/T3_MAIN_AXE@0.png?quality=0&size=217&locale=en"
        },
        {
            "id": 2,
            "name": "Adept's Battleaxe",
            "tier": "4.0",
            "item_power": 700,
            "icon": "https://render.albiononline.com/v1/item/T4_MAIN_AXE@0.png?quality=0&size=217&locale=en"
        },
        {...}
    ]
}
```

## Get Weapons By Category

Retrieve information about weapons by category.

- Method: GET
- Endpoint: **https://api.openalbion.com/api/v3/weapons**
- Query Parameters:
  - `category_id`: Filter the weapons by category. Example: `1`

Example Request:
```http
GET https://api.openalbion.com/api/v3/weapons?category_id=1
```

Example Response:
```json
{
    "data": [
        {
            "id": 1,
            "name": "Journeyman's Battleaxe",
            "tier": "3.0",
            "item_power": 500,
            "icon": "https://render.albiononline.com/v1/item/T3_MAIN_AXE@0.png?quality=0&size=217&locale=en"
        },
        {
            "id": 2,
            "name": "Adept's Battleaxe",
            "tier": "4.0",
            "item_power": 700,
            "icon": "https://render.albiononline.com/v1/item/T4_MAIN_AXE@0.png?quality=0&size=217&locale=en"
        },
        {...}
    ]
}
```

## Get Weapons By Subcategory

Retrieve information about weapons by subcategory.

- Method: GET
- Endpoint: **https://api.openalbion.com/api/v3/weapons**
- Query Parameters:
  - `subcategory_id`: Filter the weapons by subcategory. Example: `2`

Example Request:
```http
GET https://api.openalbion.com/api/v3/weapons?subcategory_id=2
```

Example Response:
```json
{
    "data": [
        {
            "id": 1,
            "name": "Journeyman's Battleaxe",
            "tier": "3.0",
            "item_power": 500,
            "icon": "https://render.albiononline.com/v1/item/T3_MAIN_AXE@0.png?quality=0&size=217&locale=en"
        },
        {
            "id": 2,
            "name": "Adept's Battleaxe",
            "tier": "4.0",
            "item_power": 700,
            "icon": "https://render.albiononline.com/v1/item/T4_MAIN_AXE@0.png?quality=0&size=217&locale=en"
        },
        {...}
    ]
}
```

## Get Weapons By Tier

Retrieve information about weapons by tier.

- Method: GET
- Endpoint: **https://api.openalbion.com/api/v3/weapons**
- Query Parameters:
  - `tier`: Filter the weapons by tier. Example: `4`

Example Request:
```http
GET https://api.openalbion.com/api/v3/weapons?tier=4
```

Example Response:
```json
{
    "data": [
        {
            "id": 2,
            "name": "Adept's Battleaxe",
            "tier": "4.0",
            "item_power": 700,
            "icon": "https://render.albiononline.com/v1/item/T4_MAIN_AXE@0.png?quality=0&size=217&locale=en"
        },
        {
            "id": 3,
            "name": "Adept's Greataxe",
            "tier": "4.0",
            "item_power": 700,
            "icon": "https://render.albiononline.com/v1/item/T4_2H_AXE@0.png?quality=0&size=217&locale=en"
        },
        {...}
    ]
}
```