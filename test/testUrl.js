let url = 'http://dev.smart.com/api/organization-staff/getOrganization?'

let str = url.slice(url.indexOf('/api/')+5)
str = str.split('/')[0].replace('-','')
console.log(str)

// let reg = //