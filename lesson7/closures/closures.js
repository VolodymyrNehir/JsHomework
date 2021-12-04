let userCard =(n)=>{
    let user = {balance: 100,
        transactionLimit: 100,
        historyLog: [],
        key: n}
let putCredits = (balacePush)=>{
        if (typeof balacePush === 'number')
        {user.balance.push(balacePush)}
}
let data = new Date()
            let dataTrancs = (data.toDateString(),', ',data.toLocaleTimeString())
    console.log(dataTrancs)


}
let uC = userCard(6);
