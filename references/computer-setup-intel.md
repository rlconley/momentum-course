---
title: "Computer Setup: Intel"
category: dev tools
parent: References
layout: resource_list
---
<!-- markdownlint-disable no-inline-html -->
## Set Up Your Development Environment

{% include summary_toc.html %}

Getting your tools right is an important step in becoming a developer. This guide will walk you through every step you need to take to be ready to write code at Momentum.

There are multiple options for setting up your computer. This guide is opinionated about those options. Our guidelines are:

- When possible, use what you already have instead of installing something new.
- Use the most common development tool unless it is deficient.
- Less setup is better.

### These instructions assume that you are setting up a Mac that has an Intel chip running macOS {{site.latest_mac_os_num}}+ ({{site.latest_mac_os_name}} or later).

**Please read carefully and do all the steps.**

---

## ⚠️ Confirm which chip your computer has

Go to the Apple Menu in the upper left corner of your screen.  **> About This Mac**

### You have an Intel chip if…

✅  You see **Processor** listed below the name of your computer model (it may not be exactly the same as the one you see in the screenshot below, but it should still be listed as **Processor**).

![]({{ site.baseurl }}/assets/images/intel.png){:.img--post}

🚫 If you see **Chip** or Apple listed, your computer is *not* using an Intel chip. Use the setup instructions for an Apple Silicon Macbook instead.

# Update your operating system

Before we start installing the necessary tools, you should update your operating system. You can do this by going to the **Apple Menu > About This Mac > Software Update**.

If you are unsure whether your computer can run the latest operating system ({{ site.latest_mac_os_name }}), [check this list from Apple Support]({{site.latest_mac_os_compatibility_link }}).

---

## Security Settings

<aside>
🔒 If you are planning on using your computer in a public setting, we recommend the following security measures to protect the data on your computer.  

If you are using your computer exclusively in private settings, you may not need to take these steps. It's up to you!  

These security settings have no impact on the coding you do on your computer.  
</aside>{:.callout}

Open **Apple Menu > System Preferences > Security & Privacy** and set the following:

- Under **General**, set ***require a password after sleep or screen saver begins*** to ***immediately***.
- Under **General**, set ***disable automatic login***.
- Click **Advanced...** and select ***Require an administrator password to access system-wide preferences***.
- Under **Firewall**, click ***Turn On Firewall***.
- Under **FileVault**, click ***Turn On FileVault***. This will encrypt your disk. Without it, anyone with a bootable USB drive can get full access to your computer.

---

# iTerm2: The Terminal

iTerm2 is an open source replacement for Apple’s Terminal. It is highly customizable and comes with a lot of useful features.

We’ll install this first, since we are going to use it in all the rest of the steps.

