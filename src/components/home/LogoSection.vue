<template>
  <section class="logo-section">
    <div class="flip">
      <div class="front">
        <div class="inner-front"></div>
      </div>
      <div class="back">
        <div class="inner-back">
          <!-- <p></p> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LogoSection",
};
</script>

<style lang="scss" scoped>
@import "../../assets/style/variables.scss";

.logo-section {
  text-align: center;
}

.inner-front {
  background-image: url("../../assets/img/Web developer modificato.png");
  background-size: cover;
  width: 270px;
  height: 270px;
  position: absolute;
  border-radius: 50%;
  top: 5px;
  left: 5px;
}

.inner-back {
  background-image: url("../../assets/img/elia.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: white;
  width: 270px;
  height: 270px;
  position: absolute;
  border-radius: 50%;
  top: 5px;
  left: 5px;
  display: flex;
  align-items: center;
  // p {
  //   border: 1px solid red;
  //   border-radius: 50%;
  //   width: inherit;
  //   height: 200px;
  // }
}

// base
.flip {
  position: relative;
  // margin: 0 auto;
  .front,
  .back {
    display: block;
    transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-duration: 3s;
    transition-property: transform, opacity;
  }
  .front {
    transform: rotateY(0deg);
  }
  .back {
    position: absolute;
    opacity: 0;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    transform: rotateY(-180deg);
  }
  &:hover {
    > .front {
      transform: rotateY(180deg);
    }
    > .back {
      opacity: 1;
      transform: rotateY(0deg);
    }
  }
  &.flip-vertical {
    > .back {
      transform: rotateX(-180deg);
    }
    &:hover {
      > .front {
        transform: rotateX(180deg);
      }
      > .back {
        transform: rotateX(0deg);
      }
    }
  }
}

// custom
.flip {
  position: relative;
  display: inline-block;
  margin-right: 2px;
  margin-bottom: 1em;
  width: 280px;
  .front,
  .back {
    display: block;
    color: white;
    width: inherit;
    background-size: cover !important;
    background-position: center !important;
    height: 280px;
    padding: 1em 2em;
    border-radius: 50%;
  }

  .front {
    background-image: linear-gradient(
      90deg,
      rgba(78, 5, 255, 1) 0%,
      rgba(175, 37, 214, 1) 50%,
      rgba(255, 104, 0, 1) 100%
    );
  }

  .back {
    background-image: linear-gradient(
      90deg,
      rgba(78, 5, 255, 1) 0%,
      rgba(175, 37, 214, 1) 50%,
      rgba(255, 104, 0, 1) 100%
    );
  }
}

.text-shadow {
  text-shadow: 1px 1px rgba(0, 0, 0, 0.04), 2px 2px rgba(0, 0, 0, 0.04),
    3px 3px rgba(0, 0, 0, 0.04), 4px 4px rgba(0, 0, 0, 0.04),
    0.125rem 0.125rem rgba(0, 0, 0, 0.04), 6px 6px rgba(0, 0, 0, 0.04),
    7px 7px rgba(0, 0, 0, 0.04), 8px 8px rgba(0, 0, 0, 0.04),
    9px 9px rgba(0, 0, 0, 0.04), 0.3125rem 0.3125rem rgba(0, 0, 0, 0.04),
    11px 11px rgba(0, 0, 0, 0.04), 12px 12px rgba(0, 0, 0, 0.04),
    13px 13px rgba(0, 0, 0, 0.04), 14px 14px rgba(0, 0, 0, 0.04),
    0.625rem 0.625rem rgba(0, 0, 0, 0.04), 16px 16px rgba(0, 0, 0, 0.04),
    17px 17px rgba(0, 0, 0, 0.04), 18px 18px rgba(0, 0, 0, 0.04),
    19px 19px rgba(0, 0, 0, 0.04), 1.25rem 1.25rem rgba(0, 0, 0, 0.04);
}

// MEDIAQUERIES
@media screen and (min-width: 768px) {
  .flip {
    width: 350px;
    .front,
    .back {
      height: 350px;
    }
  }

  .inner-front {
    width: 340px;
    height: 340px;
  }

  .inner-back {
    width: 340px;
    height: 340px;
  }
}

@media screen and (min-width: 992px) {
  .flip {
    width: 400px;
    .front,
    .back {
      height: 400px;
    }
  }

  .inner-front {
    width: 390px;
    height: 390px;
  }

  .inner-back {
    width: 390px;
    height: 390px;
  }
}

@media screen and (min-width: 1200px) {
  .flip {
    width: 500px;
    .front,
    .back {
      height: 500px;
    }
  }

  .inner-front {
    width: 490px;
    height: 490px;
  }

  .inner-back {
    width: 490px;
    height: 490px;
  }
}
</style>