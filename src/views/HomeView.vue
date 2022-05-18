<template>
  <div class="home">
    <transition name="fade">
      <div class="modal-info" v-if="showModal"></div>
    </transition>
    <transition name="fade">
      <div class="modal registerData" v-if="showModal">
        <div class="close">
          <button @click="showModal = false" class="btnClose">x</button>
        </div>
        <h1 class="title">Reporte por fecha de nacimiento</h1>
        <p class="text">Ingresa los siguientes datos para generar tu reporte</p>
        <form @submit.prevent="newReport" >
            <div class="formDescription">
              <label class="textDescription">Descripción del reporte</label>
              <input type="text" name="" id="" v-model="newReportList.description">
            </div>
            <div class="formData">
              <p class="textDate">Fecha de nacimiento</p>
              <div class="date">
                <div class="formInitial">
                  <label>Inicio</label>
                  <input type="date" name="" id="" v-model="newReportList.startDate">
                </div>
                <div class="formEnd">
                  <label>Fin</label>
                  <input type="date" name="" id="" v-model="newReportList.endingDate">
                </div>
              </div>
            </div>

            <button type="submit" class="btnReport">Generar reporte</button>
        </form>
      </div>
    </transition>

    <button @click="showModal = true" class="btnReport">Filtra tu data de usuarios</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data () {
    return {
      showModal: true,
      newReportList: {
        description: '',
        startDate: '',
        endingDate: ''
      }
    }
  },
  methods: {
    newReport () {
      const dataFilter = {
        description: this.newReportList.description,
        startDate: this.newReportList.startDate,
        endingDate: this.newReportList.endingDate
      }
      this.newReportList.description = ''
      this.newReportList.startDate = ''
      this.newReportList.endingDate = ''

      localStorage.setItem('newReport', JSON.stringify(dataFilter))
      this.$router.push({ path: '/ReportData' })
    }
  }
}
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
body,
html {
  width: 100%;
  height: 100%;
}
.close{
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.btnClose{
  width: 1rem;
  height: 1rem;
  justify-content: center;
  padding-bottom: 1rem;
  border: none;
  cursor: pointer;
}
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
form{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
}
.title{
  width: 414px;
  height: 28px;
  justify-content: center;
  font-family: 'Argentum Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #181818;
  margin-bottom: 1rem;
}
input{
  border: none;
  padding: 10px;
  color: #696969;
}
.text{
  width: 479px;
  height: 16px;
  justify-content: center;
  font-family: 'Argentum Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #565656;
}
.btnReport{
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 50px;
  width: 227px;
  height: 51px;
  background: #FFBE12;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  font-family: 'Argentum Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #181818;
}
.modal-info{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 100;
  background: rgb(15, 15, 15);
}
.modal{
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px 20px;
  gap: 10px;
  width: 526px;
  height: 417px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: 101;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.formData{
  display: flex;
  flex-direction: column;
  height: 16px;
  font-family: 'Argentum Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #696969;
  margin-bottom: 4rem;
}
.date{
  display: flex;
  justify-content: flex-start;
  width: 456px;
}
.textDescription{
  width: 144px;
  height: 16px;
  font-family: 'Argentum Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #696969;
}
.formDescription{
  display: flex;
  flex-direction: column;
  width: 456px;
  box-sizing: border-box;
  height: 54px;
  left: 0.5px;
  right: 0.5px;
  top: calc(50% - 54px/2 + 3.5px);
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 6px;
}
.textDate{
  width: 129px;
  height: 16px;
  font-family: 'Argentum Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #696969;
  margin-bottom: 15px;
}
.formInitial{
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 54px;
  width: 221px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  margin-right: 16px;
}
.formEnd{
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 54px;
  width: 221px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 6px;
}
</style>
