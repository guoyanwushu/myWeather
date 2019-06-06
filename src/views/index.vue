<template>
  <div>
    <search-input></search-input>
    <city-info></city-info>
  </div>
</template>
<script>
import SearchInput from '../components/SearchInput'
import CityInfo from '../components/city-info'
export default {
  components: {
    SearchInput,
    CityInfo
  }
}
</script>
