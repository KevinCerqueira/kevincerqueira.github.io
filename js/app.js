(function () {
  var THEME_STORAGE_KEY = 'site-theme';
  var LANG_STORAGE_KEY = 'site-lang';

  function getPreferredTheme() {
    try {
      var stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored === 'light' || stored === 'dark') return stored;
    } catch (_) {}
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) {
      var icon = btn.querySelector('i');
      if (icon) icon.className = theme === 'dark' ? 'fa fa-sun-o' : 'fa fa-moon-o';
      btn.setAttribute('aria-label', theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro');
      btn.title = 'Alternar tema';
    }
  }

  function calculateAge(isoBirth) {
    var birth = new Date(isoBirth);
    var today = new Date();
    var age = today.getFullYear() - birth.getFullYear();
    var m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 3 && today.getDate() < 24) || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }

  // Simple i18n dictionary
  var i18n = {
    pt: {
      documentLang: 'pt-br',
      pageTitle: 'Kevin Cerqueira — Engenheiro de Software',
      brandName: 'Kevin Cerqueira',
      navSobre: 'Sobre',
      navExperiencia: 'Experiência',
      navSkills: 'Habilidades',
      navEducacao: 'Educação',
      navProjetos: 'Projetos',
      navIdiomas: 'Idiomas',
      navContato: 'Contato',
      heroEyebrow: 'Olá, eu sou',
      heroTitle: 'Kevin Cerqueira',
      heroSubtitle: 'Engenheiro de Software · Kotlin · Laravel · JavaScript',
      heroLocation: 'Bahia, Brasil',
      heroAgeSuffix: ' anos',
      heroCtaPrimary: 'Fale comigo',
      heroCtaSecondary: 'Experiência',
      sectionSobreTitle: 'Sobre',
      aboutText: 'Oi, eu sou o Kevin! Sou graduado em Engenharia de Computação pela Universidade Estadual de Feira de Santana (UEFS) e atuo como Engenheiro de Software Pleno. Na Loft, sou responsável por desenvolver e manter sistemas financeiros, incluindo módulos de Contas a Pagar, Contas a Receber, Checkout de Pagamentos, Emissão de Notas, Conciliação Financeira e integrações com sistemas bancários — principalmente utilizando Kotlin. Também modernizo e mantenho sistemas legados em Laravel, PHP e JavaScript. No front‑end, tenho experiência com React; no back‑end, já trabalhei com Node.js e Java. Uso Python diariamente para automação, web scraping e soluções de IoT a fim de otimizar processos internos. Em bancos de dados, atualmente trabalho com PostgreSQL, mas possuo sólida experiência com Oracle, MySQL/MariaDB e MongoDB de projetos e funções anteriores. Em cloud e engenharia de dados, trabalho diariamente com Google Cloud (GCP) e BigQuery para análises em larga escala (com experiência prévia em Databricks), além de AWS (SQS, SNS, EC2...) para soluções de infraestrutura escaláveis. Em infraestrutura e DevOps, utilizo Docker para conteinerização, implemento pipelines de CI/CD com GitHub Actions e garanto alta disponibilidade por meio de monitoramento com Datadog e ArgoCD.',
      sectionExperienciaTitle: 'Experiência',
      jobLoftRole: 'Engenheiro de Software Pleno · Loft',
      jobLoftTime: 'Mar/2023 — Atualmente',
      jobLoftDesc: 'Na Loft, atuo no time de finanças desenvolvendo e mantendo sistemas financeiros. Construo soluções em Kotlin para contas a receber, gestão de notas fiscais e processamento de pagamentos para a Loft / Fiança Aluguel. Com expertise em Laravel/PHP e JavaScript, asseguro qualidade e escalabilidade dos sistemas. Implemento práticas de DevOps com Docker, AWS e GitHub Actions para pipelines de CI/CD, mantendo observabilidade e monitoramento com Datadog e ArgoCD para garantir confiabilidade.',
      jobLoftB1: 'Módulos: Contas a Pagar/Receber, Checkout de Pagamentos, Emissão de Notas, Conciliação Financeira.',
      jobLoftB2: 'Integrações financeiras e melhorias de performance/resiliência.',
      jobLoftB3: 'Práticas DevOps com Docker, AWS e GitHub Actions; observabilidade com Datadog e ArgoCD.',
      jobCredRole: 'Desenvolvedor Pleno I · CredPago',
      jobCredTime: 'Dez/2021 — Mar/2023',
      jobCredDesc: 'Como Desenvolvedor Pleno na CredPago, foquei no desenvolvimento e manutenção de sistemas financeiros, incluindo gateways de pagamento, contas a pagar e contas a receber. Atuando principalmente com Laravel, implementei soluções para gestão de assinaturas, conciliação financeira e geração de relatórios, sempre priorizando qualidade de código e escalabilidade.',
      jobCredB1: 'Gateways de pagamento e rotinas financeiras (AP/AR).',
      jobCredB2: 'APIs REST e microsserviços com foco em escalabilidade e segurança.',
      jobCredB3: 'Automação de deploys e orquestração com Docker.',

      jobCredJrRole: 'Desenvolvedor Júnior III · CredPago',
      jobCredJrTime: 'Mar/2021 — Dez/2021',
      jobCredJrDesc: 'Na CredPago, atuei como Desenvolvedor Júnior III prestando suporte e manutenção a sistemas full‑stack em PHP. Minhas responsabilidades incluíam manter e desenvolver novas APIs e microsserviços com Laravel, gerenciar bancos de dados em MariaDB (RDBMS) e colaborar em times ágeis, aplicando metodologias SCRUM e Kanban para assegurar eficiência e organização.',
      jobCredJrB1: 'Evolução de APIs e integrações internas.',
      jobCredJrB2: 'Boas práticas de versionamento (GitFlow) e código limpo.',
      jobSoftRole: 'Analista de Sistemas Júnior · SoftwareDATA',
      jobSoftTime: 'Jul/2020 — Mar/2021',
      jobSoftDesc: 'Como Analista de Sistemas Júnior na SoftwareData, dei suporte, mantive e desenvolvi novas soluções full‑stack usando Laravel/PHP e Java. Minhas responsabilidades incluíam a gestão de bancos Oracle RDBMS para sistemas de tributação municipal, administração de servidores FTP e Apache e processamento de baixas bancárias para o Centro de Atendimento Feirense (CEAF).',
      jobSoftB1: 'Soluções full‑stack para sistemas de tributação municipal.',
      jobSoftB2: 'Administração de Oracle RDBMS e otimização de consultas.',
      jobN2Role: 'Desenvolvedor Mobile · N2 Soluções',
      jobN2Time: 'Ago/2020 — Nov/2020',
      jobN2Desc: 'Desenvolvimento de um MVP de aplicativo mobile híbrido com IONIC (TypeScript + React) para a interface móvel e Laravel para o back‑end (API REST), criado para o Clube Mais Vida (Grupo Meddi).',
      jobN2B1: 'Apps para gestão de serviços públicos e integrações web.',
      sectionSkillsTitle: 'Habilidades',
      skillsLangFrameworks: 'Linguagens & Frameworks',
      skillsDatabasesPlatforms: 'Bancos de Dados & Plataformas',
      skillsCloudObs: 'Cloud & Observabilidade',
      sectionEducTitle: 'Educação',
      educInstitution: 'Universidade Estadual de Feira de Santana - UEFS',
      educDegree: 'Engenharia de Computação (Bacharelado)',
      educTime: 'Mar/2018 — Jun/2024',
      educDesc: 'O curso de Engenharia de Computação da UEFS forma profissionais altamente qualificados para atender às demandas da indústria e melhorar as condições de vida da sociedade. Ao longo da graduação, adquiri conhecimentos avançados em computação, permitindo especificar, projetar, desenvolver, implementar e manter sistemas computacionais. A grade contemplou desenvolvimento de software, análise de sistemas, gestão de projetos e engenharia de hardware, preparando para caminhos diversos — de consultoria a empreendedorismo. Como Engenheiro de Computação, sou capacitado a integrar recursos físicos e lógicos para atender necessidades de informação e automatizar processos. O curso é reconhecido pelo Conselho Estadual de Educação e fornece base teórico‑prática robusta, preparando para um mercado em constante evolução.',
      educHighlightsTitle: 'Destaques do currículo',
      educH1: 'Especificação, projeto, desenvolvimento e manutenção de sistemas computacionais',
      educH2: 'Desenvolvimento de software e análise de sistemas',
      educH3: 'Gestão de projetos e práticas de engenharia',
      educH4: 'Engenharia de hardware e integração físico‑lógica',
      educH5: 'Base teórico‑prática robusta e foco em mercado em evolução',
      educCompetenciesTitle: 'Competências',
      educC1: 'Desenvolvimento de software',
      educC2: 'Engenharia de requisitos',
      educC3: 'Arquitetura de sistemas',
      educC4: 'Banco de dados',
      educC5: 'Redes',
      educC6: 'Sistemas embarcados',
      sectionProjectsTitle: 'Projetos',
      projPiZeroDesc: 'Sistema IoT com Raspberry Pi Zero que captura e exibe medidas em LCD e Web, com controle remoto via servidor Python e MQTT.',
      projFinanceAPIDesc: 'API para dados financeiros (cotações, indicadores), desenvolvida em Kotlin.',
      projNewsRankerDesc: 'Classificação de notícias com IA (GPT), considerando relevância, credibilidade e popularidade.',
      projUEFSOCRDesc: 'OCR para extrair dados de resoluções do CONSEPE (UEFS), convertendo PDFs/imagens em texto estruturado.',
      projDolarideDesc: 'Bot de Twitter com Web Scraping para postar a cotação do dólar automaticamente.',
      projCurrencyDesc: 'App minimalista de conversão de moedas em Flutter, utilizando a HG Finance API com cálculos em tempo real.',
      projUEFSNewsDesc: 'Bot automatizado (Twitter/X) que coleta e publica notícias da UEFS e do trânsito de Feira de Santana. Feito em Python com Tweepy, BeautifulSoup e MongoDB.',
      viewOnGitHub: 'Ver no GitHub',
      projectsMoreTitle: 'Mais projetos',
      projectsMoreDesc: 'Explore mais projetos e contribuições open‑source no GitHub.',
      projectsMoreBtn: 'Ir para o perfil no GitHub',
      sectionLanguagesTitle: 'Idiomas',
      langPt: 'Português',
      langPtLevel: 'Nativo',
      langEn: 'Inglês',
      langEnLevel: 'Profissional',
      sectionContactTitle: 'Contato',
      contactLead: 'Curtiu o que viu? Vamos conversar.',
      contactEmailBtn: 'Enviar e-mail',
      sectionVolTitle: 'Atividades e Voluntariado',
      volIeeeRole: 'Pesquisador · IEEE UEFS Student Branch',
      volIeeeTime: 'Mai/2018 — Dez/2019 · 1 ano e 8 meses',
      volIeeeDesc: 'Pesquisa e desenvolvimento de projetos de tecnologia com foco em cultura e educação.',

      volUefsRole: 'Engenheiro de Software · Universidade Estadual de Feira de Santana',
      volUefsTime: 'Nov/2019 — Jun/2020 · 8 meses',
      volUefsDesc: 'Desenvolvimento voluntário de um sistema de gestão de agendamentos para o Observatório Astronômico Antares (Feira de Santana/BA), cobrindo reservas de visitantes/escolas e funções administrativas.',
      volUefsB1: 'Fluxos de agendamento e administração para a equipe do observatório',
      volUefsB2: 'Do levantamento de requisitos ao deploy, seguindo metodologia Waterfall',
    },
    en: {
      documentLang: 'en',
      pageTitle: 'Kevin Cerqueira — Software Engineer',
      brandName: 'Kevin Cerqueira',
      navSobre: 'About',
      navExperiencia: 'Experience',
      navSkills: 'Skills',
      navEducacao: 'Education',
      navProjetos: 'Projects',
      navIdiomas: 'Languages',
      navContato: 'Contact',
      heroEyebrow: "Hi, I'm",
      heroTitle: 'Kevin Cerqueira',
      heroSubtitle: 'Software Engineer · Kotlin · Laravel · JavaScript',
      heroLocation: 'Bahia, Brazil',
      heroAgeSuffix: ' years old',
      heroCtaPrimary: 'Contact me',
      heroCtaSecondary: 'Experience',
      sectionSobreTitle: 'About',
      aboutText: "Hi, I'm Kevin! I hold a degree in Computer Engineering from the State University of Feira de Santana (UEFS) and currently work as a Mid-Level Software Engineer. At Loft, I’m responsible for developing and maintaining financial systems, including modules for Accounts Payable, Accounts Receivable, Payment Checkout, Invoice Issuance, Financial Reconciliation, and integrations with banking systems—primarily using Kotlin. I also modernize and maintain legacy systems built with Laravel, PHP, and JavaScript. On the front-end, I have experience with React, and on the back-end, I’ve worked with Node.js and Java. I use Python daily for automation, web scraping, and IoT solutions to optimize internal processes. For databases, I currently work with PostgreSQL but have solid experience with Oracle, MySQL/MariaDB, and MongoDB from previous projects and roles. In cloud and data engineering, I work daily with Google Cloud (GCP) and BigQuery for large-scale data analysis (with prior experience in Databricks), along with AWS (SQS, SNS, EC2...) for scalable infrastructure solutions. For infrastructure and DevOps, I use Docker for containerization, implement CI/CD pipelines with GitHub Actions, and ensure high system availability through monitoring with Datadog and ArgoCD.",
      sectionExperienciaTitle: 'Experience',
      jobLoftRole: 'Mid-Level Software Engineer · Loft',
      jobLoftTime: 'Mar/2023 — Present',
      jobLoftDesc: 'At Loft, I work within the finance team developing and maintaining financial systems. I build Kotlin solutions for accounts receivable, invoice management, and payment processing for Loft / Fiança Aluguel. Leveraging expertise in Laravel/PHP and JavaScript, I ensure system quality and scalability. I implement DevOps practices using Docker, AWS, and GitHub Actions for CI/CD pipelines, while maintaining observability and monitoring through Datadog and ArgoCD to guarantee system reliability.',
      jobLoftB1: 'Modules: Accounts Payable/Receivable, Payment Checkout, Invoice Issuance, Financial Reconciliation.',
      jobLoftB2: 'Financial integrations and performance/resilience improvements.',
      jobLoftB3: 'DevOps practices with Docker, AWS and GitHub Actions; observability with Datadog and ArgoCD.',
      jobCredRole: 'Mid-level Developer I · CredPago',
      jobCredTime: 'Dec/2021 — Mar/2023',
      jobCredDesc: 'As a Mid-Level Developer at CredPago, I focused on developing and maintaining financial systems including payment gateways, accounts payable, and accounts receivable. Working primarily with Laravel, I implemented solutions for subscription management, financial reconciliation, and report generation, consistently prioritizing code quality and application scalability.',
      jobCredB1: 'Payment gateways and finance routines (AP/AR).',
      jobCredB2: 'REST APIs and microservices focused on scalability and security.',
      jobCredB3: 'Deployment automation and orchestration with Docker.',

      jobCredJrRole: 'Junior Developer III · CredPago',
      jobCredJrTime: 'Mar/2021 — Dec/2021',
      jobCredJrDesc: 'At CredPago, I worked as a Junior Developer III, providing support and maintenance for full-stack PHP systems. My responsibilities included maintaining and developing new API solutions and microservices using Laravel framework. I managed databases in MariaDB RDBMS and collaborated effectively within agile teams, implementing SCRUM and Kanban methodologies to ensure project efficiency and organization.',
      jobCredJrB1: 'API evolution and internal integrations.',
      jobCredJrB2: 'Versioning best practices (GitFlow) and clean code.',
      jobSoftRole: 'Junior Systems Analyst · SoftwareDATA',
      jobSoftTime: 'Jul/2020 — Mar/2021',
      jobSoftDesc: 'As a Junior Systems Analyst at SoftwareData, I supported, maintained, and developed new full-stack solutions using Laravel/PHP and Java. My responsibilities included managing Oracle RDBMS databases for municipal taxation systems, administering FTP and Apache servers, and processing bank clearances for the Feirense Service Center (CEAF).',
      jobSoftB1: 'Full‑stack solutions for municipal taxation systems.',
      jobSoftB2: 'Oracle RDBMS administration and query optimization.',
      jobN2Role: 'Mobile Developer · N2 Soluções',
      jobN2Time: 'Aug/2020 — Nov/2020',
      jobN2Desc: 'Developed an MVP for a hybrid mobile app using IONIC (TypeScript + React) for the mobile UI and Laravel for the REST API backend, built for Clube Mais Vida (Meddi Group).',
      jobN2B1: 'Apps for public service management and web integrations.',
      sectionSkillsTitle: 'Skills',
      skillsLangFrameworks: 'Languages & Frameworks',
      skillsDatabasesPlatforms: 'Databases & Data Platforms',
      skillsCloudObs: 'Cloud & Observability',
      sectionEducTitle: 'Education',
      educInstitution: 'State University of Feira de Santana (UEFS)',
      educDegree: 'Computer Engineering (B.Eng.)',
      educTime: 'Mar/2018 — Jun/2024',
      educDesc: "The Computer Engineering program at UEFS aims to train highly skilled professionals to meet industry demands and improve societal living conditions. Throughout my studies, I acquired advanced computing knowledge, enabling me to specify, design, develop, implement, and maintain computer systems. The curriculum covered software development, systems analysis, project management, and hardware engineering, preparing me for diverse career paths — from consulting to entrepreneurship. As a Computer Engineer, I'm qualified to integrate physical and logical resources to address organizational information needs and automate processes. The program is accredited by the State Council of Education and provides a robust theoretical‑practical foundation, equipping graduates for an ever‑evolving market.",
      educHighlightsTitle: 'Curriculum highlights',
      educH1: 'Specification, design, development, and maintenance of computer systems',
      educH2: 'Software development and systems analysis',
      educH3: 'Project management and engineering practices',
      educH4: 'Hardware engineering and physical‑logical integration',
      educH5: 'Robust theoretical‑practical foundation and market‑oriented focus',
      educCompetenciesTitle: 'Competencies',
      educC1: 'Software development',
      educC2: 'Requirements engineering',
      educC3: 'Systems architecture',
      educC4: 'Databases',
      educC5: 'Computer networks',
      educC6: 'Embedded systems',
      sectionProjectsTitle: 'Projects',
      projPiZeroDesc: 'IoT system with Raspberry Pi Zero, displaying metrics on LCD and web, remotely controlled via Python server and MQTT.',
      projFinanceAPIDesc: 'API for financial data (quotes, indicators), built with Kotlin.',
      projNewsRankerDesc: 'News ranking/classification using AI (GPT), considering relevance, credibility and popularity.',
      projUEFSOCRDesc: 'OCR project to extract data from UEFS CONSEPE resolutions, converting PDFs/images into structured text.',
      projDolarideDesc: 'Twitter bot using web scraping to post USD exchange rate automatically.',
      projCurrencyDesc: 'Minimal Flutter currency converter app using HG Finance API with real-time calculations.',
      projUEFSNewsDesc: "Automated Twitter/X bot that collects and posts news about UEFS and Feira de Santana's transit. Built with Python, Tweepy, BeautifulSoup, and MongoDB.",
      viewOnGitHub: 'View on GitHub',
      projectsMoreTitle: 'More projects',
      projectsMoreDesc: 'Explore more projects and open‑source contributions on GitHub.',
      projectsMoreBtn: 'Go to GitHub profile',
      sectionLanguagesTitle: 'Languages',
      langPt: 'Portuguese',
      langPtLevel: 'Native',
      langEn: 'English',
      langEnLevel: 'Professional',
      sectionContactTitle: 'Contact',
      contactLead: "Like what you see? Let's talk.",
      contactEmailBtn: 'Send email',
      sectionVolTitle: 'Activities & Volunteering',
      volIeeeRole: 'Researcher · IEEE UEFS Student Branch',
      volIeeeTime: 'May/2018 — Dec/2019 · 1 yr 8 mos',
      volIeeeDesc: 'Research and development of technology projects focused on culture and education.',

      volUefsRole: 'Software Engineer · State University of Feira de Santana',
      volUefsTime: 'Nov/2019 — Jun/2020 · 8 mos',
      volUefsDesc: "Volunteered with a student team to develop a scheduling management system for the Antares Astronomical Observatory (Feira de Santana, BA), covering visitor/school bookings and administrative functions.",
      volUefsB1: 'Scheduling and administration flows for observatory staff',
      volUefsB2: 'From requirements gathering to deployment, following Waterfall methodology',
    }
  };

  function getPreferredLang() {
    try {
      var stored = localStorage.getItem(LANG_STORAGE_KEY);
      if (stored && (stored === 'pt' || stored === 'en')) return stored;
    } catch (_) {}
    var nav = navigator.language || navigator.userLanguage || 'pt-BR';
    return /^pt/i.test(nav) ? 'pt' : 'en';
  }

  function applyLang(lang) {
    var dict = i18n[lang] || i18n.pt;
    // Update document lang and title
    document.documentElement.setAttribute('lang', dict.documentLang);
    document.title = dict.pageTitle;

    // Swap all data-i18n text nodes
    var nodes = document.querySelectorAll('[data-i18n]');
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key && dict[key] != null) {
        el.textContent = dict[key];
      }
    });

    // Age text with suffix
    var ageEl = document.getElementById('hero-age');
    if (ageEl) {
      var age = calculateAge('2000-04-24');
      ageEl.textContent = age + dict.heroAgeSuffix;
    }

    // Update lang switch pressed state
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang ? 'true' : 'false');
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Theme init
    var theme = getPreferredTheme();
    applyTheme(theme);

    var themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
      themeBtn.addEventListener('click', function () {
        var current = document.documentElement.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem(THEME_STORAGE_KEY, next); } catch (_) {}
        applyTheme(next);
      });
    }

    if (window.matchMedia) {
      var media = window.matchMedia('(prefers-color-scheme: dark)');
      var listener = function (e) {
        try { if (!localStorage.getItem(THEME_STORAGE_KEY)) applyTheme(e.matches ? 'dark' : 'light'); } catch (_) {}
      };
      if (media.addEventListener) media.addEventListener('change', listener);
      else if (media.addListener) media.addListener(listener);
    }

    // Language init
    var lang = getPreferredLang();
    applyLang(lang);

    // Persist and handle language switches
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var selected = btn.getAttribute('data-lang');
        try { localStorage.setItem(LANG_STORAGE_KEY, selected); } catch (_) {}
        applyLang(selected);
      });
    });

    // Smooth anchors
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href^="#"]');
      if (!link) return;
      var targetId = link.getAttribute('href');
      if (targetId && targetId.length > 1) {
        var el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      }
    });

    // Year in footer
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });
})();