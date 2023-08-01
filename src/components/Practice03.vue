<script setup>
import { ref } from 'vue'
import { FoodBank } from '@/practice/practice-02'

const account = ref('')
const deposit = ref(0)
const withdraw = ref(0)
const status = ref('')

const foodBank = new FoodBank()

const openAccountHandler = () => {
  status.value = foodBank.openAccount(account.value)
}

const depositHandler = () => {
  status.value = foodBank.deposit(account.value, deposit.value)
}

const withdrawHandler = () => {
  status.value = foodBank.withdraw(account.value, withdraw.value)
}
</script>

<template>
  <button
    data-test="button_open-account"
    type="button"
    @click="openAccountHandler"
  >
    開戶
  </button>
  <input
    data-test="input_account"
    v-model="account"
    type="text"
  />

  <button
    data-test="button_deposit"
    type="button"
    @click="depositHandler"
  >
    存款
  </button>
  <input
    data-test="input_deposit"
    v-model="deposit"
    type="number"
    min="0"
  />

  <button
    data-test="button_withdraw"
    type="button"
    @click="withdrawHandler"
  >
    提款
  </button>
  <input
    data-test="input_withdraw"
    v-model="withdraw"
    type="number"
    min="0"
  />

  <p data-test="status">{{ status }}</p>
</template>
