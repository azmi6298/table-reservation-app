<template>
  <div class="text-gray-900">
    <modal name="modal-order" :width="600" :height="700" @before-open="beforeOpen" @opened="opened">
     <form @submit.prevent="onSubmit" class="p-4 space-y-5">
      <p class="text-2xl mb-4">{{ showTableName }}</p>
      <div class="form-group flex flex-col">
        <label for="customer-name">Table</label>
        <t-input class="form-input border-blue-500 border-2 border-opacity-25" v-model.lazy="order.table_name" @keydown.shift.tab.prevent="" ref="table_name" />
      </div>
      <div class="form-group flex flex-col">
        <label for="customer-name">Order Code</label>
        <t-input class="form-input border-blue-500 border-2 border-opacity-25" v-model.lazy="order.code" @keydown.shift.tab.prevent="" />
      </div>
      <div class="form-group flex flex-col">
        <label for="customer-name">Customer Name</label>
        <t-input class="form-input border-blue-500 border-2 border-opacity-25" v-model.lazy="order.customer_name" />
      </div>
      <div class="form-group flex flex-col">
        <label for="employee-name">Employee Name</label>
        <t-input class="form-input border-blue-500 border-2 border-opacity-25" v-model.lazy="order.employee_name" />
      </div>
      <div class="form-group flex flex-col">
        <label for="menu-name">Menu to Order</label>
        <t-input class="form-input border-blue-500 border-2 border-opacity-25" v-model.lazy="order.menu_name" />
      </div>
      <div class="form-group flex flex-col">
        <label for="quantity">Quantity</label>
        <t-input class="form-input border-blue-500 border-2 border-opacity-25" v-model.lazy="order.quantity_ordered" />
      </div>
      <div class="form-group flex flex-row justify-center space-x-10">
        <t-button variant="primary" size="sm" type="submit">Save</t-button>
        <t-button variant="danger"  size="sm" @keydown.tab.exact.prevent="" @click.prevent="removeReservation" v-if="order._id != undefined">Delete</t-button>
      </div>
     </form>
    </modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: "ModalOrder",
  methods: {
    beforeOpen (event) {
      this.order = event.params
    },
    opened() {
      this.$refs.table_name.focus()
    },
    hideModal() {
      this.$modal.hide('modal-order')
    },
    ...mapActions(['updateOrderData', 'addReservation', 'deleteReservation']),
    updateOrder() {
      this.updateOrderData(this.order)
    },
    addNewReservation() {
      this.addReservation(this.order)
    },
    removeReservation(){
      this.deleteReservation(this.order._id)
      this.hideModal()
    },
    onSubmit() {
      if (this.order._id == undefined) {
        this.addNewReservation()
      } else {
        this.updateOrder()
      }
      this.hideModal()
    }
  },
  computed: {
    showTableName() {
      if (this.order.table_name != undefined) {
        return this.order.table_name
      } else {
        return "New Reservation"
      }
    }
  },
  data() {
    return {
      order : {
        code: '',
        table_name: '',
        customer_name: '',
        employee_name: '',
        menu_name: '',
        quantity_ordered: ''
      },
    }
  }
}
</script>