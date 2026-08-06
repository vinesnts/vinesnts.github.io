const EN = 'en';
const PT = 'pt';

export const LANG = {
  [EN]: 'English',
  [PT]: 'Português'
}

const lang_en = {
  selectLang: 'Select language',
  title: 'Vinícius Almeida | Researcher and Software Developer',
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
  developer: 'Researcher&nbsp;<strong><a href="https://cin.ufpe.br/~vsa" target="_blank">@cin.ufpe</a></strong> and Developer&nbsp;<strong><a href="https://tecnosolve.com" target="_blank">@tecnosolve</a></strong>',
  bioText: `
    I am a <strong>software developer</strong> with experience in the <strong>Angular</strong> framework and
    <strong>Python</strong> with frameworks like Django, Falcon, Flask and FastAPI.
    I also work with databases such as <strong>Postgres</strong> and MySQL,
    and I have experience with <strong>AWS</strong> services like <strong>S3</strong>, <strong>EC2</strong> and <strong>Lambda</strong>,
    as well as <strong>Docker</strong> containers and <strong>CI/CD</strong> pipelines.
    <br><br>
    I am also a <strong>researcher</strong> in the field of <strong>performance</strong>, <strong>reliability</strong> and <strong>availability</strong> modeling of computing systems,
    with experience in the development of <strong>stochastic models</strong> for analysis and <strong>simulation</strong> through the Mercury tool.
  `,
  misc: 'Misc',
  emailAddress: 'me@viniciusalmeida.dev',
  emailAddressHref: 'mailto:me@viniciusalmeida.dev',
  lattesCv: 'Lattes CV',
  lattesCvHref: 'https://lattes.cnpq.br/3076429582182777',
  tecnosolveText: 'Developing and maintaining systems and <strong>APIs</strong> using technologies such as <strong>Python</strong> (Falcon and Django), <strong>Angular</strong>, <strong>Java</strong> Spring Boot, <strong>PostgreSQL</strong> and <strong>GIT</strong>.',
  showText: 'Developing and maintaining systems and APIs in PHP CodeIgniter, NodeJS, <strong>HTML/CSS</strong> and MySQL.',
  ufapeText: '<strong>Computer Science</strong> Bachelor\'s Degree.',
  cinufpeText: 'Computer Science <strong>Master</strong> and <strong>PhD. candidate</strong>',
  aliveText: 'Developing the Front-End of the MeuPregão platform using technologies such as <strong>HTML, CSS, JS</strong> and Bootstrap, as well as consuming APIs using ajax.',
  casaOngText: 'Developing and management of the <strong>NGO</strong> Centro de Apoio Social e Ambiental website.',
  eCamaraDigitalText: 'Platform for presence registering, voting and session managemment of city councils.',
  modcsText: 'Research group on modeling the <strong>performance</strong>, <strong>reliability</strong> and <strong>availability</strong> of computing systems.',
  copyright: '<span id="copyright-year"></span>&nbsp;Vinicius&nbsp;Almeida&nbsp;Dev. All&nbsp;rights&nbsp;reserved.',
  works: 'Works',
}

const lang_pt = {
  selectLang: 'Selecionar idioma',
  title: 'Vinícius Almeida | Pesquisador e Desenvolvedor',
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
  developer: 'Pesquisador&nbsp;<strong><a href="https://cin.ufpe.br/~vsa" target="_blank">@cin.ufpe</a></strong> e Desenvolvedor&nbsp;<strong><a href="https://tecnosolve.com" target="_blank">@tecnosolve</a></strong>',
  bioText: `
    Eu sou um <strong>desenvolvedor de software</strong> com experiência no framework <strong>Angular</strong> e
    <strong>Python</strong> com frameworks como Django, Falcon, Flask e FastAPI.
    Eu também trabalho com bancos de dados, como <strong>Postgres</strong> and MySQL,
    e tenho experiência com serviços <strong>AWS</strong>, como <strong>S3</strong>, <strong>EC2</strong> and <strong>Lambda</strong>,
    assim como containers <strong>Docker</strong> e processos de <strong>CI/CD</strong>.
    <br><br>
    Eu também sou um <strong>pesquisador</strong> no campo do modelagem de <strong>performance</strong>, <strong>confiabilidade</strong> e <strong>disponibilidade</strong> de sistemas computacionais,
    com experiência no desenvolvimento de <strong>modelos estocásticos</strong> para análise e <strong>simulação</strong> na ferramenta Mercury.
  `,
  misc: 'Outros',
  emailAddress: 'me@viniciusalmeida.dev',
  emailAddressHref: 'mailto:me@viniciusalmeida.dev',
  lattesCv: 'Currículo Lattes',
  lattesCvHref: 'https://lattes.cnpq.br/3076429582182777',
  tecnosolveText: 'Desenvolvimento e manutenção de sistemas e <strong>APIs</strong> usando tecnologias como: <strong>Python</strong> (Falcon e Django), <strong>Angular</strong>, <strong>Java</strong> Spring Boot, <strong>PostgreSQL</strong> e <strong>GIT</strong>.',
  showText: 'Desenvolvimento e manutenção de sistemas e APIs em PHP CodeIgniter, NodeJS, <strong>HTML/CSS</strong> e MySQL.',
  ufapeText: 'Graduação em <strong>Ciência da Computação</strong>.',
  cinufpeText: '<strong>Doutorando</strong> e <strong>mestre</strong> em Ciência da Computação.',
  aliveText: 'Desenvolvimento do Front-End da plataforma MeuPregão usando tecnologias como HTML, CSS, JS e Bootstrap, além de consumo de APIs por meio de ajax.',
  casaOngText: 'Desenvolvimento e gerenciamento do site da <strong>ONG</strong> Centro de Apoio Social e Ambiental.',
  eCamaraDigitalText: 'Plataforma de marcação de presenças, votações e gerenciamento de sessões de câmaras municipais.',
  modcsText: 'Grupo de pesquisa de modelagem de <strong>performance</strong>, <strong>confiabilidade</strong> e <strong>disponibilidade</strong> de sistemas computacionais.',
  copyright: '<span id="copyright-year"></span>&nbsp;Vinicius&nbsp;Almeida&nbsp;Dev. Todos&nbsp;os&nbsp;direitos&nbsp;reservados.',
  works: 'Artigos',
}

const lang = (lang) => {
  if (!lang) return lang_en;
  else if (lang.includes(EN)) return lang_en;
  else if (lang.includes(PT)) return lang_pt;
  else return lang_en;
}

export default lang;
