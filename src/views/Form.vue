<script setup>
import { reactive } from 'vue';
import { StorageService } from '@/services/StorageService';
import { useRouter } from 'vue-router';

const storageService = new StorageService('myMemo');
const router = useRouter(); //라우터 객체 주소값 얻기
const state = reactive({
    memo: {        
        title: '',
        content: ''
    }
});
const submit = () => {
    storageService.addItem(state.memo);
    alert('저장하였습니다.');
    //라우팅 처리 (path: '/')로 주소값 이동 (화면 전환)
    router.push({
        path: '/'
    });
}
</script>

<template>
<form class="detail" @submit.prevent="submit">
    <div class="mb-3">
        <label for="title" class="form-label">제목</label>
        <input type="text" id="title" class="form-control p-3" v-model="state.memo.title">
    </div>
    <div class="mb-3">
        <label for="content" class="form-label">내용</label>
        <textarea id="content" v-model="state.memo.content"></textarea>
    </div>
    <button class="btn btn-primary w-100 py-3">저장</button>
</form>
</template>

<style scoped>

</style>