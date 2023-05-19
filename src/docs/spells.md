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
                    "description": "Attack the targeted enemy, dealing 178/196 physical damage.\nApplies one Rending Bleed Charge.\nEach Rending Bleed Charge deals 83/91 over 6s (stacks up to 3 times).\nIf the maximum amount of stacks is reached, the affected enemies' Healing Received is reduced by 12% for 5s.\n\n",
                    "description_html": "Attack the targeted enemy, dealing <span class=\"text-damage\"><i>178</i>/<i>196</i> physical damage</span>.\n<p>Applies one <b>Rending Bleed Charge</b>.\n</p><p>Each <b>Rending Bleed Charge</b> deals <span class=\"text-damage\"><i>83</i>/<i>91</i></span> over <span class=\"text-damage\">6s</span> (<b>stacks</b> up to <b>3</b> times).\n</p><p>If the <b>maximum amount</b> of <b>stacks</b> is reached, the affected enemies' <span class=\"text-debuff\">Healing Received</span> is reduced by <span class=\"text-debuff\">12%</span> for <span class=\"text-debuff\">5s</span>.\n</p>\n"
                },
                {...}
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
                    "description": "Strike the targeted enemy, dealing 502/551 physical damage.\nDecreases damage resistances by 48/49 for 8s.\n\n",
                    "description_html": "Strike the targeted enemy, dealing <span class=\"text-damage\"><i>502</i>/<i>551</i> physical damage</span>.\n<p>Decreases damage <span class=\"text-debuff\">resistances by</span> <span class=\"text-debuff\"><i>48</i>/<i>49</i></span> for <span class=\"text-debuff\">8s</span>.\n</p>\n"
                },
                {...}
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
                    "description": "Combine up to two abilities. The combo resets after 10s.\n1st Blood Draw\nThrow an axe in the targeted direction, dealing physical damage to all enemies hit, based on the number of Rending Bleed Charge on them.\n2nd Blood Bandit:\nThrow an axe infused with blood magic in the targeted direction, dealing 363 physical damage\nHeals you based on the number of Rending Bleed Charges on the first enemy hit.\n\nRending Bleed Charges: 0 | 1 | 2 | 3\nDamage: 578 | 660 | 743 | 825\nLifesteal: 743 | 743 | 743 | 743\n",
                    "description_html": "Combine up to two abilities. The combo resets after <b>10s</b>.\n<p>1st <b>Blood Draw</b>\n</p><p>Throw an axe in the targeted direction, dealing <span class=\"text-damage\">physical damage</span> to all enemies hit, <span class=\"text-damage\">based</span> on the number of <span class=\"text-damage\">Rending Bleed Charge</span> on them.\n</p><p>2nd <b>Blood Bandit:</b>\n</p><p>Throw an axe infused with blood magic in the targeted direction, dealing <span class=\"text-damage\"><i>363</i> physical damage</span>\n</p><p><span class=\"text-healing\">Heals</span> you <span class=\"text-healing\">based</span> on the number of <span class=\"text-healing\">Rending Bleed Charges</span> on the first enemy hit.\n</p>\n<ul><li>Rending Bleed Charges: 0 | 1 | 2 | 3</li>\n<li>Damage: <span class=\"text-damage\"><i>578</i></span> | <span class=\"text-damage\"><i>660</i></span> | <span class=\"text-damage\"><i>743</i></span> | <span class=\"text-damage\"><i>825</i></span></li>\n<li>Lifesteal: <span class=\"text-healing\"><i>743</i></span> | <span class=\"text-healing\"><i>743</i></span> | <span class=\"text-healing\"><i>743</i></span> | <span class=\"text-healing\"><i>743</i></span></li></ul>\n"
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
                    "description": "Every 4 normal attacks, inflict a bleed on the targeted enemy dealing 58 physical damage over 1.5s.\n",
                    "description_html": "Every 4 normal attacks, inflict a bleed on the targeted enemy dealing <b>58</b> physical damage over 1.5s.\n"
                },
                {...}
            ]
        }
    ]
}
```