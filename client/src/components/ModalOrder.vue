<template>
  <div class="text-gray-900">
    <modal name="modal-order" :width="600" :height="750" @before-open="beforeOpen" @opened="opened">
      <div class="p-2 m-2 border-b border-gray-300 flex flex-row items-center justify-between">
        <p class="text-2xl font-bold">{{ showTableName }}</p>
        <label class="material-icons text-red-600 font-extrabold" @click.prevent="hideModal">close</label>
      </div>
      <div class="p-4 space-y-5">
        <div class="flex flex-col">
          <label for="customer-name">Table</label>
          <t-input class="form-input border-blue-500 border-2 border-opacity-25" v-model.lazy="order.table_name" @keydown.shift.tab.prevent="" ref="table_name" />
        </div>
        <div class="flex flex-col">
          <label for="customer-name">Order Code</label>
          <t-input class="form-input border-blue-500 border-2 border-opacity-25" v-model.lazy="order.code" @keydown.shift.tab.prevent="" />
        </div>
        <div class="flex flex-col">
          <label for="customer-name">Customer Name</label>
          <t-input class="form-input border-blue-500 border-2 border-opacity-25" v-model.lazy="order.customer_name" />
        </div>
        <div class="flex flex-col">
          <label for="employee-name">Employee Name</label>
          <t-input class="form-input border-blue-500 border-2 border-opacity-25" v-model.lazy="order.employee_name" />
        </div>
        <div class="flex flex-col">
          <label for="menu-name">Menu to Order</label>
          <t-select placeholder="Choose a menu" class="border-blue-500 border-2 border-opacity-25" name="menu-input" :options="menus" v-model.lazy="order.menu_name" />
        </div>
        <div class="flex flex-col">
          <label for="quantity">Quantity</label>
          <div class="flex">
            <t-input class="flex-grow form-input border-blue-500 border-2 border-opacity-25" v-model="order.quantity_ordered" />
            <button class="material-icons text-red-500 text-4xl ml-2" @click.prevent="decrement">remove_circle</button>
            <button class="material-icons text-blue-500 text-4xl ml-2" @click.prevent="increment">add_circle</button>
          </div>
        </div>
        <div class="flex flex-row justify-center space-x-10">
          <t-button variant="primary" size="sm" @click="onSubmit">Save</t-button>
          <t-button variant="danger" size="sm" @keydown.tab.exact.prevent="" @click.prevent="removeReservation" v-if="order._id != undefined">Delete</t-button>
        </div>
      </div>
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
      if (this.order.quantity_ordered == undefined) {
        this.$set(this.order, 'quantity_ordered', 0)
      }
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
    },
    increment() {
      this.order.quantity_ordered += 1
    },
    decrement() {
      if (this.order.quantity_ordered > 0) this.order.quantity_ordered -= 1
    }
  },
  computed: {
    showTableName() {
      if (this.order.table_name != undefined) {
        return this.order.table_name
      } else {
        return "New Reservation"
      }
    },
  },
  data() {
    return {
      order : {
        code: '',
        table_name: '',
        customer_name: '',
        employee_name: '',
        menu_name: '',
        quantity_ordered: 0
      },
      menus : [
        { value: 'rendang', text: 'Rendang'},
        { value: 'nasi goreng', text: 'Nasi Goreng'},
        { value: 'bulgogi', text: 'Bulgogi'}
      ]
    }
  }
}
</script>