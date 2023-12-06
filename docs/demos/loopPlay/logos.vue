<template>
  <div ref="viewerEl" class="selection-outer">
    <div ref="viewBoxEl" class="selection-box">
      <div v-for="item in list" :key="item.icon" class="list-item">
        <div class="icon-box">
          <div :class="item.icon"></div>
        </div>
        <div class="item-name">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const list = [
  { title: 'giftCard.cardType1', icon: 'icon-googlePlay' },
  { title: 'giftCard.cardType2', icon: 'icon-spotify' },
  { title: 'giftCard.cardType3', icon: 'icon-starbucks' },
  { title: 'giftCard.cardType4', icon: 'icon-playStation' },
  { title: 'giftCard.cardType5', icon: 'icon-amazon' },
  { title: 'giftCard.cardType6', icon: 'icon-netflix' },
  { title: 'giftCard.cardType7', icon: 'icon-uber' },
  { title: 'giftCard.cardType8', icon: 'icon-ifood' },
  { title: 'giftCard.cardType9', icon: 'icon-cabify' },
  { title: 'giftCard.cardType10', icon: 'icon-nintendoEShop' },
  { title: 'giftCard.cardType11', icon: 'icon-nintendoSwitch' },
  { title: 'giftCard.cardType12', icon: 'icon-rappi' },
  { title: 'giftCard.cardType13', icon: 'icon-steam' },
  { title: 'giftCard.cardType14', icon: 'icon-xboxLive' },
  { title: 'giftCard.cardType15', icon: 'icon-minecraft' }
]
const viewerEl = ref<HTMLElement>()
const viewBoxEl = ref<HTMLElement>()

const emit = defineEmits<{(event: 'sizeUpdated', widthScale: number): void}>()

onMounted(() => updateScreenSize())
const updateScreenSize = () => {
  const container = viewerEl.value
  if (!container) {
    setTimeout(() => {
      updateScreenSize()
    }, 5)
    return
  }
  const viewBox = viewBoxEl.value!
  let timer: any
  const fn = () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = undefined
      const outerWidth = container.clientWidth
      const realWidth = viewBox.clientWidth
      const widthScale = outerWidth / realWidth
      viewBox.setAttribute('style', `zoom: ${widthScale}`)
      emit('sizeUpdated', widthScale)
    }, 50)
  }
  const resizeObserver = new ResizeObserver(fn)
  resizeObserver.observe(container)
}
</script>

<style scoped>
.selection-box {
  --logoSprite: url(/logoSprite.png);
  --sectionGlobal: #f7f9fc;
  display: flex;
  flex-wrap: wrap;
  width: 1080px;
}

.list-item {
  display: flex;
  flex-direction: column;
  width: 333.025px;
  height: 282.349px;
  margin-bottom: 48px;
  border-radius: 20px;
  background: var(--sectionGlobal);
  box-shadow: 0px 27px 80px 0px rgba(171, 175, 199, 0.25);
}

.list-item:not(:nth-child(3n)) {
  margin-right: 40px;
}

.icon-box,
.item-name {
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-box {
  flex-grow: 1;
  background: #fff;
  border-radius: 20px;
}

.item-name {
  height: 69.35px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}

.icon-amazon {
  background-image: var(--logoSprite);
  background-position: -137px -547px;
  width: 118px;
  height: 127px;
}
.icon-cabify {
  background-image: var(--logoSprite);
  background-position: -275px -547px;
  width: 196px;
  height: 73px;
}
.icon-googlePlay {
  background-image: var(--logoSprite);
  background-position: 0px -547px;
  width: 117px;
  height: 130px;
}
.icon-ifood {
  background-image: var(--logoSprite);
  background-position: 0px -238px;
  width: 240px;
  height: 128px;
}
.icon-minecraft {
  background-image: var(--logoSprite);
  background-position: -712px 0px;
  width: 148px;
  height: 148px;
}
.icon-netflix {
  background-image: var(--logoSprite);
  background-position: 0px -697px;
  width: 71px;
  height: 129px;
}
.icon-nintendoEShop {
  background-image: var(--logoSprite);
  background-position: -548px 0px;
  width: 144px;
  height: 161px;
}
.icon-nintendoSwitch {
  background-image: var(--logoSprite);
  background-position: -712px -336px;
  width: 145px;
  height: 148px;
}
.icon-playStation {
  background-image: var(--logoSprite);
  background-position: -218px -386px;
  width: 158px;
  height: 122px;
}
.icon-rappi {
  background-image: var(--logoSprite);
  background-position: -260px -238px;
  width: 228px;
  height: 98px;
}
.icon-spotify {
  background-image: var(--logoSprite);
  background-position: -548px -181px;
  width: 135px;
  height: 135px;
}
.icon-starbucks {
  background-image: var(--logoSprite);
  background-position: -548px -336px;
  width: 127px;
  height: 126px;
}
.icon-steam {
  background-image: var(--logoSprite);
  background-position: 0px -386px;
  width: 198px;
  height: 141px;
}
.icon-uber {
  background-image: var(--logoSprite);
  background-position: 0px 0px;
  width: 528px;
  height: 218px;
  zoom: 0.5;
}
.icon-xboxLive {
  background-image: var(--logoSprite);
  background-position: -712px -168px;
  width: 148px;
  height: 148px;
}
</style>
