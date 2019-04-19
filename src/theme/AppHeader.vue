<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="/">
      <img src="https://media.karousell.com/media/photos/products/2018/01/25/fsmonkey__daniel_case_1516871783_fc5bfca8.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/">
        Home
      </a>

      <a class="navbar-item" href="/interests">
        Interests
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" href="/vue-examples">
            Vue Examples Simple Events
          </a>
          <a class="navbar-item" href="/vue-examples-css">
            Vue Examples CSS Styling
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>
