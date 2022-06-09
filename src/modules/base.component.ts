export class BaseComponent {

    public static FIRST_NAME: string = `Fernando`;
    public static LAST_NAME: string = 'Rocha';
    public static CONTACT_EMAIL: string = 'fhrlobacz@gmail.com';
    public static CONTACT_PHONE: string = '(42) 99126-2851';
    public static PERSONAL_SITE: string = 'www.nandorocha.com.br';
    public static COMPLETE_ABOUT: string = `Um apaixonado por tecnologias, durante o ensino médio foram dados 
        os primeiros passos em liguagem C# para o desenvolvimento de jogos e logo em seguida 
        demonstrando interesse em arduino e automações. Os primeiros projetos aplicados foram 
        de automação web e jogos educativos, ambos aplicados na carreira de professor de física 
        do ensino médio. `;
    public static SHORT_ABOUT: string = `Um apaixonado por tecnologias que teve o início de sua carreira como desenvolvedor 
        independente, enquanto estudava por vontade própria. Extremamente motivado, 
        ao desenvolver processos de automação web surpreendeu com resultados e conseguiu 
        sua primeira vaga na area como desenvolvedor web. Desde então seu foco é se desenvolver 
        profissionalmente.`;
    public static EDUCATION = [
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
    public static CARRER: string = 'Desenvolvedor Web';
    public static PROFESSIONAL_EXPERIENCE = [
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
    public static SKILLS = [
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
    ];

    public static EMAIL_URL: string = "https://formspree.io/f/xrgjoway";

    public print() {
        const notificationDiv = document.querySelector('#notification');
        if(notificationDiv) {
            notificationDiv.classList.remove('active');
        }
        window.print();
    }
}