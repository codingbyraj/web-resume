<template>
  <div class="section-details">
    <h2 class="section-heading">
      <span> Contact </span>
    </h2>
    <div class="contact-info">
      <form @submit.prevent="submitForm" novalidate>
        <!-- name -->
        <div class="row name">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.formData.firstName.$error }"
          >
            <p class="contact-heading">First Name</p>
            <input
              v-model.trim="$v.formData.firstName.$model"
              type="text"
              autocomplete="off"
              class="form-control"
            />
            <span
              class="error"
              v-if="
                $v.formData.firstName.$dirty && !$v.formData.firstName.required
              "
              >First Name cannot be blank</span
            >
            <span
              class="error"
              v-if="
                $v.formData.firstName.$dirty && !$v.formData.firstName.minLength
              "
              >First Name must have at least
              {{ $v.formData.firstName.$params.minLength.min }}
              characters.</span
            >
          </div>

          <!-- last name -->
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.formData.lastName.$error }"
          >
            <p class="contact-heading">Last Name</p>
            <input
              type="text"
              class="form-control"
              autocomplete="off"
              v-model.trim="$v.formData.lastName.$model"
            />
          </div>
        </div>

        <!-- email -->
        <div class="row">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.formData.email.$error }"
          >
            <p class="contact-heading">Email</p>
            <input
              type="email"
              class="form-control"
              autocomplete="off"
              v-model.trim="$v.formData.email.$model"
            />
            <span
              class="error"
              v-if="$v.formData.email.$dirty && !$v.formData.email.required"
              >Email cannot be required</span
            >
            <span
              class="error"
              v-if="$v.formData.email.$dirty && !$v.formData.email.email"
              >Email format is not correct</span
            >
          </div>
        </div>

        <!-- mobile no -->
        <div class="row">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.formData.mobile.$error }"
          >
            <p class="contact-heading">Contact Number</p>
            <input
              type="number"
              class="form-control"
              autocomplete="off"
              v-model.trim="$v.formData.mobile.$model"
            />
            <span
              class="error"
              v-if="$v.formData.mobile.$dirty && !$v.formData.mobile.required"
              >Your contact number is not correct</span
            >
            <span
              class="error"
              v-if="
                $v.formData.mobile.$dirty &&
                (!$v.formData.mobile.minLength || !$v.formData.mobile.maxLength)
              "
              >Enter 10-digit contact number</span
            >
          </div>
        </div>

        <!-- message -->
        <div class="row">
          <div
            class="form-group"
            :class="{ 'form-group--error': $v.formData.message.$error }"
          >
            <p class="contact-heading">Type your message</p>
            <textarea
              name=""
              id=""
              class="form-control"
              rows="6"
              v-model.trim="$v.formData.message.$model"
            ></textarea>
            <span
              class="error"
              v-if="$v.formData.message.$dirty && !$v.formData.message.required"
              >Your message cannot be blank</span
            >
            <span
              class="error"
              v-if="
                $v.formData.message.$dirty &&
                !$v.formData.message.minLength &&
                !$v.formData.message.maxLength
              "
              >Message is too short. It should be atleast 10 characters.</span
            >
          </div>
        </div>

        <!-- message -->
        <div class="row row__button">
          <div class="form-group">
            <button type="submit" class="btn-submit">
              Submit
              <!-- <i class="btn-loader fas fa-arrow-right"></i> -->
              <!-- <img class="btn-loader" :src="loaderImgUrl" alt="" /> -->
            </button>
            <span class="mailstatus">{{ mailStatus }}</span>
          </div>
        </div>
      </form>
    </div>
    <!-- mail -->
    <div class="mail-me">
      <p>
        Or just drop a
        <i class="fas fa-envelope-open-text mail-icon"></i> @
        <a class="mail-link" href="mailto:rai.abhishekraj.gmail.com"
          >rai.abhishekraj@gmail.com</a
        >
      </p>
    </div>
  </div>
</template>
<script>
import {
  required,
  minLength,
  maxLength,
  numeric,
  email,
} from "vuelidate/lib/validators";

export default {
  name: "Contact",
  data() {
    return {
      formData: {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        message: "",
      },
      showLoader: false,
      loaderImgUrl: require("@/assets/images/loader.gif"),
      mailStatus: "",
    };
  },
  components: {},
  validations: {
    formData: {
      firstName: {
        required,
        minLength: minLength(3),
      },
      lastName: {
        default: "",
      },
      email: {
        required,
        email,
      },
      mobile: {
        required,
        numeric,
        minLength: minLength(10),
        maxLength: maxLength(10),
      },
      message: {
        required,
        minLength: minLength(10),
      },
    },
  },
  methods: {
    submitForm() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.showLoader = true;
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.formData),
        };
        fetch("../user/sendmail", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            this.mailStatus = data.message;
            this.showLoader = false;
            this.clearAllFields();
          })
          .catch((error) => {
            this.mailStatus = error;
          });
      }
    },
    clearAllFields() {
      setTimeout(() => {
        this.mailStatus = "";
      }, 5000);
      this.$v.$reset();
      for (let key in this.formData) {
        this.formData[key] = "";
      }
      this.showLoader = false;
    },
  },
};
</script>
<style scoped>
.row {
  margin: 30px 0;
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
  gap: 30px;
}
.form-group {
  position: relative;
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
  padding: 11px 30px;
  text-align: center;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 4px;
  display: inline-block;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

.btn-submit:hover {
  background-position: right center; /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.btn-loader {
  color: white;
  height: 30px;
  width: 30px;
}

.mailstatus {
  color: var(--color-parrot);
  font-style: italic;
}

@keyframes arrow-move {
  0% {
    background-color: #001f3f;
  }
  100% {
    background-color: #ff4136;
  }
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

.form-group--error input,
.form-group--error textarea {
  border-color: red;
}

.error {
  color: red;
  font-size: 12px;
  display: block;
  position: absolute;
}
</style>