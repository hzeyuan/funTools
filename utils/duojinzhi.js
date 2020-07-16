let jinzhi2ten = (obj)=>{
    let res = 0
    let str = String(obj.value)
    for(let i=str.length-1;i>=0;i--){
        let j = str.length - i-1
        res +=parseInt(str[i]) * obj.jinzhi**j
    }
    return res
}

let duojinzhi = (obj1='',needChangeJinzhi=10,rules='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ')=>{
    let res = ''
    if(obj1==='')return -1
    if(obj1.jinzhi===needChangeJinzhi) return obj1.value //如果需要转换的进制相同，直接返回
    let r1 = jinzhi2ten(obj1)
    while(r1>0){
        let a = r1% needChangeJinzhi
        r1 = Math.floor(r1/needChangeJinzhi)
        res = `${rules[a]}${res}`
    }
    return res

}

// let obj = {jinzhi:10,value:'27'}
// console.log(duojinzhi(obj,4))
// console.log(duojinzhi(obj,5))
// console.log(duojinzhi(obj,6))
// console.log(duojinzhi(obj,7))

export {duojinzhi}