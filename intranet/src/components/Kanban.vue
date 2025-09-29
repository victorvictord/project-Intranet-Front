<template>
  <div class="kanban-board">
    <KanbanColumn
      title="Por hacer"
      :tasks="tasks.filter(t => t.status === 'todo')"
      status="todo"
      @move-task="moveTask"
    />
    <KanbanColumn
      title="En Proceso"
      :tasks="tasks.filter(t => t.status === 'in-progress')"
      status="in-progress"
      @move-task="moveTask"
    />
    <KanbanColumn
      title="Hecho"
      :tasks="tasks.filter(t => t.status === 'done')"
      status="done"
      @move-task="moveTask"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import KanbanColumn from './KanbanColumn.vue'
import type { Task } from '../types/Task'

const tasks = ref<Task[]>([
  {
    id: '1',
    title: 'Diseñar UI',
    description: 'Hacer diseño en Figma',
    status: 'todo'
  },
  {
    id: '2',
    title: 'Conectar API',
    description: 'Llamadas a backend',
    status: 'in-progress'
  },
  {
    id: '3',
    title: 'Escribir documentación',
    status: 'done'
  }
])

function moveTask(taskId: string, newStatus: Task['status']) {
  const task = tasks.value.find(t => t.id === taskId)
  if (task) {
    task.status = newStatus
  }
}
</script>

<style scoped>
.kanban-board {
  display: flex;
  gap: 1rem;
  padding: 2rem;
}
</style>
