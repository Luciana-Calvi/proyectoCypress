class registro{

    form = {

        buttonSignIn : '#MenuContent > a:nth-child(3)',
        buttonRegisterNow : '#Catalog > a',
        userId : 'input[name="username"]',
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
        zip : 'input[name="account.zip"]',
        country : '#Catalog > form > table:nth-child(4) > tbody > tr:nth-child(10) > td:nth-child(2) > input[type=text]',
       // buttonFavouriteCategory : '//*[@id="Catalog"]/form/table[3]/tbody/tr[2]/td[2]/select',
        //selectorDogs : '<option value="DOGS">DOGS</option>',
        buttonSaveAccountInformation: '[name="newAccount"]',

        
      
    }

}

module.exports = new registro();