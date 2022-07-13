<script setup>
import { ref, onMounted } from "vue";

const date = ref();

// For demo purposes assign range from the current date
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
  return Date;
});
function systemReaction() {
  let btn = document.querySelector("#show");
  let infoModal = document.querySelector("#infoModal");
  let close = document.querySelector("#close");
  btn.addEventListener("click", function () {
    infoModal.showModal();
  });
  close.addEventListener("click", function () {
    infoModal.close();
  });
}
</script>

<template>
  <div class="inner">
    <!-- 內容區 -->
    <div class="container-fluid main">
      <button type="button" class="btn btn-primary confirm-btn">Confirm</button>
      <button type="button" class="btn btn-primary cancel-btn">Cancel</button>

      <!-- 下拉式選單 -->
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          下拉式選單
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">選項一</a></li>
          <li><a class="dropdown-item" href="#">選項二</a></li>
          <li><a class="dropdown-item" href="#">選項三</a></li>
        </ul>
      </div>

      <!-- 日期選擇套件 Vue3-Datepicker -->
      <Datepicker class="datepicker" v-model="date" range />

      <!-- 白色內容方塊 -->
      <div class="content-box">
        <p class="title"><strong>測試標題</strong></p>
        <hr />
        <p>測試用內文</p>
        <button type="button" class="btn btn-primary confirm-btn">test</button>
      </div>

      <div class="content-box-border">
        <p class="title"><strong>測試標題</strong></p>
        <hr />
        <p>測試用內文</p>
      </div>
    </div>
  </div>

  <div class="serveIcon">
    <button id="show" class="btn-primary icon" @click="systemReaction">
      <i class="fa-solid fa-envelopes-bulk text-light"></i>
    </button>
    <dialog id="infoModal">
      <div class="mx-5">
        <div class="text-primary my-4">系統反應區</div>
        <div class="dialogTitle mb-3">
          <input type="text" placeholder="標題 :" />
        </div>
        <div class="question mb-3">
          <textarea type="text" placeholder="請輸入問題..." />
        </div>
        <div class="text-end">
          <button id="close" class="btn btn-primary text-light">close</button>
        </div>
      </div>
    </dialog>
  </div>
</template>

<style lang="scss" scoped>
.inner {
  position: fixed;
  margin-top: 130px;
  margin-left: 300px;
  margin-right: 50px;
  background-color: #fff;
}
.serveIcon {
  position: fixed;
  margin-top: 90vh;
  margin-left: 95vw;

  .icon {
    width: 50px;
    height: 50px;
    border: 0 * 9;
    border-radius: 50%;
  }
  dialog {
    width: 50%;
    height: 50%;
    border: none;
    box-shadow: 0 2px 6px #ccc;
    border-radius: 10px;
    margin-top: 30vh;
    margin-left: 30vw;
  }
  dialog::backdrop {
    background-color: rgba(24, 24, 24, 0.228);
  }
  .dialogTitle input {
    width: 100%;
  }
  .question textarea {
    width: 100%;
    height: 20vh;
  }
}

@media (max-width: 850px) {
  .inner {
    margin-left: 250px;
    margin-right: 50px;
  }
}
@media (max-width: 768px) {
  .inner {
    margin-left: 200px;
    margin-right: 50px;
  }
}
@media (max-width: 650px) {
  .inner {
    margin-left: 150px;
    margin-right: 50px;
  }
}
</style>
