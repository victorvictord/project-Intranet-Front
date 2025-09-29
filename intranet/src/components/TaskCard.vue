<template>
  <div class="task-card">
    <h3>{{ task.title }}</h3>
    <p>{{ task.description }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { Task } from '../types/Task'

defineProps<{
  task: Task
}>()
</script>

<style scoped>
.task-card {
  background: white;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  cursor: grab;
}
</style>
