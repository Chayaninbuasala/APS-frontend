<template>
  <!-- ส่วนจัดเเสดง -->
  <div id="TrackingHOffice">
    <NavbarHOF />
    <v-card class="cardshow">
      <h1>
        สถานะเอกสาร / คำร้อง
        <v-divider></v-divider>
      </h1>

      <!-- วนเเสดงรายการสถาณะเอสาร -->

      <v-expansion-panels>
        <v-expansion-panel
          v-for="listtracking in listtracking"
          :key="listtracking.num"
        >
          <v-expansion-panel-header>
            {{ listtracking.title }}
            <!-- เเสดงชื่อเอกสาร -->
            <v-spacer></v-spacer>
            {{ listtracking.checktracking }} / {{ listtracking.pointracking }}
            <!-- เเสดงขั้นนตอน-->
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <!-- เเสดงเนื้อหาข้างใน -->

            <v-container id="inspire">
              <v-stepper alt-labels>
                <v-stepper-header>
                  <v-stepper-step
                    step="1"
                    v-for="listtracking in listtracking.pointracking"
                    :key="listtracking.pointracking"
                  >
                    รับข้อมูล
                  </v-stepper-step>
                </v-stepper-header>
              </v-stepper>
            </v-container>

            <!-- เเสดงเนื้อหาข้างใน -->
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
  <!-- ส่วนจัดเเสดง -->
</template>

<script>
import NavbarHOF from "../../components/NavbarChief.vue";
export default {
  name: "TrackingHOffice",
  components: {
    NavbarHOF,
  },
  data() {
    return {
      listtracking: [
        { num: 1, title: "เอกสารที่1", pointracking: 6, checktracking: 3 },
        { num: 2, title: "เอกสารที่2", pointracking: 2, checktracking: 2 },
        { num: 3, title: "เอกสารที่2", pointracking: 2, checktracking: 1 },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 10px;
}
h2 {
  text-align: center;
  padding: 10px;
}
.cardshow {
  margin: 8%;
}
.trackcrad {
  text-align: center;
}
.text-right {
  text-align: left;
}
.tarkingbtn {
  margin: 10px;
}
.checkingbtn {
  margin: 10px;
}
</style>
