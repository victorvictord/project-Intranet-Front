<template>
  <div class="kanban-column">
    <h2>{{ title }}</h2>
    <div
      class="task-list"
      @dragover.prevent
      @drop="onDrop"
    >
      <TaskCard
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        draggable="true"
        @dragstart="onDragStart(task)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TaskCard from './TaskCard.vue'
import type { Task } from '../types/Task'

defineProps<{
  title: string
  tasks: Task[]
  status: Task['status']
}>()

const emit = defineEmits(['move-task'])

function onDragStart(task: Task) {
  event?.dataTransfer?.setData('taskId', task.id)
}

function onDrop(event: DragEvent) {
  const taskId = event.dataTransfer?.getData('taskId')
  if (taskId) emit('move-task', taskId, status)
}
</script>

<style scoped>
.kanban-column {
  border: 1px solid #ccc;
  padding: 1rem;
  width: 300px;
  min-height: 300px;
  background: #f4f4f4;
  border-radius: 5px;
}
</style>