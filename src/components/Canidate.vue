<template>
  <div>
    <md-card md-with-hover>
      <md-ripple>
        <md-card-header>
          <b-row>
            <b-col>
              <div class="md-title">[Canidate Name]</div>
              <div class="md-subhead">[Platform]</div>
            </b-col>
            <b-col>
              <md-button class="md-raised md-accent" :md-ripple="false" style="float:right;">Vote</md-button>
            </b-col>
          </b-row>
        </md-card-header>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.center {
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  margin-left: 5%;
}
</style>
