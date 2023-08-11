---
title: A conclusion of the internship
---

Some clarification: When <> is used, it is meant to be replaced with the specified destination when writing the actual code.

## What I learned

During these couple of weeks, I needed to download several applications and learn how to use them.

### Terminal

The first of these apps was terminal. I needed to learn some basic commands in order to properly utilize it. Below are some of these commands:

`cd <directory_name>` enters you into the directory
`cd ..` enters you back into the previous directory
`cd ~` enters you back into the home directory
`ls` displays all directories inside your current directory


Furthermore, I needed to learn how to use git, and how to push and pull code.
Pull brings code from the remote repository to your local repository.
Push brings code from your local repository to the remote repository.
In order to get git changes, first clone the existing project. Pulling will then bring new changes from the old repository. After making changes, then push the your code to the original code.
Below are the commands to do each of these steps:

`mkdir <directory_name>` makes a new directory
`git clone <git_link>` clones the repository of the specified code
`git pull origin main` updates your local repository with code from the original repository
`git pull origin <name>` updates your local repository with code only from the specific repository
`git push <remote> <name>` pushes code from the remote repository to the name directory
`git rebase <origin>` updates your work the the latest changes from origin
`git fetch <directory>` checks if the directory has had any changes
`git remote` shows your current libraries (adding a -v at the end shows the link it is from)
`git add` adds a file to the library
`git checkout -b <directory>` lets you create and switch to a new branch
`git touch <name>` creates a new file
`git commit -m <message>` saves the changes and adds a message

Some other commands

`pwd` gives the current directory in a format of /Users/account/directory etc
`cp <file> <destination>` copies the file into the destination directory
`mv <file> <destination>` moves the file into the destination directory
`mv <file> <name>` renames the file into a new name
`rm <file>` deletes the file
`rm -r <repository>` deletes the repository and the files inside
`cat <file>` displays the contents of the file
`echo <text>` displays the text onto the terminal
`chmod <permission> <file>` changes the permission of the file


Other shortcuts

Up and down: displays previous commands that you have entered
Ctrl + w: clears the current word
Ctrl + u: clears the entire line
Ctrl + k: clears the current cursor position to the end of the line
Ctrl + c: stops the currently running process
Ctrl + l: clears the screen

For more information on terminal commands, [click here](https://www.runoob.com/linux/linux-file-content-manage.html) (The link is in chinese).
To learn how git works, [click here](https://nulab.com/learn/software-development/git-tutorial/git-basics/).

### Docker

Although I never used docker much, I learned the basics of it. Docker is an application that makes it easier for a package that runs on one device to also run on another device.

`docker version` gives a current version of your downloaded docker
`docker pull <image_name>` pulls the image from the docker container

### Homebrew

Homebrew is an application that makes downloading other apps easier. We used homebrew to install HUGO, GO, make, and node. To download it, follow the instructions provided on the [homebrew website](https://brew.sh/). Here are some simple homebrew commands:

`brew search <package>` searches homebrew and displays the package
`brew install <name>` installs the package
`brew uninstall <name>` uninstalls the package
`brew update` updates homebrew
`brew reinstall <name>` reinstalls the package

### MD files

The last thing I learned about was md files. To make an md file, just add .md to the end of a file name. MD files allows you to write are plain-text documents that use simple syntax and are easy to read. Below are some of the syntax:

\# serves as a header
\## serves as a second header, as you add more #, the higher level header is used
\` ` gives an inline code block
\``` ``` gives a code block
\[text](url) links a url when you click on the text
\![text](image) links a image when you click on the text
\- is used to create a list
\1. is used to create a numbered list

For more on MD file syntax, [click here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).

## Overall

This is a brief summary of the many things I have learned to use when doing this internship. I have listed all of the major commands I needed to use. 