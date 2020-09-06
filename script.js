// pls make at least 5 persons
const people = [{
    id: 1,
    name: 'Alex',
    age: 19,
    moneyAmount: 150,
    desiredAlcoholName: 'whisky',
    desiredAlcoholAmount: 2,
},
{
    id: 2,
    name: 'Marty',
    age: 25,
    moneyAmount: 300,
    desiredAlcoholName: 'gin',
    desiredAlcoholAmount: 1,
},
{
    id: 3,
    name: 'Melman',
    age: 30,
    moneyAmount: 200,
    desiredAlcoholName: 'vine',
    desiredAlcoholAmount: 4,
},
{
    id: 1,
    name: 'Gloria',
    age: 27,
    moneyAmount: 400,
    desiredAlcoholName: 'rum',
    desiredAlcoholAmount: 2,
},
{
    id: 1,
    name: 'Julien',
    age: 35,
    moneyAmount: 500,
    desiredAlcoholName: 'cognac',
    desiredAlcoholAmount: 2,
}];

// pls make at least 5 alcohol
const alcoholPriceForOneItem = {
    whisky: 23,
    gin: 25,
    vine: 20,
    rum: 35,
    cognac: 27
};

const LEGAL_AGE = 18;


/**
 * Function is used to filter array of objects by age param, name of param is passed as second argument
 * If object has age above LEGAL_AGE -> it's returned in new array 
 * @param {Array} arr
 * @param {String} ageParamName
 * Returns filtered array
 * f.e function is called getLegalAgePeople(people, 'age');
 * 
 * tip: use .filter method
 */
function getLegalAgePeople(arr, ageParamName) {
    // WRITE CODE HERE
    const result = arr.filter(function (person) {
        const age = person[ageParamName];
        const getLegalAge = age >= LEGAL_AGE;
        return getLegalAge;
    });
    return result;
}

/**
 * Function is used to filter array of objects
 * If object has money amount more than alcohol price multiplied by alcohol amount -> it's returned to new array
 * @param {Array} arr 
 * Returns filtered array
 * f.e function is called getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
 * 
 * tip: use .filter method or for()
 */
function getPeopleWhoHaveMoneyForAlcohol(arr) {
    // WRITE CODE HERE
    const result = arr.filter(function (person) {
        const alcoholName = person.desiredAlcoholName;
        const alcoholPrice = alcoholPriceForOneItem[alcoholName];
        const purchaseAmount = alcoholPrice * person.desiredAlcoholAmount;
        const enoughMoney = purchaseAmount <= person.moneyAmount;
        return enoughMoney;
    });
    return result;
}

/**
 * Function is used to get array of strings
 * @param {Array} arr 
 * Returns filtered array of strings like:
 * ["NAME bought COUNT bottles of ALCOHOL_NAME for SUM rubles"]
 * where NAME is name of person, COUNT is bottles count, ALCOHOL_NAME is name of alcohol, SUM is bottles count multipled by price for a bottle
 * f.e function is called buyAlcohole(legalAgePeople);
 * 
 * tip: use .map method or for()
 */
function buyAlcohol(arr) {
    const result = arr.map(function (person) {
        const alcoholName = person.desiredAlcoholName;
        const alcoholPrice = alcoholPriceForOneItem[alcoholName];
        const purchaseAmount = alcoholPrice * person.desiredAlcoholAmount;
        const sendMessage = person.name + " bought " + person.desiredAlcoholAmount + " bottles of " + alcoholName + " for " + purchaseAmount + " rubles";
        return sendMessage;
    });
    return result;
}



// TEST FUNCTION. PLS DON'T TOUCH
function check() {
    try {
        const people = [{
            id: 1,
            name: 'a',
            age: 19,
            moneyAmount: 100,
            desiredAlcoholName: 'whisky',
            desiredAlcoholAmount: 2,
        }];
    
        const legalAgePeople = getLegalAgePeople(people, 'age');
        if (!legalAgePeople || legalAgePeople[0].id !== 1) {
            throw new Error('check getLegalAgePeople function');
        }

        const peopleWhoHaveMoney = getPeopleWhoHaveMoneyForAlcohol(legalAgePeople);
        if (!peopleWhoHaveMoney || peopleWhoHaveMoney[0].id !== 1) {
            throw new Error('check getPeopleWhoHaveMoneyForAlcohol function');
        }

        const checkResult = buyAlcohol(peopleWhoHaveMoney);
        
        if (!checkResult || checkResult[0] !== "a bought 2 bottles of whisky for 46 rubles") {
            throw new Error('check buyAlcohole function');
        }

        alert('Correct! You\'re awesome');
    } catch (err) {
        alert(err);
    }
}