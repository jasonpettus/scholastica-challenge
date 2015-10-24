# Scholastica Javascript Challenge
This is a coding challenge I did on behalf of Scholastica.com, as part of their job interview process.

# Notes to Scholastica Staff

- As per the list of "Nice To Haves" that you gave, I made sure the form was to be completely filled out before successful submission; I used the animate.css library to implement the flipping card; and I used a framework for the CSS and icons, Google's "Material Design" framework for both, that we discussed during my talk with you last week. Material Design Lite, the specific framework I in particular used (there is more than one), also comes with its own Javascript library, which I used in this case for the animated submit button on the form.

- Since you emphasized in your instructions the greater priority of implementing the functionality instead of exactly mimicking the original look, I went ahead here and stuck to all of Material Design's visual defaults, even when that diverged from your original: for one example, the form itself looks a lot different, and the text default in MD badges is left-justification, not centered. This is a great example of what I find so interesting yet so frustrating about a framework like Material Design, is that Google's designers have already chosen a highly specific look that they think is the "best practice" for all websites, which works flawlessly when you embrace it but makes heavy customization problematic. (For a good example, note that when I link to MD's stylesheet in the HTML head, I specifically declare the colors indigo and pink right in the URL; these become the two default colors of my entire web page, which for example is why the form is indigo and pink without me specifically defining it that way.) Ultimately I prefer a system where I have a lot more individual control over the details; but since Material Design is by accident the one framework so far that I've used the most, I went ahead and used it here as well.

- I also wanted to create at least a little CSS on my own, just to show you I could, which is what's in jasoncustomization.css. It shows off four examples:

  - Customizing various bits of MD elements for manual override;

  - One div tag completely defined manually line by line, just to show you that I can;

  - A trick for achieving vertical alignment of text within a divider;

  - and specs for adding a circular border to the badge's avatar image.

- And since I used all these third-party tools for everything else, I decided to use just plain jQuery to handle the transfer of information from the form to the badge. I used a super-simple method for dealing with the form's fields, since you specifically said there would be no database to worry about.

- I deliberately included many more blank lines in the code than I would in a commercial project, so to make it easier for all of you to parse what I'm doing.

- This page also implements Material Design's grid for responsive layout; note that if you were to load this on a phone, the badge would automatically appear below the form, not to its right. Also note that the header would be fixed if the page's content was long enough to be scrollable.

- This took me about two afternoons of coding, about three hours altogether; the rest of the time was used simply to catch back up on all these subjects by going over my old DevBootcamp material. If by chance I were to do this again, I would probably use it as an excuse to learn Angular well enough to implement all of this only through that.