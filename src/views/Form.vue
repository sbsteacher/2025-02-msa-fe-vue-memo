<script setup>
import { reactive } from 'vue';
import { StorageService } from '@/services/StorageService';
import { useRouter } from 'vue-router';

const storageService = new StorageService('myMemo');
</script>

<template>

</template>

<style scoped>

</style>