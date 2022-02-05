<template>


  <div class="content">
    <Spacer/>
<SpacerSmall/>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="row mb-5">
            <div class="col-md-4 mr-auto">
              <h3 class="thin-heading mb-4">New York</h3>
              <p>9757 Aspen Lane South Richmond Hill, NY 11419</p>
            </div>
            <div class="col-md-6 ml-auto">
              <h3 class="thin-heading mb-4">Contact Info</h3>
              <p>
                T: +1 (291) 939 9321 <br />
                E: info@mywebsite.com
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-12">
              <h3 class="thin-heading mb-4">Message Us</h3>
              <form
                class="mb-5"
                method="post"
                id="contactForm"
                name="contactForm"
                novalidate="novalidate"
              >
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <textarea
                      class="form-control"
                      name="message"
                      id="message"
                      cols="30"
                      rows="2"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <input
                      type="submit"
                      value="Scrivimi"
                      class="btn btn-primary rounded-0 py-2 px-4"
                    />
                    <span class="submitting"></span>
                  </div>
                </div>
              </form>
              <div id="form-message-warning mt-4"></div>
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spacer from "../components/Spacer.vue";
import SpacerSmall from "../components/SpacerSmall.vue";


export default {
  name: "Contacts",
  components: {
    Spacer,
    SpacerSmall
  }
};
</script>

<style>

</style>