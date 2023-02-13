<script src="./MenuBar.ts"></script>

<template>
  <header class="bg-black">
    <div class="h-20 flex justify-center items-center">
      <figure>
        <img class="logo" :src="logo" alt="logo" />
      </figure>
    </div>
    <div>
      <nav class="text-white">
        <ul>
          <li>
            <Router-link class="dropdown" to="/home">
              <span>HOME</span>
            </Router-link>
          </li>
          <li>
            <Router-link class="statistics" to="/statistics">
              <span>STATISTICS</span>
            </Router-link>
          </li>
          <li>
            <Router-link class="teams" to="/teams">
              <span>TEAMS</span>
            </Router-link>
          </li>

          <div class="dropdown">
            <button class="dropbtn">
              Dropdown
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <h3>Login</h3>
              <label>email</label>
              <input />
              <label>password</label>
              <input />
              <button>LOGIN</button>
              <span>forgot password?</span>
              <span>No login? Sign up here</span>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  </header>
</template>
