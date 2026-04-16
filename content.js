const translations = {
    pt: {
        addressLabel: 'Onde:',
        menuVenue: 'Local',
        menuHowTo: 'Como chegar',
        menuAccommodation: 'Alojamento',
        menuAboutTheDay: 'Sobre o dia',
        menuCeremony: 'Cerimónia',
        menuFoodDrinks: 'Comida e bebidas',
        menuChildren: 'Crianças',
        menuSpeeches: 'Discursos',
        menuDressCode: 'Roupa',
        menuGifts: 'Presentes',
        menuSightseeing: 'O que visitar',
        menuPonteDeLima: 'Ponte de Lima',
        menuPorto: 'Porto',
        menuPortoHistory: 'Porto: História e Comida',
        menuPortoGardens: 'Porto: Jardins',
        menuPortoViews: 'Porto: Vistas e Passeios',
        menuPortoCulture: 'Porto: Arte e Cultura',
        weddingDate: '19 SETEMBRO 2026',
        landingTitle: 'Vamos casar',
        sections: [
            {
                id: 'venue',
                title: 'Local',
                blocks: [
                    { text: ['O casamento terá lugar na Quinta do Outeiro, situada a cerca de 3 quilómetros do centro histórico de Ponte de Lima. É uma propriedade rural que remonta ao século XVIII, com edifícios em pedra preservados e belos jardins envolventes.'] }
                ]
            },
            {
                id: 'how-to-get-there',
                title: 'Como chegar',
                blocks: [
                    {
                        text: [
                            'Se viajares do estrangeiro, o aeroporto mais próximo é o do Porto (OPO). A partir do Porto, podes viajar até Ponte de Lima de carro ou de autocarro, sendo que a viagem de carro demora cerca de 50 minutos.',
                            'A partir de Ponte de Lima, segue pela estrada EN203 durante cerca de 3 km até chegares à Quinta do Outeiro.'
                        ]
                    }
                ]
            },
            {
                id: 'accommodation',
                title: 'Alojamento',
                blocks: [
                    {
                        text: [
                            'Existem muitas opções de alojamento no centro de Ponte de Lima, incluindo hotéis, hostels e Airbnbs. Para os convidados que viajam de fora de Portugal, recomendamos vivamente ficares mais um ou dois dias para explorares Ponte de Lima e a região do Minho, conhecida pelas suas paisagens verdes, aldeias históricas, vinhas e gastronomia tradicional.',
                            'A quinta também oferece quartos a curta distância a pé da propriedade por [preço] por noite. Se estiveres interessado em reservar um destes quartos, por favor contacta-nos o mais brevemente possível.'
                        ]
                    }
                ]
            },
            {
                id: 'ceremony',
                title: 'Cerimónia',
                blocks: [
                    { text: ['Se o tempo permitir, a cerimónia terá lugar nos jardins. Será realizada em inglês e os programas impressos incluirão traduções em sueco e português.'] }
                ]
            },
            {
                id: 'food-drinks',
                title: 'Comida e bebidas',
                blocks: [
                    {
                        text: [
                            'Ninguém passa fome num casamento português. Um conselho: nunca assumas que o último prato já foi servido — guarda sempre um bocadinho de espaço ao longo da noite!',
                            'Se tiveres restrições alimentares (como alergias alimentares ou dieta vegana/vegetariana), por favor informa-nos o mais brevemente possível.'
                        ]
                    }
                ]
            },
            {
                id: 'children',
                title: 'Crianças',
                blocks: [
                    {
                        text: [
                            'Queremos garantir que todos os convidados tenham um dia maravilhoso, incluindo as crianças. Haverá jogos e atividades nos jardins para os mais pequenos, com ou sem os pais.'
                        ]
                    }
                ]
            },

            {
                id: 'ponte-de-lima',
                title: 'Ponte de Lima',
                blocks: [
                    { text: ['Em breve.'] }
                ]
            },
            {
                id: 'porto-history',
                title: 'Porto: História e Comida',
                blocks: [
                    {
                        subtitle: 'Turismo histórico',
                        text: [
                            '<strong>Sé (Catedral)</strong><br>Se só vais visitar uma igreja, recomendamos esta. Tem também um miradouro muito bonito!',
                            '<strong>Passeios gratuitos pela cidade</strong><br>Uma forma muito agradável de teres uma visão geral dos principais pontos de interesse e da história do Porto. Bónus se tiveres a Inês Garrido como guia!'
                        ]
                    },
                    {
                        subtitle: 'Comida',
                        text: [
                            '<strong>Gelateria Portuense</strong><br>O melhor gelado do Porto!'
                        ]
                    }
                ]
            },
            {
                id: 'porto-gardens',
                title: 'Porto: Jardins',
                blocks: [
                    {
                        subtitle: 'Jardins',
                        text: [
                            '<strong>Jardins do Palácio de Cristal</strong>',
                            '<strong>Casa S. Roque e jardins</strong>',
                            '<strong>Jardim Quinta da Prelada</strong> (livre)',
                            '<strong>Jardim de Liége</strong> (na Foz)'
                        ]
                    }
                ]
            },
            {
                id: 'porto-views',
                title: 'Porto: Vistas e Passeios',
                blocks: [
                    {
                        subtitle: 'Vistas e Passeios',
                        text: [
                            '<strong>Torre da igreja do Marquês</strong> (para ver as vistas)',
                            '<strong>Elevador da Lada</strong> (junto à ponte D. Luís)',
                            '<strong>Escadas do Monte dos Judeus</strong> (Ribeira)',
                            '<strong>Calçada da Arrábida</strong> (para subir e ver as vistas do Douro)',
                            '<strong>Foz</strong><br>Passear ou pedalar na Foz e apreciar o pôr do sol numa esplanada. Podes reservar bicicletas na loja <a href="https://www.tricla.pt/" target="_blank">Biclas&Triclas</a>.'
                        ]
                    }
                ]
            },
            {
                id: 'porto-culture',
                title: 'Porto: Arte e Cultura',
                blocks: [
                    {
                        subtitle: 'Arte e cultura',
                        text: [
                            '<strong>Serralves – museu de arte contemporânea</strong><br>Por vezes tem exposições excelentes, verifica antes pois é bastante caro. Xxxx dia a entrada é gratuita. O jardim é adorável!',
                            '<strong>Palacete Silva Monteiro</strong> (rua da Restauração)',
                            '<strong>Xxxx – museu de teatro de marionetas</strong><br>Um museu de produções de teatro xxx. Pequeno mas muito giro e com bilhete barato.'
                        ]
                    }
                ]
            }
        ]
    },
    en: {
        addressLabel: 'Where:',
        menuVenue: 'Venue',
        menuHowTo: 'How to get there',
        menuAccommodation: 'Accommodation',
        menuAboutTheDay: 'About the day',
        menuCeremony: 'Ceremony',
        menuFoodDrinks: 'Food & drinks',
        menuChildren: 'Children',
        menuSpeeches: 'Speeches',
        menuDressCode: 'Dress code',
        menuGifts: 'Gifts',
        menuSightseeing: 'Sightseeing',
        menuPonteDeLima: 'Ponte de Lima',
        menuPorto: 'Porto',
        menuPortoHistory: 'Porto: History & Food',
        menuPortoGardens: 'Porto: Gardens',
        menuPortoViews: 'Porto: Views & Walks',
        menuPortoCulture: 'Porto: Art & Culture',
        weddingDate: '19 SEPTEMBER 2026',
        landingTitle: 'We\'re getting married',
        sections: [
            {
                id: 'venue',
                title: 'Venue',
                blocks: [
                    { text: ['The wedding will take place at Quinta do Outeiro, located about 3 kilometers outside the historic city centre of Ponte de Lima. It is a country estate dating back to the 18th century, with preserved stone buildings and beautiful surrounding gardens.'] }
                ]
            },
            {
                id: 'how-to-get-there',
                title: 'How to get there',
                blocks: [
                    {
                        text: [
                            'If you are traveling from abroad, the nearest airport is Porto (OPO). From Porto you can travel to Ponte de Lima either by car or by bus, which takes about 50 minutes by car.',
                            'From Ponte de Lima, follow the EN203 road for about 3 km until you reach Quinta do Outeiro.'
                        ]
                    }
                ]
            },
            {
                id: 'accommodation',
                title: 'Accommodation',
                blocks: [
                    {
                        text: [
                            'There are many accommodation options in central Ponte de Lima, including hotels, hostels, and Airbnbs. For guests traveling from outside Portugal, we highly recommend staying an extra day or two to explore Ponte de Lima and the surrounding Minho region, known for its green landscapes, historic villages, vineyards, and traditional cuisine.',
                            'The quinta also offers rooms within walking distance of the estate for [price] per night. If you are interested in booking one of these rooms, please contact us as soon as possible.'
                        ]
                    }
                ]
            },
            {
                id: 'ceremony',
                title: 'Ceremony',
                blocks: [
                    { text: ['If the weather allows, the ceremony will take place in the gardens. It will be held in English, and printed programs will include translations in Swedish and Portuguese.'] }
                ]
            },
            {
                id: 'food-drinks',
                title: 'Food & drinks',
                blocks: [
                    {
                        text: [
                            'Nobody goes hungry at a Portuguese wedding. One piece of advice: never assume the last dish has been served—always save a little room throughout the evening!',
                            'If you have any dietary restrictions (such as food allergies or a vegan/vegetarian diet), please let us know as soon as possible.'
                        ]
                    }
                ]
            },
            {
                id: 'children',
                title: 'Children',
                blocks: [
                    {
                        text: [
                            'We want to make sure every guest has a lovely day, including children. There will be games and activities in the gardens for kids to enjoy, with or without their parents.'
                        ]
                    }
                ]
            },

            {
                id: 'ponte-de-lima',
                title: 'Ponte de Lima',
                blocks: [
                    { text: ['Coming soon.'] }
                ]
            },
            {
                id: 'porto-history',
                title: 'Porto: History & Food',
                blocks: [
                    {
                        subtitle: 'Historic sightseeing',
                        text: [
                            '<strong>The cathedral</strong><br>If you\'re only gonna pick one church to visit, we recommend this one. Very nice viewpoint as well!',
                            '<strong>City free tours</strong><br>A very pleasant way to get an overview of important landmarks as well as the history of Porto. Bonus if you get Inês Garrido as your guide!'
                        ]
                    },
                    {
                        subtitle: 'Food',
                        text: [
                            '<strong>Gelateria Portuense</strong><br>The very best gelato in Porto!'
                        ]
                    }
                ]
            },
            {
                id: 'porto-gardens',
                title: 'Porto: Gardens',
                blocks: [
                    {
                        subtitle: 'Gardens',
                        text: [
                            '<strong>Crystal Palace gardens</strong>',
                            '<strong>Casa S. Roque and gardens</strong>',
                            '<strong>Quinta da Prelada Garden</strong> (free entry)',
                            '<strong>Liége garden</strong> (in Foz)'
                        ]
                    }
                ]
            },
            {
                id: 'porto-views',
                title: 'Porto: Views and Walks',
                blocks: [
                    {
                        subtitle: 'Views and Walks',
                        text: [
                            '<strong>Marquês Church tower</strong> (for the views)',
                            '<strong>Lada elevator</strong> (next to Luís I Bridge)',
                            '<strong>Monte dos Judeus stairs</strong> (Ribeira)',
                            '<strong>Calçada da Arrábida</strong> (to walk up and see the Douro views)',
                            '<strong>Foz</strong><br>Stroll or cycle in Foz and enjoy the sunset at a terrace. You can rent bikes at <a href="https://www.tricla.pt/" target="_blank">Biclas&Triclas</a>.'
                        ]
                    }
                ]
            },
            {
                id: 'porto-culture',
                title: 'Porto: Art & Culture',
                blocks: [
                    {
                        subtitle: 'Art and culture',
                        text: [
                            '<strong>Serralves – museum for contemporary art</strong><br>Great exhibitions sometimes, check beforehand as it\'s very pricey. Xxxx day it\'s free admission. The garden is lovely!',
                            '<strong>Palacete Silva Monteiro</strong> (Rua da Restauração)',
                            '<strong>Xxxx – puppet theatre museum</strong><br>A museum of xxx theatre productions. Small but very cute and low admission fee.'
                        ]
                    }
                ]
            }
        ]
    },
    se: {
        addressLabel: 'Var:',
        menuVenue: 'Plats',
        menuHowTo: 'Hitta hit',
        menuAccommodation: 'Boende',
        menuAboutTheDay: 'Om dagen',
        menuCeremony: 'Vigsel',
        menuFoodDrinks: 'Mat & dryck',
        menuChildren: 'Barn',
        menuSpeeches: 'Tal',
        menuDressCode: 'Klädkod',
        menuGifts: 'Gåvor',
        menuSightseeing: 'Sevärdheter',
        menuPonteDeLima: 'Ponte de Lima',
        menuPorto: 'Porto',
        menuPortoHistory: 'Porto: Historia & Mat',
        menuPortoGardens: 'Porto: Trädgårdar',
        menuPortoViews: 'Porto: Utsikt & Promenader',
        menuPortoCulture: 'Porto: Konst & Kultur',
        weddingDate: '19 SEPTEMBER 2026',
        landingTitle: 'Vi ska gifta oss',
        sections: [
            {
                id: 'venue',
                title: 'Plats',
                blocks: [
                    { text: ['Bröllopet äger rum på Quinta do Outeiro, cirka 3 kilometer utanför Ponte de Lima. Det är en gård med anor från 1700-talet, bestående av ett flertal välbevarade stenbyggnader och omgivande trädgårdar.'] }
                ]
            },
            {
                id: 'how-to-get-there',
                title: 'Hitta hit',
                blocks: [
                    {
                        text: [
                            'För gäster som reser från utlandet är den närmaste flygplatsen Porto (OPO). Från Porto kan du ta dig till Ponte de Lima antingen med bil eller buss, och resan tar ungefär 50 minuter med bil.',
                            'Från Ponte de Lima följer du väg EN203 i cirka 3 km tills du når Quinta do Outeiro.'
                        ]
                    }
                ]
            },
            {
                id: 'accommodation',
                title: 'Boende',
                blocks: [
                    {
                        text: [
                            'Det finns många boendemöjligheter i centrala Ponte de Lima, inklusive hotell, vandrarhem och Airbnbs. För gäster som reser från utanför Portugal kan vi verkligen rekommendera att stanna en eller två extra dagar för att utforska Ponte de Lima och den omgivande Minho-regionen, känd för sina gröna landskap, historiska byar, vingårdar och traditionella kök.'
                        ]
                    }
                ]
            },
            {
                id: 'ceremony',
                title: 'Vigsel',
                blocks: [
                    { text: ['Vigseln kommer att äga rum i trädgården bredvid själva festlokalen, om vädret tillåter. Den hålls på engelska, men det kommer att finnas programblad med svensk respektive portugisisk översättning så att alla kan hänga med.'] }
                ]
            },
            {
                id: 'food-drinks',
                title: 'Mat & dryck',
                blocks: [
                    {
                        text: [
                            'Ingen går hungrig från ett portugisiskt bröllop. Ett tips: tänk aldrig att den sista rätten har serverats, utan spara alltid lite plats för något mer! Det kommer alltid mer.',
                            'Om du har behov av specialkost (såsom allergier eller vegansk/vegetarisk kost), meddela oss gärna det så snart som möjligt.'
                        ]
                    }
                ]
            },
            {
                id: 'children',
                title: 'Barn',
                blocks: [
                    {
                        text: [
                            'Vi vill såklart att alla får en härlig dag, även de yngre gästerna. Det kommer därför att finnas spel och andra typer av aktiviteter i trädgården för barnen att roa sig med, med eller utan sina föräldrar.'
                        ]
                    }
                ]
            },

            {
                id: 'ponte-de-lima',
                title: 'Ponte de Lima',
                blocks: [
                    { text: ['Kommer snart.'] }
                ]
            },
            {
                id: 'porto-history',
                title: 'Porto: Historia & Mat',
                blocks: [
                    {
                        subtitle: 'Historiska sevärdheter',
                        text: [
                            '<strong>Katedralen</strong><br>Om du bara ska besöka en kyrka rekommenderar vi denna. Mycket fin utsiktsplats också!',
                            '<strong>Gratis stadsvandringar</strong><br>Ett mycket trevligt sätt att få en överblick över viktiga landmärken och Portos historia. Bonus om ni får Inês Garrido som guide!'
                        ]
                    },
                    {
                        subtitle: 'Mat',
                        text: [
                            '<strong>Gelateria Portuense</strong><br>Den allra bästa gelaton i Porto!'
                        ]
                    }
                ]
            },
            {
                id: 'porto-gardens',
                title: 'Porto: Trädgårdar',
                blocks: [
                    {
                        subtitle: 'Trädgårdar',
                        text: [
                            '<strong>Kristallpalatsets trädgårdar</strong> (Palácio de Cristal)',
                            '<strong>Casa S. Roque och trädgårdar</strong>',
                            '<strong>Quinta da Prelada-trädgården</strong> (gratis)',
                            '<strong>Liége-trädgården</strong> (i Foz)'
                        ]
                    }
                ]
            },
            {
                id: 'porto-views',
                title: 'Porto: Utsikt och Promenader',
                blocks: [
                    {
                        subtitle: 'Utsikt och Promenader',
                        text: [
                            '<strong>Marquês-kyrkans torn</strong> (för utsikten)',
                            '<strong>Lada-hissen</strong> (bredvid Luís I-bron)',
                            '<strong>Monte dos Judeus-trapporna</strong> (Ribeira)',
                            '<strong>Calçada da Arrábida</strong> (för att gå upp och se utsikten över Douro)',
                            '<strong>Foz</strong><br>Promenera eller cykla i Foz och njut av solnedgången på en uteservering. Du kan hyra cyklar hos <a href="https://www.tricla.pt/" target="_blank">Biclas&Triclas</a>.'
                        ]
                    }
                ]
            },
            {
                id: 'porto-culture',
                title: 'Porto: Konst & Kultur',
                blocks: [
                    {
                        subtitle: 'Konst och kultur',
                        text: [
                            '<strong>Serralves – museum för samtidskonst</strong><br>Ibland utmärkta utställningar, kolla innan då det är ganska dyrt. Xxxx dag är det gratis inträde. Trädgården är härlig!',
                            '<strong>Palacete Silva Monteiro</strong> (Rua da Restauração)',
                            '<strong>Xxxx – dockteatermuseum</strong><br>Ett museum med xxx teaterproduktioner. Litet men väldigt charmigt och lågt inträde.'
                        ]
                    }
                ]
            }
        ]
    }
};
