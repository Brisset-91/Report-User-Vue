<template>
  <main>
    <nav>
      <h1 class="textNav">t</h1>
      <h1 class="textNav">k</h1>
      <h1 class="textTitle">ambio</h1>
    </nav>
    <div class="report">
      <h1 class="titleReport">Generador de reporte TK</h1>
      <div class="newData">
        <Grid
            :style="{
              width: '300px',
              margin: '20px'
            }"
            :data-items="items"
            :columns = "columns"
            >
        </Grid>
      </div>
      <button @click="exportExcel" class="btnExport">Crear reporte</button>
    </div>
  </main>
</template>

<script>
import { onValue } from 'firebase/database'
import { starCountRef } from '../main.js'
import { Grid } from '@progress/kendo-vue-grid'
import { saveExcel } from '@progress/kendo-vue-excel-export'

export default {
  components: {
    Grid: Grid
  },
  data: function () {
    return {
      items: [],
      columns: [
        { field: 'birth_date', title: 'Birth date' },
        { field: 'description', title: ' Name user' }
      ]
    }
  },
  methods: {
    exportExcel () {
      saveExcel({
        data: this.items,
        fileName: 'reporte',
        columns: [
          { field: 'birth_date', title: 'Birth date' },
          { field: 'description', title: 'Name user' }
        ]
      })
    },
    listData () {
      let listsUsers = []
      const newReport = JSON.parse(localStorage.getItem('newReport'))

      const intialDateSplit = newReport.startDate.split('-')
      const intialDateA = new Date(intialDateSplit[0], intialDateSplit[1] - 1, intialDateSplit[2])
      const intialDate = new Date(intialDateA)

      const finalDateSplit = newReport.endingDate.split('-')
      const finalDateB = new Date(finalDateSplit[0], finalDateSplit[1] - 1, finalDateSplit[2])
      const finalDate = new Date(finalDateB)

      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val()
        listsUsers = data
      })
      console.log(intialDate)
      console.log(finalDate)

      const newData = () => {
        return Object.values(listsUsers).filter((element) => {
          const dateOfBirthSplit = element.birth_date.split('/')
          const dateOfBirthA = new Date(dateOfBirthSplit[2], dateOfBirthSplit[1] - 1, dateOfBirthSplit[0])
          const dateOfBirth = new Date(dateOfBirthA)
          return dateOfBirth >= intialDate && dateOfBirth <= finalDate ? element : null
        })
      }
      return newData()
    }
  },
  mounted () {
    this.items = this.listData()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
main{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.textNav{
  color: #FFBE12;
  font-size: 3rem;
}
.textTitle{
  font-size: 3rem;
}
nav{
  /* Auto layout */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 60px;
  position: absolute;
  width: 100%;
  height: 74px;
  /* Gradient */
  background: linear-gradient(180deg, #02ADF1 -2.37%, #4562E6 124.84%, #4563E6 124.84%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 1rem;
  font-size: 2rem;
}
.report{
  margin-top: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.titleReport{
  width: 360px;
  height: 33px;
  font-family: 'Argentum Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
}
.newData{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px 40px;
  width: 400px;
  height: 140px;
  background: #4563E6;
  border-radius: 10px;
  margin-bottom: 2rem;
  margin-top: 2rem;

  color: #FFFFFF;
  font-family: 'Argentum Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
}
.btnExport{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 187px;
  height: 43px;
  background: #FFBE12;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  border: none;
  cursor: pointer;
}
</style>
