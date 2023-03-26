<template>
  <section class="container">
    <div>
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              <i class="fa fa-clipboard-list" />
              할일 목록 (Nuxt with Vue)
            </h1>
            <h2 class="subtitle">할일 목록을 관리 합니다.</h2>
          </div>
        </div>
      </section>
      <TodoList />
    </div>
  </section>
</template>

<script>
import TodoList from '../components/TodoList'

export default {
  components: {
    TodoList,
  },
}
</script>
