<template>
  <section class="module-scroll">
    <Scroll></Scroll>
  </section>
  <section class="module-grid">
    <div class="grid-item column"><Column></Column></div>
    <div class="grid-item news"><News></News></div>
    <div class="grid-item team"><Team></Team></div>
    <div class="grid-item explanation"><Explanation></Explanation></div>
    <div class="grid-item consulting"><Consulting></Consulting></div>
    <div class="grid-item fold"><Fold></Fold></div>
    <!-- <div class="grid-item monthly"><monthly-zenerate></monthly-zenerate></div> -->
    <div class="grid-item program"><Program></Program></div>
    <div class="grid-item partnership"><Partnership></Partnership></div>
    <div class="grid-item solution"><Solution></Solution></div>
    <div class="grid-item youtube"><Youtube></Youtube></div>
    <div class="grid-item career"><Career></Career></div>
  </section>
</template>

<script lang="ts" setup>
import { computed, onBeforeMount } from 'vue'
import ApiService from '/Services/api'
// @ts-ignore
import Column from '/Components/Module/Column.vue'
// @ts-ignore
import Explanation from '/Components/Module/Explanation.vue'
// @ts-ignore
import Consulting from '/Components/Module/Consulting.vue'
// @ts-ignore
import Team from '/Components/Module/Team.vue'
// @ts-ignore
import News from '/Components/Module/News.vue'
// @ts-ignore
import Fold from '/Components/Module/Fold.vue'
// @ts-ignore
// import MonthlyZenerate from '/Components/Module/MonthlyZenerate.vue'
// @ts-ignore
import Partnership from '/Components/Module/Partnership.vue'
// @ts-ignore
import Program from '/Components/Module/Program.vue'
// @ts-ignore
import Youtube from '/Components/Module/Youtube.vue'
// @ts-ignore
import Career from '/Components/Module/Career.vue'
// @ts-ignore
import Solution from '/Components/Module/Solution.vue'
// @ts-ignore
import Scroll from '/Components/Module/Scroll.vue'
</script>

<style lang="scss" scoped>
/** layout setting */
.module-scroll {
  width: 100%;
}
.module-grid {
  margin-bottom: 88px;

  /** grid setting */
  display: grid;
  grid-template-columns: repeat(11, minmax(0px, 1fr));
  padding: 0px 4px;
  @include tablet {
    grid-template-columns: repeat(10, minmax(0px, 1fr));
    margin-bottom: 24px;
  }
  @include mobile {
    margin-bottom: 44px;
    grid-template-columns: repeat(10, minmax(0px, 1fr));
  }
  .grid-item {
    width: 100%;
  }
  .column {
    grid-area: column;
    @include desktop {
      height: 1048px;
    }
    @include tablet {
      height: auto;
    }
    @include mobile {
      height: auto;
      margin-bottom: 32px;
    }
  }
  .news {
    grid-area: news;
    @include desktop {
      height: 1060px;
      padding: 0px 56px;
    }
    @include tablet {
      height: 250px;
    }
    @include mobile {
      height: 160px;
    }
  }
  .team {
    grid-area: team;
    @include desktop {
      height: 220px;
    }
    @include tablet {
      margin-top: auto;
      height: 264px;
    }
    @include mobile {
      height: auto;
    }
  }
  .consulting {
    grid-area: consulting;
    background: white;
    @include desktop {
      height: 540px;
    }
    @include tablet {
      height: 608px;
    }
    @include mobile {
      height: auto;
    }
  }
  .explanation {
    grid-area: explanation;
    @include desktop {
      height: 180px;
    }
    @include tablet {
      height: auto;
    }
    @include mobile {
      height: auto;
    }
  }
  .fold {
    grid-area: fold;
    @include desktop {
      height: 650px;
    }
    @include tablet {
      height: 980px;
    }
    @include mobile {
      height: auto;
    }
  }
  .monthly {
    grid-area: monthly;
    @include desktop {
      height: 369px;
    }
    @include tablet {
      height: auto;
    }
    @include mobile {
      height: auto;
    }
  }
  .program {
    grid-area: program;
    @include desktop {
      height: 343px;
    }
    @include tablet {
      height: auto;
    }
    @include mobile {
      height: auto;
    }
  }
  .partnership {
    grid-area: partnership;
    @include desktop {
      height: 588px;
    }
    @include tablet {
      height: auto;
    }
    @include mobile {
      height: auto;
    }
  }
  .youtube {
    grid-area: youtube;
    @include desktop {
      height: 400px;
    }
    @include tablet {
      height: 400px;
    }
    @include mobile {
      height: 330px;
    }
  }
  .solution {
    grid-area: solution;
    @include desktop {
      height: 160px;
    }
    @include tablet {
      height: 160px;
    }
    @include mobile {
      height: 230px;
    }
  }
  .career {
    grid-area: career;
    @include desktop {
      height: 304px;
    }
    @include mobile {
      height: 320px;
    }
  }
  .footer {
    grid-area: footer;
    background: black;
    @include desktop {
      height: 178px;
    }
    @include tablet {
      height: 178px;
    }
    @include mobile {
      height: 178px;
    }
  }

  @include desktop {
    grid-template-areas:
      'column column column column news news news explanation explanation explanation explanation'
      'column column column column news news news consulting consulting consulting consulting'
      'column column column column news news news team team team team'
      'fold fold fold fold fold fold fold fold fold fold fold'
      'program program program program solution solution solution solution solution solution solution'
      'program program program program youtube youtube youtube youtube youtube youtube youtube'
      'partnership partnership partnership partnership youtube youtube youtube youtube youtube youtube youtube'
      'partnership partnership partnership partnership career career career career career career career'
      'footer footer footer footer footer footer footer footer footer footer footer';
  }
  @include tablet {
    grid-template-areas:
      'column column column column column explanation explanation explanation explanation explanation'
      'column column column column column consulting consulting consulting consulting consulting'
      'column column column column column team team team team team'
      'news news news news news news news news news news'
      'fold fold fold fold fold fold fold fold fold fold'
      'partnership partnership partnership partnership partnership program program program program program'
      'partnership partnership partnership partnership partnership career career career career career'
      'solution solution solution solution solution youtube youtube youtube youtube youtube'
      'footer footer footer footer footer footer footer footer footer footer';
  }
  @include mobile {
    grid-template-areas:
      'column column column column column column column column column column'
      'explanation explanation explanation explanation explanation explanation explanation explanation explanation explanation'
      'program program program program program program program program program  program'
      'consulting consulting consulting consulting consulting consulting consulting consulting consulting consulting'
      'solution solution solution solution solution solution solution solution solution solution'
      'news news news news news news news news news news'
      'fold fold fold fold fold fold fold fold fold fold'
      'team team team team team team team team team team'
      'partnership partnership partnership partnership partnership partnership partnership partnership partnership partnership'
      'career career career career career career career career career career'
      'youtube youtube youtube youtube youtube youtube youtube youtube youtube youtube'
      'footer footer footer footer footer footer footer footer footer footer';
  }
}
</style>
