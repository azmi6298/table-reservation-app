<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-row grid grid-cols-4 gap-40">
      <div class="bg-blue-500 p-16 rounded" v-for="order in allOrders" :key="order.id">
        <a href="/#new_order" @click.prevent="showModal(order)">
          <p class="text-4xl font-bold">{{ order.table_name }}</p>
        </a>
      </div>
    </div>
    <t-button variant="success" class="mt-10" @click.prevent="showModal({})">Add New Reservation</t-button>
    <ModalOrder />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ModalOrder from './ModalOrder'

export default {
  name: 'OrderComponent',
  computed: {
    ...mapGetters(['allOrders']),
  },
  created() {
    this.getOrders()
  },
  methods: {
    ...mapActions(['getOrders']),
    showModal (order) {
      this.$modal.show('modal-order', order)
    },
  },
  components: {
    ModalOrder
  }
}
</script>


