# Get the most reposts and likes on make.fun's newest X posts

[![make.fun](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Rank](https://make.fun/badge/makefun-x-reposts-02/barongz1/x-reposts/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02)
[![Reward](https://make.fun/badge/makefun-x-reposts-02/barongz1/x-reposts/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02)

Entry for [Get the most reposts and likes on make.fun's newest X posts](https://make.fun/bounty/makefun-x-reposts-02) on make.fun.

`POSTS.json` names the entrant's own X post — a quote of one of @makefunai's newest posts, carrying @makefunai and the entrant's make.fun play code. `main.ts` copies `POSTS.json` to `/output/POSTS.json`; the house reads the post itself from X and scores it from its reposts, quotes and likes.

Run it with:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
