<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">

      <a class="navbar-brand" href="">
        <img src="../assets/company-logo_60x60.png">
        The Cream Tart Company.
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <div class="navbar-nav mr-auto">
          <a class="nav-item nav-link"><router-link to='/'>Home</router-link></a>
          <a class="nav-item nav-link"><router-link to='/about'>About</router-link></a>
          <a class="nav-item nav-link"><router-link to='/gallery'>Gallery</router-link></a>
          <a class="nav-item nav-link"><router-link to='/contact'>Contact</router-link></a>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>