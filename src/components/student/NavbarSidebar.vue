<template>
  <input type="checkbox" id="menu" />
  <nav>
    <label>Logo</label>
    <ul>
      <li>
        <button type="button" class="btn btn-primary confirm-btn py-1 px-2">
          登出
        </button>
      </li>
    </ul>
    <label for="menu" class="menu-bar"><i class="fa-solid fa-bars"></i></label>
  </nav>
  <div class="side-menu">
    <li>
      <router-link to="/homeStudent"
        ><i class="fa-solid fa-house"></i><span>首頁</span>
      </router-link>
    </li>
    <li>
      <a href="#"
        ><i class="fa-solid fa-chart-column"></i><span>出勤紀錄</span>
      </a>
    </li>
    <li>
      <a href="#"
        ><i class="fa-solid fa-chalkboard-user"></i><span>學習紀錄</span>
      </a>
    </li>
    <!-- <li>
      <a href="#"><i class="fa-solid fa-book-open"></i><span>日誌</span></a>
    </li> -->
    <li class="mb-1">
      <a
        class="collapsed"
        data-bs-toggle="collapse"
        data-bs-target="#orders-collapse"
        aria-expanded="false"
        ><i class="fa-solid fa-book-open"></i><span>日誌</span></a
      >
      <!-- <button
        class="btn btn-toggle align-items-center collapsed"
        data-bs-toggle="collapse"
        data-bs-target="#orders-collapse"
        aria-expanded="false"
      >
        日誌
      </button> -->
      <div class="collapse" id="orders-collapse">
        <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          <router-link
            to="/createDiaryStudent"
            class="btn align-items-center sub-btn dropdown"
            >登打日誌
          </router-link>
          <router-link
            to="/checkDiaryStudent"
            class="btn align-items-center sub-btn dropdown"
            >查看日誌
          </router-link>
          <!-- <a
            class="btn align-items-center sub-btn dropdown"
            data-bs-toggle="collapse"
            data-bs-target="#dashboard-collapse"
            aria-expanded="false"
          >
            查看日誌
          </a> -->
        </ul>
      </div>
    </li>
    <!-- 111 -->
    <li>
      <a href="#"
        ><i class="fa-solid fa-envelope"></i><span>查看問題回覆</span>
      </a>
    </li>
    <li>
      <a href="#" class="Logout"><span>Logout</span></a>
    </li>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  padding: 0px;
  margin: 0px;
  list-style: none;
  box-sizing: border-box;
}
body {
  background-color: #e4ecf0;
}
a {
  text-decoration: none;
}
nav {
  background-color: #fff;
  height: 80px;
  position: fixed;
  width: 100%;
  border-bottom: #757575 0.5px solid;
  ul {
    float: right;
    margin-right: 20px;
    li {
      line-height: 80px;
      margin: 0 10px;
      a {
        color: white;
        font-size: 14px;
        padding: 6px 15px;
        font-weight: 600;
        background-color: #558aba;
        border-radius: 5px;
      }
      a:hover {
        color: white;
        background-color: #22496d;
      }
    }
  }
  .menu-bar {
    float: right;
    display: none;
    margin-right: 20px;
    font-size: 14px;
  }
}
label {
  line-height: 80px;
  font-size: 50px;
  color: #558aba;
  font-weight: 600;
  margin-left: 50px;
  cursor: pointer;
}
.side-menu {
  position: fixed;
  background-color: #fff;
  width: 250px;
  height: 100%;
  margin-top: 80px;
  li {
    a.dropdown:hover {
      background-color: rgb(118, 118, 118);
    }
    a {
      padding: 10px;
      display: block;
      line-height: 60px;
      transition: 0.5s;
      color: rgb(52, 52, 52);
    }
    a:hover {
      background-color: #558aba;
      padding-left: 20px;
      color: #fff;
    }
  }
  span {
    font-size: 14px;
    margin-left: 10px;
  }
  i {
    font-size: 14px;
    margin-left: 20px;
  }
  .Logout {
    display: none;
  }
}
#menu {
  display: none;
}
@media (max-width: 850px) {
  .side-menu a span {
    display: none;
  }
  .side-menu a i {
    display: block;
    line-height: 80px;
    text-align: center;
    margin-left: 0;
    font-size: 20px;
  }
  .side-menu {
    width: 200px;
  }
}
@media (max-width: 768px) {
  .side-menu {
    width: 150px;
  }
}
@media (max-width: 650px) {
  nav ul {
    display: none;
  }
  .side-menu {
    width: 100%;
    text-align: center;
    left: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    transition: all 0.5s;
  }
  .side-menu a span {
    display: block;
  }
  .side-menu a i {
    display: none;
  }
  .side-menu .Logout {
    display: block;
  }
  nav .menu-bar {
    display: block;
  }
}
#menu:checked ~ .side-menu {
  left: 0;
}
</style>
