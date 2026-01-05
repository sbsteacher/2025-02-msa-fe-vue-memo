<script setup>
import { reactive, onMounted } from 'vue';
import storageService  from '@/services/StorageService';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter(); //라우터 객체 주소값 얻기(주소값 이동)
const route = useRoute(); //라우트 객체 주소값 얻기(PathVariable 값 가져오기)

const state = reactive({
    memo: {        
        title: '',
        content: ''
    }
});
const submit = () => {

    if(route.params.id) {
        storageService.setItem(state.memo);
        alert('수정하였습니다.');
    } else {
        storageService.addItem(state.memo);
        alert('저장하였습니다.');
    }

    //라우팅 처리 (path: '/')로 주소값 이동 (화면 전환)
    router.push({
        path: '/'
    });
}

onMounted(() => {
    console.log('route.params.id:', route.params.id);
    if(route.params.id) {        
        const id = Number(route.params.id);
        state.memo = storageService.getItem(id);
    }
})
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
    <button class="btn btn-primary w-100 py-3">{{ route.params.id ? '수정' : '저장' }}</button>
</form>
</template>

<style scoped>

</style>