<template>
  <p :style="{ fontStyle, fontWeight, fontSize, lineHeight, color, margin }">
    <slot />
  </p>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    fontStyle: {
      type: String,
      default: 'normal'
    },
    fontWeight: {
      type: String,
      default: '500'
    },
    fontSize: {
      type: String,
      default: '22px'
    },
    lineHeight: {
      type: String,
      default: '36px'
    },
    color: {
      type: String,
      default: '#333333'
    },
    margin: {
      type: String,
      default: '0'
    }
  }
}
</script>
