function  getBonus (promocode) {

    let arrPromocode = [];
    let multiNum = [];
    let nonMultiNum = [];

    for (let i = 0; i <= promocode.length; i++ ) {
    arrPromocode.push(promocode % 10);
    promocode = parseInt(promocode / 10);
    }

    arrPromocode.reverse();

    if (arrPromocode.length !== 8) return 'Не верный промокод';

    arrPromocode.forEach(item => {
        if (item % 2 === 0) {
        multipNum.push(item);
        } else { 
        nonMultiNum.push(item);
        }
    });

    let evenNum = multiNum.reduce((a, b) => a + b);
    let oddNum = nonMultiNum.reduce((a, b) => a+ b);

}