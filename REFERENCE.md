# Adding Shows
![Adding a new show](http://letterracer.github.io/img/reference/new-show.gif)
### Create the file for the show
Create a new file in the `_posts/` folder and name it like this:

`YYYY-MM-DD-show-title-here.md`

__YYYY-MM-DD__ is the date of the show, and __show-title-here__ is a URL-friendly title for the show (letters, numbers, and hyphens - only).

__Example__ :
`2016-02-23-animal-collective-ratking-ny.md`


### Add the show info
Copy and paste this (including - - - on top and bottom) into the new file:

```html
---
show_title: 
artists: []
doors: 
city: 
venue: 
venue_location: 
ticket_price: 
ticket_url: 
rsvp_url: 
poster_url: 
---
```

Only __artists__ and __city__ are required.

> __show_title__ -- Show or tour title

> __artists__ -- Comma-separated list of artists inside brackets [ ].

> __doors__ -- Venue doors time.

> __city__

> __venue__ -- Venue name.

> __venue_location__ -- Address of venue (turns venue name into a link to google maps.)

> __ticket_price__ -- Include dollar sign.

> __ticket_url__ -- URL for ticketfly, ticketmaster etc.

> __rsvp_url__ -- URL for facebook or other RSVP.

> __poster_url__ -- URL to the show's handbill image.

### Save & commit the new file
Scroll to the bottom of the page and click "Commit new file".

### Examples

>__Filename__
`2016-02-23-animal-collective-ratking-ny.md`
```
---
show_title: 
artists: [Animal Collective, RATKING]
doors: TBA
city: NEW YORK, NY
venue: Irving Plaza
venue_location: 17 Irving Pl, New York, NY 10003
ticket_price: $35
ticket_url: http://concerts.livenation.com/event/00004F8221A9983C
rsvp_url:
poster_url: http://36.media.tumblr.com/30c3b725fb74b779135f18fea154c7ff/tumblr_nz79tpmmS91r7b78bo1_500.png
---
```
>__Publishes to:__
letterracer.com/shows/animal-collective-ratking-ny--02-23-2016/

------------

>__Filename:__
`2016-02-06-wiki-dj-lucas-wesleyan.md`
```
---
show_title: COLLEGE TOUR 2016
artists: [WIKI, DJ LUCAS]
doors: TBA
city: Wesleyan University
venue:
venue_location:
ticket_price:
ticket_url:
rsvp_url:
poster_url: /img/shows/wiki-dj-lucas-college.png
---
```
>__Publishes to:__
letterracer.com/shows/wiki-dj-lucas-wesleyan--02-06-2016/
