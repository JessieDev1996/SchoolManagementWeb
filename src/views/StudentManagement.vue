<template>
<v-container >
<v-table height="300px" fixed-header>
    <thead>
      <tr>
        <th class="text-left">
          Name
        </th>
        <th class="text-left">
          BirthDate
        </th>
        <th class="text-left">
          Gender
        </th>
        <th class="text-left">
          address
        </th>
        <th class="text-left">
          phone_number
        </th>
        <th class="text-left">
          email
        </th>
        <th class="text-left">
          enrollment_date
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in this.info"
        :key="item.first_name"
      >
        <td>{{ item.first_name + ' '+ item.last_name }}</td>
        <td>{{ item.date_of_birth }}</td>
        <td v-if="item.gender == 'F'">ผู้หญิง</td>
        <td v-else>ผู้ชาย</td>
         <td>{{ item.address }}</td>
         <td>{{ item.phone_number }}</td>
         <td>{{ item.email }}</td>
         <td>{{ item.enrollment_date }}</td>
      </tr>
    </tbody>
  </v-table>
</v-container>
</template>

<script>
import Navbar from "@/components/Navigation.vue";
import axios from "axios";

  export default {
    components:{
      Navbar
    },
    data () {
      return {
        info :'',
        eiei : []
      }
    },
    mounted() {
     axios
      .get('https://localhost:44390/api/Student')
      .then(response => (this.info = response.data))
       console.log(this.info);
    }
  }
</script>

