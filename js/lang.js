const EN = 'en';
// const ES = 'es';
const PT = 'pt';

const lang_en = {
  title: 'Vinícius Almeida | Developer',
  home: 'Home',
  bio: 'Bio',
  skills: 'Skills',
  references: 'Rereferences',
  contact: 'Contact',
  downloadCv: 'Download&nbsp;CV',
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
  tecnosolveText: '',
  showText: '',
  ufapeText: '',
  aliveText: '',
  casaOngText: '',
}

const lang_es = {
  title: 'Vinícius Almeida Desarrollador',
  home: 'Hogar',
  bio: 'Bio',
  skills: 'Habilitaciones',
  references: 'Referencias',
  contact: 'Contacto',
  downloadCv: 'Bajar&nbsp;CV',
  developer: 'Desarrollador',
}

const lang = (lang) => {
  if (!lang) return lang_en;
  else if (lang.includes(EN)) return lang_en;
  // else if (lang.includes(ES)) return lang_es;
  else if (lang.includes(PT)) return;
  else return lang_en;
}

export default lang;