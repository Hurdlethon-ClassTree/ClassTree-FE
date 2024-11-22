<template>
  <div class="search-title">
    검색 기록
  </div>
  <div class="search-history-list">
    <div class="search-history">검색기록1  Searched on: 14/02/2023</div>
    <div class="search-history">검색기록2  Searched on: 14/02/2023</div>
    <div class="search-history">검색기록3  Searched on: 14/02/2023</div>
    <div class="search-history">검색기록4  Searched on: 14/02/2023</div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.search-title {
  font-size: 1.5rem;
  font-weight: bold;
  padding-left: 5rem;
  height: 10rem;
  line-height: 10rem;
  border-bottom: 1px solid rgb(236, 236, 236);
}
.search-history-list {
  margin-top: 2rem;
}
.search-history {
  text-align: center;
  margin-bottom: 0.7rem;
}
</style>