// Add future projects to this collection. Cards are created from these entries.
const projects = [
  { name: 'Hivemind', initials: 'H', category: 'Agentic coding', description: 'An open-source agentic coding harness for exploring how AI agents work with code, tools, and developer workflows.', tags: ['AI agents', 'Developer tools'], repository: 'https://github.com/bmtai-projects/Hivemind' }
];
const grid = document.getElementById('project-grid');
for (const project of projects) {
  const card = document.createElement('article');
  card.className = 'project-card';
  const visual = document.createElement('div'); visual.className = 'card-visual';
  const monogram = document.createElement('span'); monogram.textContent = project.initials;
  const label = document.createElement('small'); label.textContent = 'BMTAI / ' + project.category.toUpperCase();
  visual.append(monogram, label);
  const content = document.createElement('div'); content.className = 'card-content';
  const category = document.createElement('div'); category.className = 'card-category'; category.textContent = project.category + ' / Open source';
  const title = document.createElement('h3'); title.textContent = project.name;
  const description = document.createElement('p'); description.textContent = project.description;
  const tags = document.createElement('div'); tags.className = 'tags';
  for (const tag of project.tags) { const item = document.createElement('span'); item.textContent = tag; tags.append(item); }
  const links = document.createElement('div'); links.className = 'card-links';
  const repo = document.createElement('a'); repo.className = 'text-link'; repo.textContent = 'View repository'; repo.href = project.repository;
  const readme = document.createElement('a'); readme.textContent = 'Read README'; readme.href = project.repository + '#readme';
  links.append(repo, readme); content.append(category, title, description, tags, links); card.append(visual, content); grid.append(card);
}
document.querySelector('.collection-heading > span').textContent = String(projects.length).padStart(2, '0') + (projects.length === 1 ? ' PROJECT' : ' PROJECTS') + ' / GROWING COLLECTION';
