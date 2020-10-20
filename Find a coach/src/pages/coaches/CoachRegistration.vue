<template>
  <section>
    <base-card>
      <h2>Register as a Coach</h2>
      <CoachForm @save-data="saveData"></CoachForm>
    </base-card>
  </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm';
export default {
  components: {
    CoachForm,
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches');
    },
  },
};
</script>