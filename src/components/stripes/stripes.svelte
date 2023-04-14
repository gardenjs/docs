<div class="stripes"><span></span><span></span><span></span><span></span></div>

<style lang="scss">
.stripes {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  @media (min-width: 768px) {
    grid-template-columns: repeat(4,1fr);
  }
  top: 0;
  left: 50%;
  right: 0;
  bottom: 0;
  width: 100%;
  max-width: 980px;
  height: 100%;
  transform: translateX(-50%);
  z-index: 2;
  animation: flowdown  1s linear;
  span {
    @media (min-width: 768px) {
      &:nth-of-type(3) {
        border-left: 1px dashed rgba(53, 62, 100, 0.2);
      }
    }
    @media (min-width: 1024px) and (max-width: 1080px) {
      &:nth-of-type(1),
      &:nth-of-type(2),
      &:nth-of-type(3) {
        border-right: 1px dashed rgba(53, 62, 100, 0.2);
      }
    }
    @media (min-width: 980px) {
      &:first-of-type {
        border-left: 1px solid rgba(53, 62, 100, 0.1);
        border-right: 1px dashed rgba(53, 62, 100, 0.2);
      }
      &:last-of-type {
        border-left: 1px dashed rgba(53, 62, 100, 0.2);
        border-right: 1px solid rgba(53, 62, 100, 0.1);
      }
    }
  }
}
</style>