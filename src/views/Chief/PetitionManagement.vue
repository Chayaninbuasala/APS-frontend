<template>
  <!-- ส่วนจัดเเสดง -->
  <div id="Formmanagementchief">
    <NavbarHOF />
    <v-card class="cardshow">
      <h1>
        จัดการแบบฟอร์ม
        <v-divider></v-divider>
      </h1>
      <v-row>
        <v-col align="center">
          <v-btn width="300" height="150" class="box-margin">
            <h2>
              + <br /><br />
              สร้างเอกสารใหม่
            </h2></v-btn
          >
        </v-col>
      </v-row>

      <v-card class="box-marginlist">
        <v-row>
          <v-col align="center">ลำดับ</v-col>
          <v-col align="center">รายการ</v-col>
          <v-col align="center">หน่วยงาน</v-col>
          <v-col align="center">ตัวเลือก</v-col>
        </v-row>
      </v-card>

      <v-card class="box-marginlist">
        <v-row v-for="forms in forms" :key="forms">
          <v-col align="center">{{ forms.no }}</v-col>
          <v-col align="center">{{ forms.text }}</v-col>
          <v-col align="center">{{ forms.agency }}</v-col>
          <v-col>
            <v-btn color="#FFEB3B" class="btn-magin"> เเก้ไขข้อมูล</v-btn>
            <v-btn color="#F44336"> ลบข้อมูล</v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </div>
  <!-- ส่วนจัดเเสดง -->
</template>
<script>
import NavbarHOF from "../../components/NavbarChief.vue";
export default {
  name: "Formmanagementchief",
  components: {
    NavbarHOF,
  },
  data() {
    return {
      forms: [
        { no: "1", text: "ฟรอมที่ 1", agency: "ศึกษาทั่วไป", satatus: true },
        { no: "2", text: "ฟรอมที่ 2", agency: "ศึกษาทั่วไป", satatus: true },
        { no: "3", text: "ฟรอมที่ 3", agency: "ศึกษาทั่วไป", satatus: false },
        { no: "4", text: "ฟรอมที่ 4", agency: "ศึกษาทั่วไป", satatus: true },
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
.box-margin {
  margin: 3%;
}
.box-marginlist {
  margin: 0px 0px 10px 0px;
}
</style>
