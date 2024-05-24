<script>
</script>

<template>
  <div class="chat-list">
    <div class="chat-title">
      <h2>Calls</h2>
      <div class="icon-title">
        <span style="margin-right: 20px;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
            fill="currentColor" class="bi bi-telephone-plus" viewBox="0 0 16 16">
            <path
              d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
            <path fill-rule="evenodd"
              d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5" />
          </svg></span>
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
      <img src="@/assets/img/person1.jpg" width="50" height="50" alt="group-pict">
      <div class="chat1-content">
        <h4>Person 1 - SD 2</h4>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-camera-video-off" viewBox="0 0 16 16">
            <path fill-rule="evenodd"
              d="M10.961 12.365a2 2 0 0 0 .522-1.103l3.11 1.382A1 1 0 0 0 16 11.731V4.269a1 1 0 0 0-1.406-.913l-3.111 1.382A2 2 0 0 0 9.5 3H4.272l.714 1H9.5a1 1 0 0 1 1 1v6a1 1 0 0 1-.144.518zM1.428 4.18A1 1 0 0 0 1 5v6a1 1 0 0 0 1 1h5.014l.714 1H2a2 2 0 0 1-2-2V5c0-.675.334-1.272.847-1.634zM15 11.73l-3.5-1.555v-4.35L15 4.269zm-4.407 3.56-10-14 .814-.58 10 14z" />
          </svg> Missed</p>
      </div>
      <p style="margin-top: 23px;">16:01</p>
    </div>
    <div class="chat1">
      <img src="@/assets/img/person2.jpg" width="50" height="50" alt="group-pict">
      <div class="chat1-content">
        <h4>Person 2 - SD 2</h4>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-telephone-inbound" viewBox="0 0 16 16">
            <path
              d="M15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0m-12.2 1.182a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
          </svg> Missed</p>
      </div>
      <p style="margin-top: 23px;">16:01</p>
    </div>
  </div>
  <div class="detail-calls">
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
  margin-right:2px
}

.detail-calls{
  background-color: #3f3f3f;
  display: flex;
  flex-direction: column;
  width: 1310px;
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

.chat1 .chat1-content p {
  color: red;
  display: flex;
  gap: 5px;
  margin-top: 5px;
}

.chat1 .chat1-content h4 {
  margin-bottom: 0;
  color: white;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
</style>