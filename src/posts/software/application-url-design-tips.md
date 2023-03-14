---
title: Application URL Design Tips
description: Useful tips for organizing the URLs in a web app
date: 2023-03-11 21:03:00.00
---

It's not every day that a _question_ on Stack Overflow proves helpful 
rather than an answer, 
but [this Stack Overflow question about organizing URLs](https://stackoverflow.com/questions/37734246/how-to-organise-resources-in-web-application-url-structure) 
provides some great tips. I've included them here for permanence:

> 1. Namespacing features behind the username 
>    like `example.com/{username}/followers` 
>    [is ideal] for public features that belong to each user individually.
> 2. Private things, such as account settings, 
>    should never be namespaced behind the username, 
>    and should just appear after `/account` or `/settings`.
> 3. It's best to keep the base resource URLs as lean as possible. 
>    Filters, sorting requirements, advanced searching and pagination 
>    can all be implemented as query parameters.
> 4. A query string should be treated as an optional addition to the page; 
>    the URL should work to produce a valid and useful page 
>    even when it's removed.
> 5. In a good, hackable URL, 
>    a human can adjust or remove parts of the path 
>    and get expected results from your site. 
>    [Good URls] give your visitors better orientation around your pages, 
>    and enable them to easily move up levels.
> 6. By embedding a unique ID early on in your path, 
>    you can have long, fully descriptive URLs when needed 
>    but still enjoy the reliability of shorter URLs and the speed of ID lookups.
> 7. Adding multiple keywords to URLs may help with SEO, 
>    but it will confuse your users. 
>    Also, you’ll quickly run the risk of being marked as a keyword spammer.

