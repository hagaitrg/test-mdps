<script>
import DetailComponent from "@/components/ChatDetail.vue";
export default {
  component: { DetailComponent }
}
</script>

<template>
  <div class="chat-list">
    <div class="chat-title">
      <h2>Chats</h2>
      <div class="icon-title">
        <span style="margin-right: 20px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd"
              d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
          </svg></span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-filter"
            viewBox="0 0 16 16">
            <path
              d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
          </svg>
        </span>
      </div>
    </div>
    <div class="chat-search">
      <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
          viewBox="0 0 16 16">
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </span>
      <input type="text" class="input-search" placeholder="Search or start a new chat">
    </div>
    <div class="chat1">
      <img src="@/assets/img/group.jpg" width="50" height="50" alt="group-pict">
      <div class="chat1-content">
        <h4>SD 2 Only BA,Dev</h4>
        <p id="chat-p">Bu Missa SD2: pagi semua....</p>
      </div>
      <p style="margin-top: 23px;">08:00</p>
    </div>
    <div class="chat1">
      <img src="@/assets/img/person1.jpg" width="50" height="50" alt="person1-pict">
      <div class="chat1-content">
        <h4>Person 1 - SD 2</h4>
        <p id="chat-p">test</p>
      </div>
      <p style="margin-top: 23px;">16:01</p>
    </div>
    <div class="chat1">
      <img src="@/assets/img/person2.jpg" width="50" height="50" alt="person2-pict">
      <div class="chat1-content">
        <h4>Person 2 - SD 2</h4>
        <p id="chat-p">test</p>
      </div>
      <p style="margin-top: 23px;">16:01</p>
    </div>
  </div>
  <div class="chat-detail">
    <div class="header-detail">
      <img src="@/assets/img/group.jpg" width="60" height="60" alt="header-pict">
      <div class="group-name">
        <h3>SD 2 Only BA,Dev</h3>
        <h5>Arif - SD2, Arnan Dwika - SD2, Bu Missa SD2, Pak Mesakh, .....</h5>
      </div>
      <div class="button-call">
        <div class="call1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-camera-video"
            viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" />
          </svg>
          <span style="margin-left: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
              class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </span>
        </div>
        <div class="call2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-telephone"
            viewBox="0 0 16 16">
            <path
              d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg>
          <span style="margin-left: 10px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
              class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
            </svg>
          </span>
        </div>
      </div>
      <span class="icon-search">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search"
          viewBox="0 0 16 16">
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </span>
    </div>
    <div class="content-detail">
      <div class="date">
        <p>23/04/2024</p>
      </div>
      <div class="chat-bubble">
        <img src="@/assets/img/user1.png" alt="user 1" width="50" height="50">
        <div class="bubble">

        </div>
      </div>
    </div>
    <div class="chat-box">
      <div class="icon-box">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-emoji-smile"
            viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
            <path
              d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5" />
          </svg>
        </span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-paperclip"
            viewBox="0 0 16 16">
            <path
              d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0z" />
          </svg>
        </span>
      </div>
      <div class="input-chat">
        <input type="text" placeholder="Type as message">
      </div>
      <div class="icon-mic">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic"
            viewBox="0 0 16 16">
            <path
              d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
            <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3" />
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<style>
.chat-list {
  background-color: #3f3f3f;
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  width: 450px;
  border-top-left-radius: 25px;
  margin-right: 5px;
}

.chat-detail {
  display: flex;
  flex-direction: column;
  width: 1310px;
}

.header-detail {
  background-color: #3f3f3f;
  display: flex;
  flex-shrink: 0;
}

.header-detail>img {
  border-radius: 50%;
  padding: 15px;
}

.header-detail .group-name {
  margin-right: auto;
  margin-top: auto;
  color: #8b8b8b;
}

.header-detail .group-name h3 {
  margin-bottom: 0;
  color: white;
  font-family: "Roboto", sans-serif;
}

.header-detail .group-name h5 {
  margin-top: 2px;
  font-family: "Roboto", sans-serif;
}

.header-detail .button-call {
  margin-right: 100px;
  margin-top: auto;
  margin-bottom: auto;
  display: flex;
}

.header-detail .button-call .call1 {
  background-color: #313131;
  padding: 15px;
  color: white;
  border: 1px solid #0f0f0f;
}

.header-detail .button-call .call2 {
  background-color: #313131;
  padding: 15px;
  color: white;
  border: 1px solid #0f0f0f;
}

.header-detail .icon-search {
  margin-top: auto;
  margin-bottom: auto;
  padding-right: 25px;
  color: white;
}

.chat-box {
  position: absolute;
  bottom: 0;
  display: flex;
  background-color: #3f3f3f;
  padding: 20px;
  width: 66.6%;
}

.chat-box .icon-box span {
  margin-left: 10px;
  color: white;
}

.chat-box .input-chat {
  margin-right: auto;
  margin-left: 20px;
}

.chat-box .input-chat input[type=text] {
  width: 100%;
  background-color: #3f3f3f;
  border: none;
}

.chat-box .input-chat input::placeholder {
  font: 300;
}

.content-detail {
  display: flex;
  flex-direction: column;
  background: url('@/assets/img/bg.png') repeat 0 60%;
  height: 100%;
}

.content-detail .chat-bubble {
  padding: 50px;
}

.date {
  display: flex;
  background-color: #0f0f0f;
  color: white;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
}

.date p {
  font-family: "Roboto", sans-serif;
  margin-top: 0;
  margin-bottom: 0;
}

.chat-box .icon-mic {
  color: white;
}

.chat-title {
  display: flex;
  flex-direction: row;
  color: white;
}

.chat-title {
  font-family: "Roboto", sans-serif;
}

.chat-title>.icon-title {
  margin-top: 25px;
  margin-left: auto;
}

.chat1 {
  display: flex;
  flex-direction: row;
  color: #8b8b8b;
}

.chat1 img {
  border-radius: 50%;
  margin-right: 12px;
  margin-top: 15px;
}

.chat1 .chat1-content {
  margin-right: auto;
  color: #8b8b8b;
}

.chat1 .chat1-content #chat-p {
  color: #8b8b8b;
  margin-top: 5px;
}

.chat1 .chat1-content h4 {
  margin-bottom: 0;
  color: white;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
</style>