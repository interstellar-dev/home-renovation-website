<script setup lang="ts" >
import { ServiceType } from "~/types/index.js";
import { storeToRefs } from "pinia";

const modal = useModal()
const form = useForm()

const { formData, spinnerIsShowen, errorMessageIsShowen } = storeToRefs(form)
</script>

<template>

  <TheModal>

    <TheSpinner v-if="spinnerIsShowen" />

    <form
      v-else
      accept-charset="UTF-8"
      @submit.prevent="form.submit"
      method="POST"
    >
      <div class="close-form" @click.self="modal.close"/>

      <label>Имя</label>
      <input
        type="text"
        v-model="formData.name"
        placeholder="Имя*"
        required="required"
      />
      <label>Телефон</label>
      <input
        type="text"
        v-model="formData.phone"
        placeholder="Телефон *"
        required="required"
      />
      <label>Email</label>
      <input
        type="email"
        v-model="formData.email"
        placeholder="Email"
      >
      <label>Услуга на выбор</label>
      <select v-model="formData.service">
        <option v-for="(service, idx) in ServiceType" :key="idx" :value="service">
          {{ service }}
        </option>
      </select>

      <button type="submit">Отправить</button>
      <div v-if="errorMessageIsShowen" class="error-message">
        Сообщение не отправлено. Повторите попытку позже.
      </div>
    </form>

  </TheModal>

</template>

<style lang="css" scoped>

form {
  display: grid;
  padding: 5vh;
  background: #0d1b26;
  border: 1px solid var(--accent);
  color: var(--accent);
  border-radius: 10px;
  width: 340px;
}

.close-form {
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 10px;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  cursor: pointer;
  border-radius: 50%;
  transition: all var(--transition);
}

.close-form:before {
  content: 'x';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.close-form:hover {
  background-color: var(--accent);
  font-weight: bold;
  color: var(--dark);
}

form input, form select {
  border: 1px solid #9c9c9c;
}

form select {
  cursor: pointer;
}

form button {
  background: var(--accent);
  padding: 1.2em;
  width: 100%;
  border: 0;
  transition: background-color var(--transition);
  cursor: pointer;
}

form button:hover {
  background: olive;
}

label {
  padding: 0.5em 0.5em 0.5em 0;
}

input, select {
  padding: 0.7em;
  margin-bottom: 0.5rem;
}
input:focus {
  outline: 3px solid var(--accent);
}

@media screen and (min-width: 550px) {
  form {
    grid-template-columns: 200px 1fr;
    grid-gap: 16px;
  }

  label {
    text-align: right;
    grid-column: 1 / 2;
  }

  input,
  button {
    grid-column: 2 / 3;
  }
}

.error-message {
  font-size: 12px;
  line-height: 18px;
  color: brown;
  font-weight: 700;
}
</style>
