"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios = require('axios');
function getInformation(cities, cities2) {
    return __awaiter(this, void 0, void 0, function* () {
        function getUrl(city) {
            return `http://geocode.xyz/${city}?json=1&auth=162537408651431127916x127624`;
        }
        //- Send parallel requests for information about cities - Minsk, Madrid, Rome. Display the
        // result in format: city - country.
        function getCitiesInfo(cities) {
            return __awaiter(this, void 0, void 0, function* () {
                const result = [];
                for (const city of cities) {
                    let response = yield axios.get(getUrl(city));
                    if (response.data.error) {
                        throw new Error(`${response.data.error.description}. Incorrect city for cities info`);
                    }
                    else {
                        result.push(response.data.standard);
                    }
                }
                return result;
            });
        }
        //- Using Promise.race get the country of these cities - Paris, Nice. Display result.
        function getInfoRace() {
            return __awaiter(this, void 0, void 0, function* () {
                const tasks = [];
                for (const city of cities2) {
                    tasks.push(axios.get(getUrl(city)));
                }
                const response = yield Promise.race(tasks);
                if (response.data.error) {
                    throw new Error(`${response.data.error.description}. Incorrect city for race info`);
                }
                return response.data.standard.countryname;
            });
        }
        //Write a function that returns a promise that resolves any cities' names after 3 second.
        // After you get names send parallel requests for information about cities. Display the country of
        // the cities.
        function getAnyNamesCity() {
            return __awaiter(this, void 0, void 0, function* () {
                const cities = ['Minsk', 'Moscow', 'Kiev', 'Grodno', 'Brest', 'Orsha'];
                return new Promise((resolve) => {
                    setTimeout(() => resolve(cities), 3000);
                });
            });
        }
        function getAnyCitiesInfo() {
            return __awaiter(this, void 0, void 0, function* () {
                const citiesName = yield getAnyNamesCity();
                return yield getCitiesInfo(citiesName);
            });
        }
        try {
            const result = [];
            const response1 = yield getCitiesInfo(cities);
            const response2 = yield getInfoRace();
            const response3 = yield getAnyCitiesInfo();
            result.push(response1.map(item => `${item.city}-${item.countryname}`));
            result.push(response2);
            result.push(response3.map(item => item.countryname));
            return result;
        }
        catch (e) {
            throw new Error(e);
        }
    });
}
getInformation(['Minsk', 'Madrid', 'Rome'], ['Paris', 'Nice'])
    .then(res => console.log(res))
    .catch(err => console.log(err));
