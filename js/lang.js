const EN = 'en';
const PT = 'pt';

export const LANG = {
  [EN]: 'English',
  [PT]: 'Português'
}

const lang_en = {
  selectLang: 'Select language',
  title: 'Vinícius Almeida | Software Developer and Researcher',
  home: 'Home',
  homeHref: '#',
  bio: 'Bio',
  bioHref: '#',
  skills: 'Skills',
  skillsHref: '#',
  references: 'References',
  referencesHref: '#',
  contact: 'Contact',
  contactHref: '#',
  downloadCv: 'Download&nbsp;CV',
  downloadCvHref: 'https://drive.google.com/file/d/1N0gQ_BWTf1Q7YVGn2yXRU6K484rqMDj6/view?usp=sharing',
  developer: 'Developer and Researcher',
  bioText: `
    I am a <strong>software developer</strong> with experience in the Angular framework and
    Python with frameworks like Django, Falcon, Flask and FastAPI.
    I also work with databases such as Postgres and MySQL,
    and I have experience with AWS services like S3, EC2 and Lambda,
    as well as Docker containers and CI/CD pipelines.
    <br><br>
    I am also a <strong>researcher</strong> in the field of performance, reliability and availability modeling of computing systems,
    with experience in the development of stochastic models for analysis and simulation through the Mercury tool.
  `,
  misc: 'Misc',
  emailAddress: 'contact@viniciusalmeida.dev',
  emailAddressHref: 'mailto:contact@viniciusalmeida.dev',
  lattesCv: 'Lattes CV',
  lattesCvHref: 'https://lattes.cnpq.br/3076429582182777',
  tecnosolveText: 'Developing and maintaining systems and APIs using technologies such as Python (Falcon and Django), Angular, Java Spring Boot, PostgreSQL and GIT.',
  showText: 'Developing and maintaining systems and APIs in PHP CodeIgniter, NodeJS, HTML/CSS and MySQL.',
  ufapeText: 'Computer Science Bachelor\'s Degree.',
  cinufpeText: 'Computer Science Master\'s Degree Student.',
  aliveText: 'Developing the Front-End of the MeuPregão platform using technologies such as HTML, CSS, JS and Bootstrap, as well as consuming APIs using ajax.',
  casaOngText: 'Developing and management of the NGO Centro de Apoio Social e Ambiental website.',
  eCamaraDigitalText: 'Platform for presence registering, voting and session managemment of city councils.',
  modcsText: 'Research group on modeling the performance, reliability and availability of computing systems.',
  copyright: '<span id="copyright-year"></span>&nbsp;Vinicius&nbsp;Almeida&nbsp;Dev. All&nbsp;rights&nbsp;reserved.'
}

const lang_pt = {
  selectLang: 'Selecionar idioma',
  title: 'Vinícius Almeida | Desenvolvedor e Pesquisador',
  home: 'Início',
  homeHref: '#',
  bio: 'Bio',
  bioHref: '#',
  skills: 'Habilidades',
  skillsHref: '#',
  references: 'Referenciais',
  referencesHref: '#',
  contact: 'Contato',
  contactHref: '#',
  downloadCv: 'Baixar&nbsp;Currículo',
  downloadCvHref: "https://drive.google.com/file/d/1pe-2QkKGAPJPN9lZuA_yGxbfxjmBC9kP/view?usp=sharing",
  developer: 'Desenvolvedor de Softwares e Pesquisador',
  bioText: `
    Eu sou um <strong>desenvolvedor de softwares</strong> com experiência no framework Angular e
    Python com frameworks como Django, Falcon, Flask e FastAPI.
    Eu também trabalho com bancos de dados, como Postgres and MySQL,
    e tenho experiência com serviços AWS, como S3, EC2 and Lambda,
    assim como containers Docker e processos de CI/CD.
    <br><br>
    Eu também sou um<strong>pesquisador</strong> no campo do modelamento de performance, confiabilidade e disponibilidade de sistemas computacionais,
    com experiência no desenvolvimento de modelos estocásticos para análise e simulação na ferramenta Mercury.
  `,
  misc: 'Outros',
  emailAddress: 'contato@viniciusalmeida.dev',
  emailAddressHref: 'mailto:contato@viniciusalmeida.dev',
  lattesCv: 'Currículo Lattes',
  lattesCvHref: 'https://lattes.cnpq.br/3076429582182777',
  tecnosolveText: 'Desenvolvimento e manutenção de sistemas e APIs usando tecnologias como: Python (Falcon e Django), Angular, Java Spring Boot, PostgreSQL e GIT.',
  showText: 'Desenvolvimento e manutenção de sistemas e APIs em PHP CodeIgniter, NodeJS, HTML/CSS e MySQL.',
  ufapeText: 'Graduação em Ciência da Computação.',
  cinufpeText: 'Mestrando em Ciência da Computação.',
  aliveText: 'Desenvolvimento do Front-End da plataforma MeuPregão usando tecnologias como HTML, CSS, JS e Bootstrap, além de consumo de APIs por meio de ajax.',
  casaOngText: 'Desenvolvimento e gerenciamento do site da ONG Centro de Apoio Social e Ambiental.',
  eCamaraDigitalText: 'Plataforma de marcação de presenças, votações e gerenciamento de sessões de câmaras municipais.',
  modcsText: 'Grupo de pesquisa de modelagem de performance, confiabilidade e disponibilidade de sistemas computacionais.',
  copyright: '<span id="copyright-year"></span>&nbsp;Vinicius&nbsp;Almeida&nbsp;Dev. Todos&nbsp;os&nbsp;direitos&nbsp;reservados.'
}

const lang = (lang) => {
  if (!lang) return lang_en;
  else if (lang.includes(EN)) return lang_en;
  else if (lang.includes(PT)) return lang_pt;
  else return lang_en;
}

export default lang;