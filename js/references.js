export const references = [
  {
    name: 'Tecnosolve',
    url: 'http://www.tecnosolve.com',
    descriptionKey: 'tecnosolveText',
  },
  {
    name: 'CIn UFPE',
    url: 'https://cin.ufpe.br/~vsa',
    descriptionKey: 'cinufpeText',
  },
  {
    name: 'MoDCS',
    url: 'https://modcs.org',
    descriptionKey: 'modcsText',
  },
  {
    name: 'UFAPE',
    url: 'https://ufape.edu.br',
    descriptionKey: 'ufapeText',
  },
  {
    name: 'Show Tecnologia',
    url: 'https://www.showtecnologia.com/',
    descriptionKey: 'showText',
  },
  {
    name: 'CASA ONG',
    url: 'https://casaong.org',
    descriptionKey: 'casaOngText',
  },
];

const referencesList = document.querySelector('#references-list');

references.forEach(({ name, url, descriptionKey }) => {
  const card = document.createElement('div');
  card.className = 'ref__card';

  const title = document.createElement('h4');
  title.className = 'ref__card__title';

  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.textContent = name;

  const description = document.createElement('p');
  description.className = 'ref__card__description';
  description.dataset.lang = descriptionKey;

  title.append(link);
  card.append(title, description);
  referencesList.append(card);
});
