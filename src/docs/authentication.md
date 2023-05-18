# Authentication

| Authentication Method  | Syntax                                                     |
| ----------------------- | ---------------------------------------------------------- |
| Header Authentication  | `Authorization: {your_api_token}`                   |
| Query String Authentication | `?api_token={your_api_token}`                          |

To authenticate using the header, include the `Authorization` header in your API requests with the value set to your API token. For example:
Authorization: {your_api_token}

Alternatively, you can authenticate using the `api_token` query string parameter. Append `?api_token={your_api_token}` to your API requests. For example:
https://api.openalbion.com/endpoint?api_token={your_api_token}

Replace {your_api_token} with your actual API token.

You can generate your API token at [https://api.openalbion.com](https://api.openalbion.com).