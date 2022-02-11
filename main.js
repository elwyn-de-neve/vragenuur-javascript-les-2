// for ( let i = 0; i < 100; i++ ) {
//     // Deze code wordt elke loop uitgevoerd
//     console.log( i );
// }


// for ( let index = 50; index <= 100; index++ ) {
//     // Deze code wordt elke loop uitgevoerd
//     console.log( index );
// }

const array = [
    {
        name: 'Piet',
        gender: 'M',
    },
    {
        name: 'Charlotte',
        gender: 'F',
    },
    {
        name: 'Klaas',
        gender: 'M',
    },
    {
        name: 'Nienke',
        gender: 'F',
    },
    {
        name: 'Peter',
        gender: 'GN',
    },
    {
        name: 'Jan',
        gender: 'HF',
    },
    ]

const totaalAantalStudenten = array.length;
// console.log(totaalAantalStudenten)
// console.log(array.length);

// De data in de '' komt straks uit een input veld
// const inputGender = 'M'

for ( let i = 0; i < totaalAantalStudenten; i++ ) {
    const currentName = array[i].name;
    const currentGender = array[i].gender;

    if ( currentGender === 'M' ) { // de waarde die je wilt checken komt tussen haakjes
        // komt de code die wordt uitgevoerd zodra de waarde true is
        console.log(`Hallo meneer: ${ currentName }`);
    } else if ( currentGender == 'F' ) {
        console.log(`Hallo mevrouw: ${ currentName }`);
    } else {
        console.log(`Hallo: ${ currentName }`);
    }
}

// console.log(Math.pow(4,3))
// console.log(Math.random() * 10)
