
<template>
  <div class="chat__top">
    <div class="chat__status">
      <img class="chat__image" :src="image" alt="" />
      <div class="status-wrapper">
        <h2 class="chat__name">{{ name }}</h2>
        <p class="Hot-ng-15-pht-tr">Hoạt động 15 phút trước</p>
      </div>
    </div>
    <div class="chat__Ellipse-21" @click="handleCloseChatBox">
      <button class="button">
        <i class="fa fa-angle-left"></i>
      </button>
    </div>
  </div>
  <div class="chat__content">
    <div class="message-wrapper">
      <ChatMessage
        :message="msg"
        v-for="msg in messageUser"
        :key="msg.fromId"
      ></ChatMessage>
    </div>
  </div>
  <div class="chat__bottom">
    <div class="chat__message">
      <form class="chat__input" @submit.prevent>
        <input
          placeholder="Nhập nội dung..."
          class="message"
          type="text"
          v-model="message"
          ref="inputMessage"
          @keyup.enter="addMessage"
        />
        <div class="chat__icon">
          <button class="button">
            <i class="fa fa-image"></i>
          </button>
          <button class="button">
            <i class="fa fa-grin-alt"></i>
          </button>
          <button
            type="submit"
            class="button sending"
            :disabled="!message"
            @click="addMessage"
          >
            <i class="fa fa-paper-plane" :class="{ 'is-active': message }"></i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
/*
  import
*/
import { ref, onMounted } from 'vue';

import { useRoute, useRouter } from 'vue-router';

/* 
  router
*/

const router = useRouter();

/* 
  stores
*/
import { useMemberStore } from '../stores/storemembers';
import { useMessageStore } from '../stores/storemessage';
let image = '';
let name = '';
const route = useRoute();
const memberStore = useMemberStore().members;
let messageStore = useMessageStore().messages;
console.log(messageStore);
memberStore.forEach((member) => {
  if (member.id == parseInt(route.params.id)) {
    image = member.image;
    name = member.name;
  }
});

/* 
  function
*/

function getRandomIntInclusive(min:number, max:number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}



console.log(messageStore);
console.log([...messageStore]);

let messageUser = [...messageStore].filter(
  (msg) => msg.fromId == route.params.id
);

// let messageUser = useMessageStore().messageUser;

// console.log('message user:', messageUser);

console.log(messageUser);
/* 

  message

*/
let messageSending = '';
let message = ref('');

console.log(message);
let messageAvailable = ref<boolean>(false);

function addMessage() {
  let status = ['sent', 'sentError', 'callMissed', 'sending'];
  messageSending = message.value;
  const chatId = Math.random();
  let msgColor: boolean = false;
  if (chatId > 0.5) {
    msgColor = true;
    status = status[Math.floor(Math.random() * status.length)];
  } else {
    status = status[Math.floor(Math.random() * status.length)];
  }

  let member = {
    chatId,
    fromId: Math.random(),
    name,
    content: messageSending,
    msgColor,
    status,
  };
  messageUser.push(member);
  messageAvailable.value = true;
  message.value = '';
  inputMessage.value?.focus();
}

const inputMessage = ref<HTMLInputElement | null>(null);

onMounted(() => {
  inputMessage.value?.focus();
});

/* 

  Close ChatBox

*/

function handleCloseChatBox() {
  router.push({ path: '/' });
}
</script>