Download iTerm2 from the [iTerm2 downloads page](http://www.iterm2.com/downloads.html). Make sure to select the latest stable release . When the download finishes, move it from your Downloads folder to your Applications folder.

💁🏻 If you’re new to Mac, [here’s Apple documentation on the Finder](https://support.apple.com/guide/mac-help/finder-mchlp2605/mac), which is where you can see windows containing your files, folders, and applications.
{:.callout}

**Start iTerm now** by double-clicking on the application icon in the Applications folder. This will open a new window. This window is the terminal!

💁 When we ask you to run something in the terminal or “on the command line”, that means to type the command into an iTerm terminal window and press `return` or `enter` on your keyboard. We will often just tell you to “run” something, with a command beneath, like this:
{:.callout}

```bash
$ cd ~
```

⚠️ When you see these commands, do not paste or type the `$`. The dollar sign is only there to indicate the terminal prompt, where you start typing.  

"Run" means that you type the command and press the `return` or `enter` key.
{:.callout}

## Homebrew

[Homebrew](https://brew.sh/) calls itself *the missing package manager for macOS.* It allows you to install tools you will use to work with code and is an essential tool for developers who work on Macs.

### Installing Homebrew

To install Homebrew, paste the command below into your terminal, hit `return` or `enter`, and follow the steps you will see on the screen.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

If you are asked to enter a password, this will be your Mac user password. You won’t see the characters when you type — this is ok, just keep typing and then press enter.

You’ll see output like the following:

```bash
==> This script will install:
/usr/local/bin/brew
/usr/local/share/doc/homebrew
/usr/local/share/man/man1/brew.1
/usr/local/share/zsh/site-functions/_brew
/usr/local/etc/bash_completion.d/brew
/usr/local
==> The following new directories will be created:
/usr/local/bin
/usr/local/etc
/usr/local/include
/usr/local/lib
/usr/local/sbin
/usr/local/share
/usr/local/var
/usr/local/opt
/usr/local/share/zsh
/usr/local/share/zsh/site-functions
/usr/local/var/homebrew
/usr/local/var/homebrew/linked
/usr/local/Cellar
/usr/local/Caskroom
/usr/local/Frameworks
==> The Xcode Command Line Tools will be installed.

Press RETURN/ENTER to continue or any other key to abort:
```

Follow the instructions on your screen and press `RETURN`.

Homebrew will start the installation process, which will take a few minutes or more depending on your connection speed.

As it installs, Homebrew will check to see if you have Apple’s Command Line Tools for Xcode, and will download and install them for you if not. We need those tools, so this is 👍.

You should see output in your terminal that looks something like this:

```bash
==> Installing Command Line Tools for Xcode-14.0
==> /usr/bin/sudo /usr/sbin/softwareupdate -i Command\ Line\ Tools\ for\ Xcode-14.0
Software Update Tool

Finding available software

Downloading Command Line Tools for Xcode
Downloaded Command Line Tools for Xcode
Installing Command Line Tools for Xcode
Done with Command Line Tools for Xcode
Done.
==> /usr/bin/sudo /usr/bin/xcode-select --switch /Library/Developer/CommandLineTools
==> /usr/bin/sudo /bin/rm -f /tmp/.com.apple.dt.CommandLineTools.installondemand.in-progress
```

After this, installation for Homebrew will continue. Eventually you should see a message like **`==> Installation successful!` .**

### Check to see if installation was successful

To be able to use Homebrew you need to start a new terminal session. Do this by opening a new terminal tab with ⌘T (you should also close the old one), then run the following command to make sure everything is working:

```bash
$ brew doctor
```

👍 You should see a message that says **`Your system is ready to brew.`**

👎 If you don’t see that, read what you do see. Follow any instructions you see there.

## Homebrew for installing developer tools and utilities

To install a package (or *formula* in Homebrew vocabulary), you need to know its name. To install something with Homebrew, you run `brew install <formula-name>` , replacing that last part with the name of whatever formula you want to install.

First we need to make sure that Homebrew's directory of formulae that can be installed is up to date, so run:

```bash
$ brew update
```

You can always see what you have installed through brew, with their version numbers, by running:

```bash
$ brew list --versions
```

---

## XCode Command Line Tools

These tools should have been installed automatically when you installed Homebrew. We need them to be able to run commands using the terminal. To check to see if they were installed correctly, run

```bash
$ xcode-select -p
```

You should see:

```python
/Library/Developer/CommandLineTools
```

🆘 If you see a message that XCode is not installed, you can install it manually by running `$ xcode-select --install`
{:.callout}

---

## Git

[Git](http://git-scm.com/) is the version control tool developers use to manage and track changes to code. You'll learn how to use it on Day One at Momentum, and we will use it every day.

We can install it using Homebrew. Run:

```bash
$ brew install git
```

You can make sure it is installed by running the following. The expected output is shown beneath the command:

```bash
$ git --version
git version 2.39.2 # Note! Your version doesn't have to be the same.
$ which git
/opt/homebrew/bin/git
```

If the output you see when you run `which git` says `usr/bin/git` and not homebrew, try closing and reopening the terminal window, and re-run the command.

💡 You can check to see if you have other command line tools installed using the name of the command followed by `--version` (or sometimes `-v`).
{:.callout}

### Configuring Git

Git has a configuration file called `.gitconfig` that is located in your home directory (`~/.gitconfig`). It's a "dotfile" which means its name starts with a `.` , it's intended for configuration settings, and it is invisible using the Finder window on your mac. On your first day at Momentum, you will learn more about interacting with your computer's file system in the terminal.

We need to configure Git to define your **user** (this should be the same username and email you use for GitHub, so replace the placeholder values below with that information):

```bash
$ git config --global user.name "Your Name Here"
$ git config --global user.email "your_email@youremail.com"
```

No output is expected after you run these commands, so don't worry if you don't see confirmation of success. To check that these settings were successful, you can run:

```bash
$ git config -l
# If your configuration above succeeded, you should see the following output:
user.email=your_email@youremail.com
user.name=Your Name Here
```

#### Configure defaults

Code lives in "repositories" in Git, and is organized in "branches." We need to tell git what to call the **default branch** it makes for any new repository. We'll give it the conventional name "main".

```bash
$ git config --global init.defaultBranch main
```

Set a default merge strategy for git. This setting tells git to combine branches without overwriting anything.

```bash
$ git config --global pull.rebase false
```

⚡ To check that all of these Git settings are configured correctly, you can use the `git config -l` command to see the values that you set. If anything looks wrong, just run the same `config` command from above again with the correct value.
{:.callout}

### Configure files to exclude from Git

It is important to tell Git not to include irrelevant files in its tracking system.

For instance, there are files that are only needed by macOS and are not relevant to our code. We also want to exclude any other automatically created files that are not necessary for our code but only for those locally installed programs.

To configure Git to always exclude certain files, we create a global exclude list. The conventional name for this file is the `.gitignore` file.

Specify a global exclusion list:

```bash
 $ git config --global core.excludesfile ~/.gitignore_global
```

Add Mac-specific files to the global exclusion list:

```bash
$ curl https://raw.githubusercontent.com/github/gitignore/main/Global/macOS.gitignore -o ~/.gitignore_global
```

And exclude settings files generated by our code editor:

```bash
$ echo .vscode >> ~/.gitignore_global
```

You won’t see any output from these commands.

---

## GitHub

GitHub works with Git to allow us to share code with other people. We will use GitHub every day, and you'll use it throughout your career as a developer.

### 👉 Go to the [GitHub homepage](https://github.com/) and sign up for an account.

Make a note of your password, because you will need it again when you connect to GitHub through your terminal.

<aside>
🥸 Employers will definitely look at your GitHub account, so keep that in mind when you’re choosing a username.
</aside>{:.callout}

Once you have an account you can configure Git to store your GitHub username by running:

```bash
$ git config --global user.username "your GitHub account username"
```

### Set up a secure way to store your credentials

To use GitHub from the terminal, you need to connect to your own GitHub account. To make this easier, we’ll store your credentials on your computer so you won’t have to enter them every time. We’ll use Git Credential Manager to handle this for us.

Run these Homebrew commands to install it:

```bash
$ brew tap microsoft/git
$ brew install --cask git-credential-manager-core
```

You’ll be asked to enter the password for your computer to complete the installation process.

You don’t need to do anything else right now. The first time you connect to GitHub from the command line, you’ll be guided through a process to enter your credentials. They’ll be stored securely on your machine, and you won’t have to enter them again after that, unless you change them.

<aside>
💁🏻 If you see a message in the terminal about creating a personal access token, you should repeat these steps. You should not need a token if your credential manager is set up correctly.
</aside>{:.callout}

---

## Customizing the Command Line

Developers routinely interact with their computer through text commands in the terminal. iTerm2 gives us a terminal that is customizable to suit whatever kind of work you're doing and whatever your personal preferences are.

You'll be spending a lot of time in the terminal. We want to set a few important things at first, but you will likely customize it further as you become more familiar with what your terminal can do and develop your own preferences for it.

### Install the necessary files for zsh-autosuggestions

Copy and run the following:

```bash
$ git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions
```

### Add Git information in your prompt, command auto-complete and command syntax highlighting

It's important to run all of these lines in this order. You will have better results if you copy and paste instead of trying to type these lines out. Remember not to include the dollar sign if you copy and paste!

```bash
$ brew install zsh-completions zsh-autosuggestions zsh-syntax-highlighting starship
$ echo 'FPATH=$(brew --prefix)/share/zsh-completions:$FPATH' >> ~/.zshrc
$ echo 'autoload -U compinit && compinit -u' >> ~/.zshrc
$ echo 'eval "$(starship init zsh)"' >> ~/.zshrc
$ echo 'source ~/.zsh/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh' >> ~/.zshrc
$ echo 'source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh' >> ~/.zshrc
```

**Close the terminal window and open a new one**. Your command line should now look like this:

```bash
~
>
```

⚡ The prompt's appearance changed because of [a program we just installed called `starship`](https://starship.rs/). The documentation will help you understand the [git information that is included in your prompt](https://starship.rs/config/#git-status), which will make more sense when you learn about Git.{:.callout}

### Install a font that works well for code

A font is the digital version of a typeface. For code we need a monospaced font, and for the Starship prompt we need a font that has icons included in its character set.

Run the following commands to install the monospaced Hack Nerd Font.

```python
brew tap homebrew/cask-fonts
brew install --cask font-hack-nerd-font
```

When it’s done installing, go to i**Term2 > Preferences > Profiles > Text > Font.**

On that panel, select `Hack Nerd Font Mono` under the **Font** menu. You can set any other preferences you like here ([iTerm2 preferences documentation](https://iterm2.com/documentation-preferences.html)).


🤓 You can choose any monospaced font you like. Check out [Nerd Fonts](https://www.nerdfonts.com/) for lots of options.
{:.callout}

---

## Node.js

When we work with JavaScript, we will often need to use tools written with Node.js.

To install Node, run:

```bash
$ brew install node
```

Once this is done, you should have Node.js and the package manager that we’ll use with it, npm, installed (npm is included with the Node.js installation).

Run the following commands to check that you successfully installed Node and npm:

```bash
$ node --version
v19.7.0

$ npm --version
9.5.0
```

The exact versions you see may be different, but Node should be `v16` or above and npm should be `v7` or above.

---

## Install Desktop Apps

We will use Homebrew to install these, but don’t worry if you have already downloaded these desktop apps from their websites.

### Visual Studio Code for writing code

Every developer needs a good text editor to write code. There are a lot of different ones you could use, but the one we will teach you to use is an industry standard used by many professionals today. [Visual Studio Code](https://code.visualstudio.com/) (or VS Code) is a free and open source program made by Microsoft.

To install it, run:

```bash
$ brew install --cask visual-studio-code
```

Once you have this installed, we’ll configure Git to use VS Code as your default text editor when Git requires you to type in a message.

```bash
$ git config --global core.editor "code --wait"
```

---

### Google Chrome for a web browser

Google Chrome is the browser we will use in the course to run our front-end code. To install it, run:

```bash
$ brew install --cask google-chrome
```

---

### Rectangle for managing the windows on your screen

[This free tool](https://rectangleapp.com/) will make it easier to resize and move the windows you have open on your screen. After you install it, you will see its icon at the top right of your screen.

```bash
$ brew install --cask rectangle
```

When this is done you should see the Rectangle icon in your Applications folder.

The first time you run it, follow the prompts to grant it permission to control your windows under **Accessibility** settings. You should see the Rectangle icon in the menu bar at the top right of your screen.

---

### Slack for communicating with teammates

We use [Slack](https://slack.com/help) for communicating with each other at Momentum. It’s a live chat tool that allows us to send and receive real-time messages.

```bash
brew install --cask slack
```

When this is done you’ll see the Slack icon in your Applications folder.

---

### Zoom for video meetings

You can [get a free account for Zoom](https://zoom.us/signup#/signup) and run video meetings using the desktop app.

```bash
brew install --cask zoom
```

When this is done you’ll see the Zoom icon in your Applications folder.

When you start Zoom for the first time, you will need to follow the prompts to give permission for it to access the Camera, Microphone, and Screen Recording under **Security & Privacy** settings.

---

# 🎉 Done!

Your computer is set up and ready to go.
