export const googleRoute = (origin:string,destination:string,mode='transit') =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=${mode==='A pie'?'walking':'transit'}`
export const googlePlace = (place:string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place)}`
export const bvgRoute = (origin:string,destination:string) => `https://www.bvg.de/en/connections/connection-search?start=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}`

export const downloadJson = (value:unknown) => {
  const blob=new Blob([JSON.stringify(value,null,2)],{type:'application/json'})
  const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url
  a.download=`berlin-trip-backup-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(url)
}
