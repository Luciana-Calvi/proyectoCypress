class registro{

    form = {

        buttonSignIn : '#MenuContent > a:nth-child(3)',
        buttonRegisterNow : '#Catalog > a',
        userId : '#stripes--1208824890',
        newPassword : '#Catalog > form > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]',
        repeatPassword: '#Catalog > form > table:nth-child(2) > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=text]',
        firstName : '#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(1) > td:nth-child(2) > input[type=text]',
        lastName : '#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(2) > input[type=text]',
        email : '#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(3) > td:nth-child(2) > input[type=text]',
        phone : '#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(4) > td:nth-child(2) > input[type=text]',
        addressUno : '#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(5) > td:nth-child(2) > input[type=text]',
        addressDos : '#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(6) > td:nth-child(2) > input[type=text]',
        city : '#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(7) > td:nth-child(2) > input[type=text]',
        state : '#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(8) > td:nth-child(2) > input[type=text]',
        zip : '#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(8) > td:nth-child(2) > input[type=text]',
        country : '#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(10) > td:nth-child(2) > input[type=text]',
        buttonFavouriteCategory : '#Catalog > form > table:nth-child(6) > tbody > tr:nth-child(2) > td:nth-child(2) > select',
        selectorDogs : '#Catalog > form > table:nth-child(6) > tbody > tr:nth-child(2) > td:nth-child(2) > select > option:nth-child(2)',
        buttonSaveAccountInformation: '#Catalog > form > input[type=submit]',
      
    }

}

module.exports = new registro();