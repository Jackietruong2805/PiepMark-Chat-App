<template>
  <div class="chat-message" :class="{'friend-message': !isMine}">
    <div class="message-wrapper">
        <div
      :class="{
        myMessage: isMine && status == 'sent',
        myMessageError: isMine && status == 'sentError',
        myMissedCall: isMine && status == 'callMissed',
        myMessageSending: isMine && status == 'sending',
        yourMessage: !isMine && status == 'sent',
        yourMessageError: !isMine && status == 'sentError',
        yourMissedCall: !isMine && status == 'callMissed',
        yourMessageSending:  !isMine && status == 'sending'
      }"
    >
        <i
        v-if="status == 'callMissed' && isMine"
        class="fa fa-phone-slash my-phone-missed"
      ></i>
      <i 
      v-if="status == 'callMissed' && !isMine"
        class="fa fa-phone-slash your-phone-missed"
      ></i>
      {{ message }}
    </div>
   
    <template v-if="status == 'sentError' && isMine">
        <span
        class="message-reload"
        ><i class="fa fa-sync"></i
      ></span>
    </template>
    </div>
     
      <div class="message-status">Đã xem</div>
    
  </div>
</template>

<script setup lang="ts">
/* 
    import
*/
import { useRoute } from 'vue-router';
import { defineProps, ref } from 'vue';

/* 
  Route
*/

const route = useRoute();

const checkColor = ref('');

/* 
    Props
*/

const props = defineProps({
  message: {
    type: Object,
  },
});

/* 
  Ref
*/


let message = props.message.content;

const chatId = props.message.chatId ? props.message.chatId : 0.2;

let isMine = ref<boolean>(false);

if(chatId > 0.5){
  isMine.value = true;
}

const msgColor = props.message.msgColor;

const status = props.message.status;

console.log(checkColor);
</script>

<style scoped>
.chat-message{
  display: flex;
  align-items: flex-end;
  flex-direction: column;
}  
.friend-message{
  flex-direction: column;
  align-items: flex-start;
}
.message-status{
  margin-bottom: 12px;
  font-size: 12px;
}
.message-wrapper{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
</style>

