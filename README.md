# ghost-hbs-imgur
**Imgur embedding in (https://ghost.org)[Ghost] templates**

------
**Note:** A different version of this plugin that works on posts/pages lives at:
https://github.com/unfairsurprisery/ghost-md-imgur
------

Not particularly useful. Only works in templates, not in posts/pages. Just threw
this together to play with the early Ghost apps platform.

Ghost apps are still early stage, so this may stop working with pretty much any
update to the TryGhost/Ghost or TryGhost/ghost-app codebases.

## Installation

1. Copy/clone this repo into <yourGhostInstall>/content/apps
2. Edit the "active_apps" record in the settings table of your database to
include "ghost-hbs-imgur". I.E. `["ghost-hbs-imgur","other-app"...]`
3. Restart Ghost.

**Note:** active_apps might be listed as activeApps depending on your version.
**Another Note:** I consistently get a Handlebars error on Ghost startup if my
theme uses custom Handlebars tags, but they appear to work anyway, at least in
dev.

## Usage

Remember to use triple braces so Handlebars doesn't escape the HTML output.

`{{{imgur "<image or album id>"}}}`

## References
https://github.com/TryGhost/Ghost/wiki/Apps-Getting-Started-for-Ghost-Devs
