<script setup>
import { reactive, onMounted } from 'vue';
import { StorageService } from '@/services/StorageService';

//StorageService 클래스 내에 있는 생성자 호출!!
//생성자 호출시에는 new 키워드가 앞에 있어야 한다.
const storageService = new StorageService('myMemo'); 

const state = reactive({
  memos: {}
});

onMounted( () => state.memos = storageService.getItems() );

</script>

<template>
  <div class="memo-list">
    <router-link class="item" v-for="item in state.memos"  :to="`/memos/${item.id}`">

    </router-link>
  </div>
</template>
