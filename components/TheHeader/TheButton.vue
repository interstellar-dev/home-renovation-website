<template>
  <div class="button-container">
    <a href="#" class="button">
      <slot/>
    </a>
  </div>
</template>

<style lang="css" scoped>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

a {
  padding: 1rem 3rem;
  color: #f4f4f4;
  text-transform: uppercase;
  font-weight: 700;
}

.button {
  text-decoration: none;
  border: 1px solid var(--accent);
  position: relative;
  overflow: hidden;
}

.button:hover {
  box-shadow: 1px 1px 25px 10px rgba(104, 248, 240, 0.4);
}

.button:before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      120deg,
      transparent,
      rgba(104, 248, 240, 0.4),
      transparent
  );
  transition: all 650ms;
}

.button:hover:before {
  left: 100%;
}
</style>
