<template>
  <div class="container-fluid">
    <div class="content-box inner">
      <p class="title"><strong>帳號管理</strong></p>
      <div class="d-flex align-items-center">
        <div class="dropdown mx-1">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            學員
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a class="dropdown-item" value="1">選項一</a></li>
            <li><a class="dropdown-item" href="#">選項二</a></li>
            <li><a class="dropdown-item" href="#">選項三</a></li>
          </ul>
        </div>
        <div class="search">
          <input
            class="searchInput content-box-border"
            type="text"
            placeholder="搜尋姓名 :"
          />
          <button type="button" class="btn btn-primary confirm-btn">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <br />
      </div>
      <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex">
          <div class="dropdown mx-1 mt-1">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              班別
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" value="1">選項一</a></li>
              <li><a class="dropdown-item" href="#">選項二</a></li>
              <li><a class="dropdown-item" href="#">選項三</a></li>
            </ul>
          </div>
          <div class="dropdown mx-1 mt-1">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              班級
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a class="dropdown-item" value="1">選項一</a></li>
              <li><a class="dropdown-item" href="#">選項二</a></li>
              <li><a class="dropdown-item" href="#">選項三</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-1 text-end">
          <button type="button" class="btn btn-primary confirm-btn">
            批次新增學員
          </button>
        </div>
      </div>
      <hr />
      <!-- <p>測試用內文</p> -->
      <div class="checkBox">
        <div class="checkDiv">
          <div class="d-flex">
            <div class="text">
              <div>學號</div>
            </div>
            <div class="text">
              <div>班別</div>
            </div>
            <div class="text">
              <div>班級</div>
            </div>
            <div class="text">
              <div>姓名</div>
            </div>
            <div class="text">
              <div>查看</div>
            </div>
          </div>
        </div>
        <div class="checkDiv">
          <div class="d-flex align-items-center">
            <div class="text">
              <div>1</div>
            </div>
            <div class="text">
              <div>前端班</div>
            </div>
            <div class="text">
              <div>102</div>
            </div>
            <div class="text">
              <div>王小明</div>
            </div>
            <div class="text">
              <button type="button" class="btn btn-primary confirm-btn">
                詳細資訊
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
</script>

<style lang="scss" scoped>
.inner {
  width: 85%;
  height: 90vh;
  .searchInput {
    height: 45px;
    border-radius: 5px;
  }
  .checkDiv {
    width: 90%;
    height: 10vh;
    margin-left: 80px;
  }
  .checkDiv button:hover {
    background-color: #22496d;
  }
  .text {
    width: 30%;
  }
  .checkBox {
    height: 450px;
    overflow-y: scroll;
  }
}
</style>
