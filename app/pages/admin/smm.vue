<script setup lang="ts">
definePageMeta({
  layout: "smm"
})

const message = ref<string>("")
const result = ref<string>("")
const loading = ref<boolean>(false)

const chatHistory = ref<{ role: 'user' | 'assistant'; content: string }[]>([])

async function sendPrompt() {
  if (!message.value.trim()) return

  const userMessage = message.value.trim()

  loading.value = true
  result.value = ""

  const { data } = await useFetch<any>("/api/smm-ai", {
    method: "POST",
    body: {
      message: userMessage,
      chat_history: chatHistory.value
    }
  })

  const aiResponse = data.value?.content || ""

  // Обновляем историю
  chatHistory.value.push({ role: "user", content: userMessage })
  chatHistory.value.push({ role: "assistant", content: aiResponse })

  // Оставляем только последние 2 пары (4 сообщения)
  if (chatHistory.value.length > 4) {
    chatHistory.value = chatHistory.value.slice(-4)
  }

  result.value = aiResponse
  loading.value = false
  message.value = ""
}
</script>

<template>
  <v-row>
    <v-col cols="12" class="ai-container">
      <div class="result-container">
        <div v-if="loading" class="d-flex justify-center align-center h-100">
          <v-progress-circular indeterminate color="primary"></v-progress-circular>
        </div>

        <div v-else-if="result" class="result-content" v-html="result"></div>

        <div v-else class="d-flex justify-center align-center h-100">
          <h1>Сделать пост, написать текст</h1>
        </div>
      </div>

      <div class="w-100 pb-8 px-8 pt-2 d-flex align-center">
        <v-text-field v-model="message" class="w-100" placeholder="Введите ваш запрос" variant="outlined" hide-details
          @keyup.enter="sendPrompt"></v-text-field>
        <v-btn icon="mdi-send" class="ml-4" variant="tonal" @click="sendPrompt"
          :disabled="!message.trim() || loading"></v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss">
.ai-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.result-container {
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  padding: 16px;
  box-sizing: border-box;
}

.result-content {
  width: 100%;
  white-space: pre-wrap;
  font-size: clamp(1.125rem, 0.9261rem + 0.5682vw, 1.375rem);
}
</style>