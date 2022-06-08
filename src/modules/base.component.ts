export class BaseComponent {

    FIRST_NAME: string = `Fernando`;
    LAST_NAME: string = 'Rocha';
    CONTACT_EMAIL: string = 'fhrlobacz@gmail.com';
    CONTACT_PHONE: string = '(42) 99126-2851';
    PERSONAL_SITE: string = 'www.nandorocha.com.br';
    COMPLETE_ABOUT: string = `Um apaixonado por tecnologias, durante o ensino médio foram dados 
                    os primeiros passos em liguagem C# para o desenvolvimento de jogos e logo em seguida 
                    demonstrando interesse em arduino e automações. Os primeiros projetos aplicados foram 
                    de automação web e jogos educativos, ambos aplicados na carreira de professor de física 
                    do ensino médio. `;
    SHORT_ABOUT: string = `Um apaixonado por tecnologias que teve o início de sua carreira como desenvolvedor 
                            independente, enquanto estudava por vontade própria. Extremamente motivado, 
                            ao desenvolver processos de automação web surpreendeu com resultados e conseguiu 
                            sua primeira vaga na area como desenvolvedor web. Desde então seu foco é se desenvolver 
                            profissionalmente.`;
    EDUCATION = [
        {
            year : '2009 - 2011',
            institution: 'Ana Vanda Bassara',
            description: 'Ensino Médio'
        },
        {
            year : '2012 - 2022',
            institution: 'Universidade Estadual do Centro Oeste',
            description: 'Licenciatura em Física'
        }
    ]
    CARRER: string = 'Desenvolvedor Web';
    PROFESSIONAL_EXPERIENCE = [
        {
            year : '03/2021',
            role: 'Analista de Licitação',
            description: [
                'Análise de processos licitatórios para participação da empresa.',
                'Submissão, acompanhamento e gestão dos processos licitatórios.',
                'Elaboração de documentos.',
                'Desenvolvimento de automações e ERP para gestão dos processos da empresa.'
            ]
        },
        {
            year : '10/2021',
            role: 'Desenvolvedor Web',
            description: [
                'Desenvolvimento de Bug Fix e novas Features em projetos Web que atendem milhares de pessoas pelo Brasil.',
                'Participação nos processos do time através da metodologia Scrum.',
                'Atuação como desenvolvedor Backend em servidor e banco de dados, Frontend atencioso ao UI e UX dos clientes.'
            ]
        }
    ];
    SKILLS = [
        {
            skill : "javascript",
            level : "85",
        },
        {
            skill : "html css",
            level : "80",
        },
        {
            skill : "sql",
            level : "75",
        },
        {
            skill : "laravel",
            level : "70",
        },
        {
            skill : "angular",
            level : "70",
        },
        {
            skill : "docker",
            level : "65",
        }
    ]

    public print() {
        window.print();
    }
}