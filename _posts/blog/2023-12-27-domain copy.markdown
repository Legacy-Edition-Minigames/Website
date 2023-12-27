---
layout: post
title: "Late Christmas Event"
image: /assets/blog/late-christmas.png
permalink: /blog/late-christmas
type: blog
preview-text: | 
  Merry (late) Christmas! We're doing an event this weekend (December 30th to 31st)
main-text: | 
  <script>
  var festiveMode = true
  </script>
  Merry (late) Christmas! We're doing an event this weekend (December 30th to 31st)

  What is this event you might ask? We're temporarily opening the server up to the public on the weekend to see how it does. There will be no sign-ups or anything like that required to participate, If you've been thinking introducing some friends to the project this would be a great time to do so!

  The event is planned to last for 2 days, but depending on the conditions might last longer and the server might temporarily re-enter its closed state if no moderators are able to keep an eye on the server at the time. (We will try our best to prevent this though!)

  We hope everyone involved has fun, see you there!

  The event starts in:
  <h1 id="countdown"></h1>
  <script>
  // Set the date we're counting down to
  var countDownDate = new Date("Dec 30, 2023 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Already started!";
    }
  }, 1000);
  </script>
markdown: true
---
