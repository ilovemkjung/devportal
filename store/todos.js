export const STORAGE_KEY = 'todos'

export const state = () => {
  const jsonString = localStorage.getItem(STORAGE_KEY)
  return jsonString
    ? JSON.parse(jsonString)
    : {
        list: [
          { id: 1, done: true, name: '브라우저 저장소에 할일 목록이 저장됩니다. 할일 목록을 브라우저별로 관리하세요.' },
          { id: 2, done: false, name: '완료 체크하면 다시 돌릴 수 없습니다. 삭제 후 재등록 해야 합니다.' },
        ],
        counter: 3,
      }
}
export const mutations = {
  add(state, name) {
    state.list.push({
      id: state.counter++,
      done: false,
      name,
    })
    this.commit('todos/persist', state)
  },
  remove(state, todo) {
    state.list = state.list.filter(({ id }) => id !== todo.id)
    this.commit('todos/persist', state)
  },
  update(state, todo) {
    state.list
      .filter(({ id }) => id === todo.id)
      .forEach((t) => Object.assign(t, todo))
    this.commit('todos/persist', state)
  },
  persist(state) {
    state.list.sort(function(a, b){
      /* 최신 글 우선 노출, 완료 글 나중 노출 */
      console.log((b.id - a.id) + (a.done?10000:-10000),a.done, a.name)
      return (b.id - a.id) + (a.done?10000:-10000)
    })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  },
}
