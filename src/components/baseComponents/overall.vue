<template>
  <!-- overall -->
  <div class="content-box overall-box">
    <p class="title"><strong>總覽</strong></p>
    <hr/>
    <div class="overall d-md-flex justify-content-around">
    	<template v-for="item of data">
	      <div class="overall-item">
	        <p class="fw-bold">{{ item.title }}</p>
	        <p class="number fw-bolder" :style="{ color: item.color}">{{ item.number }}</p>
	      </div>	    		
    	</template>
    </div>
  </div>	
</template>

<script type="text/javascript">
	import {ref, onMounted, computed} from "vue"
	export default {
	  name:'',
	  props: {
	    parentData: Array
	  },
	  setup(props){
	  	//props data
	  	const data  = ref(props.parentData)

	  	return {data}
	  }
	} 
</script>

<style lang="scss" scoped>
.overall-box{
  width: auto;
  height: auto;
  .selectInfo{
  	width: 100px;
  	height: 38px;
  	background-color: #E9F2FF;
  	border-radius: 4px;
  	border: none;
  	cursor: pointer;
  };
  .dateInfo{
  	color: #E9F2FF
  }
}
.overall-item{
  width: 100px;
}
.number{
  font-size: 2.5rem;
  color: blue;
}	
</style>

	