export class BaseComponent {

    public static FIRST_NAME: string = `Fernando`;
    public static LAST_NAME: string = 'Rocha';
    public static CONTACT_EMAIL: string = 'contato@nandorocha.com.br';
    public static CONTACT_PHONE: string = '(42) 99144-6487';
    public static PERSONAL_SITE: string = 'www.nandorocha.com.br';
    public static COMPLETE_ABOUT: string = `Background como professor de física, migrei para a programação com processos de automação utilizando python,
        selenium e mysql. Me apaixonei por banco de dados relacionais e programação, hoje atuo como fullstack
        responsável e criativo nas soluções, em constante aprendizado para entregas eficientes.`;
    public static SHORT_ABOUT: string = `Responsável, organizado e comprometido a desenvolver softwares em equipe, buscando sempre
         evoluir e entregar os melhores resultados.`;
    public static EDUCATION = [
        {
            year: 'Graduando',
            institution: 'UNOPAR',
            description: 'Engenharia de Software'
        }
    ]
    public static CARRER: string = 'Desenvolvedor Web Fullstack';
    public static PROFESSIONAL_EXPERIENCE = [
        {
            year: '08/2022 - atualmente',
            role: 'Desenvolvedor Fullstack - Mobile Sales',
            description: [
                'Participação em múltiplos projetos, atuação fullstack e participação na organização e cultura de desenvolvimento da equipe.',
                'Integrações com gateway de pagamento, logs, relatórios, melhorias de performace em banco de dados.',
            ]
        },
        {
            year: '10/2021 - 08/2022',
            role: 'Desenvolvedor Web - Shooting House',
            description: [
                'Atuação Backend e Frontend em projetos Web com milhares de usuários.',
                'Refatoração e implementações seguindo os padrões de projetos e atento a aspectos de UI e UX.'
            ]
        },
        {
            year: '03/2021 - 10/2021',
            role: 'Analista de Licitação - Brain Pro',
            description: [
                'Gestão dos processos licitatórios da empresa.',
                'Desenvolvimento de automação web, banco de dados relacionais e ERP para gestão dos processos da empresa.'
            ]
        }
    ];
    public static SKILLS = [
        'Python', 'MySQL', 'Docker', 'PHP', 'Laravel', 'Symfony', 'Doctrine', 'NodeJS', 'Linux', 'Windows',
        'Typescript', 'Javascript', 'Bootstrap', 'Tailwind', 'Angular', 'ThreeJS', 'RxJS', 'Vue',
        'GIT', 'Selenium', 'AWS', 'Arduino', 'ESP32'
    ];
    // public static SKILLS = [
    //     {
    //         skill : "sql",
    //         level : "90",
    //     },
    //     {
    //         skill : "typescript",
    //         level : "85",
    //     },
    //     {
    //         skill : "html css",
    //         level : "80",
    //     },
    //     {
    //         skill : "laravel",
    //         level : "70",
    //     },
    //     {
    //         skill : "angular",
    //         level : "70",
    //     },
    //     {
    //         skill : "docker",
    //         level : "65",
    //     }
    // ];

    public static EMAIL_URL: string = "https://formspree.io/f/xrgjoway";

    public print() {
        const notificationDiv = document.querySelector('#notification');
        if (notificationDiv) {
            notificationDiv.classList.remove('active');
        }
        window.print();
    }
}