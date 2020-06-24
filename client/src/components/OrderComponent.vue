<template>
  <div class="hello">
    <div class="orders">
      <div class="order" v-for="order in allOrders" :key="order.id">
        <a href="/#new_order" @click.prevent="showModal(order)">
          <p>{{ order.table_name }}</p>
        </a>
      </div>
    </div>
    <button @click.prevent="showModal({})">Add New Table</button>
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
      this.$modal.show('modal-order', order);
    },
  },
  components: {
    ModalOrder
  }
}
</script>

<style scoped>
.orders {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.order {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .orders {
    grid-template-columns: 1fr;
  }
}
</style>
