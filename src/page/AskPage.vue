<template>
  <div class="ask-page">
    <div class="ask-page-header">
      질문하기
    </div>
    <div>
      <div class="ask-page-input">
        <label class="ask-page-input-label">
          제목
        </label>
        <input class="ask-page-input-area" type="text" placeholder="제목을 입력하세요" />
      </div>
      <div class="ask-page-input">
        <label class="ask-page-input-label">수업명</label>
        <input class="ask-page-input-area" type="text" placeholder="수업명을 선택해 주세요" />
      </div>
      <div class="ask-page-input">
        <label class="ask-page-input-label">내용</label>
        <div class="ask-page-input-area ask-page-input-body" spellcheck="false" placeholder="내용을 입력하세요" contenteditable=true></div>
      </div>
      <div class="ask-page-input">
        <label class="ask-page-input-label">리워드 걸기</label>
        <input class="ask-page-input-area" type="text" placeholder="0점 이상의 포인트를 입력하세요" />
      </div>
    </div>
    <div class="name-hide-area">
      <div class="name-hide-label">별명을 가리겠습니까?</div>
      <div class="name-hide-btn-cover">
        <button class="name-hide-btn name-hide-yes">네</button>
        <button class="name-hide-btn name-hide-no">아니오</button>
      </div>
    </div>
    <div class="post-btn-cover">
      <button class="post-btn">게시하기</button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.ask-page {
  margin: 0 10rem 10rem;
}
.ask-page-header {
  font-size: 1.3rem;
  font-weight: bold;
  height: 10rem;
  line-height: 10rem;
  text-align: center;
}
.ask-page-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}
.ask-page-input-label {
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}
.ask-page-input-area {
  border: 1px solid rgb(230, 230, 230);
  line-height: 2rem;
  font-size: 0.8rem;
  height: 1.8rem;
  border-radius: 0.2rem;
  padding: 0 0.5rem;
}
.ask-page-input-area:focus {
  outline: none;
}
.ask-page-input-area::placeholder {
  color: rgb(161, 161, 161);
  font-size: 0.8rem;
}
.ask-page-input-body {
  height: 15rem;
}
.ask-page-input-body:empty::before, .ask-page-input-body:empty::before {
    content: attr(placeholder);
    color: rgb(161, 161, 161);
}
.post-btn {
  background-color: black;
  border-radius: 0.5rem;
  color: white;
  border: none;
  height: 2.2rem;
  width: 15rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.post-btn-cover {
  margin-top: 3rem;
  position: relative;
}
.name-hide-area {
  width: 14rem;
  margin: 0 auto;
}
.name-hide-label {
  text-align: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}
.name-hide-btn {
  background-color: rgb(241, 241, 241);
  border: none;
  height: 2rem;
  border-radius: 0.3rem;
}
.name-hide-btn-cover {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.name-hide-yes {
  margin-right: 0.3rem;
}
.name-hide-no {
  margin-left: 0.3rem;
}
</style>