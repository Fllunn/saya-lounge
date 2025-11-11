<script setup lang="ts"></script>
<template>
  <v-row>
    <v-col class="full-height-block" cols="12">
      <v-img src=" /images/first-section.png" class="h-100 d-flex justify-center align-center" draggable="false" cover>
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" class="d-flex justify-center align-center mb-16">
            <v-img src="/icons/logo.png" height="256px" draggable="false" class="user-select-none"></v-img>
          </v-col>
          <v-col cols="12" class="d-flex justify-center align-center">
            <h2>
              Здесь вкус становится искусством
            </h2>
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <v-col cols="12">
      <v-row>
        <v-col cols="12" md="6" class="d-flex justify-center align-center pa-6">
          <v-col cols="12" md="6" class="justify-center align-center">
            <h1>BOOKING</h1>
            <h2>
              <br>
              Время работы:<br>
              <br>
              Пн‑Чт&nbsp;12:00&nbsp;—&nbsp;24:00<br>
              Пт&nbsp;12:00&nbsp;—&nbsp;2:00<br>
              Сб&nbsp;14:00&nbsp;—&nbsp;2:00<br>
              Вс&nbsp;14:00&nbsp;—&nbsp;24:00<br>
              <br>
              Вы можете забронировать стол в САЯ:<br>
              <a href="https://t.me/" class="telegram-link">Telegram</a><br>
              <a href="tel:+79581413321">✆&nbsp;+7&nbsp;958&nbsp;141‑33‑21</a>
            </h2>
          </v-col>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <v-img src="/images/white-cocktail.png" class="h-100 d-flex justify-center align-center user-select-none" draggable="false"></v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.full-height-block {
  height: calc(100vh - 90px);
}

.user-select-none {
  user-select: none;
}

.telegram-link {
  text-decoration: underline !important;
  text-decoration-thickness: 1px !important;
  text-underline-offset: 2px !important;
}
</style>