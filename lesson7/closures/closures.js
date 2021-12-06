let userCard =(n)=>{
    let data = new Date()
    let dataTrancs = (data.getDate() + '/'+ (data.getMonth()+1)+'/'+data.getFullYear()+ ',' + data.getHours()+':'+data.getMinutes()+':'+data.getSeconds())
    let user = {balance: 100, transactionLimit: 100, historyLog: [], key: n}
   let toHistoryLog =(type,balancePush)=>{
        user.historyLog.push({
        operationType: type,
            balancePush: balancePush,
            operationTime:dataTrancs})

    }

let fullUser = {
    getCardOptions: () => user,
    putCredits: function (credits) {
        user.balance += credits;
toHistoryLog('Received credits',credits)    },

    takeCredits: function (credits) {
        if (credits <= user.balance) {
            if (credits <= user.transactionLimit) {
                user.balance -= credits;
                toHistoryLog('Withdrawal of credits', credits)
            }else {
                console.error('Перевищено ліміт');
            }}
            else {console.error('Недостатньо коштів');
            }

        },
    setTransactionLimit: function (numberLimit){
        user.transactionLimit = numberLimit
        toHistoryLog('Transaction limit change',numberLimit)
    },
    transferCredits: function (credits,card){if (credits+(credits*0.005) <= user.balance){
if (credits+(credits*0.005) <= user.transactionLimit){
    card.putCredits(credits);
    fullUser.takeCredits(credits)

}
else {
    console.error('Перевищено ліміт'
    );
}}else {console.error('Недостатньо коштів');

    }
    }
    }


    return fullUser
}
// let userCard1 = userCard(3);
 // userCard1.putCredits(100);
// console.log(userCard1.getCardOptions())
// userCard1.takeCredits(50)
// userCard1.setTransactionLimit(5000)
// userCard1.transferCredits(47,userCard2)
class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard(){
        if (this.cards.length < 3){
       this.cards.push(userCard(this.cards.length+1))
            console.log(this.cards.length)
        }else {console.error(`${this.name} ви перевищили ліміт карт` )}

    }
    getCardByKey(key){
        if (key > 0 & key<this.cards.length+1){
            return this.cards[key-1]
        }else {console.error(`${this.name} ви ввели не вірний номер карти `)}

    }

}
user = new UserAccount('hhh');
user.addCard();
user.addCard();
let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);
card1.putCredits(500)
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardOptions())
console.log(card2.getCardOptions())






