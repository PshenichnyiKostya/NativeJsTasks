const axios = require('axios');

async function getInformation(cities: string[], cities2: string[]): Promise<any> {

    function getUrl(city: string): string {
        return `http://geocode.xyz/${city}?json=1&auth=162537408651431127916x127624`
    }

    //- Send parallel requests for information about cities - Minsk, Madrid, Rome. Display the
    // result in format: city - country.
    async function getCitiesInfo(cities: string[]): Promise<any> {
        const result: string[] = []
        for (const city of cities) {
            let response = await axios.get(getUrl(city))
            if (response.data.error) {
                throw new Error(`${response.data.error.description}. Incorrect city for cities info`)
            } else {
                result.push(response.data.standard)
            }
        }
        return result
    }

    //- Using Promise.race get the country of these cities - Paris, Nice. Display result.
    async function getInfoRace(): Promise<any> {
        const tasks: Promise<any>[] = []
        for (const city of cities2) {
            tasks.push(axios.get(getUrl(city)))
        }
        const response = await Promise.race(tasks)
        if (response.data.error) {
            throw new Error(`${response.data.error.description}. Incorrect city for race info`)
        }
        return response.data.standard.countryname
    }

    //Write a function that returns a promise that resolves any cities' names after 3 second.
    // After you get names send parallel requests for information about cities. Display the country of
    // the cities.

    async function getAnyNamesCity(): Promise<Array<string>> {
        const cities = ['Minsk', 'Moscow', 'Kiev', 'Grodno', 'Brest', 'Orsha']
        return new Promise((resolve) => {
            setTimeout(() => resolve(cities), 3000)
        })
    }

    async function getAnyCitiesInfo(): Promise<any> {
        const citiesName: string[] = await getAnyNamesCity()
        return await getCitiesInfo(citiesName)
    }

    try {
        const result: any[] = []
        const response1: any[] = await getCitiesInfo(cities)
        const response2: any = await getInfoRace()
        const response3: any[] = await getAnyCitiesInfo()
        result.push(response1.map(item => `${item.city}-${item.countryname}`))
        result.push(response2)
        result.push(response3.map(item => item.countryname))
        return result
    } catch (e) {
        throw new Error(e)
    }
}

getInformation(['Minsk', 'Madrid', 'Rome'], ['Paris', 'Nice'])
    .then(res => console.log(res))
    .catch(err => console.log(err))
