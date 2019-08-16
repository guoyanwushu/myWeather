export function turnDateToWeek (dateString) {
  const weekMap = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  return weekMap[new Date(dateString).getDay()]
}
