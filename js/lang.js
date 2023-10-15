const EN = 'en';
const PT = 'pt';

export const LANG = {
  [EN]: 'English',
  [PT]: 'Português'
}

const lang_en = {
  selectLang: 'Select language',
  title: 'Vinícius Almeida | Developer',
  home: 'Home',
  homeHref: '#',
  bio: 'Bio',
  bioHref: '#',
  skills: 'Skills',
  skillsHref: '#',
  references: 'Rereferences',
  referencesHref: '#',
  contact: 'Contact',
  contactHref: '#',
  downloadCv: 'Download&nbsp;CV',
  downloadCvHref: 'https://drive.google.com/file/d/1N0gQ_BWTf1Q7YVGn2yXRU6K484rqMDj6/view?usp=sharing',
  developer: 'Developer',
  bioText: `
    As a <strong>Front-end</strong> developer, I work with the Angular framework. But I also have experience on the major basic web tools,
    like HTML, CSS and JavaScript and the most popular libs, such as Bootstrap and jQuery.
    <br><br>
    As a <strong>Back-end</strong> developer, I work with Python with the frameworks Django and Falcon, and Java Spring Boot.
    Also, I have worked with PHP with Laravel and CodeIgniter.
    <br><br>
    As a <strong>Full-Stack</strong> developer, I've acquired experience with management of server projects using technologies
    such as Apache, httpd, cron and Linux commands. I also work with databases such as Postgres and MySQL.
  `,
  misc: 'Misc',
  emailAddress: 'contact@viniciusalmeida.dev',
  emailAddressHref: 'mailto:contact@viniciusalmeida.dev',
  lattesCv: 'Lattes CV',
  lattesCvHref: 'https://lattes.cnpq.br/3076429582182777',
  tecnosolveText: 'Developing and maintaining systems and APIs using technologies such as Python (Falcon and Django), Angular, Java Spring Boot, PostgreSQL and GIT.',
  showText: 'Developing and maintaining systems and APIs in PHP CodeIgniter, NodeJS, HTML/CSS and MySQL.',
  ufapeText: 'Computer Science Bachelor\'s Degree. Develping research and extension projects.',
  aliveText: 'Developing the Front-End of the MeuPregão platform using technologies such as HTML, CSS, JS and Bootstrap, as well as consuming APIs using ajax.',
  casaOngText: 'Developing and management of the NGO Centro de Apoio Social e Ambiental website.',
}

const lang_pt = {
  selectLang: 'Selecionar idioma',
  title: 'Vinícius Almeida | Desenvolvedor',
  home: 'Início',
  homeHref: '#',
  bio: 'Bio',
  bioHref: '#',
  skills: 'Habilidades',
  skillsHref: '#',
  references: 'Rereferenciais',
  referencesHref: '#',
  contact: 'Contato',
  contactHref: '#',
  downloadCv: 'Baixar&nbsp;Currículo',
  downloadCvHref: "https://drive.google.com/file/d/1pe-2QkKGAPJPN9lZuA_yGxbfxjmBC9kP/view?usp=sharing",
  developer: 'Desenvolvedor',
  bioText: `
    No <strong>Front-end</strong> trabalho com as principais tecnologias básicas como HTML, CSS e Javascript,
    além do framework Angular e bibliotecas como Bootstrap e jQuery.
    <br><br>
    No <strong>Back-end</strong>, tenho experiência com Python, nos frameworks Django e Falcon, 
    além de Java Spring Boot e PHP com Laravel e CodeIgniter.
    <br><br>
    Como <strong>Full-Stack</strong>, adquiri experiência em gerenciamento de projetos em servidores,
    usando tecnologias como Apache, httpd, cron e comandos Linux. Além disso, também projeto bancos de dados
    nos mais conhecidos SGBDs, como Postgres e MySQL.
  `,
  misc: 'Outros',
  emailAddress: 'contato@viniciusalmeida.dev',
  emailAddressHref: 'mailto:contato@viniciusalmeida.dev',
  lattesCv: 'Currículo Lattes',
  lattesCvHref: 'https://lattes.cnpq.br/3076429582182777',
  tecnosolveText: 'Desenvolvimento e manutenção de sistemas e APIs usando tecnologias como: Python (Falcon e Django), Angular, Java Spring Boot, PostgreSQL e GIT.',
  showText: 'Desenvolvimento e manutenção de sistemas e APIs em PHP CodeIgniter, NodeJS, HTML/CSS e MySQL.',
  ufapeText: 'Graduação em Ciência da Computação. Desenvolvimento de Pesquisa e Extensão.',
  aliveText: 'Desenvolvimento do Front-End da plataforma MeuPregão usando tecnologias como HTML, CSS, JS e Bootstrap, além de consumo de APIs por meio de ajax.',
  casaOngText: 'Desenvolvimento e gerenciamento do site da ONG Centro de Apoio Social e Ambiental.',
}

const lang = (lang) => {
  if (!lang) return lang_en;
  else if (lang.includes(EN)) return lang_en;
  else if (lang.includes(PT)) return lang_pt;
  else return lang_en;
}

export default lang;