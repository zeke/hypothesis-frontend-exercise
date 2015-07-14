# Hypothesis Frontend Exercise

This repository is the result of [@zeke](https://github.com/zeke) going through the [hypothes.is](https://hypothes.is/) hiring process. For context, read [ASSIGNMENT.md](ASSIGNMENT.md).

## Running It

```
npm install
npm start
```

You should now have a server running on [localhost:3000](http://localhost:3000/).

[/](http://localhost:3000/) is a static page which makes an Ajax request to
[/annotations](http://localhost:3000/annotations). This endpoint returns a JSON array (in this containing
a single annotation). Each element in the array is passed through a decorator function that
cleans up the data and adds missing context like the user's handle, the article's domain,
etc. The decorated data is then injected into a pre-compiled handlebars template and rendered
in a containing DOM element.

## Things I Didn't Get To

I'm past the two hour mark on this project, so it's time to call it quits for now. Here's a list of stuff I didn't get around to implementing yet:

- linkifying URLs in text
- converting text newlines to breaks
- pretty-printing dates
- relative date strings
- designing the sharing UI

I have lots of ideas about all of this stuff, and look forward to discussing it on our next call!

Thanks,
Zeke
