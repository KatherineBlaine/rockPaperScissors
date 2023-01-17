# Abstract
[//]: <>

Rock Paper Scissors is an application that allows users to play the classic game against a computer, or seek more of a challenge by playing the difficult version. The difficult game is a twist on classic rock paper scissors that uses 5 marvel characters with unique winning conditions.

# Instalation Instructions
[//]: <>

1. Fork and clone [this repo](https://github.com/KatherineBlaine/rockPaperScissors)
2. Copy the SSH key
3. Enter the command `git clone git@github.com:[your repo link]`
4. Open your repo in the text editor to make changes or look over code.
3. Enter the command `open index.html` into your terminal to open the app in your browser.

# Context
[//]: <>

I am a student in the 2211 cohort for front-end engineering at the Turing School of Software and design finishing up my last week of Mod 1.

For this project, we were given a general goal of creating a rock paper scissors game by designing 2 classes that interact with one another. With some context regarding what type of data should be found in our application files, we were tasked with building this application without much structure. 

I received the instructions for this project on January 10th 2023, and finished the minimum requirements on January 15th 2023.

# Contributors
[//]: <>

[Katherine Blaine](https://github.com/KatherineBlaine)

# Learning Goals
[//]: <>

1. Solidify and demonstrate your understanding of:
    - DRY JavaScript
    - event delegation to handle similar event listeners
2. Understand the difference between the data model and how the data is displayed on the DOM
3. Use your problem solving process to break down large problems, solve things step by step, and trust yourself to not rely on an outside “answer” to a logical challenge

# Wins & Challenges
[//]: <>

## Wins
- My process with this project was very organized. From the start, I created my files and separated them into organized folders. This was really helpful when I began to write in my main.js file so I could easily reference important information for my application's functionality.
- I was able to create a fully functional game based on the data model only before I began manipulating the DOM. This was extremely helpful for my understanding of the work I had done, and helped me keep the data model in mid as I provided user functionality for the application.
- I was able to consolidate a lot of potentially complex if/else statements by storing my game rules in arrays in a separate file. This helped me avoid the convoluted code that would be necessary to cover all possible win conditions.

## Challenges
- After finishing the minimum functionality requirements, I attempted to add a feature that allowed the user to input their own name and token for their profile. I was so close to making this work, but I was unable to design the necessary error handling functionality necessary for this feature.
- I also struggled with my event delegation for my game type selectors. Clicking certain parts of the selectors would not properly change the data model and DOM. I solved this problem by renaming and regrouping my class names for the selectors, and putting my event listener on the entire section for cohesiveness.