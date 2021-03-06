import test from 'tape';
import request from 'supertest';
import {app, server} from '../src/index';

test('-------- Controller: GET /province/:idName', (assert) => {
    const url = '/province/valen';
    const message = 'Status must be 200 and response must match with the expected  message';
    const statusCodeExpected = 200;
    const responseExpected = {
        _links: {
            getByPostalCode: "/postalcode/:postalCode",
            getByName: "/cityname/:idName",
            getAllCitiesOfAProvince: "/province/:idName",
            getCityByCoordinates: "/coordinates/:latitude/:longitude"
        },
        cities: [
            {
                province: "Valencia/València",
                town: "Ademuz",
                latitude: -1.28669047,
                longitude: 40.06120013,
                postalCodes: [
                    46140
                ]
            },
            {
                province: "Valencia/València",
                town: "Ador",
                latitude: -0.22439286,
                longitude: 38.91881333,
                postalCodes: [
                    46729
                ]
            },
            {
                province: "Valencia/València",
                town: "Atzeneta d'Albaida",
                latitude: -0.49685641,
                longitude: 38.83567325,
                postalCodes: [
                    46869
                ]
            },
            {
                province: "Valencia/València",
                town: "Agullent",
                latitude: -0.54782899,
                longitude: 38.82229442,
                postalCodes: [
                    46890
                ]
            },
            {
                province: "Valencia/València",
                town: "Alaquàs",
                latitude: -0.46015527,
                longitude: 39.45807854,
                postalCodes: [
                    46970
                ]
            },
            {
                province: "Valencia/València",
                town: "Albaida",
                latitude: -0.51986706,
                longitude: 38.84180459,
                postalCodes: [
                    46860
                ]
            },
            {
                province: "Valencia/València",
                town: "Albal",
                latitude: -0.41464448,
                longitude: 39.39721187,
                postalCodes: [
                    46470
                ]
            },
            {
                province: "Valencia/València",
                town: "Albalat de la Ribera",
                latitude: -0.38619815,
                longitude: 39.20127117,
                postalCodes: [
                    46687
                ]
            },
            {
                province: "Valencia/València",
                town: "Albalat dels Sorells",
                latitude: -0.34583998,
                longitude: 39.54379091,
                postalCodes: [
                    46135
                ]
            },
            {
                province: "Valencia/València",
                town: "Albalat dels Tarongers",
                latitude: -0.33712468,
                longitude: 39.70270205,
                postalCodes: [
                    46591
                ]
            },
            {
                province: "Valencia/València",
                town: "Alberic",
                latitude: -0.51744033,
                longitude: 39.11685193,
                postalCodes: [
                    46260
                ]
            },
            {
                province: "Valencia/València",
                town: "Alborache",
                latitude: -0.77134683,
                longitude: 39.39152396,
                postalCodes: [
                    46369
                ]
            },
            {
                province: "Valencia/València",
                town: "Alboraia/Alboraya",
                latitude: -0.34992845,
                longitude: 39.50024605,
                postalCodes: [
                    46120,
                    46128,
                    46129
                ]
            },
            {
                province: "Valencia/València",
                town: "Albuixech",
                latitude: -0.32290668,
                longitude: 39.54500337,
                postalCodes: [
                    46550
                ]
            },
            {
                province: "Valencia/València",
                town: "Alcàsser",
                latitude: -0.44426722,
                longitude: 39.36854313,
                postalCodes: [
                    46220,
                    46290
                ]
            },
            {
                province: "Valencia/València",
                town: "Alcàntera de Xúquer",
                latitude: -0.55970929,
                longitude: 39.070653,
                postalCodes: [
                    46293
                ]
            },
            {
                province: "Valencia/València",
                town: "Alzira",
                latitude: -0.43554456,
                longitude: 39.14944832,
                postalCodes: [
                    46268,
                    46600,
                    46792
                ]
            },
            {
                province: "Valencia/València",
                town: "Alcublas",
                latitude: -0.70230954,
                longitude: 39.79738167,
                postalCodes: [
                    46172
                ]
            },
            {
                province: "Valencia/València",
                town: "l'Alcúdia",
                latitude: -0.50645447,
                longitude: 39.19576372,
                postalCodes: [
                    46250
                ]
            },
            {
                province: "Valencia/València",
                town: "l'Alcúdia de Crespins",
                latitude: -0.58999491,
                longitude: 38.97021311,
                postalCodes: [
                    46690
                ]
            },
            {
                province: "Valencia/València",
                town: "Aldaia",
                latitude: -0.46197516,
                longitude: 39.46491997,
                postalCodes: [
                    46960
                ]
            },
            {
                province: "Valencia/València",
                town: "Alfafar",
                latitude: -0.39004439,
                longitude: 39.42259817,
                postalCodes: [
                    46910
                ]
            },
            {
                province: "Valencia/València",
                town: "Alfauir",
                latitude: -0.25158611,
                longitude: 38.92780849,
                postalCodes: [
                    46725
                ]
            },
            {
                province: "Valencia/València",
                town: "Alfara de la Baronia",
                latitude: -0.35498566,
                longitude: 39.76293575,
                postalCodes: [
                    46594
                ]
            },
            {
                province: "Valencia/València",
                town: "Alfara del Patriarca",
                latitude: -0.38497191,
                longitude: 39.54406602,
                postalCodes: [
                    46115
                ]
            },
            {
                province: "Valencia/València",
                town: "Alfarp",
                latitude: -0.5595106,
                longitude: 39.27680966,
                postalCodes: [
                    46197
                ]
            },
            {
                province: "Valencia/València",
                town: "Alfarrasí",
                latitude: -0.49639575,
                longitude: 38.90397541,
                postalCodes: [
                    46893
                ]
            },
            {
                province: "Valencia/València",
                town: "Algar de Palancia",
                latitude: -0.36745953,
                longitude: 39.7810922,
                postalCodes: [
                    46593
                ]
            },
            {
                province: "Valencia/València",
                town: "Algemesí",
                latitude: -0.43644269,
                longitude: 39.1890727,
                postalCodes: [
                    46680
                ]
            },
            {
                province: "Valencia/València",
                town: "Algimia de Alfara",
                latitude: -0.3623082,
                longitude: 39.75243658,
                postalCodes: [
                    46148
                ]
            },
            {
                province: "Valencia/València",
                town: "Alginet",
                latitude: -0.46964795,
                longitude: 39.26153042,
                postalCodes: [
                    46230
                ]
            },
            {
                province: "Valencia/València",
                town: "Almàssera",
                latitude: -0.3557517,
                longitude: 39.51227026,
                postalCodes: [
                    46132
                ]
            },
            {
                province: "Valencia/València",
                town: "Almiserà",
                latitude: -0.2849761,
                longitude: 38.91635576,
                postalCodes: [
                    46726
                ]
            },
            {
                province: "Valencia/València",
                town: "Almoines",
                latitude: -0.18134817,
                longitude: 38.94398885,
                postalCodes: [
                    46723
                ]
            },
            {
                province: "Valencia/València",
                town: "Almussafes",
                latitude: -0.41293657,
                longitude: 39.29004877,
                postalCodes: [
                    46440
                ]
            },
            {
                province: "Valencia/València",
                town: "Alpuente",
                latitude: -1.01327721,
                longitude: 39.87603328,
                postalCodes: [
                    46178
                ]
            },
            {
                province: "Valencia/València",
                town: "l'Alqueria de la Comtessa",
                latitude: -0.1561269,
                longitude: 38.93653868,
                postalCodes: [
                    46715
                ]
            },
            {
                province: "Valencia/València",
                town: "Andilla",
                latitude: -0.81348901,
                longitude: 39.83590084,
                postalCodes: [
                    46170
                ]
            },
            {
                province: "Valencia/València",
                town: "Anna",
                latitude: -0.64427404,
                longitude: 39.02174984,
                postalCodes: [
                    46820
                ]
            },
            {
                province: "Valencia/València",
                town: "Antella",
                latitude: -0.59190021,
                longitude: 39.07941331,
                postalCodes: [
                    46266
                ]
            },
            {
                province: "Valencia/València",
                town: "Aras de los Olmos",
                latitude: -1.13281495,
                longitude: 39.9241561,
                postalCodes: [
                    46179
                ]
            },
            {
                province: "Valencia/València",
                town: "Aielo de Malferit",
                latitude: -0.5914752,
                longitude: 38.87774947,
                postalCodes: [
                    46812
                ]
            },
            {
                province: "Valencia/València",
                town: "Aielo de Rugat",
                latitude: -0.34335159,
                longitude: 38.88172539,
                postalCodes: [
                    46842
                ]
            },
            {
                province: "Valencia/València",
                town: "Ayora",
                latitude: -1.05608454,
                longitude: 39.05979756,
                postalCodes: [
                    46620
                ]
            },
            {
                province: "Valencia/València",
                town: "Barxeta",
                latitude: -0.41727383,
                longitude: 39.02181544,
                postalCodes: [
                    46667
                ]
            },
            {
                province: "Valencia/València",
                town: "Barx",
                latitude: -0.30181016,
                longitude: 39.01431675,
                postalCodes: [
                    46758
                ]
            },
            {
                province: "Valencia/València",
                town: "Bèlgida",
                latitude: -0.4752401,
                longitude: 38.85896646,
                postalCodes: [
                    46868
                ]
            },
            {
                province: "Valencia/València",
                town: "Bellreguard",
                latitude: -0.16184473,
                longitude: 38.94530865,
                postalCodes: [
                    46713
                ]
            },
            {
                province: "Valencia/València",
                town: "Bellús",
                latitude: -0.48553042,
                longitude: 38.94587097,
                postalCodes: [
                    46839
                ]
            },
            {
                province: "Valencia/València",
                town: "Benagéber",
                latitude: -1.10117987,
                longitude: 39.70765805,
                postalCodes: [
                    46173
                ]
            },
            {
                province: "Valencia/València",
                town: "Benaguasil",
                latitude: -0.58618131,
                longitude: 39.59364725,
                postalCodes: [
                    46180
                ]
            },
            {
                province: "Valencia/València",
                town: "Benavites",
                latitude: -0.25833794,
                longitude: 39.74059326,
                postalCodes: [
                    46514
                ]
            },
            {
                province: "Valencia/València",
                town: "Beneixida",
                latitude: -0.55138918,
                longitude: 39.07495616,
                postalCodes: [
                    46293
                ]
            },
            {
                province: "Valencia/València",
                town: "Benetússer",
                latitude: -0.39719744,
                longitude: 39.42296574,
                postalCodes: [
                    46910
                ]
            },
            {
                province: "Valencia/València",
                town: "Beniarjó",
                latitude: -0.18636266,
                longitude: 38.9324161,
                postalCodes: [
                    46722
                ]
            },
            {
                province: "Valencia/València",
                town: "Beniatjar",
                latitude: -0.41655507,
                longitude: 38.84710544,
                postalCodes: [
                    46844
                ]
            },
            {
                province: "Valencia/València",
                town: "Benicolet",
                latitude: -0.34554941,
                longitude: 38.91865981,
                postalCodes: [
                    46838
                ]
            },
            {
                province: "Valencia/València",
                town: "Benifairó de les Valls",
                latitude: -0.26780809,
                longitude: 39.72830418,
                postalCodes: [
                    46511
                ]
            },
            {
                province: "Valencia/València",
                town: "Benifairó de la Valldigna",
                latitude: -0.30276868,
                longitude: 39.05379019,
                postalCodes: [
                    46791
                ]
            },
            {
                province: "Valencia/València",
                town: "Benifaió",
                latitude: -0.42733016,
                longitude: 39.28514298,
                postalCodes: [
                    46450
                ]
            },
            {
                province: "Valencia/València",
                town: "Beniflá",
                latitude: -0.18894082,
                longitude: 38.9284692,
                postalCodes: [
                    46722
                ]
            },
            {
                province: "Valencia/València",
                town: "Benigànim",
                latitude: -0.4434453,
                longitude: 38.94355063,
                postalCodes: [
                    46830
                ]
            },
            {
                province: "Valencia/València",
                town: "Benimodo",
                latitude: -0.52847323,
                longitude: 39.21301774,
                postalCodes: [
                    46291
                ]
            },
            {
                province: "Valencia/València",
                town: "Benimuslem",
                latitude: -0.49254298,
                longitude: 39.13177858,
                postalCodes: [
                    46611
                ]
            },
            {
                province: "Valencia/València",
                town: "Beniparrell",
                latitude: -0.41096159,
                longitude: 39.38189594,
                postalCodes: [
                    46469
                ]
            },
            {
                province: "Valencia/València",
                town: "Benirredrà",
                latitude: -0.19215383,
                longitude: 38.96133073,
                postalCodes: [
                    46703
                ]
            },
            {
                province: "Valencia/València",
                town: "Benissanó",
                latitude: -0.578202,
                longitude: 39.61411166,
                postalCodes: [
                    46181
                ]
            },
            {
                province: "Valencia/València",
                town: "Benissoda",
                latitude: -0.52989034,
                longitude: 38.83146661,
                postalCodes: [
                    46869
                ]
            },
            {
                province: "Valencia/València",
                town: "Benissuera",
                latitude: -0.47709232,
                longitude: 38.9124792,
                postalCodes: [
                    46839
                ]
            },
            {
                province: "Valencia/València",
                town: "Bétera",
                latitude: -0.46050256,
                longitude: 39.59086755,
                postalCodes: [
                    46117
                ]
            },
            {
                province: "Valencia/València",
                town: "Bicorp",
                latitude: -0.78756183,
                longitude: 39.13280027,
                postalCodes: [
                    46825
                ]
            },
            {
                province: "Valencia/València",
                town: "Bocairent",
                latitude: -0.61108501,
                longitude: 38.76638359,
                postalCodes: [
                    46880
                ]
            },
            {
                province: "Valencia/València",
                town: "Bolbaite",
                latitude: -0.67413079,
                longitude: 39.06258674,
                postalCodes: [
                    46822
                ]
            },
            {
                province: "Valencia/València",
                town: "Bonrepòs i Mirambell",
                latitude: -0.36636985,
                longitude: 39.51905184,
                postalCodes: [
                    46131
                ]
            },
            {
                province: "Valencia/València",
                town: "Bufali",
                latitude: -0.51618568,
                longitude: 38.86814307,
                postalCodes: [
                    46891
                ]
            },
            {
                province: "Valencia/València",
                town: "Bugarra",
                latitude: -0.77484477,
                longitude: 39.60869693,
                postalCodes: [
                    46165
                ]
            },
            {
                province: "Valencia/València",
                town: "Buñol",
                latitude: -0.78986594,
                longitude: 39.41801363,
                postalCodes: [
                    46360
                ]
            },
            {
                province: "Valencia/València",
                town: "Burjassot",
                latitude: -0.41266051,
                longitude: 39.50973203,
                postalCodes: [
                    46100
                ]
            },
            {
                province: "Valencia/València",
                town: "Calles",
                latitude: -0.97369191,
                longitude: 39.72550247,
                postalCodes: [
                    46175
                ]
            },
            {
                province: "Valencia/València",
                town: "Camporrobles",
                latitude: -1.39769289,
                longitude: 39.64705412,
                postalCodes: [
                    46330
                ]
            },
            {
                province: "Valencia/València",
                town: "Canals",
                latitude: -0.58558184,
                longitude: 38.95946334,
                postalCodes: [
                    46650,
                    46659,
                    46813
                ]
            },
            {
                province: "Valencia/València",
                town: "Canet d'En Berenguer",
                latitude: -0.21878416,
                longitude: 39.68077325,
                postalCodes: [
                    46529
                ]
            },
            {
                province: "Valencia/València",
                town: "Carcaixent",
                latitude: -0.44698055,
                longitude: 39.12276198,
                postalCodes: [
                    46740,
                    46749,
                    46792
                ]
            },
            {
                province: "Valencia/València",
                town: "Càrcer",
                latitude: -0.56780586,
                longitude: 39.07013757,
                postalCodes: [
                    46294
                ]
            },
            {
                province: "Valencia/València",
                town: "Carlet",
                latitude: -0.5198408,
                longitude: 39.2272942,
                postalCodes: [
                    46240
                ]
            },
            {
                province: "Valencia/València",
                town: "Carrícola",
                latitude: -0.47165762,
                longitude: 38.84038285,
                postalCodes: [
                    46869
                ]
            },
            {
                province: "Valencia/València",
                town: "Casas Altas",
                latitude: -1.26239473,
                longitude: 40.039604,
                postalCodes: [
                    46147
                ]
            },
            {
                province: "Valencia/València",
                town: "Casas Bajas",
                latitude: -1.26056666,
                longitude: 40.02345052,
                postalCodes: [
                    46146
                ]
            },
            {
                province: "Valencia/València",
                town: "Casinos",
                latitude: -0.70721276,
                longitude: 39.70027294,
                postalCodes: [
                    46171,
                    46717
                ]
            },
            {
                province: "Valencia/València",
                town: "Castelló de Rugat",
                latitude: -0.38259728,
                longitude: 38.87583716,
                postalCodes: [
                    46841
                ]
            },
            {
                province: "Valencia/València",
                town: "Castellonet de la Conquesta",
                latitude: -0.26340163,
                longitude: 38.9144824,
                postalCodes: [
                    46726
                ]
            },
            {
                province: "Valencia/València",
                town: "Castielfabib",
                latitude: -1.30342617,
                longitude: 40.13136465,
                postalCodes: [
                    46141
                ]
            },
            {
                province: "Valencia/València",
                town: "Catadau",
                latitude: -0.56933467,
                longitude: 39.27529449,
                postalCodes: [
                    46196
                ]
            },
            {
                province: "Valencia/València",
                town: "Catarroja",
                latitude: -0.40311595,
                longitude: 39.40248625,
                postalCodes: [
                    46470
                ]
            },
            {
                province: "Valencia/València",
                town: "Caudete de las Fuentes",
                latitude: -1.27886718,
                longitude: 39.55852733,
                postalCodes: [
                    46315
                ]
            },
            {
                province: "Valencia/València",
                town: "Cerdà",
                latitude: -0.57384286,
                longitude: 38.98592424,
                postalCodes: [
                    46813
                ]
            },
            {
                province: "Valencia/València",
                town: "Cofrentes",
                latitude: -1.06219832,
                longitude: 39.23015338,
                postalCodes: [
                    46625
                ]
            },
            {
                province: "Valencia/València",
                town: "Corbera",
                latitude: -0.35512919,
                longitude: 39.15811861,
                postalCodes: [
                    46612
                ]
            },
            {
                province: "Valencia/València",
                town: "Cortes de Pallás",
                latitude: -0.94088107,
                longitude: 39.24291836,
                postalCodes: [
                    46199
                ]
            },
            {
                province: "Valencia/València",
                town: "Cotes",
                latitude: -0.57519438,
                longitude: 39.07173309,
                postalCodes: [
                    46294
                ]
            },
            {
                province: "Valencia/València",
                town: "Quart de les Valls",
                latitude: -0.27210475,
                longitude: 39.74005314,
                postalCodes: [
                    46515
                ]
            },
            {
                province: "Valencia/València",
                town: "Quart de Poblet",
                latitude: -0.44189692,
                longitude: 39.4837855,
                postalCodes: [
                    46930
                ]
            },
            {
                province: "Valencia/València",
                town: "Quartell",
                latitude: -0.26415029,
                longitude: 39.73790192,
                postalCodes: [
                    46510
                ]
            },
            {
                province: "Valencia/València",
                town: "Quatretonda",
                latitude: -0.40245924,
                longitude: 38.94564511,
                postalCodes: [
                    46837
                ]
            },
            {
                province: "Valencia/València",
                town: "Cullera",
                latitude: -0.25463848,
                longitude: 39.16508089,
                postalCodes: [
                    46400,
                    46408,
                    46409
                ]
            },
            {
                province: "Valencia/València",
                town: "Chelva",
                latitude: -0.99729278,
                longitude: 39.74732697,
                postalCodes: [
                    46176,
                    46351
                ]
            },
            {
                province: "Valencia/València",
                town: "Chella",
                latitude: -0.66154777,
                longitude: 39.04466694,
                postalCodes: [
                    46821
                ]
            },
            {
                province: "Valencia/València",
                town: "Chera",
                latitude: -0.97432056,
                longitude: 39.59185191,
                postalCodes: [
                    46350
                ]
            },
            {
                province: "Valencia/València",
                town: "Cheste",
                latitude: -0.68276913,
                longitude: 39.49486693,
                postalCodes: [
                    46109,
                    46380
                ]
            },
            {
                province: "Valencia/València",
                town: "Xirivella",
                latitude: -0.4252401,
                longitude: 39.46575132,
                postalCodes: [
                    46014,
                    46950
                ]
            },
            {
                province: "Valencia/València",
                town: "Chiva",
                latitude: -0.7174205,
                longitude: 39.47388523,
                postalCodes: [
                    46370
                ]
            },
            {
                province: "Valencia/València",
                town: "Chulilla",
                latitude: -0.89209647,
                longitude: 39.65561537,
                postalCodes: [
                    46167
                ]
            },
            {
                province: "Valencia/València",
                town: "Daimús",
                latitude: -0.15272664,
                longitude: 38.96816756,
                postalCodes: [
                    46710
                ]
            },
            {
                province: "Valencia/València",
                town: "Domeño",
                latitude: -0.67352299,
                longitude: 39.66021506,
                postalCodes: [
                    46174
                ]
            },
            {
                province: "Valencia/València",
                town: "Dos Aguas",
                latitude: -0.79902632,
                longitude: 39.28774033,
                postalCodes: [
                    46198
                ]
            },
            {
                province: "Valencia/València",
                town: "l'Eliana",
                latitude: -0.53062592,
                longitude: 39.56680347,
                postalCodes: [
                    46183
                ]
            },
            {
                province: "Valencia/València",
                town: "Emperador",
                latitude: -0.340625,
                longitude: 39.55359919,
                postalCodes: [
                    46135
                ]
            },
            {
                province: "Valencia/València",
                town: "Enguera",
                latitude: -0.68736433,
                longitude: 38.97823024,
                postalCodes: [
                    46810,
                    46811
                ]
            },
            {
                province: "Valencia/València",
                town: "l'Ènova",
                latitude: -0.48088592,
                longitude: 39.04498344,
                postalCodes: [
                    46661
                ]
            },
            {
                province: "Valencia/València",
                town: "Estivella",
                latitude: -0.34812823,
                longitude: 39.71259324,
                postalCodes: [
                    46590
                ]
            },
            {
                province: "Valencia/València",
                town: "Estubeny",
                latitude: -0.62360276,
                longitude: 39.01717685,
                postalCodes: [
                    46817
                ]
            },
            {
                province: "Valencia/València",
                town: "Faura",
                latitude: -0.26048852,
                longitude: 39.72665412,
                postalCodes: [
                    46512
                ]
            },
            {
                province: "Valencia/València",
                town: "Favara",
                latitude: -0.2910155,
                longitude: 39.12576138,
                postalCodes: [
                    46614
                ]
            },
            {
                province: "Valencia/València",
                town: "Fontanars dels Alforins",
                latitude: -0.7849707,
                longitude: 38.78460648,
                postalCodes: [
                    46635
                ]
            },
            {
                province: "Valencia/València",
                town: "Fortaleny",
                latitude: -0.3129574,
                longitude: 39.18349516,
                postalCodes: [
                    46418
                ]
            },
            {
                province: "Valencia/València",
                town: "Foios",
                latitude: -0.35654242,
                longitude: 39.53771987,
                postalCodes: [
                    46134
                ]
            },
            {
                province: "Valencia/València",
                town: "la Font d'En Carròs",
                latitude: -0.16826332,
                longitude: 38.91707705,
                postalCodes: [
                    46717
                ]
            },
            {
                province: "Valencia/València",
                town: "la Font de la Figuera",
                latitude: -0.8808594,
                longitude: 38.80692932,
                postalCodes: [
                    44630,
                    46630
                ]
            },
            {
                province: "Valencia/València",
                town: "Fuenterrobles",
                latitude: -1.36565215,
                longitude: 39.58478289,
                postalCodes: [
                    46314
                ]
            },
            {
                province: "Valencia/València",
                town: "Gavarda",
                latitude: -0.55917883,
                longitude: 39.09207548,
                postalCodes: [
                    46267
                ]
            },
            {
                province: "Valencia/València",
                town: "Gandia",
                latitude: -0.17941691,
                longitude: 38.96736579,
                postalCodes: [
                    46701,
                    46702,
                    46728,
                    46730,
                    46760
                ]
            },
            {
                province: "Valencia/València",
                town: "Genovés",
                latitude: -0.46980831,
                longitude: 38.98857844,
                postalCodes: [
                    46894
                ]
            },
            {
                province: "Valencia/València",
                town: "Gestalgar",
                latitude: -0.83411982,
                longitude: 39.60452902,
                postalCodes: [
                    46166
                ]
            },
            {
                province: "Valencia/València",
                town: "Gilet",
                latitude: -0.32187497,
                longitude: 39.67876673,
                postalCodes: [
                    46149
                ]
            },
            {
                province: "Valencia/València",
                town: "Godella",
                latitude: -0.4112644,
                longitude: 39.51882686,
                postalCodes: [
                    46110
                ]
            },
            {
                province: "Valencia/València",
                town: "Godelleta",
                latitude: -0.68739214,
                longitude: 39.42338022,
                postalCodes: [
                    46388
                ]
            },
            {
                province: "Valencia/València",
                town: "la Granja de la Costera",
                latitude: -0.55743511,
                longitude: 38.99577156,
                postalCodes: [
                    46814
                ]
            },
            {
                province: "Valencia/València",
                town: "Guadasséquies",
                latitude: -0.48409596,
                longitude: 38.92509983,
                postalCodes: [
                    46839
                ]
            },
            {
                province: "Valencia/València",
                town: "Guadassuar",
                latitude: -0.47824408,
                longitude: 39.1855886,
                postalCodes: [
                    46610
                ]
            },
            {
                province: "Valencia/València",
                town: "Guardamar de la Safor",
                latitude: -0.14822188,
                longitude: 38.96194035,
                postalCodes: [
                    46711
                ]
            },
            {
                province: "Valencia/València",
                town: "Higueruelas",
                latitude: -0.86121416,
                longitude: 39.78953013,
                postalCodes: [
                    46162
                ]
            },
            {
                province: "Valencia/València",
                town: "Jalance",
                latitude: -1.07743184,
                longitude: 39.19197816,
                postalCodes: [
                    46624
                ]
            },
            {
                province: "Valencia/València",
                town: "Xeraco",
                latitude: -0.21567267,
                longitude: 39.03284153,
                postalCodes: [
                    46770
                ]
            },
            {
                province: "Valencia/València",
                town: "Jarafuel",
                latitude: -1.07224204,
                longitude: 39.13911133,
                postalCodes: [
                    46623
                ]
            },
            {
                province: "Valencia/València",
                town: "Xàtiva",
                latitude: -0.51869568,
                longitude: 38.98797116,
                postalCodes: [
                    46668,
                    46800
                ]
            },
            {
                province: "Valencia/València",
                town: "Xeresa",
                latitude: -0.21839661,
                longitude: 39.00991535,
                postalCodes: [
                    46790
                ]
            },
            {
                province: "Valencia/València",
                town: "Llíria",
                latitude: -0.59442849,
                longitude: 39.62586366,
                postalCodes: [
                    46160
                ]
            },
            {
                province: "Valencia/València",
                town: "Loriguilla",
                latitude: -0.57094704,
                longitude: 39.48972714,
                postalCodes: [
                    46393
                ]
            },
            {
                province: "Valencia/València",
                town: "Losa del Obispo",
                latitude: -0.87040736,
                longitude: 39.69501292,
                postalCodes: [
                    46173
                ]
            },
            {
                province: "Valencia/València",
                town: "Llutxent",
                latitude: -0.35687285,
                longitude: 38.94137736,
                postalCodes: [
                    46838
                ]
            },
            {
                province: "Valencia/València",
                town: "Llocnou d'En Fenollet",
                latitude: -0.46677015,
                longitude: 39.01387415,
                postalCodes: [
                    46668
                ]
            },
            {
                province: "Valencia/València",
                town: "Llocnou de la Corona",
                latitude: -0.38198174,
                longitude: 39.42139891,
                postalCodes: [
                    46910
                ]
            },
            {
                province: "Valencia/València",
                town: "Llocnou de Sant Jeroni",
                latitude: -0.28526658,
                longitude: 38.91266873,
                postalCodes: [
                    46726
                ]
            },
            {
                province: "Valencia/València",
                town: "Llanera de Ranes",
                latitude: -0.57140634,
                longitude: 38.99303617,
                postalCodes: [
                    46814
                ]
            },
            {
                province: "Valencia/València",
                town: "Llaurí",
                latitude: -0.33047621,
                longitude: 39.14725855,
                postalCodes: [
                    46613
                ]
            },
            {
                province: "Valencia/València",
                town: "Llombai",
                latitude: -0.57180558,
                longitude: 39.28094081,
                postalCodes: [
                    46195
                ]
            },
            {
                province: "Valencia/València",
                town: "la Llosa de Ranes",
                latitude: -0.53357725,
                longitude: 39.01884746,
                postalCodes: [
                    46815
                ]
            },
            {
                province: "Valencia/València",
                town: "Macastre",
                latitude: -0.78556852,
                longitude: 39.38167832,
                postalCodes: [
                    46368
                ]
            },
            {
                province: "Valencia/València",
                town: "Manises",
                latitude: -0.45700309,
                longitude: 39.49163946,
                postalCodes: [
                    46940
                ]
            },
            {
                province: "Valencia/València",
                town: "Manuel",
                latitude: -0.49270651,
                longitude: 39.05016654,
                postalCodes: [
                    46660
                ]
            },
            {
                province: "Valencia/València",
                town: "Marines",
                latitude: -0.56143173,
                longitude: 39.67511213,
                postalCodes: [
                    46163
                ]
            },
            {
                province: "Valencia/València",
                town: "Massalavés",
                latitude: -0.52158427,
                longitude: 39.14048106,
                postalCodes: [
                    46292
                ]
            },
            {
                province: "Valencia/València",
                town: "Massalfassar",
                latitude: -0.32622473,
                longitude: 39.55798018,
                postalCodes: [
                    46560
                ]
            },
            {
                province: "Valencia/València",
                town: "Massamagrell",
                latitude: -0.33056042,
                longitude: 39.57025065,
                postalCodes: [
                    46130
                ]
            },
            {
                province: "Valencia/València",
                town: "Massanassa",
                latitude: -0.39951769,
                longitude: 39.40993709,
                postalCodes: [
                    46470
                ]
            },
            {
                province: "Valencia/València",
                town: "Meliana",
                latitude: -0.34864343,
                longitude: 39.52761225,
                postalCodes: [
                    46133
                ]
            },
            {
                province: "Valencia/València",
                town: "Millares",
                latitude: -0.77391734,
                longitude: 39.23710615,
                postalCodes: [
                    46199
                ]
            },
            {
                province: "Valencia/València",
                town: "Miramar",
                latitude: -0.13973887,
                longitude: 38.95021905,
                postalCodes: [
                    46711
                ]
            },
            {
                province: "Valencia/València",
                town: "Mislata",
                latitude: -0.41745851,
                longitude: 39.47533513,
                postalCodes: [
                    46920
                ]
            },
            {
                province: "Valencia/València",
                town: "Mogente/Moixent",
                latitude: -0.7514659,
                longitude: 38.87333691,
                postalCodes: [
                    46640
                ]
            },
            {
                province: "Valencia/València",
                town: "Moncada",
                latitude: -0.39446412,
                longitude: 39.54537844,
                postalCodes: [
                    46113
                ]
            },
            {
                province: "Valencia/València",
                town: "Montserrat",
                latitude: -0.60318184,
                longitude: 39.3581245,
                postalCodes: [
                    46192
                ]
            },
            {
                province: "Valencia/València",
                town: "Montaverner",
                latitude: -0.49660885,
                longitude: 38.88905087,
                postalCodes: [
                    46892
                ]
            },
            {
                province: "Valencia/València",
                town: "Montesa",
                latitude: -0.65333755,
                longitude: 38.94950328,
                postalCodes: [
                    46692
                ]
            },
            {
                province: "Valencia/València",
                town: "Montitxelvo/Montichelvo",
                latitude: -0.33961791,
                longitude: 38.89097398,
                postalCodes: [
                    46842
                ]
            },
            {
                province: "Valencia/València",
                town: "Montroi/Montroy",
                latitude: -0.61459393,
                longitude: 39.33787195,
                postalCodes: [
                    46193
                ]
            },
            {
                province: "Valencia/València",
                town: "Museros",
                latitude: -0.34168706,
                longitude: 39.56418171,
                postalCodes: [
                    46136
                ]
            },
            {
                province: "Valencia/València",
                town: "Náquera",
                latitude: -0.42519631,
                longitude: 39.65820571,
                postalCodes: [
                    46119
                ]
            },
            {
                province: "Valencia/València",
                town: "Navarrés",
                latitude: -0.69276472,
                longitude: 39.10145536,
                postalCodes: [
                    46823
                ]
            },
            {
                province: "Valencia/València",
                town: "Novelé/Novetlè",
                latitude: -0.54603503,
                longitude: 38.98087357,
                postalCodes: [
                    46819
                ]
            },
            {
                province: "Valencia/València",
                town: "Oliva",
                latitude: -0.1206552,
                longitude: 38.92087548,
                postalCodes: [
                    46181,
                    46780
                ]
            },
            {
                province: "Valencia/València",
                town: "Olocau",
                latitude: -0.53078642,
                longitude: 39.69987774,
                postalCodes: [
                    46169
                ]
            },
            {
                province: "Valencia/València",
                town: "l'Olleria",
                latitude: -0.54678215,
                longitude: 38.91173101,
                postalCodes: [
                    46850
                ]
            },
            {
                province: "Valencia/València",
                town: "Ontinyent",
                latitude: -0.60649062,
                longitude: 38.82288129,
                postalCodes: [
                    46870
                ]
            },
            {
                province: "Valencia/València",
                town: "Otos",
                latitude: -0.44429964,
                longitude: 38.85350908,
                postalCodes: [
                    46844
                ]
            },
            {
                province: "Valencia/València",
                town: "Paiporta",
                latitude: -0.41879076,
                longitude: 39.42831198,
                postalCodes: [
                    46200
                ]
            },
            {
                province: "Valencia/València",
                town: "Palma de Gandía",
                latitude: -0.22318559,
                longitude: 38.92404591,
                postalCodes: [
                    46724
                ]
            },
            {
                province: "Valencia/València",
                town: "Palmera",
                latitude: -0.15177074,
                longitude: 38.94190989,
                postalCodes: [
                    46714
                ]
            },
            {
                province: "Valencia/València",
                town: "el Palomar",
                latitude: -0.50277319,
                longitude: 38.85358534,
                postalCodes: [
                    46891
                ]
            },
            {
                province: "Valencia/València",
                town: "Paterna",
                latitude: -0.44257379,
                longitude: 39.50273688,
                postalCodes: [
                    46182,
                    46980,
                    46988,
                    46989
                ]
            },
            {
                province: "Valencia/València",
                town: "Pedralba",
                latitude: -0.72653887,
                longitude: 39.60457168,
                postalCodes: [
                    46164
                ]
            },
            {
                province: "Valencia/València",
                town: "Petrés",
                latitude: -0.30940208,
                longitude: 39.68383811,
                postalCodes: [
                    46501
                ]
            },
            {
                province: "Valencia/València",
                town: "Picanya",
                latitude: -0.43572711,
                longitude: 39.43592093,
                postalCodes: [
                    46210
                ]
            },
            {
                province: "Valencia/València",
                town: "Picassent",
                latitude: -0.45913698,
                longitude: 39.36274319,
                postalCodes: [
                    46220
                ]
            },
            {
                province: "Valencia/València",
                town: "Piles",
                latitude: -0.13225797,
                longitude: 38.94060288,
                postalCodes: [
                    46712
                ]
            },
            {
                province: "Valencia/València",
                town: "Pinet",
                latitude: -0.33672641,
                longitude: 38.98399263,
                postalCodes: [
                    46838
                ]
            },
            {
                province: "Valencia/València",
                town: "Polinyà de Xúquer",
                latitude: -0.3685699,
                longitude: 39.19675684,
                postalCodes: [
                    46688
                ]
            },
            {
                province: "Valencia/València",
                town: "Potries",
                latitude: -0.19440976,
                longitude: 38.91524933,
                postalCodes: [
                    46721
                ]
            },
            {
                province: "Valencia/València",
                town: "la Pobla de Farnals",
                latitude: -0.32682479,
                longitude: 39.57871399,
                postalCodes: [
                    46137,
                    46139
                ]
            },
            {
                province: "Valencia/València",
                town: "la Pobla del Duc",
                latitude: -0.41980188,
                longitude: 38.90612685,
                postalCodes: [
                    46840
                ]
            },
            {
                province: "Valencia/València",
                town: "Puebla de San Miguel",
                latitude: -1.14463186,
                longitude: 40.04493023,
                postalCodes: [
                    46140
                ]
            },
            {
                province: "Valencia/València",
                town: "la Pobla de Vallbona",
                latitude: -0.55296899,
                longitude: 39.59242058,
                postalCodes: [
                    46185
                ]
            },
            {
                province: "Valencia/València",
                town: "la Pobla Llarga",
                latitude: -0.47555312,
                longitude: 39.08408601,
                postalCodes: [
                    46670
                ]
            },
            {
                province: "Valencia/València",
                town: "el Puig de Santa Maria",
                latitude: -0.3033912,
                longitude: 39.58982953,
                postalCodes: [
                    46450,
                    46540
                ]
            },
            {
                province: "Valencia/València",
                town: "Puçol",
                latitude: -0.30317868,
                longitude: 39.61631894,
                postalCodes: [
                    46530
                ]
            },
            {
                province: "Valencia/València",
                town: "Quesa",
                latitude: -0.74015727,
                longitude: 39.11970028,
                postalCodes: [
                    46824
                ]
            },
            {
                province: "Valencia/València",
                town: "Rafelbunyol",
                latitude: -0.33500891,
                longitude: 39.5893341,
                postalCodes: [
                    46138
                ]
            },
            {
                province: "Valencia/València",
                town: "Rafelcofer",
                latitude: -0.16663919,
                longitude: 38.93355127,
                postalCodes: [
                    46716
                ]
            },
            {
                province: "Valencia/València",
                town: "Rafelguaraf",
                latitude: -0.45692484,
                longitude: 39.05108497,
                postalCodes: [
                    46666
                ]
            },
            {
                province: "Valencia/València",
                town: "Ráfol de Salem",
                latitude: -0.39689276,
                longitude: 38.86594914,
                postalCodes: [
                    46843
                ]
            },
            {
                province: "Valencia/València",
                town: "el Real de Gandia",
                latitude: -0.18942038,
                longitude: 38.94758005,
                postalCodes: [
                    46727
                ]
            },
            {
                province: "Valencia/València",
                town: "Real",
                latitude: -0.60594917,
                longitude: 39.33791969,
                postalCodes: [
                    46194
                ]
            },
            {
                province: "Valencia/València",
                town: "Requena",
                latitude: -1.10026975,
                longitude: 39.48606411,
                postalCodes: [
                    46199,
                    46340,
                    46351,
                    46352,
                    46353,
                    46354,
                    46355,
                    46356,
                    46357,
                    46390,
                    46391
                ]
            },
            {
                province: "Valencia/València",
                town: "Riba-roja de Túria",
                latitude: -0.57061222,
                longitude: 39.54602535,
                postalCodes: [
                    46190
                ]
            },
            {
                province: "Valencia/València",
                town: "Riola",
                latitude: -0.33313298,
                longitude: 39.19728362,
                postalCodes: [
                    46417
                ]
            },
            {
                province: "Valencia/València",
                town: "Rocafort",
                latitude: -0.41059109,
                longitude: 39.53068545,
                postalCodes: [
                    46111
                ]
            },
            {
                province: "Valencia/València",
                town: "Rotglà i Corberà",
                latitude: -0.56324832,
                longitude: 39.0056957,
                postalCodes: [
                    46816
                ]
            },
            {
                province: "Valencia/València",
                town: "Rótova",
                latitude: -0.25563045,
                longitude: 38.93270557,
                postalCodes: [
                    46725
                ]
            },
            {
                province: "Valencia/València",
                town: "Rugat",
                latitude: -0.3616423,
                longitude: 38.87897808,
                postalCodes: [
                    46842
                ]
            },
            {
                province: "Valencia/València",
                town: "Sagunto/Sagunt",
                latitude: -0.2759603,
                longitude: 39.68008485,
                postalCodes: [
                    46250,
                    46500,
                    46520,
                    46530
                ]
            },
            {
                province: "Valencia/València",
                town: "Salem",
                latitude: -0.38054218,
                longitude: 38.85362785,
                postalCodes: [
                    46843
                ]
            },
            {
                province: "Valencia/València",
                town: "Sant Joanet",
                latitude: -0.48752134,
                longitude: 39.07127205,
                postalCodes: [
                    46669
                ]
            },
            {
                province: "Valencia/València",
                town: "Sedaví",
                latitude: -0.38568401,
                longitude: 39.42520278,
                postalCodes: [
                    46910
                ]
            },
            {
                province: "Valencia/València",
                town: "Segart",
                latitude: -0.37319548,
                longitude: 39.6833454,
                postalCodes: [
                    46592
                ]
            },
            {
                province: "Valencia/València",
                town: "Sellent",
                latitude: -0.58589549,
                longitude: 39.03106966,
                postalCodes: [
                    46295
                ]
            },
            {
                province: "Valencia/València",
                town: "Sempere",
                latitude: -0.47990447,
                longitude: 38.91969366,
                postalCodes: [
                    46839
                ]
            },
            {
                province: "Valencia/València",
                town: "Senyera",
                latitude: -0.51074535,
                longitude: 39.06258989,
                postalCodes: [
                    46669
                ]
            },
            {
                province: "Valencia/València",
                town: "Serra",
                latitude: -0.42943566,
                longitude: 39.68501049,
                postalCodes: [
                    46118
                ]
            },
            {
                province: "Valencia/València",
                town: "Siete Aguas",
                latitude: -0.91525006,
                longitude: 39.47083761,
                postalCodes: [
                    46392,
                    46600
                ]
            },
            {
                province: "Valencia/València",
                town: "Silla",
                latitude: -0.40918614,
                longitude: 39.36367607,
                postalCodes: [
                    46460
                ]
            },
            {
                province: "Valencia/València",
                town: "Simat de la Valldigna",
                latitude: -0.31183498,
                longitude: 39.04354005,
                postalCodes: [
                    46750
                ]
            },
            {
                province: "Valencia/València",
                town: "Sinarcas",
                latitude: -1.23094428,
                longitude: 39.73421426,
                postalCodes: [
                    46320
                ]
            },
            {
                province: "Valencia/València",
                town: "Sollana",
                latitude: -0.38003433,
                longitude: 39.27761921,
                postalCodes: [
                    46430,
                    46439
                ]
            },
            {
                province: "Valencia/València",
                town: "Sot de Chera",
                latitude: -0.90980903,
                longitude: 39.6213043,
                postalCodes: [
                    46168,
                    46842
                ]
            },
            {
                province: "Valencia/València",
                town: "Sueca",
                latitude: -0.31552389,
                longitude: 39.20242834,
                postalCodes: [
                    46410,
                    46419,
                    46420
                ]
            },
            {
                province: "Valencia/València",
                town: "Sumacàrcer",
                latitude: -0.62835406,
                longitude: 39.09401779,
                postalCodes: [
                    46295
                ]
            },
            {
                province: "Valencia/València",
                town: "Tavernes Blanques",
                latitude: -0.36543705,
                longitude: 39.50711211,
                postalCodes: [
                    46016
                ]
            },
            {
                province: "Valencia/València",
                town: "Tavernes de la Valldigna",
                latitude: -0.26721943,
                longitude: 39.07256604,
                postalCodes: [
                    46760
                ]
            },
            {
                province: "Valencia/València",
                town: "Teresa de Cofrentes",
                latitude: -1.05099973,
                longitude: 39.10639401,
                postalCodes: [
                    46470,
                    46622
                ]
            },
            {
                province: "Valencia/València",
                town: "Terrateig",
                latitude: -0.32028226,
                longitude: 38.89443254,
                postalCodes: [
                    46842
                ]
            },
            {
                province: "Valencia/València",
                town: "Titaguas",
                latitude: -1.08071604,
                longitude: 39.86611631,
                postalCodes: [
                    46178
                ]
            },
            {
                province: "Valencia/València",
                town: "Torrebaja",
                latitude: -1.256043,
                longitude: 40.095634,
                postalCodes: [
                    46143
                ]
            },
            {
                province: "Valencia/València",
                town: "Torrella",
                latitude: -0.57202049,
                longitude: 38.98858019,
                postalCodes: [
                    46814
                ]
            },
            {
                province: "Valencia/València",
                town: "Torrent",
                latitude: -0.46496185,
                longitude: 39.43708486,
                postalCodes: [
                    43900,
                    46185,
                    46480,
                    46840,
                    46900,
                    46901
                ]
            },
            {
                province: "Valencia/València",
                town: "Torres Torres",
                latitude: -0.35720676,
                longitude: 39.74362733,
                postalCodes: [
                    46595
                ]
            },
            {
                province: "Valencia/València",
                town: "Tous",
                latitude: -0.58682162,
                longitude: 39.1381579,
                postalCodes: [
                    46269
                ]
            },
            {
                province: "Valencia/València",
                town: "Tuéjar",
                latitude: -1.03965285,
                longitude: 39.76354602,
                postalCodes: [
                    46177
                ]
            },
            {
                province: "Valencia/València",
                town: "Turís",
                latitude: -0.71026832,
                longitude: 39.38884152,
                postalCodes: [
                    46389
                ]
            },
            {
                province: "Valencia/València",
                town: "Utiel",
                latitude: -1.20538601,
                longitude: 39.56715497,
                postalCodes: [
                    46300,
                    46312,
                    46313,
                    46321
                ]
            },
            {
                province: "Valencia/València",
                town: "València",
                latitude: -0.37565717,
                longitude: 39.47534441,
                postalCodes: [
                    46001,
                    46002,
                    46003,
                    46004,
                    46005,
                    46006,
                    46007,
                    46008,
                    46009,
                    46010,
                    46011,
                    46012,
                    46013,
                    46014,
                    46015,
                    46016,
                    46017,
                    46018,
                    46019,
                    46020,
                    46021,
                    46022,
                    46023,
                    46024,
                    46025,
                    46026,
                    46035,
                    46112,
                    46131,
                    46135
                ]
            },
            {
                province: "Valencia/València",
                town: "Vallada",
                latitude: -0.69205225,
                longitude: 38.89460302,
                postalCodes: [
                    46691
                ]
            },
            {
                province: "Valencia/València",
                town: "Vallanca",
                latitude: -1.33890097,
                longitude: 40.06310501,
                postalCodes: [
                    46145
                ]
            },
            {
                province: "Valencia/València",
                town: "Vallés",
                latitude: -0.5562545,
                longitude: 38.98545785,
                postalCodes: [
                    46818
                ]
            },
            {
                province: "Valencia/València",
                town: "Venta del Moro",
                latitude: -1.35639044,
                longitude: 39.48386851,
                postalCodes: [
                    46310,
                    46311
                ]
            },
            {
                province: "Valencia/València",
                town: "Vilallonga/Villalonga",
                latitude: -0.20893948,
                longitude: 38.88434512,
                postalCodes: [
                    46720
                ]
            },
            {
                province: "Valencia/València",
                town: "Vilamarxant",
                latitude: -0.6217647,
                longitude: 39.56885036,
                postalCodes: [
                    46191
                ]
            },
            {
                province: "Valencia/València",
                town: "Villanueva de Castellón",
                latitude: -0.51307146,
                longitude: 39.07730688,
                postalCodes: [
                    46270
                ]
            },
            {
                province: "Valencia/València",
                town: "Villar del Arzobispo",
                latitude: -0.8243642,
                longitude: 39.73297057,
                postalCodes: [
                    46170
                ]
            },
            {
                province: "Valencia/València",
                town: "Villargordo del Cabriel",
                latitude: -1.44184908,
                longitude: 39.53700548,
                postalCodes: [
                    46317,
                    46318
                ]
            },
            {
                province: "Valencia/València",
                town: "Vinalesa",
                latitude: -0.37024391,
                longitude: 39.53690484,
                postalCodes: [
                    46114
                ]
            },
            {
                province: "Valencia/València",
                town: "Yátova",
                latitude: -0.80828078,
                longitude: 39.38451438,
                postalCodes: [
                    46367
                ]
            },
            {
                province: "Valencia/València",
                town: "La Yesa",
                latitude: -0.96158146,
                longitude: 39.89110862,
                postalCodes: [
                    46178
                ]
            },
            {
                province: "Valencia/València",
                town: "Zarra",
                latitude: -1.07475293,
                longitude: 39.09152563,
                postalCodes: [
                    46621
                ]
            },
            {
                province: "Valencia/València",
                town: "Gátova",
                latitude: -0.52085956,
                longitude: 39.76925793,
                postalCodes: [
                    46169
                ]
            },
            {
                province: "Valencia/València",
                town: "San Antonio de Benagéber",
                latitude: -0.50005481,
                longitude: 39.5614377,
                postalCodes: [
                    46184
                ]
            },
            {
                province: "Valencia/València",
                town: "Benicull de Xúquer",
                latitude: -0.38349993,
                longitude: 39.18567881,
                postalCodes: [
                    46689
                ]
            }
        ]
    };

    request(app)
        .get(url)
        .expect(statusCodeExpected)
        .then(
            (res) => {
                const currentResponseData = res.body;
                assert.deepEqual(currentResponseData, responseExpected, message);
                server.close();

            }, (err) => {
                assert.fail(err.message);
                server.close();

            }
        );

    //For not exists cp
    const urlNotExists = '/province/puig';
    const notFoundExpectedCode = 404;
    const expectedResponseForNotExists = {
        message: "Not found",
        status: 404
    };
    const messageForExpectedNotExists = 'Status should be 404 and message "Postal code not found", for not exists postal code';
    request(app)
        .get(urlNotExists)
        .expect(notFoundExpectedCode)
        .then(
            (res) => {
                const currentResponseForNotExists = res.body;
                assert.deepEqual(currentResponseForNotExists, expectedResponseForNotExists, messageForExpectedNotExists);
                assert.end();
                server.close()
            }, (err) => {
                assert.fail(err.message);
                assert.end();
                server.close()
            }
        )

});