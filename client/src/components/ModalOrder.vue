<template>
  <div>
    <modal name="modal-order" @before-open="beforeOpen" @opened="opened">
     <form @submit.prevent="onSubmit">
      <h1>{{ showTableName }}</h1>
      <div class="form-group">
        <label for="customer-name">Table</label>
        <input type="text" v-model.lazy="order.table_name" @keydown.shift.tab.prevent="" ref="table_name">
      </div>
      <div class="form-group">
        <label for="customer-name">Order Code</label>
        <input type="text" v-model.lazy="order.code" @keydown.shift.tab.prevent="">
      </div>
      <div class="form-group">
        <label for="customer-name">Customer Name</label>
        <input type="text" v-model.lazy="order.customer_name">
      </div>
      <div class="form-group">
        <label for="employee-name">Employee Name</label>
        <input type="text" v-model.lazy="order.employee_name">
      </div>
      <div class="form-group">
        <label for="menu-name">Menu to Order</label>
        <input type="text" v-model.lazy="order.menu_name">
      </div>
      <div class="form-group">
        <label for="quantity">Quantity</label>
        <input type="text" v-model.lazy="order.quantity_ordered">
      </div>
      <div class="form-group">
        <button type="submit">Save</button>
      </div>
      <div class="form-group">
        <button @keydown.tab.exact.prevent="" @click.prevent="removeReservation" v-if="order._id != undefined">Delete</button>
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