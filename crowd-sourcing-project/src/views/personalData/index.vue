<template>
  <div class="personal-data">
    <div class="intro">
      <div class="left">
        <div class="photo"></div>
        <div class="user">
          <div>
            Username:
            <el-input v-if="editUserName" v-model="userName" @blur="() => editUserName = false"></el-input>
            <span v-else @click="() => editUserName = true">
              <span class="content">{{ userName }}</span>
              <i class="el-icon-edit" style="color: rgb(65, 222, 202);margin-left: 5px;"></i>
            </span>
          </div>

          <div>
            Personal Profile: 
            <el-input v-if="editDes" v-model="des" @blur="() => editDes = false"></el-input>
            <span v-else @click="() => editDes = true">
              <span class="content">{{ des }}</span>
              <i class="el-icon-edit" style="color: rgb(65, 222, 202);margin-left: 5px;"></i></span>
          </div>

          <div>
            <a href="">Linktree link</a>
          </div>

          <div>
            Working language: 
            <el-select v-if="editLang" v-model="lang" @change="() => editLang = false" multiple>
              <el-option label="Chinese" value="Chinese"></el-option>
              <el-option label="English" value="English"></el-option>
              <el-option label="French" value="French"></el-option>
            </el-select>
            <span v-else @click="() => editLang = true">
              <span class="content">{{ lang.join(',') }}</span>
              <i class="el-icon-edit" style="color: rgb(65, 222, 202);margin-left: 5px;"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="inner">
          <div class="title">Personal skills</div>
          <div class="skill-icon">
            <img src="../../assets/images/vue.png" width="32px" alt="">
            <img src="../../assets/images/js.png" width="32px" alt="">
            <img src="../../assets/images/java.png" width="32px" alt="">
            <img src="../../assets/images/python.png" width="32px" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="history">
      <div v-for="item in list" :key="item.id" class="container">
        <div class="name">
          <img src="../../assets/images/progress.png" alt="" width="40" style="margin-right: 10px;">
          {{ item.name }}
        </div>
        <div class="des">{{ item.des }}</div>
        <div class="btn">
          <el-button type="primary">Github link</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PersonalData',
  data() {
    return {
      userName: 'Lulu',
      editUserName: false,
      des: 'I am a front-end programmer with solid background in HTML, CSS and JavaScript. I am good at using Vue front-end frames to develop various apps. I know Java and Python.',
      editDes: false,
      lang: ['Chinese', 'English'],
      editLang: false,
      list: [
        {
          id: 1,
          name: 'Participate the development of Keke forum.',
          des: 'This project is a social media application which is developed by Vue front-end frame and Spring boot. This application has functions such as users log-in, personal profile, messages sending, posting, following and commenting. This application also has a good design of webpage for users and interaction experiences. This application integrates front-end applications with back-end API, which can process complex data interaction and status management. It also supports real-time notification and searching.'
        },
        {
          id: 2,
          name: 'Participate Niuke front-end development',
          des: 'This project is an open online education platform which is developed by Vue front-end frame and Django. This platform has functions such as course releases, students registration, uploading videos, online tests and grades management. It has good user interactions and is easy to operate. This front-end application integrates with back-end API, which can process mass data and business logic. It also supports various types of courses and learning methods.'
        },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.personal-data {
  display: flex;
  color: #fff;
  font-size: 13px;
  flex-direction: column;
  .intro {
    height: 150px;
    margin-top: 20px;
    padding-bottom: 20px;
    display: flex;
    border-bottom: 1px solid #1a1f1f;
    .left {
      width: 50%;
      display: flex;
      .photo {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background: url('../../assets/images/profile.jpg') no-repeat center/cover;
      }
      .user {
        flex: 1;
        margin-left: 25px;
        display: flex;
        flex-direction: column;
        > div {
          margin-bottom: 10px;
        }
      }
      .content {
        color: #aaa;
      }
    }
    .right {
      flex: 1;
      background:#171c1c;
      height: 100%;
      display: flex;
      margin-left: 50px;
      border-radius: 30px;
      .inner {
        padding: 14px 20px;
        .title {
          font-size: 20px;
          font-weight: 500;
        }
        .skill-icon {
          margin-top: 25px;
          > img {
            margin-right: 15px;
          }
        }
      }
    }
  }

  .history {
    margin-top: 20px;
    .container {
      padding: 18px 24px;
      border: 1px solid #333D3C;
      border-radius: 20px;
      margin-bottom: 20px;
    }
    .name {
      margin-bottom: 10px;
      font-size: 20px;
      display: flex;
      align-items: center;
    }
    .des {
      margin-bottom: 30px;
      color: rgb(167, 168, 168);
    }
    .btn {
      text-align: right;
    }
  }
}
</style>