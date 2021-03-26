const Users = require('./users'); 
const HiringStation = require('./hiringStation')
const Scooters = require('./scooters')

describe('Scooters tests', () => {
    test('add a name to users', () => {
        const person1 = new Users('person1');
        expect(person1.name).toEqual('person1');
    });

    test('add a hiring station', () => {
        const station1= new HiringStation('station1');
        expect(station1.location).toEqual('station1');
    });

    test('add a scooter', () => {
        const scooter1= new Scooters('scooter1');
        expect(scooter1.model).toEqual('scooter1');
    });

})

