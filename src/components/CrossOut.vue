<template>
  <v-container>
    <!-- Removed the button to allow external control of the cross-out state -->
    <div class="text-container">
      <span :class="{ 'crossed-out': isCrossedOut }"><slot></slot></span>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'CrossOut',
  props: {
    text: String,
    isCrossedOut: Boolean
  }
}
</script>
  
  <style scoped>
  .text-container span {
    position: relative;
    transition: color 0.5s ease;
  }
  
  .crossed-out {
    color: transparent; /* Fades out the text color */
  }
  
  .crossed-out::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 2px;
    background-color: red;
    animation: line-through 0.7s forwards; /* Adjust timing as needed */
  }
  
  @keyframes line-through {
    from {
      left: 0%;
      right: 100%;
    }
    to {
      left: 0;
      right: 0;
    }
  }
  </style>