# Spells

## Get Spells By Weapon

Retrieve information about spells by weapon.

- Method: GET
- Endpoint: **https://api.openalbion.com/api/v1/spells/weapon/{weapon_id}**

Example Request:
```http
GET https://api.openalbion.com/api/v1/spells/weapon/1
```

Example Response:
```json
{
    "data": [
        {
            "slot": "First Slot",
            "spells": [
                {
                    "id": 1,
                    "name": "Rending Strike",
                    "slot": "First Slot",
                    "preview": "https://wiki.albiononline.com/data/images/d/d4/Rending_Strike.gif",
                    "icon": "https://render.albiononline.com/v1/spell/Rending Strike.png?size=217&locale=en",
                    "description": "Sanitize Spell Description",
                    "description_html": "Sanitize Spell Description"
                },
                {
                    "id": 2,
                    "name": "Rending Spin",
                    "slot": "First Slot",
                    "preview": null,
                    "icon": "https://render.albiononline.com/v1/spell/Rending Spin.png?size=217&locale=en",
                    "description": "Sanitize Spell Description",
                    "description_html": "Sanitize Spell Description"
                }
            ]
        },
        {
            "slot": "Second Slot",
            "spells": [
                {
                    "id": 3,
                    "name": "Deadly Chop",
                    "slot": "Second Slot",
                    "preview": "https://wiki.albiononline.com/data/images/5/5e/Deadly_Chop.gif",
                    "icon": "https://render.albiononline.com/v1/spell/Deadly Chop.png?size=217&locale=en",
                    "description": "Sanitize Spell Description",
                    "description_html": "Sanitize Spell Description"
                },
                {
                    "id": 4,
                    "name": "Adrenaline Boost",
                    "slot": "Second Slot",
                    "preview": "https://wiki.albiononline.com/data/images/4/4a/Adrenaline_Boost.gif",
                    "icon": "https://render.albiononline.com/v1/spell/Adrenaline Boost.png?size=217&locale=en",
                    "description": "Sanitize Spell Description",
                    "description_html": "Sanitize Spell Description"
                }
            ]
        },
        {
            "slot": "Third Slot",
            "spells": [
                {
                    "id": 5,
                    "name": "Blood Bandit",
                    "slot": "Third Slot",
                    "preview": "https://wiki.albiononline.com/data/images/5/55/Blood_Bandit.gif",
                    "icon": "https://render.albiononline.com/v1/spell/Blood Bandit.png?size=217&locale=en",
                    "description": "Sanitize Spell Description",
                    "description_html": "Sanitize Spell Description"
                }
            ]
        },
        {
            "slot": "Passive",
            "spells": [
                {
                    "id": 6,
                    "name": "Deep Cuts",
                    "slot": "Passive",
                    "preview": null,
                    "icon": "https://render.albiononline.com/v1/spell/Deep Cuts.png?size=217&locale=en",
                    "description": "Sanitize Spell Description",
                    "description_html": "Sanitize Spell Description"
                },
                {
                    "id": 7,
                    "name": "Life Leech (Axes)",
                    "slot": "Passive",
                    "preview": null,
                    "icon": "https://render.albiononline.com/v1/spell/PASSIVE_HEALTHCHANCE_AXE.png?size=217&locale=en",
                    "description": "Sanitize Spell Description",
                    "description_html": "Sanitize Spell Description"
                }
            ]
        }
    ]
}
```

## Get Spells By Armor

Retrieve information about spells by armor.

- Method: GET
- Endpoint: **https://api.openalbion.com/api/v1/spells/armor/{armor_id}**

Example Request:
```http
GET https://api.openalbion.com/api/v1/spells/armor/1
```

Example Response:
```json
{
    "data": [
        {
            "slot": "Fifth Slot",
            "spells": [
                {
                    "id": 261,
                    "name": "Mend Wounds",
                    "slot": "Fifth Slot",
                    "preview": null,
                    "icon": "https://render.albiononline.com/v1/spell/OUTOFCOMBATHEAL.png?size=217&locale=en",
                    "description": "While not engaged in combat, rest while channeling for 12s.\nRestore 6% of your Max Health (not affected by your Healing Cast modifier) and 5% of your Max Energy every 1s.\n\n",
                    "description_html": "While <b>not</b> engaged in <b>combat</b>, rest while <b>channeling</b> for <b>12s</b>.\n<p>Restore <span >6%</span> of your <span >Max Health</span> (not affected by your Healing Cast modifier) and <b>5%</b> of your <b>Max Energy</b> every <b>1s</b>.\n</p>\n"
                },
                {
                    "id": 262,
                    "name": "Frost Shield",
                    "slot": "Fifth Slot",
                    "preview": null,
                    "icon": "https://render.albiononline.com/v1/spell/Frost Shield.png?size=217&locale=en",
                    "description": "Cover yourself with a frost shield, increasing your damage resistances by 83 for 8s.\nReflects 15% of the damage you take as magical damage.\nSlows any enemy dealing damage to you by 20% for 2.56s.\n\n",
                    "description_html": "Cover yourself with a frost shield, increasing your <span >damage resistances</span> by <span >83</span> for <span >8s</span>.<br>\n<p><span >Reflects 15%</span> of the damage you take as <span >magical damage</span>.<br>\n<span >Slows</span> any enemy dealing damage to you by <span >20%</span> for <span >2.56s.</span>\n</p>\n"
                }
            ]
        },
        {
            "slot": "Passive",
            "spells": [
                {
                    "id": 263,
                    "name": "Aggression",
                    "slot": "Passive",
                    "preview": null,
                    "icon": "https://render.albiononline.com/v1/spell/Aggression.png?size=217&locale=en",
                    "description": "Increases your damage and heal power by 3.5%\n",
                    "description_html": "Increases your damage and heal power by 3.5%\n"
                }
            ]
        }
    ]
}
```

## Get Spells By Accessory

Retrieve information about spells by accessory.

- Method: GET
- Endpoint: **https://api.openalbion.com/api/v1/spells/accessory/{accessory_id}**

Example Request:
```http
GET https://api.openalbion.com/api/v1/spells/accessory/3
```

Example Response:
```json
{
    "data": [
        {
            "slot": "Passive",
            "spells": [
                {
                    "id": 360,
                    "name": "Sandstorm",
                    "slot": "Passive",
                    "preview": null,
                    "icon": "https://render.albiononline.com/v1/spell/Sandstorm.png?size=217&locale=en",
                    "description": "Sandstorm is a passive ability found on the Bridgewatch Cape.",
                    "description_html": "Sandstorm is a passive ability found on the Bridgewatch Cape."
                }
            ]
        }
    ]
}
```