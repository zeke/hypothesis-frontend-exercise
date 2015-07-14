# Frontend Exercise

You've applied for a job with us as a frontend developer, so we’d like you to
show us some of your work.

You get to do this in your own time, bringing the code you write to a short
follow-up interview. Of course, you probably have other important things to do,
so the exercise is intended to be relatively short. Please don't feel you need
to spend more than one or two hours on it.

We want you to use this as an opportunity to show us the kind of work you'd do
for us if hired. Please write code as you would if you were intending on putting
it into production unless otherwise specified.

## Specification

You'll find some files in this directory:

- `markup.html`: an example which shows a single annotation in a standalone
  page.
- `data.json`: a JSON document containing a single annotation as returned by an
  imaginary API.
- `assets/`: a stylesheet and a few assets used by `markup.html`.

What we'd like you do do falls into two parts:

### 1. Rendering an annotation from API data

We'd like you to make a page that uses the data in `data.json` to draw the
displayed annotation using the example markup from `markup.html`. There are many
possible ways of doing this, and we'd like you to choose whichever one you're
comfortable with.

Please observe the following guidelines:

- If you want to include a server-side component in your submission, you may,
  although this is entirely optional.
- If you do use a server-side component, you should assume that only the
  client-side component has access to the JSON data. (That is: please don't just
  render from a template in the server-side component. That may indeed be best
  practice in some contexts, but we're trying to evaluate your frontend skills!)
- You don't need to replicate what you see in `markup.html` *exactly*. Use your
  best judgement.

### 2. Adding "share this annotation" functionality

Once you've got that working, we'd like you to add a "share this annotation"
feature to the resulting web page. That is, we want you to add a user interface
feature to the annotation "card" that allows a user to share a link to the
annotation (included in the JSON data as `html_url`) with their friends.

This could be as simple as showing the user the URL to copy and paste, or you
may wish to enable "Share to Facebook" or "Share to Twitter" functionality. We
suggest you *pick one and do it well* rather than trying to provide multiple
integrations.

There are many possible approaches to this part of the exercise, and we'd like
you to take whichever approach you are most comfortable with and which you deem
most appropriate for the context.

## Notes

Some things aren't specified in the above "specification." This is intentional.
Please make the best decisions you can given the information provided.

If you want to make changes to the provided markup or CSS in order to make
things easier, you can (and should!), but we may ask you to explain your
decision process if you do.

That said, if you think something is really badly specified or confusing, please
do get in touch for clarification: nickstenning@hypothes.is.
