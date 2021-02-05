<template>
  <div class="section-details">
    <h2 class="section-heading">
      <span> Contact </span>
    </h2>
    <div class="contact-info">
      <!-- <form action=""> -->
      <!-- name -->
      <div class="row name">
        <div class="form-group">
          <p class="contact-heading">First Name</p>
          <input type="text" class="form-control" />
        </div>
        <div>
          <p class="contact-heading">Last Name</p>
          <input type="text" class="form-control" />
        </div>
      </div>

      <!-- email -->
      <div class="row">
        <div class="form-group">
          <p class="contact-heading">Email</p>
          <input type="email" class="form-control" />
        </div>
      </div>

      <!-- mobile no -->
      <div class="row">
        <div class="form-group">
          <p class="contact-heading">Contact Number</p>
          <input type="number" class="form-control" />
        </div>
      </div>

      <!-- message -->
      <div class="row">
        <div class="form-group">
          <p class="contact-heading">Type your message</p>
          <textarea name="" id="" class="form-control" rows="6"></textarea>
        </div>
      </div>

      <!-- message -->
      <div class="row">
        <div class="form-group">
          <button type="submit" class="btn-submit" @click="submit">
            Submit
          </button>
        </div>
      </div>
      <!-- </form> -->
    </div>
    <!-- mail -->
    <div class="mail-me">
      <p>
        Or just drop a
        <i class="fas fa-envelope-open-text mail-icon"></i>
        mail @
        <a class="mail-link" href="mailto:rai.abhishekraj.gmail.com"
          >rai.abhishekraj.gmail.com</a
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {};
  },
  methods: {
    submit() {},
  },
};
</script>
<style scoped>
.row {
  margin: 20px 0;
}

.contact-info {
  padding: 10px 19px 2px 10px;
  box-shadow: 0 0 2px var(--color-blue);
  border-radius: 4px;
  margin-bottom: 20px;
}

.name {
  display: grid;
  grid-template-columns: 6fr 6fr;
  gap: 20px;
}

.form-control {
  font-family: "Poppins";
  width: 100%;
  font-size: 16px;
  padding: 0.375rem 0.25rem;
  line-height: 1.5;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.form-control:hover,
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.01rem rgba(0, 123, 255, 0.25);
}

textarea {
  resize: vertical;
}

.contact-heading {
  margin: 4px 0;
  font-size: 13px;
  color: var(--color-blue);
}

.btn-submit {
  background-image: linear-gradient(
    to right,
    #314755 0%,
    #26a0da 51%,
    #314755 100%
  );
  margin: 10px;
  padding: 11px 34px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 4px;
  display: block;
  border: none;
  cursor: pointer;
}

.btn-submit:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
.mail-me {
  font-size: 16px;
  text-align: center;
}

.mail-icon {
  color: var(--color-blue);
}

.mail-link {
  color: var(--color-blue);
  cursor: pointer;
}

/* map */
#map {
  height: 400px;
  padding: 10px 19px 2px 10px;
  box-shadow: 0 0 2px var(--color-blue);
  border-radius: 4px;
}
</style>