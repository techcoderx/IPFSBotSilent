# Silent IPFS Bot

This bot is made for those who want to run multiple IPFS nodes for one IPFS Discord Bot. In this bot all outputs will be logged into the console instead of sending messages onto Discord chat. To be run with the main IPFS Bot in another server, preferably in a different geographical location.

#### Dependencies required

* NodeJS with `npm` command line tools
* `wget`
* `ipfs` (go-ipfs with a running daemon)
* `crontab` for autopinning IPFS files in queue

#### Additional requirements

* [The main IPFS bot](https://github.com/techcoderx/DTube-IPFS-Bot) running in a seperate IPFS server

# Installation

1. Clone this repository by typing `git clone https://github.com/techcoderx/IPFSBotSilent.git` in a terminal window.

2. Insert the Discord bot token in `auth.json` file. You may use the same auth token as the main bot.

3. Run `node --max_old_space_size=4000 bot.js` to start the Discord bot.

If same auth token (as the main bot) is used for this bot, there's no need to invite this bot as this silent bot works together with the main bot. If different auth token used, use the same invite link as the main bot (with different client ID) to invite the bot seperately.

# Pinning IPFS files

While the IPFS daemon is running, you may run `bash PinFiles.bash` to pin all video and audio files in queue to the local IPFS node. Alternatively, you may use `crontab` to schedule the bash script to run at regular intervals.

For more info about `crontab` which is built into Linux and macOS, visit [here](https://gist.github.com/mkaz/69066bd0c5e45515a264).

# How to contribute

If you found any ways to improve on the code, or found any bugs, feel free to create a pull request on the GitHub repository. You can also contact me on Discord `techcoderx#7481` if you have any enquiries.