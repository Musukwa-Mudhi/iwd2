

Q2.1

1. `<table>` — Required understanding of the parent-child hierarchy: `table` → `thead`/`tbody` → `tr` → `th`/`td`. Getting `scope="col"` right for accessibility added extra complexity.

2. `<form>` with `<fieldset>` and `<legend>` — Grouping related inputs correctly inside fieldsets while linking every `<label>` to its input using matching `for` and `id` attributes required careful attention.

3. `<select>` with `<option>`— Had to understand that the first option needs an empty `value=""` to trigger the `required` validation, otherwise the browser accepts it as a valid selection.

4. `<abbr>` — A less commonly used element. Using it correctly means wrapping shortened terms (like *ISX, QSK*) with a `title` attribute so the full meaning appears on hover, which is both semantic and accessible.

5. `<article>`— Understanding when to use `<article>` versus `<section>` was challenging. An `<article>` should be self-contained content that could stand on its own (like each job role entry), whereas `<section>` groups related content under a theme.

Q2.2 

`<header>` — Used for the top banner containing the name, title, location, and call-to-action button. It clearly marks the introductory block of the page.
 `<nav>` — Wraps the navigation bar with links to each section, telling browsers and screen readers this is the site's primary navigation.
`<main>` — Wraps all the core content (about, experience, skills, etc.), signalling that everything inside is the primary purpose of the page.
`<section>` — Each topic area (About, Experience, Skills, Machines, Hire Me, References) is wrapped in its own `<section>` with a unique `id`, making the page well-organised and easy to navigate.
`<article>`— Each individual job role (FQM, J&J Transport, China Comms) is wrapped in an `<article>` because each one is a self-contained, standalone piece of content.
`<footer>`— Contains the copyright line and contact email at the bottom of the page.


Q2.3 

The most useful element was `<section>` with the `id` attribute. It divided the entire page into six clearly named, navigable regions — `#about`, `#experience`, `#skills`, `#machines`, `#hire`, and `#references`. This made the navigation bar's anchor links (`href="#skills"` etc.) work perfectly, allowing users to jump directly to any part of the page. Without `<section>` and `id`, the page would be one unbroken block of content with no structure or navigability.
