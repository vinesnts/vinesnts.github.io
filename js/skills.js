export const skills = [
  { name: 'Angular', color: 'red', category: 'front-end' },
  { name: 'React', color: 'blue', category: 'front-end' },
  { name: 'JavaScript', color: 'yellow', category: 'front-end' },
  { name: 'TypeScript', color: 'blue', category: 'front-end' },
  { name: 'HTML', color: 'orange', category: 'front-end' },
  { name: 'CSS', color: 'blue', category: 'front-end' },
  { name: 'jQuery', color: 'blue', category: 'front-end' },
  { name: 'Bootstrap', color: 'purple', category: 'front-end' },
  { name: 'Python', color: 'yellow', category: 'backend' },
  { name: 'Django', color: 'green', category: 'backend' },
  { name: 'Falcon', color: 'yellow', category: 'backend' },
  { name: 'Flask', color: 'blue', category: 'backend' },
  { name: 'FastAPI', color: 'green', category: 'backend' },
  { name: 'PHP', color: 'blue', category: 'backend' },
  { name: 'Laravel', color: 'red', category: 'backend' },
  { name: 'CodeIgniter', color: 'orange', category: 'backend' },
  { name: 'Java', color: 'blue', category: 'backend' },
  { name: 'Spring Boot', color: 'green', category: 'backend' },
  { name: 'WebSockets', color: 'purple', category: 'backend' },
  { name: 'postgres', color: 'blue', category: 'backend' },
  { name: 'MySQL', color: 'orange', category: 'backend' },
  { name: 'pytest', color: 'blue', category: 'backend' },
  { name: 'Testcontainers', color: 'green', category: 'backend' },
  { name: 'AWS', color: 'orange', category: 'misc' },
  { name: 'Docker', color: 'blue', category: 'misc' },
  { name: 'Linux', color: 'yellow', category: 'misc' },
  { name: 'cron', color: '', category: 'misc' },
  { name: 'httpd', color: 'blue', category: 'misc' },
  { name: 'Apache2', color: 'orange', category: 'misc' },
  { name: 'Shell Script', color: 'red', category: 'misc' },
];

const categoryLabels = {
  'front-end': 'Front-end',
  backend: 'Back-end',
  misc: 'Outros',
};

const skillsList = document.querySelector('#skills-list');

Object.entries(categoryLabels).forEach(([category, label]) => {
  const card = document.createElement('div');
  card.className = 'skills__card';

  const title = document.createElement('h4');
  title.className = 'skills__card__title';
  if (category === 'misc') title.dataset.lang = 'misc';
  title.textContent = label;

  const list = document.createElement('ul');
  list.className = 'skills__card__list';

  skills
    .filter((skill) => skill.category === category)
    .forEach(({ name, color }) => {
      const item = document.createElement('li');
      item.className = `tag${color ? ` ${color}` : ''}`;
      item.textContent = name;
      list.append(item);
    });

  card.append(title, list);
  skillsList.append(card);
});
