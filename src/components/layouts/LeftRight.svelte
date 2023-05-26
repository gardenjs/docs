<div class="leftright">
  <slot name="left" />
  <slot name="right" />
</div>

<style>
.leftright {
  position: relative;
  display: flex;
  flex-wrap: no-wrap;
  flex-direction: row;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>