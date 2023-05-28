# Lab 8 - Starter

Group Names: William Heng

1. I think that automated tests in our Recipe project development pipeline should run within a github action that runs whenever code is pushed. This is because the goal of these tests is for it to be automated so we can have a smooth and efficient developmental pipeline. Running them locally seems very tedious and running them after all development seems risky as we are not working iteratively (we fully do everything before checking if anything works). 

2. No

3. No because to test this functionality you need to test other components if they received the message and what to do with it next. Unit tests are for individual components and cannot test how individual components interact with each other.

4. Yes because testin this functionality is only involving a single component (how much content is in the textbox).