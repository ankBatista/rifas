<template>
  <div>
    <CardComponent />
    <TableComponent />


  </div>
</template>

<script>
import CardComponent from '@/components/basic/CardComponent.vue'
import TableComponent from '@/components/basic/TableComponent.vue';


export default {
  name: 'AboutComponent',
  components: {
    CardComponent,
    TableComponent,
  }
}

</script>