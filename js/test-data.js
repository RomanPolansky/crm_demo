var generateTestData = function(){
    var ExampleItem = function(name, phone, email, product){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.product = product;
    }
   
    var testData = [
        new ExampleItem("Роман Полянский", "+7(987)987-60-24", "rpolansky2020@gmail.com", "Курс по JavaScript"),
        new ExampleItem("Тестовый Гугл", "+7(999)111-11-11", "test@gmail.com", "Курс по PHP"),
        new ExampleItem("Тестовый Яндекс", "+7(999)222-22-22", "test@yandex.ru", "Курс по WordPress"),
        new ExampleItem("Тестовый Майл", "+7(999)333-33-33" ,"test@mail.ru", "Курс по верстке"),
        new ExampleItem("Тестовый СамГТУ", "+7(846)278-43-53", "test@samgtu.ru", "Курс по верстке")
    ]

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function insertInUI() {
        var random = getRandomInt(testData.length);
        var randomItem = testData[random];
    
        document.querySelector("#input__name").value = randomItem.name;
        document.querySelector("#input__phone").value = randomItem.phone;
        document.querySelector("#input__email").value = randomItem.email;
        document.querySelector("#exampleFormControlSelect1").value = randomItem.product;
    }

    return{
        init: insertInUI
    }
}();

generateTestData.init();