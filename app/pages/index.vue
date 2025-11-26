<script setup lang="ts"></script>
<template>
  <v-row>
    <v-col class="full-height-block" cols="12">
      <v-img src=" /images/first-section.png" class="h-100 d-flex justify-center align-center" draggable="false" cover>
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" class="d-flex justify-center align-center mb-16">
            <v-img src="/icons/logo.png" height="256px" draggable="false" class="user-select-none"></v-img>
          </v-col>
        </v-row>
      </v-img>
    </v-col>

    <v-col cols="12">
      <v-row>
        <v-col cols="12" md="6" class="d-flex justify-center align-center pa-8">
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

            <v-btn class="booking-btn mt-8" href="https://t.me/" target="_blank">
              Провести свое мероприятие
            </v-btn>
          </v-col>
        </v-col>
        <v-col cols="12" md="6" class="d-flex justify-center align-center">
          <v-img src="/images/white-cocktail.png" class="h-100 d-flex justify-center align-center user-select-none"
            draggable="false"></v-img>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
      <v-row class="py-8" justify="center">
        <v-col cols="12" class="video-container pa-0">
          <video src="/videos/saya-video-compressed.mp4" autoplay muted loop playsinline draggable="false" class = "video-hero-banner"></video>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12" class="d-flex justify-center align-center pa-8">
          <v-col cols="12" md="9" class="justify-center align-center">
            <!-- <h1>«САЯ»&nbsp;—&nbsp;это тень, в которой вкус раскрывается иначе.</h1> -->
            <h2>
              Лаундж-бар «Сая»: Пристанище в тени
              <br>
              <br>
              Забудьте о суете. Вы входите в другой мир.
              <br>
              <br>
              Лаундж-бар «Сая» — это измерение, где время замедляется, а тревоги остаются за порогом. Наше название, означающее «тень» с тюркского, — это не просто слово, а суть всего, что вас окружает. Это мягкий полумрак, уютные уголки и глубина, в которой можно укрыться.
              <br>
              <br>
              Прикоснитесь к нашей тайне. У входа вас встречают кости таинственных существ — древний оберег, знак того, что здесь царит свой закон, а гости находятся под защитой. Это предвестие уникального опыта, который ждет вас внутри.
            </h2>
          </v-col>
        </v-col>
      </v-row>
    </v-col>

    <v-col cols="12">
    <v-row>
      <v-col cols="12" md="6" class="d-flex justify-center align-center pa-8">
        <v-img src="/images/hand-cocktail-shrimp.jpg" class="h-100 user-select-none" draggable="false" contain></v-img>
      </v-col>

      <v-col cols="12" md="6" class="d-flex flex-column justify-center align-center pa-8">
        <h2>
          Сая — хозяйка и дух этого места.
          <br>
          <br>
          Она лесная нимфа, дух чащи, которая воплотилась здесь.<br>
          Она рождена из тени.
          <br>
          <br>
          Загадочная, как лесная полночь.
          <br>
          <br>
          Она проводит гостей через их вечер, очаровывая и удивляя.
        </h2>
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

.reception-img {
  position: relative;
  overflow: hidden;
  min-height: 300px;
}

.reception-img::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  pointer-events: none;
}

.booking-btn {
  transition: 0.25s;
  border-radius: 32px !important;
}

.booking-btn:hover {
  background-color: white !important;
  color: black !important;
}

.video-container {
  height: 50vh;
  overflow: hidden;
  position: relative;
}

.video-hero-banner {
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  object-fit: cover;
}

</style>