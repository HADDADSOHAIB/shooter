# Shooter Game

This project is a shooter game build using phaser 3 engine. This is the final project of JavaScript module of [Microverse](https://www.microverse.org/)

## Video presentation

[![Video](/readme-assets/8.png)](https://www.loom.com/share/28ab5c0e820c4199942a705f2bdb8578)


## How the game was design and developed

I started working on this project with zero experience with phaser, thanks to the following resources, I was able to build this game in 5 days:

- [Getting started with phaser](http://phaser.io/tutorials/making-your-first-phaser-3-game/part1)
- [Creating a template for phaser game](https://phasertutorials.com/creating-a-phaser-3-template-part-1/).
- [Modern development set-up for phaser 3](https://snowbillr.github.io/blog/2018-04-09-a-modern-web-development-setup-for-phaser-3/)
- [open game art](https://opengameart.org/).
- [Build a space shooter with phaser](https://learn.yorkcs.com/category/tutorials/gamedev/phaser-3/build-a-space-shooter-with-phaser-3/).

Also I used this resources to understand the design process: 

- [The Ultimate Guide to Level Design](https://www.gamedesigning.org/learn/level-design/),
- [The 3 Primary Principles of Game Design](https://www.gamedesigning.org/learn/game-design-principles/),
- [Beginner’s Guide to Game Mechanics](https://www.gamedesigning.org/learn/basic-game-mechanics/)

After getting familiar with Phaser 3, I started designing a simple game where you can shoot. During the brainstorm step, I answered the following question:

- What the shooter will shoot?
- How the difficulty will change from level to level?
- What is the story of the game (space shooting, battle fight ...)

I kept my answer simple and come up with this game.

## Live demo

[Live website](https://salty-dawn-07233.herokuapp.com/dist/)

### Usage

if you don't want to use the live version, you can run the project on your local environment, first clone this repository:

* `$ git clone https://github.com/HADDADSOHAIB/shooter.git`

Then switch to the branch you want to check:

* `$ git checkout branch`

after that you need to run the bundler

* `$ npm install`

run `$ npm run build` to build the project in production mode and `$ npm run dev` if you want development mode.

For running the test:

* `$ npm run test`

## How to play

- Use the arrows keys :arrow_up: , :arrow_down: ,  :arrow_right: , :arrow_left: to move the player, and use the space bar to shoot. :space_invader:

- The green bars are barriers so you can't kill the enemy behind them (that increases the difficulty of the game) and also you can protect yourself if the game gets so hard.

![start](/readme-assets/1.png)
![start](/readme-assets/2.png)
- After loading all the assets, you have a menu where you can choose 3 options: Play, option, and credits choose Play to start the game.


![start](/readme-assets/3.png)
- Before starting the game you have to provide your name, the default value is "player" if you don't provide a name.


![start](/readme-assets/4.png)
- I entered my name using the keyboard.


![start](/readme-assets/5.png)
- My character is the one in the bottom of the screen, the enemies are the yellow characters in the top. The game is about killing the enemies before they kill me, you can shoot them with the space bar, move your character to get aligned with the enemy but be careful, the enemy shoots back.


![start](/readme-assets/6.png)
- Keep playing and you are out of lives and try to get the highest score possible. From level to level the speed of the enemies increase.


![start](/readme-assets/7.png)

## Built With

- HTML.
- JavaScript.
- Webpack.
- phaser 3
- Babel.
- Jest.
- Axios.

## Authors

👤 **HADDAD SOHAIB**

- Github: [@HADDADSOHAIB](https://github.com/HADDADSOHAIB)
- Twitter: [@HaddadSohaib](https://twitter.com/HaddadSohaib)
- Linkedin: [linkedin](https://www.linkedin.com/in/sohaibhaddad/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Show your support

Give a ⭐️ if you like this project!
