# Categories

## Get Categories For Weapon

Retrieve information about OpenAlbion's categories.

- Method: GET
- Endpoint: `https://api.openalbion.com/api/v1/categories`
- Query Parameters:
  - `type`: Filter the categories by type. Example: `weapon`

Example Request:
```http
GET https://api.openalbion.com/api/v1/categories?type=weapon
```

Example Response:
```json
{
    "data": [
        {
            "id": 1,
            "name": "Warrior Weapons",
            "type": "weapon",
            "subcategories": [
                {
                    "id": 2,
                    "name": "Axe",
                    "type": "weapon"
                },
                {
                    "id": 3,
                    "name": "Sword",
                    "type": "weapon"
                },
                {...}
            ]
        },
        {...}
    ]
}
```