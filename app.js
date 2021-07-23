const priceInputs = document.querySelectorAll('input')
const form = document.querySelector('#myform');
console.log(form)

form.addEventListener('submit', e => {
    e.preventDefault()

    // collecting prices

    var purchasePrice = Number(priceInputs[0].value)
    var stockQuantity = Number(priceInputs[1].value)
    var currentPrice = Number(priceInputs[2].value)
    var brokeragePercent = Number(priceInputs[3].value)

    // console.log(purchasePrice, stockQuantity, currentPrice)

    if (purchasePrice > 0 && stockQuantity > 0 && currentPrice > 0) {
        if (purchasePrice > currentPrice) {
            //total loass in cash
            // const brokerage = purchasePrice*stockQuantity*brokeragePercent/100 + currentPrice*stockQuantity*brokeragePercent/100;
            var totalLoss = ((purchasePrice - currentPrice) * stockQuantity) + (purchasePrice*stockQuantity*brokeragePercent/100 + currentPrice*stockQuantity*brokeragePercent/100);
            //loss in percentage
            // const lossPerce = (((purchasePrice - currentPrice) * 100) / purchasePrice).toFixed(2);
            // console.log(TotalLoss, lossPerce)
            // lossPercentage(lossPerce)
            // if (lossPerce > 50) {
            //     document.querySelector('.background').style.backgroundImage = "url('/gif2.webp')"
            //     document.querySelector('.background').style.backgroundSize = "cover";
            //     document.querySelector('.background').style.backgroundPosition = "center";
            // }
            var losses = ''
            losses = `
            
                    <div class="loss-info">
                    
                        <p>  Your total loss is ₹${totalLoss}</p>

                    </div>

            `
            document.querySelector('.output').innerHTML = losses;

        } else {
            //total profit in cash
            // const brokerage = purchasePrice*stockQuantity*brokeragePercent/100 + currentPrice*stockQuantity*brokeragePercent/100;
            const totalProfit = ((currentPrice - purchasePrice) * stockQuantity) - (purchasePrice*stockQuantity*brokeragePercent/100 + currentPrice*stockQuantity*brokeragePercent/100);
            //profit in percentage
            // const profitPer = (((currentPrice - purchasePrice) * 100) / purchasePrice).toFixed(2);
            // profitPercentage(profitPer)

            // if (profitPer > 50) {
            //     document.querySelector('.background').style.backgroundImage = "url('/giphy.webp')"
            //     document.querySelector('.background').style.backgroundSize = "cover"
            //     document.querySelector('.background').style.backgroundPosition = "center"
            // }

            var prof = ''
            prof = `
            
                    <div class="loss-info">
                    
                        <p> Your total profit is ₹${totalProfit}</p>

                    </div>

            `
            document.querySelector('.output').innerHTML = prof;
        }


    }
})

// function lossPercentage(e) {
    
// }

// function profitPercentage(el) {
//     if (el > 50) {
//         document.querySelector('.background').style.backgroundImage = "url('/giphy.webp')"
//         document.querySelector('.background').style.backgroundSize = "cover"
//         document.querySelector('.background').style.backgroundPosition = "center"
//     }
// }