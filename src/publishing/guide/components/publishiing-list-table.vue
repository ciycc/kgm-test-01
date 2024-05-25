<script setup>
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  dataObj: {
    type: Object,
    default: null,
  },
});

const route = useRoute();
const url = ref(null);
const arrData = ref([]);
url.value = route.path;
watchEffect(() => {
  if (url.value != null && url.value.includes('total')) {
    arrData.value = [
      ...Object.values(props.dataObj.CAT1),
      ...Object.values(props.dataObj.CAT2),
      ...Object.values(props.dataObj.CAT3),
      ...Object.values(props.dataObj.CAT4),
      ...Object.values(props.dataObj.CAT5),
    ];
  } else if (url.value != null && url.value.includes('cat1')) {
    arrData.value = Object.values(props.dataObj.CAT1);
  } else if (url.value != null && url.value.includes('cat2')) {
    arrData.value = Object.values(props.dataObj.CAT2);
  } else if (url.value != null && url.value.includes('cat3')) {
    arrData.value = Object.values(props.dataObj.CAT3);
  } else if (url.value != null && url.value.includes('cat4')) {
    arrData.value = Object.values(props.dataObj.CAT4);
  } else if (url.value != null && url.value.includes('cat5')) {
    arrData.value = Object.values(props.dataObj.CAT5);
  }
});
</script>
<template>
  <div class="publishing-list-table">
    <table>
      <caption class="blind">퍼블리싱 표</caption>
      <colgroup>
        <col style="width: 50px">
        <col style="width: auto">
        <col style="width: auto">
        <col style="width: auto">
        <col style="width: auto">
        <col style="width: auto">
        <col style="width: auto">
        <col style="width: auto">
        <col style="width: auto">
        <col style="width: 100px">
        <col style="width: 100px">
        <col style="width: 80px">
        <col style="width: 80px">
        <col style="width: auto">
      </colgroup>
      <thead>
        <tr>
          <th>NO</th>
          <th>ID</th>
          <th>D1</th>
          <th>D2</th>
          <th>D3</th>
          <th>D4</th>
          <th>D5</th>
          <th>화면명</th>
          <th>PATH</th>
          <th>시작일</th>
          <th>완료일</th>
          <th>담당자</th>
          <th>진행상태</th>
          <th>비고</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in arrData" :key="item.ID">
          <td>{{ item.NO }}</td>
          <td>{{ item.ID }}</td>
          <td>{{ item.D1 }}</td>
          <td>{{ item.D2 }}</td>
          <td>{{ item.D3 }}</td>
          <td>{{ item.D4 }}</td>
          <td>{{ item.D5 }}</td>
          <td>{{ item["화면명"] }}</td>
          <td><router-link :to="item.PATH">{{ item.PATH }}</router-link></td>
          <td>{{ item["시작일"] }}</td>
          <td>{{ item["종료일"] }}</td>
          <td>{{ item["담당자"] }}</td>
          <td>{{ item["진행상태"] }}</td>
          <td>{{ item["비고"] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
  .publishing-list-table {
    table {
      min-width: rem(800);
      th, td {
        text-align: center;
        padding: rem(10) rem(8);
      }
      th {
        font-weight: 500;
        white-space: nowrap;
        color: #eee;
        background: #421d6a;
        border-bottom: 1px solid #efefef;
      }
      td {
        font-weight: 400;
        border-bottom: 1px solid #eee;
        font-size: rem(13);
        vertical-align: middle;
      }
    }
  }
</style>