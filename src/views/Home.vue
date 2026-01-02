<script setup>
import { reactive, onMounted } from 'vue';
import storageService from '@/services/StorageService';

const state = reactive({
  //memos:  { '1': { id: 1, title: '1', content: '1 내용' }, '2': {id: 2, title: 'ㅋㅋ', content: '2 내용'} }
  memos: {}
});

onMounted( () => state.memos = storageService.getItems() );
const remove = id => {
  console.log('id:', id);
  if(!confirm('삭제하시겠습니까?')) {
    return;
  }
  storageService.delItem(id);
  state.memos = storageService.getItems();
}

</script>

<template>
  <div class="memo-list">
    <router-link class="item" v-for="item in state.memos" :to="`/memos/${item.id}`" :key="item.id">
      <div class="d-flex pt-3">
        <div class="pb-3 mb-0 w-100">
          <div class="d-flex justify-content-between">
            <b>{{ item.title }}</b>
            <div>
              <!-- click.prevent는 클릭 이벤트 버블링 막는거다. -->
              <span role="button" @click.prevent="remove(item.id)">삭제</span>
            </div>
          </div>
          <div class="mt-2">{{ item.content }}</div>
        </div>
      </div>
    </router-link>
    <router-link to="/memos/add" class="add btn btn-primary">+ 추가하기</router-link>

  </div>
</template>
