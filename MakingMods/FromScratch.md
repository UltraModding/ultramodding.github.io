## Creating a project from scratch

---os:windows
### VS2022
Open VS2022 and then press "Create a new project"
Find C# Class Library and click on it then press Next
Name your project then press next again
Set the Framework to .NET Standard 2.1 and click Create
---end---
---os:mac
### VSCode
Now press Ctrl-Shift-P and type: .NET: New Project
Press enter and then wait for a sec then type Class Library and press enter
Enter you mod name then press enter 3 times
---end---
---os:linux
# Implement Rider
---end---

Now that your project has been created its time for you to set up your .csproj

Doing this will make the mod dll to automatically go to where your ultrakill plugin folder is and skip moving the dll yourself.
It will also reduce problems and let you use more mechanics in C# that makes it simpler to do things.

### Important Note: (ModName) Will be what I use to reference whatever you called your mod!

Opening the .csproj

---os:windows
### VS2022
Locate the "Solution Explorer" On the right side of the screen if it isn't there you can open it by pressing (Ctrl+Alt+L)
There are 3 Objects that should draw your attention,
Class1.cs, This file holds your code
Dependencies, This holds the dlls your project references such as unity and ULTRAKILL
(ModName), This will be above those 2 and its named what your mod is named, this is the .csproj we have been looking for
Double click (ModName)
---end---
---os:mac
### VSCode
Locate the "Solution Explorer" On the right side of the screen if it isn't there you can open it by pressing (Ctrl+Alt+L)
There are 2 Objects that should draw your attention,
Class1.cs, This file holds your code
(ModName).csproj, this is the .csproj we have been looking for
Double click (ModName).csproj
---end---
---os:linux
# Implement Rider
---end---