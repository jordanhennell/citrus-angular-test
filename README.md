# Angular Test
Welcome to angular test!

To complete this simple application, please see InVision designs that are provided to you.
All needed assets can be found in `src/assets` folder.

Bootstrap 3 is already included so you can use its classes in templates.

Remember to run `npm install` before you start coding though.

# GitHub API
In the search page, you're required to call GitHub search API to complete the task.

Here is an example of a search request sent to GitHub:
```
GET https://api.github.com/search/users?q=tom&amp;page=1&amp;per_page=1
```

And here is the response:
```
{
  "total_count": 53903,
  "incomplete_results": false,
  "items": [
    {
      "login": "tom",
      "id": 748,
      "avatar_url": "https://avatars1.githubusercontent.com/u/748?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tom",
      "html_url": "https://github.com/tom",
      "followers_url": "https://api.github.com/users/tom/followers",
      "following_url": "https://api.github.com/users/tom/following{/other_user}",
      "gists_url": "https://api.github.com/users/tom/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tom/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tom/subscriptions",
      "organizations_url": "https://api.github.com/users/tom/orgs",
      "repos_url": "https://api.github.com/users/tom/repos",
      "events_url": "https://api.github.com/users/tom/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tom/received_events",
      "type": "User",
      "site_admin": false,
      "score": 62.25116
    }
  ]
}
```

From above fields you need to show `login`, `avatar_url` as an image, and `score` in a scale of 0-5
using star icons.

