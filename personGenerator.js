let randomNum = Math.floor(Math.random() * 4);
const clearButton = document.querySelector('.clear'); // кнопка очистить
const generatorButton = document.querySelector('.generator'); // кнопка генератор


const personFull = {
    otchestvoMale: `{
            "count": 10,
                "list": {     
                    "id_1": "Александрович",
                    "id_2": "Максимович",
                    "id_3": "Иванович",
                    "id_4": "Григорьевич",
                    "id_5": "Дмитриевич",
                    "id_6": "Анатольевич",
                    "id_7": "Михайлович",
                    "id_8": "Данилович",
                    "id_9": "Егорович",
                    "id_10": "Андреевич"
                }
            }`,
    otchestvoFeMale: `{
                "count": 10,
                    "list": {     
                        "id_1": "Александровна",
                        "id_2": "Максимовна",
                        "id_3": "Ивановна",
                        "id_4": "Григорьевна",
                        "id_5": "Дмитриевна",
                        "id_6": "Анатольевна",
                        "id_7": "Михайловна",
                        "id_8": "Даниловна",
                        "id_9": "Егоровна",
                        "id_10": "Андреевна"
                    }
                }`,

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function(json) {

        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },
    //Генерация Отчества мужчин
    randomotchestvoName: function() {
        return this.randomValue(this.otchestvoMale);
    },
    //Генерация Отчества женщин
    randomotchestvoFeName: function() {
        return this.randomValue(this.otchestvoFeMale);
    },
    //Запуск основной функции personFull
    getPersonFull: function() {
        this.personFullName = {};
        if (randomNum >= 1) {
            this.personFullName.OtchestvoName = this.randomotchestvoName();
            return this.personFullName;
        } else {
            this.personFullName.OtchestvoName = this.randomotchestvoFeName();
            return this.personFullName;
        }
    }
};
const personGenerator = {
    surnameJson: `{  
                "count": 15,
                "list": {
                    "id_1": "Иванов",
                    "id_2": "Смирнов",
                    "id_3": "Кузнецов",
                    "id_4": "Васильев",
                    "id_5": "Петров",
                    "id_6": "Михайлов",
                    "id_7": "Новиков",
                    "id_8": "Федоров",
                    "id_9": "Кравцов",
                    "id_10": "Николаев",
                    "id_11": "Семёнов",
                    "id_12": "Славин",
                    "id_13": "Степанов",
                    "id_14": "Павлов",
                    "id_15": "Александров",
                    "id_16": "Морозов"
                }
            }`,
    firstNameMaleJson: `{
                "count": 10,
                "list": {     
                    "id_1": "Александр",
                    "id_2": "Максим",
                    "id_3": "Иван",
                    "id_4": "Артем",
                    "id_5": "Дмитрий",
                    "id_6": "Никита",
                    "id_7": "Михаил",
                    "id_8": "Даниил",
                    "id_9": "Егор",
                    "id_10": "Андрей"
                }
            }`,
    firstNameFeMaleJson: `{
                "count": 10,
                "list": {     
                    "id_1": "Наталья",
                    "id_2": "Татьяна",
                    "id_3": "Ольга",
                    "id_4": "София",
                    "id_5": "Валентина",
                    "id_6": "Светлана",
                    "id_7": "Виктория",
                    "id_8": "Екатерина",
                    "id_9": "Нина",
                    "id_10": "Полина"
                }
            }`,
    proffession: `{
                "count": 10,
                "list": {     
                    "id_1": "Повар",
                    "id_2": "Директор",
                    "id_3": "HR менеджер",
                    "id_4": "IT специалист",
                    "id_5": "Водитель",
                    "id_6": "Кондуктор",
                    "id_7": "Начальник цеха",
                    "id_8": "Учитель",
                    "id_9": "Доктор",
                    "id_10": "Милиционер"
                }
            }`,
    month: `{
                "count": 10,
                "list": {     
                    "id_1": "Января",
                    "id_2": "Февраля",
                    "id_3": "Марта",
                    "id_4": "Апреля",
                    "id_5": "Мая",
                    "id_6": "Июня",
                    "id_7": "Июля",
                    "id_8": "Августа",
                    "id_9": "Сентября",
                    "id_10": "Октября",
                    "id_11": "Ноября",
                    "id_12": "Декабря"
                }
            }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function(json) {
        var obj = JSON.parse(json);
        var prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator

        return obj.list[prop];
    },

    randomFirstName: function() {
        return this.randomValue(this.firstNameMaleJson);
    },

    randomProff: function() {
        return this.randomValue(this.proffession);
    },

    randomFirstFeName: function() {
        return this.randomValue(this.firstNameFeMaleJson);
    },


    randomSurname: function() {
        return this.randomValue(this.surnameJson);
    },
    //Генерация г.р.
    randomBirthYearNum: function(max, min) {
        let randomYear = Math.floor(Math.random() * (max - min + 1) + min);
        return randomYear + '   г.р.';
    },
    //Генерация дня рождения
    randomDay: function(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    //Генерация месяца рождения
    randomMonth: function() {
        let x = this.randomValue(this.month);
        if (x == 'Января' || x == 'Марта' || x == 'Мая' || x == 'Июля' || x == 'Августа' || x == 'Октября' || x == 'Декабря') {
            x = this.randomDay(31, 1) + '    ' + x;
        };
        if (x == 'Апреля' || x == 'Июня' || x == 'Сентября' || x == 'Ноября') {
            x = this.randomDay(30, 1) + '    ' + x;
        };
        if (x == 'Февраля') {
            x = this.randomDay(28, 1) + '    ' + x;
        };
        return x;
    },

    getPerson: function() {
        this.person = {};

        if (randomNum >= 1) {
            this.person.firstName = this.randomFirstName(); //Генерация имени мужчин
            this.person.surName = this.randomSurname(); //Генерация фамилии мужчин
            this.person.birthYearNum = this.randomMonth() + '     ' + this.randomBirthYearNum(2000, 1945); //Генерация ДД.ММ.ГГ рождения мужчин
            this.person.gender = this.GENDER_MALE; //пол
            this.person.proff = this.randomProff(); //Генерация профессия
            return this.person;
        } else {
            this.person.surName = `${this.randomSurname()+'a'}`; //Генерация фамилии женщин
            this.person.firstName = this.randomFirstFeName(); //Генерация имени женщин
            this.person.birthYearNum = this.randomMonth() + '     ' + this.randomBirthYearNum(2000, 1945); //Генерация ДД.ММ.ГГ рождения женщин
            this.person.gender = this.GENDER_FEMALE;
            this.person.proff = this.randomProff(); //Генерация профессия
            return this.person;
        }
    }
};


clearButton.addEventListener('click', () => {
    document.getElementById('otchestvo').innerText = '';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('proff').innerText = '';
});

generatorButton.addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    const initPersonFull = personFull.getPersonFull();
    document.getElementById('otchestvo').innerText = initPersonFull.OtchestvoName;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYearNum;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('proff').innerText = initPerson.proff;
});