<template>
  <div>
    <search-input></search-input>
    <city-info></city-info>
  </div>
</template>
<script>
import SearchInput from '../components/searchInput'
import CityInfo from '../components/city-info'
export default {
  components: {
    SearchInput,
    CityInfo
  }
}
</script>
