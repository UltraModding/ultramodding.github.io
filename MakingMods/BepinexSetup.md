## Bepinex Setup

You can also follow this if you wish to play mods

Download bepinex from: [https://thunderstore.io/package/download/BepInEx/BepInExPack/5.4.2100/](https://thunderstore.io/package/download/BepInEx/BepInExPack/5.4.2100/)

Extract the zip file and open it, then open the BepInEx folder.

Copy the folder contents into the ULTRAKILL folder (where the ULTRAKILL.exe is)

![A Image showing the files getting moved into the ultrakill folder](/Images/BepInExMoving.png "height: 240px;")
Result:
![The result folder](/Images/BepInExResult.png "height: 240px;")

After the contents have been put in the ULTRAKILL folder launch ULTRAKILL

When ultrakill gets to the main menu close it

Open the BepInEx folder then open the config folder
Open BepInEx.cfg with notepad or any text editor of your choosing

Change the line:
HideManagerGameObject = false
Change to:
HideManagerGameObject = true

Under [Logging.Console]
set enabled to true
If you are following this to play mods and not make mods keep the console disabled


