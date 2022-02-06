<template>
  <div class="content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="row mb-5">
            <div class="col-md-4 mr-auto">
              <h3 class="thin-heading mb-4">Verona</h3>
              <p>via Gramsci, 26 - 37138</p>
            </div>
            <div class="col-md-6 ml-auto">
              <h3 class="thin-heading mb-4">Info Contatti</h3>
              <p>
                T: +39 (349) 547 0 559 <br />
                E: elia.raguso@gmail.com
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
                      class="btn btn-primary rounded-5 py-2 px-4"
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

@media screen and (max-width: 576px) {
  .content {
    min-height: calc(100vh - 96px);
  }
}
</style>