import axios from 'axios'
import Vue from 'vue'

const url = 'http://localhost:5000/api/v1/orders/'

const state = { orders: [] }

const actions = {
  async getOrders({ commit }) {
    const response = await axios.get(url)
    commit('GET_ORDERS', response.data)
  },
  async updateOrderData({ commit }, orderData){
    const response = await axios.patch(`${url}${orderData['_id']}`, {
      code: orderData['code'],
      table_name: orderData['table_name'],
      employee_name: orderData['employee_name'],
      customer_name: orderData['customer_name'],
      menu_name: orderData['menu_name'],
      quantity_ordered: orderData['quantity_ordered'],
    })
    commit('UPDATE_ORDER', response.data)
  },
  async addReservation({ commit }, orderData) {
    const response = await axios.post(url, {
      code: orderData['code'],
      table_name: orderData['table_name'],
      employee_name: orderData['employee_name'],
      customer_name: orderData['customer_name'],
      menu_name: orderData['menu_name'],
      quantity_ordered: orderData['quantity_ordered'],
    })
    commit('ADD_RESERVATION', response.data)
  },
  async deleteReservation({ commit }, orderId) {
    const response = await axios.delete(`${url}${orderId}`)
    commit('DELETE_RESERVATION', response.data)
  }
}

const mutations = {
  GET_ORDERS: (state, orders) => (state.orders = orders),
  UPDATE_ORDER: (state, updatedOrder) => {
    const index = state.orders.findIndex( order => order.id == updatedOrder.id)
    Vue.set(state.orders, index, updatedOrder )
  },
  ADD_RESERVATION: (state, newData) => state.orders.push(newData),
  DELETE_RESERVATION: (state, deletedOrder) => {
    let orders = state.orders.filter(order => order._id != deletedOrder._id)
    state.orders = orders
  }
}

const getters = {
  allOrders: state => state.orders
}

export default { state, actions, mutations, getters }