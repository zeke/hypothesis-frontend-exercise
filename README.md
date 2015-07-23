# Hypothesis Frontend Exercise

This repository is the result of [@zeke](https://github.com/zeke) going through the [hypothes.is](https://hypothes.is/) hiring process. For context, read [ASSIGNMENT.md](ASSIGNMENT.md).

## Running It

```
npm install
npm start
```

You should now have a server running on [localhost:3000](http://localhost:3000/). <-- This is a static page which makes an ajax request to
[/annotations](http://localhost:3000/annotations). This endpoint returns a JSON array (containing
a single annotation). Each element in the array is passed through a [decorator function](decorate.js) that
cleans up the data and adds missing context like the user's handle, the article's domain,
etc. The decorated data is then injected into a pre-compiled handlebars template and rendered
in a DOM element.

## Things I Didn't Get To

I'm past the two-hour mark on this project, so it's time to call it quits for now. Here's a list of stuff I didn't get around to implementing yet:

- linkifying URLs in text
- converting text newlines to breaks
- pretty-printing dates
- relative date strings
- designing the sharing UI

I have lots of thoughts and ideas about all of this stuff, and look forward to discussing it on our next call!

Thanks,
Zeke

## Demo

- https://hypothesis-frontend-exercise.herokuapp.com/
- https://hypothesis-frontend-exercise.herokuapp.com/markup.html

## Munging data

- linkifying URLs in text
- converting text newlines to breaks
- pretty-printing dates
- relative date strings
- techniques: handlebars helpers vs CSS vs js decorators vs adapting the webservice API

# UX

- designing the sharing UI
  - autofocusing text input for easy copying
  - OS clipboard access with with npm.im/zeroclipboard
  - user-configurable social features. OAuth?

- bookmarklet UX is cumbersome
- contrast is low
- fonts are small
- lots of unused whitespace
- hypothes.is/stream  

## Related Products

- readability.com
- instapaper.com
- getpocket.com
- evernote.com
- delicious.com
- pinboard.in
- pinterest.com
- https://web.archive.org/web/20070324061033/http://hoodwinkd.hobix.com/ (defunct)
- github.com/sniphr (defunct)
- clipboard.com (defunct)

## Technical

- Firefox extension?
- https://cloudup.com/c3TdHLLi6F6 Show me the React
- http://crossrider.com/developers
- Extension: tiny wrapper around regularly updated remote script
- tiny modules vs kitchen sink
- Browser compatibility?
- Public API
- Mobile Apps
