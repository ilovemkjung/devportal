<template>
  <div v-if="!!deleteTarget" class="modal is-active">
    <div class="modal-background" />
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">작업 지우기</p>
        <button class="delete" aria-label="close" @click="cancelRemove()" />
      </header>
      <section class="modal-card-body">
        <div class="content">
          <p>정말로 삭제할까요?</p>
          <p class="tag">
            작업이름:&nbsp;<strong>{{ deleteTarget.name }}</strong>
          </p>
        </div>
      </section>
      <footer class="modal-card-foot is-justified-end">
        <button class="button is-danger is-pulled-right" @click="remove()">
          삭제
        </button>
        <button class="button" @click="cancelRemove()">취소</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteModal',
  data: () => ({
    deleteTarget: null,
  }),
  methods: {
    askRemove(todo) {
      this.deleteTarget = todo
    },
    cancelRemove() {
      this.closeModal()
    },
    closeModal() {
      this.deleteTarget = null
    },
    remove() {
      this.$emit('remove', this.deleteTarget)
      this.closeModal()
    },
  },
}
</script>
