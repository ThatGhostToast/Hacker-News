# Hacker-News
A small application developed using Angular that displays the top 500 newest stories from Hacker News

## Development Process
When development started on this application, I sat down and thought about the different components and services I would need to complete this task in the time given to me successfully. </br>
<img src=""></br>
After I had created this blueprint, I began reading the Angular documentation to ensure I knew enough about the framework to begin development without running into any major issues. After I felt comfortable, I began development. I decided to take the program one step at a time, beginning with collecting the IDs of the stories from the API and using them to collect the story data. Luckily, I have lots of experience working with APIs, so this step did not take me longer than a half hour. I created Angular services to hold both the ID retrieval and Story retrieval processes. After the data was successfully being returned from the API, I built the application's front end to display this data. I utilized the BootStrap framework so I could format the output data in a way that was easier to read without using too much time. I was then focused on implementing pagination to make the returned data easier to read and made a search bar component so users could locate stories by story title. With this, the main application was done and needed to have testing. I used the last of my time to ensure the ng tests were configured properly and ran successfully.</br>
<img src=""></br>
## Key Application Design 
When developing the application, I decided to develop it in such a way that it would be scalable if it needed to be built up in the future. I separated the Components and Services into their own folders to make them easier to find. This way, if the application continued to grow, a large variety of components and services could be used without the program becoming messy.
## Challenges Faced
During development, I found that Angular pagination was more difficult than I had imagined. I tried implementing it in various ways I found online and continued doing research to try and fix the errors I was encountering, but I kept running into roadblocks. I was starting to spend too much time developing this feature, so I decided to start over and try pagination my own way. I am very thankful I did this because it showed me I could trust my instincts and I shouldn't be afraid to try something new.
## If I could go back...
If I could go back and do this project over again, I would have allocated more time to developing automated testing. Having extensive application testing allows you to be more confident in the program you developed, as you know you tested a variety of possible inputs.
## Future Improvements
I would like to give this application more style in future updates. It looks fine the way it is, but I would love to be able to make it pop. Additionally, I would love to implement the different types of API calls that Hacker News offers (i.e., Top Posts, Most Popular) to give the page more functionality. And finally, I would love to implement more testing. Ensuring the application runs smoothly is essential in any program, and having more testing would make me more comfortable with the application as a whole.
