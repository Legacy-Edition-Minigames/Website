---
layout: post
title: "Menus, Options, and Spectators | Progress Update 8"
image: /assets/blog/progress-update-8.png
permalink: /blog/progress-update-8
type: blog
preview-text: | 
  The old 1.20.4 Datapack version of the server is now referred to as 1.0, and Rewrite is now referred to as 2.0.

  All the changes mentioned in this post are for the unreleased 2.0 version of LEM, which is still in development. None of these changes are on the main, alternate, or experimental servers yet, they all still run 1.0.
main-text: | 
  <iframe width="100%" height="524" src="https://www.youtube-nocookie.com/embed/_RYu0Hh7-yc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

  # Disclaimer
  The old 1.20.4 Datapack version of the server is now referred to as 1.0, and Rewrite is now referred to as 2.0.

  All the changes mentioned in this post are for the unreleased 2.0 version of LEM, which is still in development. None of these changes are on the main, alternate, or experimental servers yet, they all still run 1.0.

  At some point in the future we will begin testing 2.0 on Experimental, and we will let you know when that begins.

  # LEMaddons
  Heartcosmetics are now controlled by LEM Addon files, this makes it easier for us to add new heart cosmetics to the server.

  # Battle
  Map preview images have finally been implemented for all base game maps, and can be viewed in the new map voting screen.

  When players leave the game in the lobby with items in their inventory, they will now drop all of their items.

  ### Game options
  The following options have been added:

  - **Prefer small maps** This uses the small map size until all 8 player slots are filled, compared to the normal behavior which switches to large at 6 players.

  - **Allow Back to Back Maps** When this is disabled, the map auto selector will not pick the map played in the last round, votes for that map will be discareded.

    This is to help with the game feeling repetetive with people voting for the same map every round, not allowing players to try out other maps.
  
  - **Persistent Inventory** When a round starts, player inventories will be stored, and upon the game ending, the inventories of players will be restored, making secret hunting easier.

    This excludes the elytra, players will not be able to keep it between rounds.
  
  ### Map voting
  In 1.0, all map voting and game options were controlled through a book in the lobby and a chat interface. In 2.0, this is replaced in favor for Minecraft's Dialogs system.
  <div style="font-size: 0.70em;">You have no idea how bad the menu server was, that thing was powered by fake chests with fonts and custom models.<br></div>

  Pressing **G** (the default key) will open the new dialog menu, which contains map voting, game options, and player settings.

  The new map voting menu will show the following info:

  - Map description
  - If votes will count or not
    - If the map has been disabled by the host
    - If it is disabled due to being played last round with Back to Back Maps disabled
  - Available map sizes (Small, Large, Large+, Remastered)
  - Required resource packs
  - Optional resource packs

  ### Host options
  Just like the map voting menu, the host can also access all the game settings through the new dialog menu.

  ### Player Options
  In 1.0, player specific options were only available through commands, in 2.0 these options are now available through the dialog menu as well.

  Player options include:

  - Disable YouTube/Twitch unsafe songs
  - Only use required resource packs for maps
  - Heart cosmetic
  - Personal spectator mob

  ### Spectator system
  The spectator system has received some pretty large changes.

  In 1.0, if you wanted to join a game that had 16 players, you just couldn't. In 2.0, a new option has been added, Spectate Shuffling.
  
  With Spectate Shuffling on, players can join a game that is full, but will remain as a spectator. Every round, all players except for the winner of the previous round will be shuffled with spectators.

  This allows everyone in the game to get a chance to play, and increases the amount of players that can be in a lobby at a time from just 16 players to 32 players.

  This system only applies to Battle, Glide will still allow all 32 players to play at once.

  # Updates since the last progress update

  ### Player invites
  Due to technical issues, the invites system mentioned in the previous progress update has been disabled due to some technical issues that need to be sorted out.

  It might be a bit until this is done, as a lot of the focus has been on 2.0, and the person who was working on that system hasn't had much time to work on it.

  ### Will LEM release this year?
  Its worth addressing this since its been brought up quite a few times when we said we *might* be able to release in 2025.

  **In short, no.** We don't know if 2.0 will come out this year, we are already in December and a lot of what we need to do hasn't happened due to the availability of developers being limited.

  Don't expect anything close to an estimate until a bit after 2.0 has been released, as we won't be able to tell at all until we are finally done with it. We all do this in our spare time, for fun, and out of love for the original minigames. Sorry about the delay, but we don't want to release it as an unfinished project and repeat the same mistakes we made the first time it was public.

  When we have an estimate for the release, **we will tell you.** If we haven't given one yet, it means we don't have one.
markdown: true
---
