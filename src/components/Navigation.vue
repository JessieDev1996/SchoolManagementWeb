<template>
    <v-navigation-drawer permanent >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            SchoolManagement System
          </v-list-item-title>
          <v-list-item-subtitle>
            Menu
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

</template>

<script>
export default {
    name: 'Navbar',
    data () {
      return {
        items: [
          { title: 'StudentManagement', icon: 'fas fa-list' },
          { title: 'TeacherManagement', icon: 'mdi-image' },
          { title: 'SubjectManagement', icon: 'mdi-help-box' },
        ],
        right: null,
      }
    }
}
</script>
