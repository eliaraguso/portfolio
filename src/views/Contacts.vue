<template>
  <div class="content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="row mb-5">
            <div class="col-lg-6 mr-auto map-container">
              <h3 class="thin-heading mb-4" id="verona">Verona</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1222688.5741148791!2d10.55097712209245!3d44.61947344328353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5f68699be0e3%3A0x53f85a636882595b!2sVerona%20VR!5e0!3m2!1sit!2sit!4v1644189764795!5m2!1sit!2sit"
                allowfullscreen=""
                loading="lazy"
                class="map"
              ></iframe>
            </div>
            <div class="col-lg-6 ml-auto contacts-container">
              <h3 class="thin-heading mb-4">Info Contatti</h3>
              <p class="info-container">
                <i class="fas fa-mobile-alt email-logo"></i> +39 (349) 547 0 559
                <br />
                <i class="fas fa-at phone-logo"></i> elia.raguso@gmail.com
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-12">
              <h3 class="thin-heading mb-4">Scrivimi</h3>

              <!--------------------- Form ---------------------->
              <form
                class="mb-5"
                id="contactForm"
                name="contactForm"
                action="https://formspree.io/f/xeqnapzp"
                method="POST"
              >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Nome"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <textarea
                      class="form-control my-5"
                      name="message"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="Scrivi il tuo messaggio"
                      required
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <input
                      type="submit"
                      value="Scrivimi"
                      class="button py-2 px-4"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Spacer from "../components/Spacer.vue";
// import SpacerSmall from "../components/SpacerSmall.vue";

export default {
  name: "Contacts",
  components: {
    // Spacer,
    // SpacerSmall
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/variables.scss";
.content {
  //  border: 1px solid red;
  min-height: calc(100vh - 130px);
  display: flex;
  align-items: center;
  background-color: $background;
  color: white;
}

.email-logo,
.phone-logo {
  font-size: 22px;
}

.email-logo {
  margin-bottom: 30px;
}

.thin-heading {
  margin-bottom: 30px !important;
  font-size: 30px;
}

.info-container {
  font-size: 16px;
}

.map {
  border:3px solid $purple;
  border-radius: 50%;
  width: 200px;
  height: 200px;
}

#verona {
  text-align: center;
  width: 200px;
}

.button {
  background-color: $purple;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
}

@media screen and (max-width: 576px) {
  .content {
    min-height: calc(100vh - 96px);
    padding: 70px 20px;
  }
}

@media screen and (max-width: 767px) {
  #email {
    margin-top: 20px;
  }
}

@media screen and (max-width: 991px) {
  .contacts-container {
    margin-top: 30px;
    // border: 1px solid red;
  }
  .map-container {
    margin-bottom: 30px;
    // border: 1px solid blue;
  }
}
</style>