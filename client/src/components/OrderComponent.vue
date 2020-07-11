<template>
  <div class="flex flex-col items-center">
    <div class="grid grid-cols-4 gap-40">
        <a href="#" @click.prevent="showModal(order)" v-for="order in allOrders" :key="order.id">
          <div class="bg-blue-500 p-16 rounded w-48 flex justify-center">
            <p class="text-4xl font-bold">{{ order.table_name }}</p>
          </div>
        </a>
    </div>
    <t-button variant="success" class="mt-10 font-semibold" @click.prevent="showModal()">Add New Reservation</t-button>
    <ModalOrder />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ModalOrder from './ModalOrder'

export default {
  title: 'Order Page',
  name: 'OrderComponent',
  components: {
    ModalOrder
  },
  methods: {
    ...mapActions(['getReservations']),
    showModal (order) {
      this.$modal.show('modal-order', order == undefined? {} : order)
    },
  },
  created() {
    this.getReservations()
  },
  computed: {
    ...mapGetters(['allOrders']),
  }
}
</script>


