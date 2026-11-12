# Green Habits, Greener Future

A responsive three-page website that encourages people to adopt everyday sustainable habits. It explains the environmental problems, presents the data, suggests simple habits to start with, and invites visitors to make a pledge that appears on a live pledge wall.

**Live site:** https://ephraim0810.github.io/green-habits-website/

## Pages

| Page | What it does |
|---|---|
| [`index.html`](index.html) | A landing page with an image carousel on pollution, deforestation and ocean waste, a statistics section on waste, recycling and water use, and a call to action |
| [`info.html`](info.html) | *Explore Green Habits*: expandable cards for practical habits such as reusable bags, greener transport and saving water |
| [`form.html`](form.html) | *Pledge Your Green Habit*: a validated pledge form with a live pledge wall |

## Features

- **Responsive layout** built on Bootstrap 5, with a collapsible navigation bar for mobile, a carousel and collapsible cards, plus custom CSS for the theme.
- **Client-side form validation** written in plain JavaScript:
  - required name field and an email format check
  - a required habit selection and a required yes/no radio question
  - inline error messages using Bootstrap's `is-invalid` styling, which clear when the form is resubmitted
- **Live character counter** for the "share an idea" field, which has a 200-character limit.
- **Pledge wall.** Each valid pledge is rendered immediately as a card on the page, built with DOM manipulation and no page reload.

## Structure

```
index.html  info.html  form.html
css/styles.css     custom theme on top of Bootstrap
js/script.js       form validation, character counter, pledge wall
images/            photos and statistics graphics
```

## Running locally

No build step is needed. Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server
```

## Tech stack

HTML5 · CSS3 · JavaScript (ES6) · Bootstrap 5.3
