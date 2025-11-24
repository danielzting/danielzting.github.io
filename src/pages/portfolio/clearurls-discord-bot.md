---
layout: ../../layouts/Project.astro
title: ClearURLs Discord Bot
summary: A Discord bot that uses ClearURLs to automatically strip out tracking parameters from messages with links.
category: Python, Bot
image: https://raw.githubusercontent.com/danielzting/clearurls-discord-bot/main/docs/demo.png
alt: Discord message with tracking junk and bot reply with cleaned link
date: 2021-05-22
---

Have you ever noticed those `utm` and `fbclid` snippets in links? Those are used to track your activity and unnecessary for the site to work. This bot uses the [Unalix](https://github.com/AmanoTeam/Unalix) library that is based off of the popular [ClearURLs](https://github.com/ClearURLs/Addon) browser extension to automatically strip out such parameters from links. This keeps URLs short and readable while enhancing the privacy of your server's members.

![Discord message with tracking junk and bot reply with cleaned link](https://raw.githubusercontent.com/danielzting/clearurls-discord-bot/main/docs/demo.png)

For more information, including the link to add to your server and self-hosting instructions, refer to the [repository README](https://github.com/danielzting/clearurls-discord-bot).
