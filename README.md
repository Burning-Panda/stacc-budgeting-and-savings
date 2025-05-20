# Overview

"Wizard Savings" is a "AFK/idle" game that doubles as a real‑world savings app. Players assume the role of a fledgling wizard who fuels magical progress by depositing money into an underlying savings account. Every deposit, streak, and untouched balance yields in‑game resources (Mana Crystals, Arcane Gold, Time Echoes) that unlock quests, and story chapters.

Each week, a new story section is added through the use of AI, personalized based on the players goals and wants. With the watchful eye of our "Ledger owl", the player is guided to what they can do to help increase their savings.

> Goal: Encourage better financial habits through an engaging fantasy narrative and incremental gameplay.

## Core Gameplay Loop

1. Deposit Money → Generates Mana Crystals (primary resource).
2. Spend Mana → Level up skills / upgrade tower / complete quests.
3. Create personal quests → Get saving goals
4. Idle Time → Earn passive income (Time Echoes) while away.
5. Story Progression → New lore, and challenges unlock at savings milestones.
6. Monster fight → Fight against monsters in the arena.

## Key Features

|Category|Highlights|
|---|---|
|Savings Integration|Secure bank connection, real-time balance sync, deposit hooks|
|Idle Mechanics|Passive Mana generation, streak bonus, offline progress|
|Quests|Saving goals framed as narrative tasks|
|Story Journal|Lore chapters unlocked per milestone, keeps users emotionally invested|
|Visual Progression|Tower Upgrades, spells, arenas, summoned creatures to allow the user to play a game every day.|
|Accounting | Learn basic accounting through the use of game mechanics and crystal management |

## Designs

3 of the 5 primary screens have been designed:
Home / Tower View — Quick stats, animated tower, Deposit & Quest buttons
Vault (Savings Dashboard) — Balance meter, deposit/auto‑invest actions
Quest Log — Active & completed quests, filter & search

Designs are located in `/design/.`

## Philosophy

The main goal of this app is to give the player a easy way to both save money and maintain some interesting elements to it.

## Inspiration

There are several inspirations that gave birth to this idea.

- All AFK games
- Duolingo - And their notifications and interest keeping
- AI storytelling - ChatGPT, Claude and other AI writers

## How to run

### Requirements

- Node >= v22.15.0
- NPM

To run this project, you need to do the following

1. Install dependencies
```sh
npm install
```

2. Run dev
```sh
npm run dev
```

## Notes

This is a project made in the timespan of the following

|||
|---|---|
|start|2025-05-19 16:00|
|end|2025-05-19 23:00|

This includes all design, coding and ideation.

### Things I would change

There are a bunch of things that should be changed before this is can be called useful.
Several of the components need refactoring. And certain code should be cleaned up.

- better components with CSS modules instead of a global css.
- Only certain global variables would be stored in the global css file
- Better use of memoization
- Clean up components
- Split components into specific groupings
- Use sub-routing
- Include a profile
