export class BaseComponent {

    public static FIRST_NAME: string = `Fernando`;
    public static LAST_NAME: string = 'Rocha';
    public static CONTACT_EMAIL: string = 'contato@nandorocha.com.br';
    public static CONTACT_PHONE: string = '(42) 99144-6487';
    public static PERSONAL_SITE: string = 'www.nandorocha.com.br';
    public static COMPLETE_ABOUT: string = `Responsável e organizado, trabalho de maneira a estar sempre atento as
         melhores práticas de desenvolvimento de software do mercado, e comprometido a desenvolver softwares juntamente
         a minha equipe buscando sempre melhorar e entregar os melhores resultados. Atualmente busco crescer profissionalmente.`;
    public static SHORT_ABOUT: string = `Responsável, organizado e comprometido a desenvolver softwares em equipe, buscando sempre
         evoluir e entregar os melhores resultados.`;
    public static EDUCATION = [
        {
            year : 'Graduando',
            institution: 'Universidade Estadual do Centro Oeste',
            description: 'Licenciatura em Física'
        }
    ]
    public static CARRER: string = 'Dev Fullstack';
    public static PROFESSIONAL_EXPERIENCE = [
        {
            year : '08/2022',
            role: 'Desenvolvedor Fullstack - Mobile Sales',
            description: [
                'Participação ativa com a equipe, mentoreando e auxiliando o crescimento dos membros além de colaborar na organização e cultura de desenvolvimento da equipe.',
                'Implementação de integrações com gateway de pagamento.',
            ]
        },
        {
            year : '10/2021 - 08/2022',
            role: 'Desenvolvedor Web - Shooting House',
            description: [
                'Atuação Backend e Frontend em projetos Web com milhares de usuários seguindo a metodologia Scrum.',
                'Desenvolvedor crítico aos padrões dos projetos e atento a aspectos de UI e UX, atuando na montagem, apresentação e impressão de relatórios dentro do sistema.'
            ]
        },
        {
            year : '03/2021 - 10/2021',
            role: 'Analista de Licitação - Brain Pro',
            description: [
                'Submissão e gestão dos processos licitatórios da empresa.',
                'Implementação e desenvolvimento de processos de automação web, banco de dados e ERP para gestão dos processos da empresa.'
            ]
        }
    ];
    public static SKILLS = [
        {
            skill : "sql",
            level : "90",
        },
        {
            skill : "typescript",
            level : "85",
        },
        {
            skill : "html css",
            level : "80",
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