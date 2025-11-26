<script setup lang="ts">
</script>

<template>
  <v-app>
    <v-app-bar flat height="90">
      <v-container class="d-flex justify-center">
        <v-row class="d-flex justify-center">
          <v-col cols="8" xl="5" lg="4" class="d-flex justify-space-between">
            <NuxtLink to="/">
              О нас
            </NuxtLink>
            <NuxtLink to="/">
              Меню
            </NuxtLink>
            <NuxtLink to="/">
              Контакты
            </NuxtLink>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>

    <Footer />
  </v-app>
</template>