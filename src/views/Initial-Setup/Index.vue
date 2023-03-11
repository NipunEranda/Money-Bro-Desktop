<template>
  <div>
    <div class="main init">
      <div class="form">
        Init
      </div>
      <div class="buttons">
        <button class="btn btn-sm btn-primary float-right ms-2">Next</button>
        <button class="btn btn-sm btn-secondary float-right"  @click="this.$router.push('/')">Previous</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

.init{
  background-color: #414141;
  padding: 10px;
}

.buttons{
  align-content: right;
}

</style>