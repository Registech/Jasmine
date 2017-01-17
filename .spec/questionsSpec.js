'use strict';

describe('javascript-codingMoulins', function() {

    it(' Concevoir un algorithme capable de convertir une température de degrés Fahrenheits en degrés Celsius ', function() {
        var resultOne = convertToCelsius(32);
        var resultTwo = convertToCelsius(55);
        var result = convertToCelsius(653);

        expect(result).toEqual(345)
        expect(resultOne).toEqual(0);
        expect(resultTwo).toEqual(13);
    }),

    it(' si 18 ans ou plus return majeur sinon return mineur ', function() {
        var resultTwo = majeur(Math.random()*(200-18)+18);
        var resultOne = majeur(Math.random()*(17-1)+1);
        expect(resultTwo).toEqual('majeur');
        expect(resultOne).toEqual('mineur');
    }),

    it(' la paye du jour voir les commentaires ', function() {
        var nb        = [{ventesRegulier: 5678, ventesRabais: 670},{ventesRegulier: 30, ventesRabais: 400}];
        var resultTwo = paye(nb[1]);
        var resultOne = paye(nb[0]);
        expect(resultOne).toEqual(560.78);
        expect(resultTwo).toEqual(213.8);
    }),
        it(' Ave César!!! ', function() {
        var chaine    = 'azertyuiopqsdfghjklmwxcvbn'
        var crypto    = [{str : 'azertyuio', cle :16},{str : 'face', cle :34},{str : 'aznbvdrftyu', cle :2}];
        var resultOne = cesar(crypto[0], chaine);
        var resultTwo = cesar(crypto[1], chaine);
        var result = cesar(crypto[2], chaine);
        expect(resultOne).toEqual('jklmwxcvb');
        expect(resultTwo).toEqual('xotq');
        expect(result).toEqual('erzangyhuio');
    })

});